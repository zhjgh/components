var Dialog = function(){}

Dialog.prototype.normal = `
    <div id="dialog-modal">
		<div id="dialog-hide">×</div>
		<div id="dialog-header"></div>
		<div id="dialog-body"></div>
		<div id="dialog-footer"></div>
    </div>
    <div id="cover-layer"></div>
`;

Dialog.prototype.confirm = `
    <div id="dialog-modal">
        <div id="dialog-hide">×</div>
        <div id="dialog-header"></div>
        <div id="dialog-body"></div>
        <div id="dialog-footer">
            <span id="dialog-confirm">确定</span>
            <span id="dialog-cancel">取消</span>
        </div>
    </div>
    <div id="cover-layer"></div>
`;

Dialog.prototype._hide = function(){
    $('#dialog-modal').remove();
    $('#cover-layer').remove();
}

Dialog.prototype._show = function(type, title, content, okMethod){
    var that = this;
    if ('normal' === type) {
        $(document.body).append(that.normal);
    }
    if ('confirm' === type) {
        $(document.body).append(that.confirm);
        $('#dialog-confirm').on('click', function () {
            if (typeof okMethod === 'function') {
                okMethod();
            }
            that._hide();
        });
        $('#dialog-cancel').on('click', function () {
            that._hide();
        });
    }
    $('#dialog-header').text(title);
    $('#dialog-body').html(content);
    $('#dialog-modal').show();
    $('#dialog-hide').on('click', function () {
        that._hide();
    });
}

const dialog = new Dialog();

dialog.show = {
    normal: function(title, content) {
        dialog._show('normal', title, content);
    },
    confirm: function(title, content, okMethod) {
        dialog._show('confirm', title, content, okMethod);
    },
    hide: function(){
        dialog._hide()
    }
};