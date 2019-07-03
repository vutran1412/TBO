class Api::SearchController < ApplicationController

    def index
    end

    def search
        @search = Movie.ransack(title_cont: params[:q])
        @movies = @search.result(distinct: true).order('title ASC')
    end
end
