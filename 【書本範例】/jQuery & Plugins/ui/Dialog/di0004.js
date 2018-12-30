$(document).ready(function(){
$('#open').click(function(){
$("#example").dialog({
	dialogClass:'mydialog',
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