$(document).ready(function(){
    $('.introduce a').click(function(event){
        event.preventDefault();
        position=$('#our-work').offset().top;
        $('html, body').animate({scrollTop: position},400);
    });
});