$(document).ready(function(){
    $("#example").toggle(function() {
    $(this).animate({ borderLeftColor: "#fbad06",borderRightColor: "#a38c5b",borderBottomColor:"#e0d4ba",borderTopColor:"#afa285" }, 1500);
},function() {
    $(this).animate({ borderLeftColor: "#8a6108",borderRightColor: "#766238", borderBottomColor:"#bfb090",borderTopColor:"#887b5e"}, 1000);
});

  });