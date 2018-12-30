 $(document).ready(function(){
    $("#example > ul").tabs({
		cookie: { expires: 30 }
		//{ expires: 7, path: '/', domain: 'yourdomain.com', secure: true }
	});
  });