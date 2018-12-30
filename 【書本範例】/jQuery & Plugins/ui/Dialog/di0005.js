$(document).ready(function(){
$('#open').click(function(){
$("#example").dialog({
	dialogClass:'mydialog',
		width:200,
		height:200,
		draggable:false,
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