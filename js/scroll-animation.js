$(function() {
function scrollChk(){
  const scroll = $(window).scrollTop();
  const windowHeight = $(window).height();

    $('.scroll-animation').not('.show').each(function(){
        const pos = $(this).offset().top;

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