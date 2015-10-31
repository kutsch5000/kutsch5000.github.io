var colors = ["#A51724", "#262261"];
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

   	if (colors[randomcolor] == "#262261"){
   		$(document).ready(function () {
		$('.blue').each(function () {
        	$('.blue').css("visibility", 'visible');
    	});
   	});
};
});
});
