<?php

print '
<script>
$("#more").click(function(){
	$("#example > ul").tabs("load",2);
	});
</script>';
echo(rand(10,100));
echo "<br/>";
echo "<a href=# id=more >Rand Again</a>";
?>