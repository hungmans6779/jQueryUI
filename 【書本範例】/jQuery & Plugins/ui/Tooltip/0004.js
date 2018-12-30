 $(document).ready(function() {
	$('#example img').tooltip({ 
    delay: 0, 
    showURL: false, 
    bodyHandler: function() { 		
	       return  $("<img >").attr("src", $('#example img').attr('rel')); 		
    },
		track: true

});
});

