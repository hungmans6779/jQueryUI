  $(document).ready(function(){
	  	$(".block").draggable({helper: 'clone'});
		$(".block1").draggable({helper: 'clone',opacity: 0.40,snap:'.drop'});
  $(".drop").droppable({
	accept: "*",
	activeClass: 'myactive',
	hoverClass: 'myhover',
	tolerance:'pointer',
	out:function(ev,ui){
		var src=ui.draggable.attr('src');
		alert(src+' 未置入已返回');
	},
	drop: function(ev, ui) {
		ui.draggable.clone().fadeOut("fast", 
        function() { 
			$(this).fadeIn("fast");	
        }).appendTo($(this));	       		
			
	}	
});
  });
