$(function () {
    "use strict";
    $(window).scroll(function () {
        var nav = $(".navbar");
        if ($(this).scrollTop() > $(".navbar").height()) {
            if (!nav.hasClass("scrolled")) {
                nav.addClass("scrolled");
                console.log("add");
            }
        } else {
            nav.removeClass("scrolled");
        }
        
    });
	
	
	$(".tabs ul li").click(function () {
		
		$(this).siblings().removeClass("active").end().addClass("active");
		console.log($(this).data("class"));
		$($(this).data("class")).siblings().hide().end().show();
	});
});