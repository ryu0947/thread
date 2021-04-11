$(function () {
  const topBtn = $("#js-top-btn");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      topBtn.addClass("show");
    } else {
      topBtn.removeClass("show");
    }
  });

  topBtn.on("click", function () {
    $("body, html").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});
