  var mywidth,myheight;
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

	$('#resizeme_containment_div').resizable({//縮放時的作法
	//$('#resizeme_containment_div').draggable({//拖曳的作法
		containment: $('#resizeme_containment_div_wrapper'),//讓所有的縮放保持在這個DIV中
			//以下使用 //開頭的option代表不適用於這個做法
		//proxy: 'proxy',
		//ghost: true,
		//animate:true,
		//transparent: true,
		//aspectRatio: true,

		handles: 'all',	
		/*也可以使用knobHandles*/
		/*knobHandles: true,*/   
		autoHide: true,
		minWidth: 100,
		minHeight: 100,

		resize: function(e, ui) {//當正在縮放時
		//drag: function(e, ui) {//當正在拖曳時

  		  this.style.backgroundPosition = '-' + (ui.position.left) + 'px -' + (ui.position.top) + 'px';//隨著縮放的top與left,改變小框內背景的顯示位置,用-leftpx 及 -toppx

		  //寫入資訊
		  $("#log-top").html(ui.position.top+"px");
		  $("#log-left").html(ui.position.left+"px");
		  $("#log-height").html(ui.size.height+"px");
		  $("#log-width").html(ui.size.width+"px");

  	    },
		stop: function(e, ui) {//當縮放停止時

  		  this.style.backgroundPosition = '-' + (ui.position.left) + 'px -' + (ui.position.top) + 'px';//固定最後縮放的top與left值，改變小框內背景的顯示位置,用-leftpx 及 -toppx
  	    }
	})

	.draggable({//拖曳時的作法

		cursor: 'move',

		containment: $('#resizeme_containment_div_wrapper'),//讓所有的拖曳及縮放保持在這個DIV中

		drag: function(e, ui) {//拖曳時

			this.style.backgroundPosition = '-' + (ui.position.left) + 'px -' + (ui.position.top) + 'px';//隨著拖曳的top與left,改變小框內背景的顯示位置,用-leftpx 及 -toppx

			//寫入資訊
		  $("#log-top").html(ui.position.top+"px");
		  $("#log-left").html(ui.position.left+"px");

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
		//初始化三層結構的背景及位置
    	  $('#resizeme_containment_wrap_image').css( { width: size[0], height: size[1], background: 'transparent url('+$(this).find("img").attr("src")+') no-repeat scroll 0%' } );
          $('#resizeme_containment_div_wrapper').css( { width: size[0], height: size[1] } );
    	  $('#resizeme_containment_div').css('background', 'transparent url('+$(this).find("img").attr("src")+') no-repeat scroll 0px 0px');

          return false;

    	});


    	//降低僞背景圖的透明度
		$('#resizeme_containment_wrap_image').css({ opacity: 0.5 });

		//寫入資訊
        $("#log-height").html($('#resizeme_containment_div').height()+"px");
        $("#log-width").html($('#resizeme_containment_div').width()+"px");

     });
     
     $(window).load(function(){
        var size = getSizeImg("img/img001.jpg");
		//三層結構
		//<div id="resizeme_containment_div_wrapper">外框與範圍
        //<div id="resizeme_containment_wrap_image"></div>----僞背景圖
        //<div id="resizeme_containment_div"></div>-----真背景圖
        //</div>
		//
		mywidth=$('#resizeme_containment_div').css('width');
		myheight=$('#resizeme_containment_div').css('height');
       	$('#resizeme_containment_div').css('background', 'transparent url(img/img001.jpg) no-repeat scroll 0px 0px');
       	$('#resizeme_containment_div_wrapper').css( { width: size[0], height: size[1] } );
        $('#resizeme_containment_wrap_image').css( { width: size[0], height: size[1], background: 'transparent url(img/img001.jpg) no-repeat scroll 0%' } );

       });