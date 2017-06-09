(function($) {
	$(document).ready( function() {
		
		//$('.dropdown-toggle').dropdown();
		$("a.lightbox").prettyPhoto({ie6_fallback: true, social_tools:false, slideshow: true});
		
		$('.socialMenu a').tooltip();
		
		$('#topBanner').carousel('cycle');
		$("#topThumb1").click(function(){slidebanner(0); $(this).addClass("activeThumb");});
		$("#topThumb2").click(function(){slidebanner(1); $(this).addClass("activeThumb");});
		$("#topThumb3").click(function(){slidebanner(2); $(this).addClass("activeThumb");});
		$("#topThumb4").click(function(){slidebanner(3); $(this).addClass("activeThumb");});
		$("#topThumb5").click(function(){slidebanner(4); $(this).addClass("activeThumb");});
		
		//footer animation
		$("#footerLogo").click(function(){
			$('html,body').animate({scrollTop: 5}, 1000);
			return false;
		});
	});
	
})(jQuery);

function slidebanner(i)
{
	$(".topBannerThumb").removeClass("activeThumb");
	$('#topBanner').carousel(i);
	return;
}
