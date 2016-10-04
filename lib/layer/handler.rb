module Layer
  module Handler
    class Engine < ::Rails::Engine
    end
  end
end

if defined?(Rails)
  require 'layer/handler/rails/railtie'
end
