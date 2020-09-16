class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password)}
     
    end


    def from_you?(id)
        if current_user.id == id
          return true
        else
          return 
        end
      end


end
