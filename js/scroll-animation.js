$(function() {
function scrollChk(){
  const scroll = $(window).scrollTop();
  const windowHeight = $(window).height();

    $('.scroll-animation').not('.show').each(function(){
        const pos = $(this).offset().top;

        if (scroll > pos - windowHeight / 2){
            $(this).addClass("show");
        }
    });
}
$(window).on("scroll", function (){
    scrollChk();
});
});