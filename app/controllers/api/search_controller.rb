class Api::SearchController < ApplicationController

    def index
    end

    def search
        @movies = Movie.ransack(title_cont: params[:q]).result(distinct: true)
        @series = Series.ransack(title_cont: params[:q]).result(distinct: true)
    end
end
