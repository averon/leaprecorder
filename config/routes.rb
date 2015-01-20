Rails.application.routes.draw do
  root 'static_pages#record'
  get '/:id', to: 'static_pages#record'

  namespace :api, defaults: { format: :json } do
    resources :recordings, only: [:index, :show, :create, :update]
  end
end
