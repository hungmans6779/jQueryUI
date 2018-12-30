 $(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"],
		dropOnEmpty:true,
			placeholder: "blank",
			containment:'.limit',
			opacity:0.5,
				start:function(e,ui){
			$('.hide:eq(0)').show('slow');
		},sort:function(e,ui){
			$('.hide:eq(1)').show('slow');
		},change:function(e,ui){
		$('.hide:eq(2)').show('slow');
		},stop:function(e,ui){
			$('.hide').hide();
			$('.hide:eq(3)').show('slow');
		},update:function(e,ui){
			
			$('.hide:eq(4)').show('slow');
		}

	});
		$("#myList1").sortable({
			connectWith: ["#myList"],
				cursor:'move',
				placeholder: "blank",
				delay:200,
				dropOnEmpty:true,
				containment:'.limit',
				receive:function(e,ui){
				alert('myList1 Receive');
			}
			});
  });