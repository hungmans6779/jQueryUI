 $(document).ready(function(){
    $("#example").slider({
		min: 300, 
		max: 800,
			handles: [{start:300, min: 300, max: 800}],
			slide: function(e, ui) {
			var myv = ui.value;
			$('.display').css({width:myv+'px'});
		}
	});
  });
