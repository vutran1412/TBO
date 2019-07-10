class Api::SeriesController < ApplicationController
    def index
        @series = Series.all.with_attached_poster.with_attached_thumbnail
    end

    def show
        @series = Series.find(params[:id])
        if @series
            @episodes = @series.episodes.with_attached_poster.with_attached_thumbnail.with_attached_video
            render :show
        else
            render json: @series.errors.full_messages
        end
    end
end
