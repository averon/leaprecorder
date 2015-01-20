class Api::RecordingsController < ApplicationController
  def index
    @recordings = Recording.all
    render json: @recordings.to_json
  end

  def show
    @recording = Recording.find_by_id(params[:id])
    render json: @recording.to_json
  end

  def create
    @recording = Recording.new(recording_params)

    if @recording.save
      render json: @recording.to_json
    else
      render json: @recording.errors.to_json
    end
  end

  def update
    @recording = Recording.find_by_id(params[:id])
    
    if @recording.save
      render json: @recording.to_json
    else
      render json: @recording.errors.to_json
    end
  end

  private

  def recording_params
    params.require(:recording).permit(:name, :data)
  end
end
