// ipman: a lorem ipsum tool
// by Chris Andrejewski, @compooter

(function($) {
	if($ === false) {
		console.log('ipman needs jQuery or Zepto');
		return;
	}

	var Plain = {
		src: 'http://loripsum.net/api/',
		pre: function(params, next) {
			var pathOptions = [];
			pathOptions.push(params.paragraph || false)
			pathOptions.push(params.length || false)
			pathOptions.push(params.decorate || false)

			pathOptions = this.compact(pathOptions);

			var setup = {}

			next(this.src+pathOptions.join('/'), setup, this.res);
		}, 
		res: function(ipsums, next) {
			next(ipsums);
		},
		compact: function(actual){
  			var newArray = new Array();
  			for(var i = 0; i<actual.length; i++){
      			if (actual[i]){
        			newArray.push(actual[i]);
    			}
  			}
  			return newArray;
		}
	}

	var recipes = { 'plain': Plain }, defaultSource = recipes['plain'], defaultParams = {
		paragraph: 1,
		length: 'medium'
	};

	function option(name, that, params) {
		return $(that).data(name) || params[name] || defaultParams[name] || false;
	}

	$.fn.ipman = function(src, opt) {
		// this will do anything but configure
		var src = typeof src == 'string'? src : defaultSource
		var opt = opt || defaultParams

		return this.each(function() {

			var $this = $(this);

			var settings = $.extend(opt, {
				para: option('para', $this, opt),
				sentence: option('para', $this, opt)
			});

			src['pre'](settings, function(path, data, read) {
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

	$.ipman_ = function(src, obj) {
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

	// auto-setup
	$('.ipman').ipman();

})((function() {
	if(typeof jQuery != 'undefined') {
		return jQuery;
	} else if (typeof Zepto != 'undefined') {
		return Zepto;
	} else {
		return false;
	}
})())
