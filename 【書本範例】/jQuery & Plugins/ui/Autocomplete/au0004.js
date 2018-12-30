$(document).ready(function(){
	function myformat(row) {
return row[0] + " [ENG: " + row[1] + "]";
	}
$("#example").autocomplete('/autocomplete_city.php',{
formatItem:myformat

});
  });
