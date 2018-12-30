$(document).ready(function(){
$('#open').click(function(){
$("#example").dialog({
	dialogClass:'mydialog',
		title:'My News',
		width:200,
		height:200,
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
		dragStart:function(e,data){		
		$('#loading').show();
			},
				dragStop:function(e,data){		
		$('#loading').hide();
			}
});
});
  });