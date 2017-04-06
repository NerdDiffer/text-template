Rails.application.routes.draw do
  get  '/patients',     to: 'patients#index'
  post '/patients',     to: 'patients#create'
  get  '/patients/:id', to: 'patients#show'
end
