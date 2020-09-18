class StaticPagesController < ApplicationController

    def faq
    end

    def contact
        if contact 
            flash[:success] = "Merci #{current_user.name} ! Nous allons traiter ta demande dans les plus brefs délais"
            redirect_to root_path
        end
    end

    def team
    end

    def about
    end 

    def error_404
    end 

end