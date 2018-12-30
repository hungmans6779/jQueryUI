$(document).ready(function(){
	$('button').click(function(){
var myid=$(this).attr('id');
var value;
switch (myid)
{
	case 'check1':value=$('#display').position();displayit(value);
break;
case 'check2':value=$('#display1').position();displayit(value);
break;
}
	});
	function displayit(value){
$('#info').html('top:'+value.top+' left:'+value.left);
	}
  });