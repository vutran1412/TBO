Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :my_list, only: [:create, :destroy] 
    resources :movies, only: [:index, :show]
    resources :series, only: [:index, :show]
    get :search, controller: :search
  end
end

