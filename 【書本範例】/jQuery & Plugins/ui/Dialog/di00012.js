$(document).ready(function(){
	$("#loading").ajaxSend(function() {
		$(this).show();
			});
					
$().ajaxComplete(function() {
		$("#loading").hide();
			});

$('#open').click(function(){
$("#example").dialog({
	dialogClass:'mydialog',
		title:'My News',
		width:400,
		height:500,
		position:[200,50],
		show:'fast',
		hide:'slow',
		buttons: { 
          "Cancel": function() { 
            $(this).dialog("close"); 
        } 
    } ,
		open:function(e,data){
$('#open').html(data.options.title+' Open').attr({disabled:'true'});

	},
		focus:function(e,data){
		var rnumber=Math.floor(Math.random()*2)
			var news=new Array();
		news[0]='demo.html';
		news[1]='demo1.html';
		mypage=news[rnumber];

$.ajax({
			type: "get",
			url: mypage,
			cache:false,
			error: function() {
			alert(" Try Again!!");
							},
								success: function(data){							
					$('#example').html(data);
					
					return false;
							}
		});
	}
});
});
  });