$(document).ready(function(){
	var lan_value;
	$(':input[name="lang"]').focus(function(){
 lan_value=$(this).val();
 $("#example").autocomplete( "setData", {
	 url:'/autocomplete_city_more.php',
formatItem:myformat,
				formatResult:myinput,
			extraParams:{'lan':lan_value},
		multiple:true,
	cacheLength:0,
	width:300,
	scrollHeight:160,
		autoFill:true


}).result(function (evt, data, formatted) {
    $("#result").html('Your Data:['+data[1]+'] Search For:['+formatted+']');

});
	});
	


function myformat(row) {
if (lan_value==null)
{lan_value=$(':input[name="lang"]:checked').val();}
if (lan_value=='eng')
{	return row[0] ;}
if (lan_value=='chinese')
{	return row[0] ;}


	}
		function myinput(rows) {
if (lan_value==null)
{lan_value=$(':input[name="lang"]:checked').val();}
if (lan_value=='eng')
{	return rows[0] ;}
if (lan_value=='chinese')
{	return rows[0] ;}
	}

$(':input[name="lang"]:checked').focus();

  });
