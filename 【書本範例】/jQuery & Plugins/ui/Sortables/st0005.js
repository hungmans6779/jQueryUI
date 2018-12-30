 $(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"],
		dropOnEmpty:true,
			containment:'.limit'

	});
		$("#myList1").sortable({
			connectWith: ["#myList"] 
			});
  });