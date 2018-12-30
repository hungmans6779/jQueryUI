 $(document).ready(function() {
	$.blockUI({
	message:'<h1>Loading.....</h1>'
	});
	setTimeout($.unblockUI, 2000); 
});

