 $(document).ready(function(){

	 var selected;
	 var temp='';

	$("#myList").selectable({
	stop: function(ev, ui) {
     selected = $(".ui-selected", this); 
	
  }
	});

	$('#cs').click(function(){
selected='';
$("#myList li").removeClass('ui-selected');
	});

$('#sd').click(function(){
var check='';
temp='';
$(selected).each(function(){
	 check=$(this).html();
	if (check!='')
	{
		temp=temp+$(this).html();
	}
});
var org=$('.drop').html();
temp=org+temp;
$('.drop').html(temp);
sortit();

  });


  $('#cd').click(function(){
$('.drop').empty();
});
///////////////// sort it //////////////////////////////////
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

		function sortit(){
		var mylink = new Array();
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

