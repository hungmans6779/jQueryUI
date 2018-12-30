$(document).ready(function(){
    $("#example").hover(function() {
    $(this).animate({ backgroundColor:"#599ae3",borderLeftColor: "#599ae3",borderRightColor: "#599ae3",borderBottomColor:"#3c7bc1",borderTopColor:"#3c7bc1" }, 1500);
},function() {
    $(this).animate({ backgroundColor:"#4574a8",borderLeftColor: "#6c9cd2",borderRightColor: "#6c9cd2", borderBottomColor:"#4574a8",borderTopColor:"#4574a8"}, 1000);
});

  });