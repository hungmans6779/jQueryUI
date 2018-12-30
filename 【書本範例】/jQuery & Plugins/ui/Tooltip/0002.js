 $(document).ready(function() {
	$('#example a').tooltip({
	bodyHandler: function() {
		return $($(this).attr("href")).html();
	},
	showURL: false
});


});

