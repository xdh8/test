

        	//放大镜
        	//图片的选择  显示与隐藏
        	$(function(){
	        	$('.si img').mouseover(function(){
	        		$(this).css('border','2px solid black').siblings().css('border','2px solid transparent');
	        		var n=$(this).index();
	        		$('.mi img').eq(n).show().siblings().hide();
	        		$('.bi img').eq(n).show().siblings().hide();
	        	})
	        	//放大镜相关
	        	$('.box31').mousemove(function(e){
	        		//小镜子显示
	        		$('.jz').show();
	        		$('.bi').show();
	        		//获取鼠标坐标
	        		var e=e||window.event;
	        		var x=e.pageX-$(this).offset().left;
	        		var y=e.pageY-$(this).offset().top;
	        		//鼠标位于小镜子中间
	        		x-=105;
	        		y-=105;
	        		if(x<=0){
	        			x=0;
	        		}else if(x>=$(this).width()-$('.jz').width()){
	        			x=$(this).width()-$('.jz').width();
	        		}
	        		if(y<=0){
	        			y=0;
	        		}else if(y>=$(this).height()-$('.jz').height()){
	        			y=$(this).height()-$('.jz').height();
	        		}
	        		//给小镜子赋值新坐标
	        		$('.jz').css('left',x);
	        		$('.jz').css('top',y);
	        		//大图显示的内容
	        		var mul=$('.bi img').width()/$('.mi img').width();
	        		var bx=-mul*x;
	        		var by=-mul*y;
	        		$('.bi img').css('left',bx);
	        		$('.bi img').css('top',by);
	        	}).mouseleave(function(){
	        		$('.jz').hide();
	        		$('.bi').hide();
	        	})
        	})

