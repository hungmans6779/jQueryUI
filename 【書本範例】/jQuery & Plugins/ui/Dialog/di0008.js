$(document).ready(function(){
$('#open').click(function(){
$("#example").dialog({
	dialogClass:'mydialog',
		width:200,
		height:200,
		position:[200,300],
		//position:['right','top'],
			//position:'right',
		hide:'slow',
		buttons: { 
          "Cancel": function() { 
            $(this).dialog("close"); 
        } 
    } 
});
});
  });