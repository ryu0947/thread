let target;

$("a[href^='#']").click(function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  if (href === "#") {
    target = $("html");
  } else {
    target = $(href);
  }
  const position = target.offset().top;
  const getHeight = $("#js-header").outerHeight();
  $("body,html").animate({ scrollTop: position - getHeight }, 600, "swing");
  return false;
});
