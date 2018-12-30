 $(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"],
		dropOnEmpty:true,
			placeholder: "blank",
			containment:'.limit',
			opacity:0.5,
			revert: true 

	});
		$("#myList1").sortable({
			connectWith: ["#myList"],
				cursor:'move',
				delay:200,
				dropOnEmpty:true,
				containment:'.limit',
				revert: true 
			});
  });