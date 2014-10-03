$("document").ready(function(){
	$(".panel").each(function(i){
		$(this).css("left", (i*100) + "%");
	})
	$(".arrowLeft").click(animateRight);
	$(".arrowRight").click(animateLeft);
	$(".background").data().pos = 0;

	$(".arrowLeft").hide();

	$(window).scroll(function(){
		$(".background").css("background-position-y", -$(window).scrollTop()/2 + "px");
	})

	$(".nav .item").each(function(i){
		$(this).data().to = i;
	}).mouseenter(function(){
		$(this).stop();
		$(this).animate({color:"#ff6600"}, 100);
	}).mouseleave(function(){
		if($(this).hasClass("selected")){
			return;
		}
		$(this).stop();
		$(this).animate({color:"#ffffff"}, 100);
	}).click(function(){
		if($(".background:animated").size()){
			return false;
		}

		goToTop();

		var from = $(".background").data().pos;
		var to = $(this).data().to;
		if(from != to){
			var delta = to - from;
			$(".background").data().pos = to;
			$(".background").animate({'background-position-x': "-="+(200 * delta)+"px"}, 1000);
			$(".panel").animate({"left": "-="+(100 * delta)+"%"}, 1000);

			var fadeLeft = false;
			var fadeRight = false;

			if($(".background").data().pos == maxPanels){
				$(".arrowRight").fadeOut();
			} else {
				$(".arrowRight").fadeIn();
			}

			if($(".background").data().pos == 0){
				$(".arrowLeft").fadeOut();
			} else {
				$(".arrowLeft").fadeIn();	
			}
		}

		$(".nav .item").removeClass("selected");
		$(this).addClass("selected");
		$(".nav .item").each(function(){
			if(!$(this).hasClass("selected")){
				$(this).animate({color:"#ffffff"}, 100);
			}			
		})
	});

	maxPanels = $(".panel").size() - 1;
});

function goToTop(){
	$({scroll: $(window).scrollTop()}).animate({scroll: 0}, {
		duration: 1000,
		step: function(now){
			$(window).scrollTop(now);
		}
	})
}

var maxPanels;

function animateLeft(){
	if($(".background:animated").size()){
		return false;
	}
	if($(".background").data().pos >= maxPanels){
		return false;
	}
	$(".background").data().pos++;

	if($(".background").data().pos == maxPanels){
		$(".arrowRight").fadeOut();
	}
	$(".arrowLeft").fadeIn();

	$(".background").animate({'background-position-x': "-=200px"}, 1000);
	$(".panel").animate({"left": "-=100%"}, 1000);

	goToTop();
	updateSelected();
}

function animateRight(){
	if($(".background:animated").size()){
		return false;
	}
	if($(".background").data().pos == 0){
		return false;
	}

	$(".background").data().pos--;

	if($(".background").data().pos == 0){
		$(".arrowLeft").fadeOut();
	}
	$(".arrowRight").fadeIn();


	$(".background").animate({'background-position-x': "+=200px"}, 1000);
	$(".panel").animate({"left": "+=100%"}, 1000);

	goToTop();
	updateSelected();
}

function updateSelected() {
	$(".nav .item").removeClass("selected");
	$(".nav .item").each(function(){
		if($(this).data().to == $(".background").data().pos){
			$(this).addClass("selected");
			$(this).animate({color:"#ff6600"}, 100);
		}
	});
	$(".nav .item").each(function(){
		if(!$(this).hasClass("selected")){
			$(this).animate({color:"#ffffff"}, 100);
		}			
	})
}