Rails.application.routes.draw do
  get  '/users',     to: 'users#index'
  post '/users',     to: 'users#create'
  get  '/users/:id', to: 'users#show'
end
