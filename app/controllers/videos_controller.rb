class VideosController < ApplicationController
    def index
        @videos = Video.all

    end

    def show
        @video = Video.find(params[:id])
        @title = @video.title
        @playlist = Playlist.find(params[:id])
        respond_to do |format|
            format.html { redirect_to playlist_path(:id => @playlist.id) }
            format.js {}
        end
    end

    def new
        @new_video = Video.new
    end


    def create
        @new_video = Video.new(title: params[:title], url: helpers.youtube_embed(params[:url]), playlist: Playlist.find(params[:playlist_id]))
            if @new_video.save
                flash[:success] = "Merci #{current_user.name} ! Ta video a bien été ajoutée à la playlist."
                redirect_to :controller => 'playlists', :action => 'show', id: Playlist.find(params[:playlist_id])
            else
                flash[:danger] = "Nous n'avons pas réussi à récupérer ta vidéo pour la (ou les) raison(s) suivante(s) : #{@new_video.errors.full_messages.each {|message| message}.join('')}"
                render :controller => 'playlists', :action => 'show', id: Playlist.find(params[:playlist_id])
        end
    end

    def destroy
        @video = Video.find(params[:playlist_id])
        @video.destroy
        respond_to do |format|
            format.html {redirect_to playlist_path(:id => @video.playlist.id)}
            format.js {}
        end
    end

end
