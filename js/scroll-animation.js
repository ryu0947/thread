$(function(){
  const target = $(".js-trigger");
  $(window).scroll(
    $.throttle(250, function () {
      $(target).each(function () {
        const scroll = $(window).scrollTop();
        const winHeight = $(window).height();
        const targetHeight = $(this).offset().top;

        if (scroll > targetHeight - winHeight / 1.5) {
          $(this).addClass("show");
        }
      });
    })
  );
})