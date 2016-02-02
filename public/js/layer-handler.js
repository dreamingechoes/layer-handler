/**
 * Core and general tools
 */
(function($, undefined) {
  'use strict';

  // Singleton
  if (typeof window.LayerHandler !== 'undefined') {
    return;
  }

  //
  // Module general vars
  //
  var
    v = '1.00 beta',
    debug = false,
    data = {
      gtm_id: ''
    };

  //
  // Methods
  //

  // Test Method
  function testMethod() {
    if (this.debug) console.log("Been trying to meet you!");
  }

  //
  // Public methods / properties
  //
  window.LayerHandler = {
    debug: debug,
    data: data,
    testMethod: testMethod
  };

}(jQuery));
