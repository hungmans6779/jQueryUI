 $(document).ready(function(){
    $("#example > ul").tabs();
	$('#more').click(function(){
$("#example > ul").tabs("add", 'http://127.0.0.1/open.php?file=z5', 'Z5 528i');
$("#example > ul").tabs("select", 3);
$('#more').unbind('click');
	});
	  });