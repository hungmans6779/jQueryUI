 $(document).ready(function(){
	 var selected;
    $("#myList").selectable({
	stop: function(ev, ui) {
     selected = $(".ui-selected", this); // jQuery collection of selected elements
	
  }
	});
	$('#cs').click(function(){
selected='';
$("#myList li").removeClass('ui-selected');
	});

  });