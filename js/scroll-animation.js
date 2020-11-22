$(function() {
function scrollChk(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();

    $('.scroll-animation').not('.show').each(function(){
        var pos = $(this).offset().top;

        if (scroll > pos - windowHeight){
            $(this).addClass("show");
        }
    });
}
$(window).scroll(function (){
    scrollChk();
});
$('body').on('touchmove', function() {
    scrollChk();
});
});