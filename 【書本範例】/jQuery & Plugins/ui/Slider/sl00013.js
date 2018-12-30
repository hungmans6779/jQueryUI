 window.onload=function () {  
 $('.slider').slider({
 handle: '.handle',
 min:0,
 max:1400,
 stop:function(e,ui){
var myv=ui.value;
$('.inside').animate({'left':'-'+myv+'px'}, 500, 'linear');
 },
 slide:function(e,ui){
var myv=ui.value;
$('.inside').css({'left':'-'+myv+'px'});
 }
 });  
}