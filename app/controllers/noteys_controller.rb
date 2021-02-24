class NoteysController < ApplicationController
  def index
    noteys = Notey.all
    render component: "Noteys", props: {noteys: noteys}
  end

  def show
    reder component: "Notey"
  end

  def new
    render component: "NewNotey"
  end

  def edit 
    render component: "EditNotey"
  end 

  def destroy 
    notey = Notey.find(params[:title])
    notey.destroy
    redirect_to root_path
  end 

end
