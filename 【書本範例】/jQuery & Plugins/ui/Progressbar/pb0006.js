$(document).ready(function(){
   $("#example").progressbar({ 
	   interval: 2000,
		   increment:10,
		   text:'Loading....',
		   textClass:'loading',
		   width:200,
	   		   start:function(e,ui){
$('.cover').show();
	   },progress:function(e,ui){
		   var opanow=(Math.round(ui.percentState)/100);
		   opanow   = 1-opanow.toFixed(1);
	$('.cover').css({opacity:opanow,
filter:"alpha(opacity="+(100-parseInt(ui.percentState))+")"});
if (ui.percentState==100)
{
$('.cover').hide();
$('#example').progressbar('destroy');
}	   }
		   
		   });
   $("#example").progressbar("start");
	  
  });