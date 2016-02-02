(function(global) {
  var LayerHandler = {},
      dataLayer = [];

  global.LayerHandler = LayerHandler;
  global.dataLayer = dataLayer;

  LayerHandler.gtm_id = null;

  LayerHandler.init = function(gtm_id) {
    this.gtm_id = gtm_id;
    this.initDataLayer();
    this.appendGTM();
    this.bindEvents();
  };

  LayerHandler.initDataLayer = function() {
    var data = document.getElementsByTagName('body')[0].getAttribute('data-gtm-body');
    this.pushData(data);
  };

  LayerHandler.bindEvents = function() {
    document.body.addEventListener('click', function(event) {
      var element = event.target,
          data;

      do {
        data = element.getAttribute('data-gtm');
        element = element.parentElement;
      } while (element && element.parentElement && data === null);

      if (data !== null) {
        this.pushData(data);
      }
    }.bind(this));
  };

  LayerHandler.appendGTM = function() {
    var gtm_no_script = document.createElement('noscript');
    gtm_no_script.innerHTML = "<!-- Google Tag Manager -->" +
                              "<iframe src='//www.googletagmanager.com/ns.html?id='" + this.gtm_id + "'" +
                              "height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>";

    var gtm_script = document.createElement('script');
    gtm_script.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':" +
                           "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0]," +
                           "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=" +
                           "'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);" +
                           "})(window,document,'script','dataLayer','" + this.gtm_id + "');" +
                           "<!-- End Google Tag Manager -->";
    var appendElement = document.body.lastChild;
    appendElement.parentNode.insertBefore(gtm_no_script, appendElement);
    appendElement.parentNode.insertBefore(gtm_script, appendElement);
  };

  LayerHandler.pushData = function(data) {
    if(data !== null) {
      var data = JSON.parse(data),
          temp = {};
      for(var key in data) {
        temp[key] = data[key];
      }
      dataLayer.push(temp);
    }
  };
})(window);
