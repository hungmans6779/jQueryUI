  $(document).ready(function(){
	  	$(".block").draggable({helper: 'clone'});
		$(".block1").draggable({helper: 'clone',opacity: 0.40,snap:'.drop'});
		var mylink = new Array();
				

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
		ui.draggable.clone().attr({rel:1}).fadeOut("fast",			
        function() { 
			$(this).fadeIn("fast");			
        }).appendTo($(this),function(){
			sortit();
			});

	}	
	
});


	function sortit(){
		
	$('.drop img').each(function(e){
		var myrel=$(this).attr('rel');
		mylink[e]='<img src='+$(this).attr('src')+' rel='+myrel+' class=block>';
				});
				
mylink.sort();
mylink.reverse();
	$('.drop').empty();

$(mylink).each(function(e){
var chk=e-1;
var chk1=e+1;
if ($(mylink[e]).attr('src')!=$(mylink[chk]).attr('src')){
	var tt=$(mylink[e]).attr('rel');
$('.drop').append(mylink[e]+'<div id=sum'+e+'>Total:'+tt+'</div>');
	}
if ($(mylink[e]).attr('src')==$(mylink[chk]).attr('src')){
	var ttt=$('.drop img:eq('+chk+')').attr('rel');
	ttt=parseInt(ttt,10);
	ttt=ttt+1;
	$('.drop img:eq('+chk+')').attr({rel:ttt});
	var gg=$('.drop img:eq('+chk+')').attr('rel');
$('#sum'+chk).html('Total:'+ttt);
	}

	});
		}		
	
  });
