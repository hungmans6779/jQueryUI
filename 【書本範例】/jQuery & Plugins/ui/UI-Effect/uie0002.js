$(document).ready(function(){
    $("#example").toggle(function() {
    $(this).animate({ borderBottomColor: "#fbad06" }, 1500);
},function() {
    $(this).animate({ borderBottomColor: "#8a6108" }, 1000);
});

  });