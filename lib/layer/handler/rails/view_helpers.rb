require 'active_support/core_ext/string/output_safety'

module Layer::Handler::Rails
  module ViewHelpers

    def gtm_page_attributes data
      "'data-gtm-page': #{data}".html_safe
    end

  end
end
