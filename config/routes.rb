Rails.application.routes.draw do
  resources :articles
  resources :indices
  resources :index
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'index#index'
end
