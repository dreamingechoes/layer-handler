module Layer
  module Handler

    class Engine < ::Rails::Engine
      initializer "layer_handler.action_view" do |app|
        ActiveSupport.on_load :action_view do
          require_relative "handler/rails/view_helpers"
          include Layer::Handler::ViewHelpers
        end
      end
    end

    class << self
      attr_accessor :configuration
    end

    def self.configure
      self.configuration ||= Configuration.new
      yield(configuration)
    end

    class Configuration
      attr_accessor :gtm_id

      def initialize
        @gtm_id = nil
      end
    end

  end
end
