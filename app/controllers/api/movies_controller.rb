class Api::MoviesController < ApplicationController
    def index
        @movies = Movie.all.with_attached_thumbnail.with_attached_poster.with_attached_video
    end

    def show
        @movie = Movie.find(params[:id])
        if @movie
            render :show
        else
            render @movie.errors.full_messages, 404
        end
    end
end
