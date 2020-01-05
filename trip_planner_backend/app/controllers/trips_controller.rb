class TripsController < ApplicationController

    before_action :authenticate_user!

    def index   # /trips
        trips = current_user.trips
        render json: trips.to_json(include: [:organizes])
    end

    def show
        trip = Trip.find(params[:id])
        authorize_user_resource(trip)
        render_resource(trip, with: [:organizes])
    end

    def create 
        trip = Trip.new(trip_params)
        trip.user = current_user
        trip.save
        render_resource(trip)
    end

    def update
        trip = Trip.find(params[:id])
        authorize_user_resource(trip)
        trip.update(trip_params)
        render_resource(trip)
    end

    def destroy
        trip = Trip.find(params[:id])
        authorize_user_resource(trip)
        trip.destroy
        render_resource(trip)
    end


    private

    def trip_params
        params.require(:trip).permit(:country, :length, :price, :description)
    end

end
