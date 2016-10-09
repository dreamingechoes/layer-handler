module Layer
  module Handler
    module Generators
      class InstallGenerator < Rails::Generators::Base
        source_root File.expand_path("../templates", __FILE__)
        desc "Creates LayerHandler initializer for your application"

        def copy_initializer
          template "layer_handler_initializer.rb", "config/initializers/layer_handler.rb"
        end
      end
    end
  end
end
