Rails.application.routes.draw do
  resources :columns
  resources :events
  resources :matches
  resources :articles
  resources :indices
  resources :index
  resources :dashboard
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :admin do
    resources :dashboard
    resources :articles
    resources :events

    root to: 'dashboard#index'
  end

  root to: 'index#index'
end
