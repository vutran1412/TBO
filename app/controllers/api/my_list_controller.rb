class Api::MyListController < ApplicationController
   def create
        @my_list = MyList.new()
   end
end