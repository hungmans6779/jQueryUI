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
		ui.draggable.clone().fadeOut("fast",
			
        function() { 
			$(this).fadeIn("fast");
        }).appendTo($(this),function(){
			sortit();
			});

	}	
	
});

// Function to unique a Array
function unique(a) {
	tmp = new Array(0);
	for(i=0;i<a.length;i++){
		if(!contains(tmp, a[i])){
			tmp.length+=1;
			tmp[tmp.length-1]=a[i];
		}
	}
	return tmp;
}

function contains(ar, e) {
	for(j=0;j<ar.length;j++) if(ar[j]==e) return true;
	return false;
}

// End Of Function to unique a Array


	function sortit(){
		
	$('.drop img').each(function(e){
				mylink[e]='<img src='+$(this).attr('src')+' class=block>';
				});
mylink=unique(mylink);
$('.drop').empty();
$(mylink).each(function(e){
$('.drop').append(mylink[e]);
	});
		}
  });
