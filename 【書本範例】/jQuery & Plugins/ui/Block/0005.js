 $(document).ready(function() {
$('#example').click(function(){	
	$.blockUI({
	message:$('#result'),
		css:{border:'5px solid white',background:'#9d5422',padding:'10px',color:'white'}
	});	
        }); 
		$('#yes').click(function(){
$.ajax({ 
		type: "POST",
                url: '/count.php', 
                cache: false, 
                success: function(data) { 
					$('#result').html(data+'<button id=close>Close</button>');
					$('#close').click(function(){
					$.unblockUI();
					});
					
                } 
            }); 

		});

		$('#no').click(function(){
					$.unblockUI();
		});
		
});

