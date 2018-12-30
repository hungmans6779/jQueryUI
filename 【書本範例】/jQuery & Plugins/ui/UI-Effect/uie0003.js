$(document).ready(function(){
    $("#example").toggle(function() {
    $(this).animate({ borderLeftColor: "#fbad06",borderRightColor: "#fbad06" }, 1500);
},function() {
    $(this).animate({ borderLeftColor: "#8a6108",borderRightColor: "#8a6108" }, 1000);
});

  });