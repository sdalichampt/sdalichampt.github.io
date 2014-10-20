$(document).ready(function() {
	$('a').click(function() {
		var href = $(this).attr('href');
		if (href.indexOf('http://') != -1 || href.indexOf('https://') != -1) {
			var host = href.substr(href.indexOf(':') + 3);
			if (host.indexOf('/') != -1) {
				host = host.substring(0, host.indexOf('/'));
			}
			if (host != window.location.host) {
				window.open(href);
				return false;
			}
		}
	});
});
