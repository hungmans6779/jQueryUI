 $(document).ready(function() {

$('#example').click(function(){
	$.blockUI({
	message:'<img src=loading.gif class=loading>Loading.....',
		css:{border:'5px solid white',background:'#9d5422',padding:'10px',color:'white'}
	});
	$.ajax({ 
		type: "POST",
                url: '/count.php', 
                cache: false, 
                success: function(data) { 
					$('#result').html(data);
					$.unblockUI();
                } 
            }); 
        }); 
});

