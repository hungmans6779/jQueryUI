$(document).ready(function(){
function myformat(row) {
var lang=$(':input[name="lang"]:checked').val();
if (lang=='eng')
{	return row[1] ;}
if (lang=='chinese')
{	return row[0] ;}

	}
	function myinput(rows) {
var lang1=$(':input[name="lang"]:checked').val();
if (lang1=='eng')
{	return rows[1] ;}
if (lang1=='chinese')
{	return rows[0] ;}

	}

	
$("#example").autocomplete('/autocomplete_city.php',{
formatItem:myformat,
	cacheLength:0,
	formatResult:myinput,
	multiple:true

});

  });
