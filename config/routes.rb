# frozen_string_literal: true

Rails.application.routes.draw do
  get "pages", to: "pages#index"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"
  get '/graphs', to: "graphs#show", only: :show
end
