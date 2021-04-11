$(function () {
    $(window).on("scroll", function() {
      if($(this).scrollTop() > 500) {
        $("#js-header").addClass("fixed");
      } else {
        $("#js-header").removeClass("fixed");
      }
    });
});