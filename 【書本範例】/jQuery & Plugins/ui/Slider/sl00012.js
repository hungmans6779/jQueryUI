 $(document).ready(function(){
    $("#example").slider({
		min: 0, 
		max: 9,
			animate:true,
			stepping:1,
			range:true,
			handles: [
			{start:0, min: 0, max: 9},
			{start:9, min: 0, max: 9}],
			change: function(e, ui) {
			var minValue = $('#example').slider('value', 0); 
			var maxValue = $('#example').slider('value', 1);
			$('.display img').each(function(){
				var myindex = $('.display img').index(this);
							if (myindex < minValue || myindex > maxValue) {
					$(this).hide('fade');					
				} else
					$(this).fadeIn('slow');
			});
		}
	});
	$('#example').slider("moveTo", 6,0);

  });
