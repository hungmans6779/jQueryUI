  $(document).ready(function(){
	  	$(".block").draggable({helper: 'clone'});
		$(".block1").draggable({helper: 'clone',opacity: 0.40});

  $(".drop").droppable({
	/*也可以寫成 accept: ".block,.block1",
	accept: "*",
	*/
	
	accept:function(draggable){
		/*if (draggable)*/
		if ($(draggable).attr('class')==='block ui-draggable')
		
		{
			/*$(draggable).css({border: "5px red solid" });*/

			return true;
		}
	},
	activeClass: 'myactive',
	hoverClass: 'myhover',
	drop: function(ev, ui) {
		ui.draggable.clone().fadeOut("fast", 
        function() { 
			$(this).fadeIn("fast");	
        }).appendTo($(this).empty());	       		
			
	}	
});
  });
