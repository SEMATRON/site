$(document).ready(function(){
	$(".gear").data({angle: 0, turnRate: 100, scale: 1});

	setInterval(function(){
		var startAngle = $(".gear").data().angle;
		var endAngle = startAngle + $(".gear").data().turnRate;

		$(".gear").data().angle = endAngle;

		$({deg: startAngle}).animate({deg: endAngle}, {
	        duration: 10000,
	        step: function(now) {
	        	scale = $(".gear").data().scale;
	            $(".gear").css({
	                transform: 'rotate(' + now + 'deg) scale(' + scale + ',' + scale + ')'
	            });
	        },
	        easing: "linear"
    	});
    	return arguments.callee;
	}(), 10000);

	$(".closeContato").click(function(){
		console.log("hue");
		$(".closeContato").fadeOut();
		$(".contato").fadeOut(400, function(){
			$(".links").animate({
				marginTop: "150px",
				height: "50px"
			}, 1000, 'swing', function(){	
				$(".logoTop, .links .item, .logoContainer").fadeIn(400);
				console.log("fade in dos blobs");
			});
		});
	})

	$("#contato").click(function(){
		$(".logoTop, .links .item").fadeOut();
		$(".logoContainer").fadeOut(400, function(){
			$(".links").animate({
				marginTop: "-200px",
				height: "400px"
			}, 1000, 'swing', function(){
				console.log("hue fade");
				$(".contato").fadeIn();
				$(".closeContato").fadeIn();
			});

		});

	})
})