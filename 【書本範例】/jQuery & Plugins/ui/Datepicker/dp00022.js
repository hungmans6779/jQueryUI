$(document).ready(function(){
    $('#example').datepicker({
	rangeSelect: true,
		showStatus: true,
		rangeSelect: true, 
		rangeSeparator: '- ',
		minDate: '+7d',
		maxDate: '+14d'
	});
  });