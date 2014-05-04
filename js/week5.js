if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var MyTwitterApi = (function(options) {
	var shared = {},
		options = options || {},
		API_BASE = window.location.href.replace(/\/[^\/]+.html\??(.*)/, '/')

	var init = function() {
		console.log('init()');
	};
	shared.init = init;

	return shared;
}());

MyTwitterApi.init();
