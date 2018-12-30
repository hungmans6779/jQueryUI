 $(document).ready(function() {
	$.blockUI({
	message:'<img src=loading.gif class=loading>Loading.....',
		css:{border:'5px solid white',background:'#9d5422',padding:'10px',color:'white'}
	});
	setTimeout($.unblockUI, 2000); 
});

