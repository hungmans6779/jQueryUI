$(document).ready(function(){
$('#open').click(function(){
$("#example").dialog({
	dialogClass:'mydialog',
		width:200,
		height:200,
		position:[200,300],
		show:'fast',
		hide:'slow',
		buttons: { 
          "Cancel": function() { 
            $(this).dialog("close"); 
        } 
    } 
});
});

$("#example1").dialog({
	stack:false,
	width:200,
		height:200,
		position:[300,300],
		show:'fast',
		hide:'slow',
		buttons: { 
          "Cancel": function() { 
            $(this).dialog("close"); 
        } 
    } 
});
  });