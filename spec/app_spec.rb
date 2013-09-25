require_relative '../app.rb'
require 'rack/test'

set :environment, :test

def app
  Sinatra::Application
end

describe "/" do 
  include Rack::Test::Methods
  it "should route to home.erb" do
    get '/' 
    expect(last_response.status) == 200
  end
end



