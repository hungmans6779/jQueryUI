$(document).ready(function(){
	var loader = jQuery('<div id="loader"><img src="images/loading.gif" alt="loading..." /></div>')
			.css({position: "relative", top: "1em", left: "25em"})
			.hide()
			.appendTo("#menu");
		jQuery().ajaxStart(function() {
			loader.show();
		}).ajaxStop(function() {
			loader.hide();
		}).ajaxError(function(a, b, e) {
			throw e;
		});

 $("#example").validate({
rules: {
     name: {
				required: true,
				minlength: 2
			},
	email:{
				required:true,
					email:true,
					remote:'/email.php'
				},
	url:{
				url:true
				},
	comment:'required',
					sex:'required',
					cc:'required',
					age:'required'
   },
	   messages: {
	   name:{
		required:'請輸入您的姓名',
			minlength:'太短了應該要2位以上'
	   },
			email: {
				required: '必須輸入email',
					email:'email 錯誤',
					remote:'<label class=un>This Email Adress Unavailable</label> '
			},
				url:{
				url:'錯誤的網址'
			},
				comment:{
				required:'請輸入您的留言'
			}

   },
	   submitHandler: function(form) {
				$(form).ajaxSubmit({
					target: "#result"
					
				});
				
			}
   

 });

  });