$(document).ready(function(){
$('#open').click(function(){
$("#example").dialog({
	dialogClass:'mydialog',
		width:200,
		height:200,
		maxWidth:400,
		maxHeight:300,
		hide:'slow',
	buttons: { 
        "Ok": function() { 
            alert("Ok"); 
        }, 
        "Cancel": function() { 
            $(this).dialog("close"); 
        } 
    } 
});
});
  });