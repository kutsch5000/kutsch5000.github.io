var colors = ["#A51724", "#262261"];
var logos = ["block", "none"];
var rand = Math.random(); 
var logocolor = Math.floor(rand * logos.length);
var randomcolor = Math.floor(rand * colors.length);

$(document).ready(function () {
   $('nav').each(function () {
        
        $('nav').css("background", colors[randomcolor]);
    });
	
	
	$(document).ready(function () {
		$('.red').each(function () {
			
        	$('.red').css("display", logos[logocolor]);
    	});

   	if (colors[randomcolor] == "#262261"){
   		$(document).ready(function () {
		$('.blue').each(function () {
        	$('.blue').css("display", 'block');
    	});
   	});
};
});
});
