// some ipsum endpoints

var Bacon = {
	src: 'http://baconipsum.com/api/',
	pre: function(params, next) {
		//...
		var setup = {
			paras: params.para,
			sentences: params.sentence,
			type: params.type || 'all-meat',
			'start-with-lorem': params.startWithLorem || 0
		}

		next(this.src, setup, this.res);
	},
	res: (res, next) {
		next(res[0]);
	}
}
$.ipman_('bacon', Bacon);