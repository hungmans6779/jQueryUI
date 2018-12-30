  $(document).ready(function(){
    $(".block").draggable({helper: 'clone'});
	$(".block1").draggable({helper: 'clone',opacity: 0.40});

$(".drop").droppable({
	/*也可以寫成 accept: ".block,.block1",*/
	accept: "*",
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
