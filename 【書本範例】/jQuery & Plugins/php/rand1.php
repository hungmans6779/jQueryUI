<?php

print '
<script>
$("#example > ul").tabs({
		ajaxOptions: { cache:false }
		});		
$("#more").click(function(){
	var test=$("#example > ul").tabs("length");
	alert(test);
	});
</script>';
echo(rand(10,100));
echo "<br/>";
echo "<a href=# id=more >Rand Again</a>";
?>