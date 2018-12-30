$(document).ready(function(){
	$('button').click(function(){
var myid=$(this).attr('id');
var value;
switch (myid)
{
	case 'check1':$('#display').scrollTop(100);
break;
case 'check2':value=$('#display').scrollTop();displayit(value);
break;
case 'check3':$('#display').scrollLeft(150);
break;
case 'check4':value=$('#display').scrollLeft();displayit(value);
break;


}
	});

	function displayit(value){
$('#display').html('<p>'+value+'</p>').scrollTop(0).scrollLeft(0);

	}

  });