var App = function(ele){
	this.$element = ele;
};

App.prototype = {
	appendHtml: function(){
		return this.$element.append('<div id="btns"></div><div id="slides"></div>');
	},
	ajaxContent: function(){
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: 'data.json',
			success: function(data){
				console.log(data);
			},
			error: function(){

			}
		});
	},
	init: function(){
		var _this = this;
		_this.appendHtml();
		_this.ajaxContent();
	}
};

$.fn.myPlugin = function(){
	var app = new App(this);
	return app.init();
};