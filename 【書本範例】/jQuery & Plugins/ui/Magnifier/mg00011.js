$(document).ready(function(){
   $("#example").magnifier({
	   zIndex:100,
	overlap:true,
click:function(e,ui){
		   $('#example img').css({border:"none"});
var myImage = new Image();
	myImage.src=$(ui.current).attr('src');
		mywidth=myImage.width;
		myheight=myImage.height;
		var diff1=parseInt(($(window).height( )-myheight)/2);
				var diff2=parseInt(($(window).width( )-mywidth)/2);

		$('.cover').slideDown('slow',function(){
		$('.show').fadeIn('slow',function(){
						$('.show').html('<img src='+myImage.src+' width='+mywidth+' height='+myheight+'>').animate({
							top:diff1,
								left:diff2,
								width:mywidth+'px',
								height:myheight+'px'},1500);
							});	

					});


		}
	}); 
	$('.show').click(function(){
$(this).fadeOut().empty();
$('.cover').slideUp();
	});
	
  });