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
		altField: '#followyou', 
		altFormat: 'yy-mm-dd' 
	});
  });