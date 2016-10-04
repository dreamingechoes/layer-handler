require 'layer/handler/rails/view_helpers'

module Layer::Handler::Rails
  class Railtie < ::Rails::Railtie
    initializer "layer-handler" do
      ActionView::Base.send :include, ViewHelpers
    end
  end
end
