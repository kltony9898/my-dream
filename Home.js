var modules={
    ui:function(){
        $('#header').load('view/header/header.html');
        $('#body').load('view/body/body.html');
        $('#footer').load('view/footer/footer.html');
    }
};

$(function () {
    modules.ui();
});