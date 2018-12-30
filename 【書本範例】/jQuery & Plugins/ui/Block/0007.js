 $(document).ready(function() { 
    $('#example').click(function() { 
        $.blockUI({  
            message: $('#demo'),  
            css: {  
                top:  ($(window).height() - 332) /2 + 'px', 
                left: ($(window).width() - 500) /2 + 'px', 
                width: '500px' 
            }  
        }); 
         
        setTimeout($.unblockUI, 2000); 
    });     
});     
    