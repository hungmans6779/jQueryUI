$(document).ready(function(){
   $("#example").progressbar({ 
	   interval: 3000,
		   increment:10,
		   text:'Loading....'
		   }); 
   $("#example").progressbar("start");
  });