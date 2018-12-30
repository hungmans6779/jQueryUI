  $(document).ready(function(){
    $(".block").draggable({helper: 'clone'});
$(".drop").droppable({
	accept: ".block",
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
