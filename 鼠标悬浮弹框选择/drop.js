;(function($, window, document, undefined){

	var timer = null;
	var Drop = function(id){
		this.$element = id;
	};

	Drop.prototype = {
		fnOver: function(){
			this.$element.on('mouseover', function(){
				var _this = $(this);
				clearTimeout(timer);
				_this.find('ul').show();
				_this.siblings().find('ul').hide();
			});

			this.$element.find('ul').on('mouseover', function(){
				clearTimeout(timer);
			});
		},
		fnOut: function(){
			this.$element.on('mouseout', function(){
				var _this = $(this);
				clearTimeout(timer);
				timer = setTimeout(function(){
					_this.find('ul').hide();
				}, 100);
			});

			this.$element.find('ul').on('mouseout', function(){
				var _this = $(this);
				clearTimeout(timer);
				timer = setTimeout(function(){
					_this.hide();
				}, 100);
			});
		},
		fnCick: function(){
			this.$element.find('li').on('click', function(){
				$(this).parent().hide();
				$(this).parent().parent().find('span').html($(this).html());
			});
		},
		init: function(){
			this.fnOver();
			this.fnOut();
			this.fnCick();
		}
	};

	$.fn.drop = function(){
		var drop = new Drop(this);
		return drop.init();
	};

})(jQuery, window, document);