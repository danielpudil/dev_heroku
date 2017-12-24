class IndexController < ApplicationController
  def index
    @articles = Article.all
    @events = Event.all
    @columns = Column.all
  end
end
