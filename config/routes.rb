Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api, defaults: { format: :json } do
    resources :recordings, only: [:index, :show, :create]
  end

  match '*path' => 'static_pages#index', via: [:get, :post]
end
