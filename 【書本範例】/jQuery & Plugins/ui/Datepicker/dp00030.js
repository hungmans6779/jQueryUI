$(document).ready(function(){
    $('#example').datepicker({
	rangeSelect: true,
		showStatus: true,
		rangeSelect: true, 
		rangeSeparator: '- ',
		dateFormat: 'mm/dd/yy',
				showOn: 'both',
			buttonImage: 'calendar.gif',
		buttonText: 'Select',
		buttonImageOnly: true,
		constrainInput: true,
		onClose: function() { 
		$('#display').html($('#example').val());
  } 
	});
  });