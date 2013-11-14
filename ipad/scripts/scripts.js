/* jQuery document */

$(window).load(function() {
	
	// preloader
	$(".container").delay(150).show();
	$(".preloader").delay(1000).fadeOut(100, function(){
		$('.contentScroll').scrollTop(1);
	});
	
});

$(document).ready(function(){
	
	document.body.ontouchmove = disableoverflow;
	
	// preloader
	$(".preloader").fadeIn(100);
	
	
	
	
	// switch buttons
	$(".switch a").bind("click", function(){
		var parentSwitch = $(this).parent(".switch");
		$("a.active", parentSwitch).removeClass("active");
		
		$(this).addClass("active");
		
		return false;
	});
	
	
	
	// lookup form 
	$(".lookup").submit(function(){
		window.location = "results.html";
		
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
	
	
	
	
	//$(".contentScroll").on("scrollstop", function()
	$(".contentScroll").bind("scroll", function()
	{
		//$("#testing").html($("#testing").html()+'test');
		if ($(this).scrollTop() == 0){
			$(this).scrollTop(1);				
		}
//		else {
//			$(this).scrollTop($(this).scrollTop() - 1);
//		}
		
		//$(this).on("scrolltop", function(){
			if ($(this).scrollTop() > 100)
			//if ($(this).scrollTop() > $(this).height()-$(this).scrollTop())
			{
				var thisScrollPos = $(this).scrollTop();
				
				//check if it has moved since last time we set it
				if($.lastScrollPos != thisScrollPos)
					$(this).scrollTop(--thisScrollPos);
				
				//update the new scroll position
				$.lastScrollPos = thisScrollPos;
			}
		//});
	});
	
});

function disableoverflow(){
	var target = event.target;
	
	var currentPosition = '';
	//alert(currentPosition);
	
	//console.log($('.contentScroll').scrollTop());
	
	if(!$(event.target).is('.contentScroll *, .contentScroll') || $('.contentScroll').scrollTop() == 0)
		event.preventDefault();
}