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
   }

 });

  });