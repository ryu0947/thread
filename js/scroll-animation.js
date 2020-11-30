$(function(){
    $(window).on("scroll", function() {
        const trigger = $(".js-trigger");

      $(trigger).each(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let triggerTop =  $(this).offset().top;

      if(scroll > triggerTop - windowHeight / 2) {
        $(this).addClass("show");
      }
      });
    });
})