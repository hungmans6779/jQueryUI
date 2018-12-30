$(document).ready(function(){
$('#open').click(function(){
$("#example").dialog({
	dialogClass:'mydialog',
		width:200,
		height:200,
		maxWidth:400,
		maxHeight:300,
		minHeight:100,
		minWidth:100,
		hide:'slow',
		modal:true,
		overlay: { 
        opacity: 0.5, 
        background: "black" 
    } ,
	buttons: { 
          "Cancel": function() { 
            $(this).dialog("close"); 
        } 
    } 
});
});
  });