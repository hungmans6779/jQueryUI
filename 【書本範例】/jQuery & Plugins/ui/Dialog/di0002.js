$(document).ready(function(){
$("#example").dialog({
autoOpen:false	
});
$('#open').click(function(){
$("#example").dialog('open');
});
  });