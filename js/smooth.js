$(function () {
  let target = 0;
  $("a[href^='#']").click(function (e) {
    e.preventDefault();
    $(".js-menu-btn").removeClass("active");
    $("#js-menu").removeClass("show");
    const href = $(this).attr("href");
    if (href === "#") {
      target = $("");
    } else {
      target = $(href);
    }
    const getHeight = $("#js-header").outerHeight();
    const position = target.offset().top - getHeight;
    $("body,html").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
});
