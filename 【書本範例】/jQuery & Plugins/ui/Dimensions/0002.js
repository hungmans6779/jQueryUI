$(document).ready(function(){
	$('button').click(function(){
var myid=$(this).attr('id');
var value;
switch (myid)
{
case 'check1':value=$('#display').width();displayit(value);
break;
case 'check2':value=$('#display').height();displayit(value);
break;
case 'check3':value=$('#display').innerWidth();displayit(value);
break;
case 'check4':value=$('#display').innerHeight();displayit(value);
break;
case 'check5':value=$('#display').outerWidth();displayit(value);
break;
case 'check6':value=$('#display').outerHeight();displayit(value);
break;
case 'check7':value=$('#display').outerWidth({ margin: true });displayit(value);
break;
case 'check8':value=$('#display').outerHeight({ margin: true });displayit(value);
break;

}
	});

	function displayit(value){
$('#display').html(value);

	}

  });