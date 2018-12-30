$(document).ready(function(){
    $("#example").click(function() {
		$(this).removeClass('class1');
    $(this).switchClass('class0','class1', 3000);
});
  });