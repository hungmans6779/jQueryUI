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
//myList �̪�li��ID�����]���p list_01�άO list=01 �άO list-01 
			$('#s2').click(function(){
alert($("#myList1").sortable('serialize'));
			});
//myList1 �̪�li��ID�����]���p list_01�άO list=01 �άO list-01 

  });