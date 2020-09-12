Rails.application.routes.draw do

  root 'playlists#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :collaborations, only: [:new, :create]
  resources 'users', only: [:show, :edit, :update] do
    resources :avatars, only: [:create]
  end 

  resources :playlists do
    resources :videos
  end

end
