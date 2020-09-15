class ApplicationController < ActionController::Base

    def from_you?(id)
        if current_user.id == id
          return true
        else
          return 
        end
      end


end
