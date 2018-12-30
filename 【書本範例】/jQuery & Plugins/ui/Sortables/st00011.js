$(document).ready(function(){
    $("#myList").sortable({
		connectWith: ["#myList1"],
			activate:function(e,ui){
			$('#list').show();
		},
		deactivate:function(e,ui){
			$('#list').hide();
		}
			
			});
		$("#myList1").sortable({
			connectWith: ["#myList"]			
			});
  });