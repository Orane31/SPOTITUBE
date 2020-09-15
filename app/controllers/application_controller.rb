class ApplicationController < ActionController::Base
  before_action :set_locale 
  
  private
  
  def set_locale
    if params[:locale]
      I18n.locale = params[:locale]
    end
  end

  def from_you?(id)
    if current_user.id == id
      return true
    else
      return 
    end
  end


end
