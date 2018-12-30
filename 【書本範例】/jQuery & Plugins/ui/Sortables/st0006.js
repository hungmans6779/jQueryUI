 $(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"],
		dropOnEmpty:true,
			items:'#list01',
			containment:'.limit',
			opacity:0.5

	});
		$("#myList1").sortable({
			connectWith: ["#myList"],
				cursor:'move',
				delay:200,
				dropOnEmpty:true,
				items:'>li:eq(0)',
			containment:'.limit'
			});
  });