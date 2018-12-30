 $(document).ready(function(){
    $("#example").slider({
		animate:true,
			range: true,
			min: 0, 
		max: 100,
			stepping:10,
				handles: [
			{start: 0, min: 0, max: 100},
			{start: 100, min: 0, max: 100}
		]
	});
  });
