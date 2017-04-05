class UsersController < ApplicationController
  attr_reader :users

  def index
    @users = User.all
    render(:index)
  end

  def create
  end

  def show
  end
end
