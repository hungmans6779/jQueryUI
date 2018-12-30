$(document).ready(function(){
    $("#example").hover(function() {
    $(this).animate({ color:"#637993" }, 1500);
},function() {
    $(this).animate({ color:"white"}, 1000);
});

  });