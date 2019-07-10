class Api::SeriesController < ApplicationController
    def index
        @series = Series.all
    end

    def show
        @series = Series.find(params[:id])
        if @series
            @episodes = @series.episodes
            render :show
        else
            render json: @series.errors.full_messages
        end
    end
end
