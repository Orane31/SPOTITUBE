Rails.application.routes.draw do

  root 'playlists#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  resources 'users', only: [:show, :edit, :update] do
    resources :avatars, only: [:create]
  end 

  resources :playlists do
    resources :videos
    resources :collaborations, only: [:new, :create]
  end

  resources :collaborations, only: [:index, :show]
  

  get '/static_pages/contact'
  get '/static_pages/faq'
  get '/static_pages/team'
  get '/static_pages/about'
  get '/static_pages/error_404'
end
