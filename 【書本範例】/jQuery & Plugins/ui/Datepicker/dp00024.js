$(document).ready(function(){
    $('#example').datepicker({
	rangeSelect: true,
		showStatus: true,
		rangeSelect: true, 
		rangeSeparator: '- ',
		dateFormat: 'mm/dd/yy',
appendText: '(mm/dd/yy)',
		duration: 300
	});
  });