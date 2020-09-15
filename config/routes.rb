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
  

  get 'about', to: 'static_pages#about'
  get 'faq', to: 'static_pages#faq'
  get 'team', to: 'static_pages#team'
  get 'contact', to: 'static_pages#contact'

end
