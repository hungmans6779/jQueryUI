$(document).ready(function(){
$.ui.accordion.animations.myanimate = function(options) {
	this.slide(options, {
		easing: "expoinout",
		duration: 700
	});
 };

$("#example").accordion({
 animated: "myanimate"
});
});