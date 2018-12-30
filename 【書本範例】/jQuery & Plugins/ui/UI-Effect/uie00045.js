$(document).ready(function(){
    $("div.class1").click(function() {
  $(this).effect("transfer", { to: "div.class2",className:'loading' }, 1000);

});
  });