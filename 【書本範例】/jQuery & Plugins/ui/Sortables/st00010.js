$(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"]
			
			});
		$("#myList1").sortable({
			connectWith: ["#myList"]
				
			});

			$('#b1').click(function(){
alert($("#myList").sortable('toArray'));
			});
			$('#b2').click(function(){
alert($("#myList1").sortable('toArray'));
			});

  });