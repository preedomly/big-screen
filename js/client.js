// var _API_Path = window.location.protocol + '//' + window.location.host + '/ecity_js_api1.0';

var _API_Path = 'http://192.168.8.29:8085/ecity_js_api1.0';
// var _API_Path = 'http://2140u809i6.imwork.net:10678/ecity_js_api1.0';

//_load("frame/js/common.js","frame/js/ctrlib/dialog.js");
window._jscache = [];
var _load = function() {
  var args = arguments;
  for (var i = 0; i < args.length; i++) {
    var url = _API_Path + (args[i].indexOf('/') == 0 ? '' : '/') + args[i];
    _loadLocal(url);
  }
};

var _loadLocal = function(url) {
  if (!window._jscache[url]) {
    var content = null;
    if (url.indexOf('.css') > -1) {
      content = "<link type='text/css' rel='stylesheet' href='" + url + "'>";
      document.write(content);
    } else {
      content =
        "<script type='text/javascript' src='" + url + "'><" + '/script>';
      document.write(content);
    }
    window._jscache[url] = 1;
  }
};

(function() {
  window._load('frame/js/jquery-1.9.1.min.js');
  window._load('frame/js/jquery.localize.js');
})();
