 $(document).ready(function(){
    $("#example").slider({
		min: 10, 
		max: 30,
			startValue:12,			
				handles: [{start:12, min: 10, max: 30}],
			change: function(e, ui) {
			var myv = ui.value;
			$('.display').css({'font-size':myv+'px'});
		}
	});
  });
