$(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"]
			
			});
		$("#myList1").sortable({
			connectWith: ["#myList"]
				
			});

			$('#s1').click(function(){
alert($("#myList").sortable('serialize'));
			});
//myList 裡的li的ID必須設成如 list_01或是 list=01 或是 list-01 
			$('#s2').click(function(){
alert($("#myList1").sortable('serialize'));
			});
//myList1 裡的li的ID必須設成如 list_01或是 list=01 或是 list-01 

  });