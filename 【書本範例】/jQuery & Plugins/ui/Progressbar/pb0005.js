$(document).ready(function(){
   $("#example").progressbar({ 
	   interval: 3000,
		   increment:10,
		   text:'Loading....',
		   textClass:'loading',
		   width:200
		   }); 
   $("#example").progressbar("start");
  });