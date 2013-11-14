/* jQuery document */

$(window).load(function() {
	
	// preloader
	$(".container").delay(150).show();
	$(".preloader").delay(1000).fadeOut(100);
	
});

$(document).ready(function(){
	
	// preloader
	$(".preloader").fadeIn(100);
	
	
	
	// date picker
	$("#datepicker").datepicker({ dateFormat: "dd/mm/yy" });
	
	
	
	// switch buttons
	$(".switch a").bind("click", function(){
		var parentSwitch = $(this).parent(".switch");
		$("a.active", parentSwitch).removeClass("active");
		
		$(this).addClass("active");
		
		return false;
	});
	
	
	
	// login form 
	$(".login").submit(function(){
		window.location = "index.html";
		
		return false;
	});
	
	
	
	
	
	// data table
	$(".data .header a").bind("click", function(){
		return false;
	});
	
	
	
	
	// dialog box
	$(".dialog #dialogClose, .dialog #dialogAccept").bind("click", function(){
		$(".dialog").fadeOut(100);
		
		return false;
	});
	
	
	
	// profile buttons
	$(".results:not(.list) .button").bind("click", function(){
		$(".dialog").fadeIn(100);
		
		return false;
	});
	
});