class Api::MoviesController < ApplicationController
  def index
    @movies = Movie.all
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