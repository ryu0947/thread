$(function () {
    $(window).on("scroll", function() {
      if($(this).scrollTop() > 700) {
        $("#js-header").addClass("fixed");
      } else {
        $("#js-header").removeClass("fixed");
      }
    });
});