$(function () {
    "use strict";
	$(window).scroll(function () {
		var nav = $(".navbar");
		if($(window).scrollTop() >= $(".top-logo").height()){
			if(!nav.hasClass("navbar-fixed-top")){
				nav.addClass("navbar-fixed-top");
			} 
		}else {
				nav.removeClass("navbar-fixed-top");
			}
	});
});