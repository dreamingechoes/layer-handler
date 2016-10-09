require 'active_support/core_ext/string/output_safety'

module Layer
  module Handler
    module ViewHelpers

      def init_layer_handler
        content_tag :script do
          "LayerHandler.init('#{Layer::Handler.configuration.gtm_id}');".html_safe
        end.html_safe
      end
      
    end
  end
end
