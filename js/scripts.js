var colors = ["#A51724", "#1E1852"];
var logos = ["visible", "hidden"];
var rand = Math.random(); 
var logocolor = Math.floor(rand * logos.length);
var randomcolor = Math.floor(rand * colors.length);

$(document).ready(function () {
   $('nav').each(function () {
        
        $('nav').css("background", colors[randomcolor]);
    });
	
	
	$(document).ready(function () {
		$('.red').each(function () {
			
        	$('.red').css("visibility", logos[logocolor]);
    	});

   	if (colors[randomcolor] == "#1E1852"){
   		$(document).ready(function () {
		$('.blue').each(function () {
        	$('.blue').css("visibility", 'visible');
    	});
   	});
};
});
});

var percentage= .4 * $( window ).height();;

$(window).scroll(function() {
    if ($(window).scrollTop() > percentage) {
        $('.opacity').css("opacity", 1);
    }
    else{
        $('.opacity').css("opacity", 0);
    }
});
