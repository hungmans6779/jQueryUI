$(document).ready(function(){
    $("#example").click(function() {
    $(this).addClass('class1', 1500);
});
$('#re').click(function(){
$("#example").removeClass('class1',1500);

});
  });