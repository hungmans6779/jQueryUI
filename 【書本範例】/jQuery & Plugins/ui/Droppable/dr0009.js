  $(document).ready(function(){
	  	$(".block").draggable({helper: 'clone'});
		$(".block1").draggable({helper: 'clone',opacity: 0.40,snap:'.drop'});

  $(".drop").droppable({
	accept: "*",
	activeClass: 'myactive',
	hoverClass: 'myhover',
	tolerance:'pointer',
	over:function(ev,ui){
		var src=ui.draggable.attr('src');
		alert(src+' 即將置入');
	},
	drop: function(ev, ui) {
		ui.draggable.clone().fadeOut("fast", 
        function() { 
			$(this).fadeIn("fast");	
        }).appendTo($(this).empty());	       		
			
	}	
});
  });
