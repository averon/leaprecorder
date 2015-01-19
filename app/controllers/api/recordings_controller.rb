class Api::RecordingsController < ApplicationController
  def index
    @recordings = Recording.all
    render json: @recordings.to_json
  end
end
