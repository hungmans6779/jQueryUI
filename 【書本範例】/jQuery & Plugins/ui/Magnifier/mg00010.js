$(document).ready(function(){
   $("#example").magnifier({
	   zIndex:100,
	overlap:true,
click:function(e,ui){
		   $('#example img').css({border:"none"});
$(ui.current).css({border:"5px solid gray"});
}
	}); 	  
  });