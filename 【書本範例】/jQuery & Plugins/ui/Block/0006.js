 $(document).ready(function() { 
    $('#example').click(function() { 
        $.blockUI({ overlayCSS: { backgroundColor: '#03c3ff' } });          
        setTimeout($.unblockUI, 2000); 
    });     
});    

