// ipman: a lorem ipsum tool
// by Chris Andrejewski, @compooter

(function($) {
	if($ === false) {
		console.log('ipman needs jQuery');
		return;
	}

	var sources = {
		
		jesus: {
			src: 'http://hipsterjesus.com/api/',
			pre: function(d, next) {
				//...
				next(this.src, params);
			}
		}
	}

	defaultSource = src['plain'];

	function option(name, that, params) {
		return $(that).data(name) || params[name] || defaults[name];
	}

	$.fn.ipman = function(src, opt) {
		// this will do anything but configure
		src = src || plain
		opt = opt || {};

		return this.each(function() {

			var $this = $(this);

			var settings = $.extend(opt, {
				para: option('para', $this, opt),
				sentence: option('para', $this, opt)
			});

			sources[src].pre(settings, function(path, data, read) {
				$.get(path, data, function(res) {
					if(res) {
						read(res || function(res, next) {
							next(res);
						}, function(out) {
							$this.html(out);
						})	
					}
				})
			})

		})
	}

	$.fn.ipman_ = function(src, obj) {
		// this will not do anything but configure
		if(typeof obj == 'object') {
			if(sources[src]) {
				sources[src] = obj;
			} else {
				console.log('no ipman source found to modify')
			}
		} else {
			if(sources[src]) {
				defaultSource = sources[src];
			} else {
				console.log('no ipman source found to use')
			}
		}

		return this;
		
	}


})(jQuery || false)

// auto-setup
$('.ipman').ipman();