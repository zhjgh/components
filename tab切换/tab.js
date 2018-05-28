;(function($, window, document, undefined){

	var Tab = function(ele){
		this.$element = ele;
	};

	Tab.prototype.init = function(){
		this.$element.find('input').on('click', function(){
			var idx = $(this).index();
			$(this).addClass('active').siblings('input').removeClass('active');
			$(this).parent().find('div').eq(idx).show().siblings('div').hide();
		});
	};

	$.fn.tab = function(){
		var tab = new Tab(this);
		return tab.init();
	};

})(jQuery, window, document);