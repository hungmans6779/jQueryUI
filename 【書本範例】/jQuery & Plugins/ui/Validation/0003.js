$(document).ready(function(){
 $("#example").validate({
rules: {
     name: {
				required: true,
				minlength: 2
			},
	email:{
				required:true,
					email:true
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
					email:'email 錯誤'
			},
				url:{
				url:'錯誤的網址'
			},
				comment:{
				required:'請輸入您的留言'
			}

   }

 });

  });