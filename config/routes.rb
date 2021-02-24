Rails.application.routes.draw do
  #resources :noteys
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/noteys', to: "noteys#index"
  #get '/noteys/new
end
