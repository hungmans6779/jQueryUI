$(document).ready(function() { 
    $('#example').click(function() { 
        $.blockUI({  
            css: { top: '10px', left: '10px' } 
        }); 
         
        setTimeout($.unblockUI, 2000); 
    });     
});     