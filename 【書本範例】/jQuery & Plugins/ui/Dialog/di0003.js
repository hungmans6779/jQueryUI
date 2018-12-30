$(document).ready(function(){
$('#open').click(function(){
$("#example").dialog({
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