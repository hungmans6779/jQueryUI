 $(document).ready(function() {
	$("#example a").tooltip({ 
		bodyHandler: function() {
		return $($(this).attr("href")).html();
	},
    track: true, 
    delay: 0, 
    showURL: false, 
    opacity: 1, 
    fixPNG: true, 
    extraClass: "mytooltip", 
    top: -15, 	
    left: 5 
});
});

