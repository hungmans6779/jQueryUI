 window.onload=function () {  
 $('.slider').slider({
 handle: '.handle',
 min:0,
 max:1400,
 stop:function(e,ui){
var myv=ui.value;
$('.inside').animate({'left':'-'+myv+'px'}, 500, 'backin');
//$('.inside').animate({'left':'-'+myv+'px'}, 500, 'elasin');
//$('.inside').animate({'left':'-'+myv+'px'}, 500, 'bouncein');
//$('.inside').animate({'left':'-'+myv+'px'}, 500, 'expoout');
//$('.inside').animate({'left':'-'+myv+'px'}, 500, 'expoin');
 },
 slide:function(e,ui){
var myv=ui.value;
$('.inside').css({'left':'-'+myv+'px'});
 }
 });  
}