$(document).ready(function(){
	$('button').click(function(){
var myid=$(this).attr('id');
var value;
switch (myid)
{
case 'check1':value=$(window).width();displayit(value);
break;
case 'check2':value=$(window).height();displayit(value);
break;
case 'check3':value=$(document).width();displayit(value);
break;
case 'check4':value=$(document).height();displayit(value);
break;

}
	});

	function displayit(value){
$('#display').html(value);

	}

  });