$(document).ready(function(){
	$('#display').click(function(){
$(this).animate({height:200}, {duration: 1000, easing:'easeInQuad'}).animate({height:100}, {duration: 1000, easing:'easeOutQuad'});
	});
  });

  /*
swing
easeInQuad
easeOutQuad
easeInOutQuad
easeInCubic
easeOutCubic
easeInOutCubic
easeInQuart
easeOutQuart
easeInOutQuart
easeInQuint
easeOutQuint
easeInOutQuint
easeInSine
easeOutSine
easeInOutSine
easeInExpo
easeOutExpo
easeInOutExpo
easeInCirc
easeOutCirc
easeInOutCirc
easeInElastic
easeOutElastic
easeInOutElastic
easeInBack
easeOutBack
easeInOutBack
easeInBounce
easeOutBounce
easeInOutBounce
<script src="jquery.easing.compatibility.js"></script>
easeIn = easeInQuad
easeOut = easeOutQuad
easeInOut = easeInOutQuad
expoin = easeInExpo
expoout = easeOutExpo
expoinout = easeInOutExpo
bouncein = easeInBounce
bounceout = easeOutBounce
bounceinout = easeInOutBounce
elasin = easeInElastic
elasout = easeOutElastic
elasinout = easeInOutElastic
backin = easeInBack
backout = easeOutBack
backinout = easeInOutBack

*/