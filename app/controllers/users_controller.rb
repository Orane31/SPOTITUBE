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
      if @user.update 
          flash[:success] = "Merci #{@user.name} ! Tes informations ont bien été modifiées."
      else
          flash[:danger] = "#{@user.errors.full_messages.each {|message| message}.join('')}"
      end
      redirect_to user_path(@user)
  end


end