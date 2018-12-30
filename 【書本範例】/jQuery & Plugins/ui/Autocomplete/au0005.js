$(document).ready(function(){
function myformat(row) {
var lang=$(':input[name="lang"]:checked').val();
if (lang=='eng')
{	return row[1] ;}
if (lang=='chinese')
{	return row[0] ;}
	}
	
$("#example").autocomplete('/autocomplete_city.php',{
formatItem:myformat,
	cacheLength:1

});

  });
