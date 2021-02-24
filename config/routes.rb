Rails.application.routes.draw do
  root "noteys#index"
  #resources :noteys
  get '/noteys', to: "noteys#index"
  get '/noteys/new', to: "noteys#new"
  get '/noteys/:id', to: "noteys#show"
  get '/noteys/:id/edit', to: "noteys#edit"
  post '/noteys', to:"noteys#create"
  patch '/noteys/:id', to: "noteys#update"
  
  delete '/noteys/:id', to: "noteys#destroy"
end
