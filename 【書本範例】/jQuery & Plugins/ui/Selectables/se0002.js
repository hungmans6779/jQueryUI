 $(document).ready(function(){
    $("#myList").selectable({
	selected: function(ev, ui) {
		$(ui.selected).each(function(){
alert($(this).html());
		});
	}
	});
  });
