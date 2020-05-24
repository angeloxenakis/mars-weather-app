Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :mars_weather_records
  resources :users

  post('/login', to: 'authentication#login')
end
