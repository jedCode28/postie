class NoteysController < ApplicationController
  def index
    noteys = Notey.all
    render component: "Noteys", props: {noteys: noteys}
  end

  def show
    notey = Notey.find_by(params[:title])
    render component: "Notey", props: {notey: notey}
  end

  def new
    render component: "NewNotey"
  end

  def create
    notey = Notey.new(notey_params)
    if notey.save
      redirect_to root_path
    else 
      render component: "NewNotey"
    end 
  end 

  def edit 
    notey = Notey.find_by(params[:title])
    render component: "EditNotey", props: {notey: notey}
  end 

  def update
    notey = Notey.find_by(params[:title])
    if notey.update(notey_params)
      redirect_to root_path
    else 
      render component: "EditNotey", props: {notey: notey}
    end 
  end 

  def destroy 
    notey = Notey.find_by(params[:title])
    notey.destroy
    redirect_to root_path
  end 

  private
  def notey_params
    params.require(:notey).permit(:title, :body)
  end 

end
 