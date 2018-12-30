$(document).ready(function(){
    $('#example').datepicker({
	rangeSelect: true, 
		firstDay: 1,
		showStatus: true,
		navigationAsDateFormat: true, 
		prevText: '< M', 
		nextText: 'M >',
		currentText: 'M'
	});
  });