 $(document).ready(function() {
	$.blockUI({
	message:'<div class=myblock><img src=loading.gif>Loading.....</div>'
	});
	setTimeout($.unblockUI, 2000); 
});

