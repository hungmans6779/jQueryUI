$(document).ready(function() { 
     $('#login').click(function() { 
            $.blockUI({ message: $('#loginform'), css: { width: '200px',padding:'10px' } }); 
        }); 
			
		$('#loginsubmit').submit(function(){
				if ($(':input[name="myid"]').val() !='')
		{
			
			$.ajax({
				type:'POST',
				url:'/login.php',
					data:'myid='+$(':input[name="myid"]').val()+'&pw='+$(':input[name="pw"]').val(),
					cache:false,					
					success:function(msg){
					if (msg!=0)
					{
						$('#result').html(msg).show('slow',function(){
						$.unblockUI();							
							
					});	
					}
										
			}
			
			
			});
		}
		
return false;
		});
    }); 
