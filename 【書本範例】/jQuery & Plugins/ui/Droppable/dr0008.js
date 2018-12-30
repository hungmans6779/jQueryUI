  $(document).ready(function(){
	  	$(".block").draggable({helper: 'clone'});
		$(".block1").draggable({helper: 'clone',opacity: 0.40,snap:'.drop'});

  $(".drop").droppable({
	accept: "*",
	activeClass: 'myactive',
	hoverClass: 'myhover',
	tolerance:'pointer',
	drop: function(ev, ui) {
		ui.draggable.clone().fadeOut("fast", 
        function() { 
			$(this).fadeIn("fast");	
        }).appendTo($(this).empty());	       		
			
	}	
});
  });
