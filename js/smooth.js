let target;

$("a[href^='#']").click(function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  if (href === "#") {
    target = $("html");
  } else {
    target = $(href);
  }
  const getHeight = $("#js-header").outerHeight();
  const position = target.offset().top - getHeight;
  $("body,html").animate({ scrollTop: position }, 600, "swing");
  return false;
});
