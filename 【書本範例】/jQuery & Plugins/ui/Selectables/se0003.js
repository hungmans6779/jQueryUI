 $(document).ready(function(){
	 var selected;
    $("#myList").selectable({
	stop: function(ev, ui) {
     selected = $(".ui-selected", this); // jQuery collection of selected elements
	$(	selected).each(function(){
alert($(this).html());
	});
  }
	});
  });
