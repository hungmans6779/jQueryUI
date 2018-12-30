$(document).ready(function() { 
     $('#display').load('test1.html');
        $('#b1').click(function() { 
          $('#display').block({ message: '<div class=myblock><img src=loading.gif>Loading.....</div>'	});
		   setTimeout(noblock, 2000);
        }); 
 
        $('#b2').click(function() { 
              $('#display').block({ message:'<div class=myblock><img src=loading.gif>Loading.....</div>'	});
		   setTimeout(noblock1, 2000);
		});
		function noblock(){
$('#display').unblock().load('test2.html'); 
		}
       function noblock1(){
$('#display').unblock().load('test1.html'); 
		}
    }); 
