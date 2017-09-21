// load the interactions only when the document is ready
$(document).ready(function() {
    $('.menu-btn').click(function(){
        console.log($(this).children('.menu-svg'));
    })
});
