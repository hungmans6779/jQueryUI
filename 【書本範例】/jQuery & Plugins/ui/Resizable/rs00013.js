$(document).ready(function(){
		
   $("#rs").resizable({
	 handles: "all",		
    helper: "proxy", 
	   stop: function(ev,ui) {
       $("#img").css({"height":$(this).height()+10,"width":$(this).width()+10});
       }
 }); 
   
});