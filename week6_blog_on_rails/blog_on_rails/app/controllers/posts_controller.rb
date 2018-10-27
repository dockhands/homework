class PostsController < ApplicationController

    def index
        @posts = Post.all.order(created_at: :desc)
    end

    def show
       @post = Post.find params[:id]
        
    end

    def new
        @post = Post.new 
        # if you leave empty, by default, it will: render :new
    end
  
    def create
        # res.send(req.body)
        # The `params` object is availabe in controllers. It contains
        # the form's data, url params and query params.
        # To compare with Express, it's a combination of
        # req.body, req.query and req.params.
        # render json: question_params
    
        @post = Post.new post_params
        if @post.save
          redirect_to post_path(@post.id)
        else
          render :new
        end
    end


    private
    def post_params
    params.require(:post).permit(:title, :body)
    end


end
