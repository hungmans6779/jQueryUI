﻿$(document).ready(function(){
	$('button').click(function(){
var myid=$(this).attr('id');
var cookiename='mycookie';
var value;
switch (myid)
{
case 'b1':
	var date = new Date();
date.setTime(date.getTime() + (60 * 1000));
$.cookie(cookiename, 'test', { path: '/', expires:date });
value=$.cookie(cookiename);
if (value!=null)
{
	value='cookie set';
}
else{
value='cookie no work';
}
displayit(value);
return false;
break;
case 'b2':
value=$.cookie(cookiename);
if (value==null)
{
	value='no cookie';
}
displayit(value);
return false;
break;
case 'b3':
$.cookie(cookiename,null, { path: '/'});
value=$.cookie(cookiename);
if (value==null)
{
	value='Cookie Deleted';
}
displayit(value);
return false;
break;
}
	});

	function displayit(value){
$('#display').html(value);

	}

  });