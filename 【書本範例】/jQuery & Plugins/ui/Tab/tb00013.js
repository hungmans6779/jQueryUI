 $(document).ready(function(){
    $("#example > ul").tabs();
	$('#more').click(function(){
		var myindex=$("#example > ul").tabs('length');
$("#example > ul").tabs("add", 'http://127.0.0.1/open.php?file=z5', 'Z5 528i');
$("#example > ul").tabs("select", myindex);
$('#more').unbind('click');
	});
	  });