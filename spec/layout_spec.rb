require_relative '../app.rb'
require 'rack/test'

set :environment, :test

def app
  Sinatra::Application
end

describe "head" do 
  include Rack::Test::Methods
  it "should have correct title" do
    get '/' 
    expect(last_response.body).to include("Rap Racer") 
  end
end

describe "sentence" do
  include Rack::Test::Methods
  it "should include a sentence class" do
    get "/"
    expect(last_response.body).to include('class="sentence"')
  end

  it "should highlight the first word on click" do
    get '/'
    expect(last_response.body).to include('<span class="current">This</span>')
  end

end

