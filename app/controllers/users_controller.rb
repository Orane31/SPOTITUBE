class UsersController < ApplicationController

  def show 
    @user = current_user
    

  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    @user.update(params.require(:user).permit(
      :name, :description)
    )
    redirect_to user_path(@user)
  end


end