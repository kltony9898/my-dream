
// document.write("<script src='../config/config.js'></script>");

var modules={
    ui:function(){

    }
};

$(function () {
    modules.ui();

});

$(function () {
    // $.get( "https://e14d381a.ngrok.io/getvideo", function( data ) {
    $.get( `https://e14d381a.ngrok.io/getvideo`, function( data ) {
        $.each(data, function (index, value) {
            $('#video-content').append(
                console.log(value.embedded_url),
                $(`<iframe  width="530" height="298" src=${value.embedded_url} frameborder="0" allowfullscreen></iframe>`),
           
                // console.log(value.preview_video_url),
                // $(`<iframe  width="530" height="298" src="${value.preview_video_url} "frameborder="0" allowfullscreen></iframe>`),
                // console.log(value.title),
                $('<li >', 
                {text: [index+1]+'.'+value.title}),

            
            );            
        });
    });
    // });
    
});