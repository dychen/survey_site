class SessionsController < ApplicationController
  def new 
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user
      if user.authenticate(params[:session][:password])
        sign_in user
        redirect_to root_path
      else
        flash.now[:error] = 'Invalid password.'
        render 'new'
      end
    else
      flash.now[:error] = 'That username does not exist.'
      render 'new'
    end
  end

  def destroy
    sign_out
    redirect_to signin_path
  end
end
