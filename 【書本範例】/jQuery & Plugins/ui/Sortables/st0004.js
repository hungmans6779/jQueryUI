 $(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"],
			dropOnEmpty:true
		
			
	});
		$("#myList1").sortable({
			connectWith: ["#myList"] ,
							dropOnEmpty:true

			});
  });