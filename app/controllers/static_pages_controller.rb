class StaticPagesController < ApplicationController
  def index
    render :layout => 'angular'
  end

  def record
    render :record
  end
end
