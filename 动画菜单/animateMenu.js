;(function($, window, document, undefined) {

	var AnimateMenu = function(ele, opt) {
		this.$element = ele;
		this.defaults = {
			animatePadding: 60,
            defaultPadding: 10,
            evenColor: '#ccc',
            oddColor: '#eee'
		};
		this.options = $.extend({}, this.defaults, opt);
	};

	AnimateMenu.prototype.init = function(){
		var _this = this;
		return _this.$element.each(function() {
			var opt = _this.options;
			var obj = $(this);
			var items = $("li", obj);

			$("li:even", obj).css('background', opt.evenColor);
			$("li:odd", obj).css('background', opt.oddColor); 

			items.bind({
				mouseover: function(){
					$(this).animate({paddingLeft: opt.animatePadding}, 300);
				},
				mouseout: function(){
					$(this).animate({paddingLeft: opt.defaultPadding}, 300);
				}
			});		
		});
	};

	$.fn.animateMenu = function(options){
		var animateMenu = new AnimateMenu(this, options);
		return animateMenu.init();
	};

})(jQuery, window, document);