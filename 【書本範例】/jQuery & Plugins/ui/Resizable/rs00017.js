 
 var mywidth,myheight,title;
 // getSizeImg 主要是要求得目前圖形的寬與高的一個陣列

 var getSizeImg = function(src) {
        var timg = $('<img>').attr('src', src).css({ position: 'absolute', top: '-1000px', left: '-1000px' }).appendTo('body');
        var size = [ timg.get(0).offsetWidth, timg.get(0).offsetHeight ];        
        try { document.body.removeChild(timg[0]); }
        catch(e) {};

        return size;
    };
///// End of getSizeImg


  $().ready(function(){

	$('#resizeme_containment_div')

	.draggable({//拖曳時的作法

		cursor: 'move',

		containment: $('#resizeme_containment_div_wrapper'),//讓所有的拖曳及縮放保持在這個DIV中

		drag: function(e, ui) {//拖曳時

			this.style.backgroundPosition = '-' + (ui.position.left) + 'px -' + (ui.position.top) + 'px';//隨著拖曳的top與left,改變小框內背景的顯示位置,用-leftpx 及 -toppx
			//寫入右側顯示框的相對比例背景位置
			$('#resizeme_containment_div1').css({backgroundPosition:'-' + (ui.position.left)*2.56 + 'px -' + (ui.position.top)*2.56 + 'px'});
			//寫入資訊
		  $("#log-top").html(ui.position.top);
		  $("#log-left").html(ui.position.left);

		}

	});

	//左列圖形被click時，初始化

    	$('.thumbs').find("li a").click(function(e){
    
    	  //初始化小框
		  $('#resizeme_containment_div').css('top', '0');
    	  $('#resizeme_containment_div').css('left', '0');
    	  $('#resizeme_containment_div').css('width', mywidth);
    	  $('#resizeme_containment_div').css('height', myheight);
          
          var size = getSizeImg($(this).find("img").attr("src"));
		  title = $(this).find("img").attr("alt");
		  		$('.caption').html(title+' x:<span id="log-top">0px</span> y:<span id="log-left">0px</span>');



		//初始化三層結構的背景及位置
    	  $('#resizeme_containment_wrap_image').css( { width: size[0], height: size[1], background: 'transparent url('+$(this).find("img").attr("src")+') no-repeat scroll 0%' } );
          $('#resizeme_containment_div_wrapper').css( { width: size[0], height: size[1] } );
    	  $('#resizeme_containment_div').css('background', 'transparent url('+$(this).find("img").attr("src")+') no-repeat scroll 0px 0px');
    	  $('#resizeme_containment_div1').css('background', 'transparent url('+$(this).find("img").attr("rel")+') no-repeat scroll 0px 0px');

          return false;

    	});


    	//降低僞背景圖的透明度
		$('#resizeme_containment_wrap_image').css({ opacity: 0.5 });


     });
     
     $(window).load(function(){
        var size = getSizeImg("img/b01s.jpg");
		//三層結構
		//<div id="resizeme_containment_div_wrapper">外框與範圍
        //<div id="resizeme_containment_wrap_image"></div>----僞背景圖
        //<div id="resizeme_containment_div"></div>-----真背景圖
        //</div>
		//
		mywidth=$('#resizeme_containment_div').css('width');
		myheight=$('#resizeme_containment_div').css('height');
       	$('#resizeme_containment_div').css('background', 'transparent url(img/b01s.jpg) no-repeat scroll 0px 0px');
		//右側顯示框
		$('#resizeme_containment_div1').css('background', 'transparent url(img/b01.jpg) no-repeat scroll 0px 0px');
		$('.caption').css({ opacity: 0.5 });
		$('.caption').html('SUZUKI 2008 x:<span id="log-top">0px</span> y:<span id="log-left">0px</span>');
       	$('#resizeme_containment_div_wrapper').css( { width: size[0], height: size[1] } );
        $('#resizeme_containment_wrap_image').css( { width: size[0], height: size[1], background: 'transparent url(img/b01s.jpg) no-repeat scroll 0%' } );

       });