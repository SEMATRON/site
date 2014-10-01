$(document).ready(function(){
	$(".gear").data({angle: 0, turnRate: 10});
	setInterval(function(){
		var startAngle = $(".gear").data().angle;
		var endAngle = startAngle + $(".gear").data().turnRate;

		$(".gear").data().angle = endAngle;

		$({deg: startAngle}).animate({deg: endAngle}, {
	        duration: 1000,
	        step: function(now) {
	            $(".gear").css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	        },
	        easing: "linear"
    	});
    	return arguments.callee;
	}(), 1000);
})