$(document).ready(function(){
$('#1').hide();
$('#fastcode').val('');
$('#menu li').click(function(){
	var index=$('#menu li').index(this);
	$('#menu li').removeClass('active');
	$(this).addClass('active');
	$('.primarycontent').hide();	
		$('#'+index).fadeIn('slow');	

	});
	$(".select").click(function(){
var target=$(this).attr('rel');
$('#t'+target).select();
});
var a = document.createElement("a");
a.style.color = "white";
a.style.backgroundColor = "red";
a.style.textDecoration = "none";
a.style.fontSize = "90%";
a.href = "javascript:c=unescape(document.documentElement.innerHTML);c=c.replace(/&/g,'&amp;');c=c.replace(/</g,'&lt;');c=c.replace(/>/g,'&gt;');c=c.replace(/</g,'&amp;lt;');c=c.replace(/>/g,'&amp;gt;');c=c.replace(/href=\"(.*?)\"/g,'href=\"<a href=\"$1\">$1</a>\"');c=c.replace(/src=\"(.*?)\"/g,'src=\"<a href=\"$1\">$1</a>\"');document.write('<html><head><title>Source of Page</title></head><body><div align=\"center\"><a href=\"#\" onclick=\"history.back();return false;\">Back</a></div><pre>' + c + '</pre></body></html>');";
a.appendChild(document.createTextNode('網頁原始碼'));
$('#vs').html(a);


$('#code a').click(function(){
	var mycodeurl=$(this).attr('href');
$.ajax({
url:mycodeurl,
	cache:false,
success:function(data){
$('#fastcode').val(data);
}
});


return false;
});
});