;(function($, window, document, undefined) {

	var disX = 0;
	var disY = 0;
	var Drag = function(id) {
		this.$element = id;
	};

	Drag.prototype = {
		fnMove: function(ev){
			var oEvent = ev || event;
			var l = oEvent.clientX - disX;
			var t = oEvent.clientY - disY;

			/*if (l < 0) {
				l = 0;
			} else if (l > $(document).width() - this.$element.outerWidth()) {
				l = $(document).width() - this.$element.outerWidth();
			} else if (t < 0) {
				t = 0;
			} else if (t > $(document).height() - this.$element.outerHeight()) {
				t = $(document).height() - this.$element.outerHeight();
			}*/

			this.$element.css({
				left: l,
				top: t
			});
		},
		fnUp: function() {
			$(document).unbind('mousedown');
			$(document).unbind('mousemove');
		},
		fnDown: function() {
			var _this = this;
			this.$element.on('mousedown', function(ev) {
				var oEvent = ev || event;
				disX = oEvent.clientX - $(this).offset().left;
				disY = oEvent.clientY - $(this).offset().top;
				oEvent.preventDefault();

				$(document).on('mousemove', function(ev) {
					_this.fnMove(ev);
				});

				$(document).on('mouseup', function() {
					_this.fnUp();
				});
			});
		},
		init: function() {
			this.fnDown();
		}
	};

	$.fn.drag = function() {
		var drag = new Drag(this);
		return drag.init();
	};

})(jQuery, window, document);