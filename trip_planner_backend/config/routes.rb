Rails.application.routes.draw do

  # resources :organizes

  resources :trips do
    resources :organizes
  end

  resources :companies do
    resources :organizes
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: "home#index"

  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }

resources :users do
    resources :trips
end

end
