$("document").ready(function(){
	$(".panel").each(function(i){
		$(this).css("left", (i*100) + "%");
	})
	$(".arrowLeft").click(animateRight);
	$(".arrowRight").click(animateLeft);
})

function animateLeft(){
	$(".background").animate({'background-position-x': "-=200px"}, 2000);
	$(".panel").animate({"left": "-=100%"}, 2000);
}

function animateRight(){
	$(".background").animate({'background-position-x': "+=200px"}, 2000);
	$(".panel").animate({"left": "+=100%"}, 2000);
}