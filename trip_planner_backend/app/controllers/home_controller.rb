class HomeController < ApplicationController

    before_action :authenticate_user!

    def index 
        render json: { msg: 'Helo world'}
    end
    
    def profile
        user = current_user
        render_resource(user, with: [:trips])
    end

end