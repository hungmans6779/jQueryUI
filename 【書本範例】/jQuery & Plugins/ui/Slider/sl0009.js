$(document).ready(function(){
    $("#example").slider({
		min: 30, 
		max: 100,
			handles: [{start:30, min: 30, max: 100}],
			slide: function(e, ui) {
			var myv = ui.value;
			$('.display img').css({width:myv+'%'});
		}
	});
  });