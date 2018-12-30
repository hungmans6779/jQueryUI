window.onload=function(){
	    $("#example").spinner({
		spin:function(e,ui){
			$('.demo').html('<img src='+$('#example li img').eq(ui.value).attr('rel')+' style="display:none">');
			$('.demo img').fadeIn('slow')
		}
		});
  };
