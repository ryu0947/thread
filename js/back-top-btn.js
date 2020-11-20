$(function(){
    const topBtn = $("#js-top-btn");
    topBtn.hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            topBtn.fadeIn(300);
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.click(function(){
        $("html").animate({scrollTop: 0}, 1000);
        return false;
    });
});