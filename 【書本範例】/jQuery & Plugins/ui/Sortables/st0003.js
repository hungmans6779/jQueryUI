 $(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"] 	
	});
		$("#myList1").sortable({
			connectWith: ["#myList"] 
			});
  });