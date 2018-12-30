(function($) {
//// Modified Code Start ////
	// needs to be made internal
	$.fn.getResizeParams = function(that, p, c, a) {
		// set allow
		var allow = {top:true,left:true,width:true,height:true};
		if(a){$.extend(allow, a);}

		if(!$(p).length) return;
			
		var p = $(p);
		var w = p.width();
		var h = p.height();
		var dw = w - $(that).width();
		var dh = h - $(that).height();
		// its important to use the css values rather than the jquery left/top offsets because we
		// need to ensure we're using the offsets the style expects and not the viewport coordinates jquery sees
		var x1 = parseInt(p.css('left').replace(/[^0-9]/g, ""));
		var y1 = parseInt(p.css('top').replace(/[^0-9]/g, ""));
		var box = {
			x1 : x1,
			y1 : y1,
			x2 : x1+w,
			y2 : y1+h
		}; 
		// rejigger containment
		if(c.x1) c = [c.x1,c.y1,c.x2,c.y2];
		}

		return [p,dw,dh,box,c,allow];
	}

	//set resize array
	$.fn.setResizeArray = function(elements, container, a) {
		var that = this;
		
		return $(this).each(function(){
			if(this == that) return; // this gets added in the start function (dont do it twice) 
			var modList = $(this).resizableInstance().interaction.options.modifyThese = [];

			for(var i in elements) {
				modList.push($.fn.getResizeParams(this, elements[i], container, a));
			}
		});
	};
//// Modified Code End ////
			
	$.extend($.ui.resizable.prototype, {
		start: function(that, e) {
			this.options.originalSize = [$(this.element).width(),$(this.element).height()];
			this.options.originalPosition = $(this.element).css("position");
			this.options.originalPositionValues = $(this.element).position();
//// Modified Code Start ////

			var container = {};
			if(this.options.containment == Array){
				container = {
					x1: this.options.containment[0],
					y1: this.options.containment[1],
					x2: this.options.containment[2],
					y2: this.options.containment[3]
				};
			}else {		
				var parent = $(this.element).parent();
				var leftBorderWidth = (parent.outerWidth()-parent.innerWidth())/2;
				var topBorderWidth = (parent.outerHeight()-parent.innerHeight())/2;
				container.w = parent.width() - leftBorderWidth*2;
				container.h = parent.height() - topBorderWidth*2;
				var pos = parent.offset();
				container.x1 = pos.left + leftBorderWidth;
				container.y1 = pos.top + topBorderWidth;
				container.x2 = pos.left + container.w;
				container.y2 = pos.top + container.h;
			}

			this.options.modifyThese.push($.fn.getResizeParams(this.helper, this.helper, container));
			
//// Modified Code End ////

			$(that.element).triggerHandler("resizestart", [e, that.prepareCallbackObj(this)], this.options.start);			
			return false;
		},
		drag: function(that, e) {

		var o = this.options;
		var rel = (o.originalPosition != "absolute" && o.originalPosition != "fixed");
		var co = rel ? o.co : this.options.originalPositionValues;
		var p = o.originalSize;

		this.pos = rel ? [this.rpos[0]-o.cursorAt.left, this.rpos[1]-o.cursorAt.top] : [this.pos[0]-o.cursorAt.left, this.pos[1]-o.cursorAt.top];

		var nw = p[0] + (this.pos[0] - co.left);
		var nh = p[1] + (this.pos[1] - co.top);
//// Modified Code Start ////		
		var modx = mody = 0;

		if(o.axis) {
			switch(o.axis) {
				case 'e':
					nh = p[1];
					break;
				case 's':
					nw = p[0];
					break;
				case 'n':
				case 'ne':
						
					if(!o.proxy && (o.originalPosition != "absolute" && o.originalPosition != "fixed"))
						return false;
					
					if(o.axis == 'n') nw = p[0];
					mody = (this.pos[1] - co.top); 
					nh = nh - (mody*2);
					mody = nh <= o.minHeight ? p[1] - o.minHeight : (nh >= o.maxHeight ? 0-(o.maxHeight-p[1]) : mody);
					$(this.helper).css('top', co.top + mody);
					break;
					
				case 'w':
				case 'sw':

					if(!o.proxy && (o.originalPosition != "absolute" && o.originalPosition != "fixed"))
						return false;
					
					if(o.axis == 'w') nh = p[1];
					modx = (this.pos[0] - co.left);
					nw = nw - (modx*2);
					modx = nw <= o.minWidth ? p[0] - o.minWidth : (nw >= o.maxWidth ? 0-(o.maxWidth-p[0]) : modx);
					$(this.helper).css('left', co.left + modx);
					break;
					
				case 'nw':
						
					if(!o.proxy && (o.originalPosition != "absolute" && o.originalPosition != "fixed"))
						return false;

					modx = (this.pos[0] - co.left); nw = nw - (modx*2);
					modx = nw <= o.minWidth ? p[0] - o.minWidth : (nw >= o.maxWidth ? 0-(o.maxWidth-p[0]) : modx);
					
					mody = (this.pos[1] - co.top); nh = nh - (mody*2);
					mody = nh <= o.minHeight ? p[1] - o.minHeight : (nh >= o.maxHeight ? 0-(o.maxHeight-p[1]) : mody);

					$(this.helper).css({
						left: co.left + modx,
						top: co.top + mody
					});
					
					break;
			}	
		}

		if(e.shiftKey) nh = nw * (p[1]/p[0]);
			
		if(o.minWidth) nw = nw <= o.minWidth ? o.minWidth : nw;
		if(o.minHeight) nh = nh <= o.minHeight ? o.minHeight : nh;
		
		if(o.maxWidth) nw = nw >= o.maxWidth ? o.maxWidth : nw;
		if(o.maxHeight) nh = nh >= o.maxHeight ? o.maxHeight : nh;
		
		if(e.shiftKey) nh = nw * (p[1]/p[0]);

		var modifier = $(that.element).triggerHandler("resize", [e, that.prepareCallbackObj(this)], o.resize);
		if(!modifier) modifier = {};
		
		for(var i in this.options.modifyThese) {
			var c = this.options.modifyThese[i];
			var w =  modifier.width ? modifier.width+c[1] : nw+c[1];
			var h =  modifier.height ? modifier.height+c[2] : nh+c[2];
	
	// if mody != 0 and t == 0 {h = c[1]}
	
			var co = $(c[0]).offset();
			l = Math.max(c[3].x1+modx, 0);
			t = Math.max(c[3].y1+mody, 0);
			w = Math.min(w, (c[4][2] - co.left));
			h = Math.min(h, (c[4][3] - co.top));

			// if this element has position (t/l are numbers), we are resizing toward the north or south (modx/mody are negative)
			// and we are already to the border (t/l = 0) make sure the other edge remains in its original position (h=y2 / w=x2)
			if(!isNaN(t) && ((mody < 0) && (t == 0))) h = c[3].y2;
			if(!isNaN(l) && ((modx < 0) && (l == 0))) w = c[3].x2;
			
			// scale size
			if(c[5].height) c[0].css({height: h});
			if(c[5].width) c[0].css({width: w});

			// if this element has position (t/l are numbers) scale the position (all wrapped children should lack position)
			if(!isNaN(c[3].x1) && c[5].top) c[0].css({top: t+'px'});
			if(!isNaN(c[3].x1) && c[5].left) c[0].css({left: l+'px'});
//// Modified Code End ////			
		}
		return false;
	}});
})($);