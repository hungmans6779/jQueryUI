$(document).ready(function(){
    $("#example").toggle(function() {
    $(this).animate({ backgroundColor: "#5051a1" }, 1500);
},function() {
    $(this).animate({ backgroundColor: "#86a2db" }, 1000);
});

  });