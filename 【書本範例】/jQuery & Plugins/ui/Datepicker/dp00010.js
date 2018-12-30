$(document).ready(function(){
    $('#example').datepicker({
	rangeSelect: true, 
		firstDay: 1,
		showStatus: true,
		 closeAtTop: false,
		prevText: 'Earlier',
		prevStatus: 'Go back',
		nextText: 'Later',
		nextStatus: 'Go forward',
		hideIfNoPrevNext: true,
		currentText: 'Now'
	});
  });