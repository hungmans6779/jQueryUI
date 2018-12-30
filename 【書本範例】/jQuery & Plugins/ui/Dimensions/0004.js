$(document).ready(function(){
	$('button').click(function(){
var myid=$(this).attr('id');
var myoffset=$('#display').offset();
var value;
switch (myid)
{
	case 'check1':value=myoffset.top;displayit(value);
break;
case 'check2':value=myoffset.left;displayit(value);
break;
}
	});
	function displayit(value){
$('#display').html(value);
	}
  });