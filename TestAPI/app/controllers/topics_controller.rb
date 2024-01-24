class TopicsController < ApplicationController
  before_action :set_topic, only: [:show]
  def index
    @topics = Topic.all
    render json: @topics
  end

  def create
    @post = Topic.new(topic_params)

    if @post.save
      render json: @post,status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end

  end

  # Read
  def show
    render json: @topics
  end

  def update

  end

  def delete

  end

  private
  def set_topic
    @post = Topic.find(params[:__id__])
  end

  def topic_params
    params.require(:topic).permit(:title, :content)
  end
end
