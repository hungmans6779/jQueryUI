$(document).ready(function(){
$("#rs").resizable({ 
   handles: "all", 
    start: function(e, ui) { 
        $('.hide').slideDown().html("開始縮放"); 
    }, 
	resize: function(e, ui) { 
        $('.hide1').slideDown(); 
    },
    stop: function(e, ui) { 
		$('.hide').html("結束縮放").slideUp('slow'); 
                $('.hide1').slideUp('slow');     }
    
    });
   $("#img").resizable({ 
   handles: "all", 
    start: function(e, ui) { 
        $('.hide').slideDown().html("開始縮放"); 
    }, 
	resize: function(e, ui) { 
        $('.hide1').slideDown(); 
    },
    stop: function(e, ui) { 
		$('.hide').html("結束縮放").slideUp('slow'); 
                $('.hide1').slideUp('slow'); 
    }
    });
   
});