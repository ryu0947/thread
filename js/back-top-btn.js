$(function(){
    const topbtn = $("#js-top-btn");
    topbtn.hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            topbtn.fadeIn(300);
        } else {
            topbtn.fadeOut();
        }
    });

    topbtn.click(function(){
        $("html").animate({scrollTop: 0}, 1000);
        return false;
    });
});