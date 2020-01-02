Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    resources :users, only: [:create, :show] do
      member do
        get :confirm_email
        get :new_pass_form
      end
    end
    post 'passwords/forgot', to: 'passwords#forgot'
    post 'passwords/:token/reset', to: 'passwords#reset'
    
    resource :session, only: [:create, :destroy]
  end
  
  root to: 'static_pages#root'
end
