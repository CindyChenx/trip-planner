class ApplicationController < ActionController::API
    # respond_to :json
    before_action :configure_permitted_parameters, if: :devise_controller?

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from AuthorizationError, with: :unauthorized_error

    def render_resource(resource, with: nil)
        if resource.errors.empty?
          render json: resource, include: with
        else
          validation_error(resource)
        end
    end
    
    def validation_error(resource)
    render json: {
        error: {
            status: '400',
            title: 'Bad Request',
            detail: resource.errors[:detail],
            code: '100'
        }
        
    }, status: :bad_request
    end

    def authorize_user_resource(resource)
        raise AuthorizationError.new if resource.user != current_user
    end

    def unauthorized_error
        render json: {message: 'You are not authorized to make that request'}, status: 401
    end

    def not_found
        render json: {message: 'Resource not found'}, status: 404
    end


    protected

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :address])
    end


end
