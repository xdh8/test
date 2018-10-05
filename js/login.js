
    		
    		//滑块
    		$(function(){
    			$('.box2231').mousedown(function(e){
    				var evt=e||window.event;
    				//获取鼠标至滑块（包括隐藏的绿色部分）左边的距离
    				//未改成  获取鼠标至箭头滑块左边的距离
    				var dx=evt.clientX-$(this).offset().left;
    				$(document).mousemove(function(ev){
    					var evt=ev||window.event;
    					//获取箭头滑块离窗口左边距离
    					var l=evt.clientX-dx-880;
                        console.log('l:'+l);
                        //滑块离窗口左边距离赋值改变
                        if(l>=0){
                            l=0;
                            //小滑块移至最右边时，停在那里
                            $(this).off('mousemove');
                            //并且 验证框相关改变
                            $('.box2232').html('验证通过').css('color','white');
                        }else if(l<=-260){
                            l=-260;
                        }
                        $('.box2231').css('left',l);
                    })
                    //根据滑块位置，选择停在最右边还是返回最左边
                    $(document).mouseup(function(){
                        $(this).off('mousemove');
                        if($('.box2231').offset().left>=875){
                            $('.box2231').css('left',0);
                        }else{
                            $('.box2231').css('left',-260);
                        }
    				})
    			})
    		})

    		//账号密码 蓝阴影
    		$(function(){
    			$('.zhk').focus(function(){
    				$('.zh').css('box-shadow','0 0 1px 1px rgb(160,170,240)');
    			}).blur(function(){
    				$('.zh').css('box-shadow','none');
    			})
    			$('.mmk').focus(function(){
    				$('.mm').css('box-shadow','0 0 1px 1px rgb(160,170,240)');
    			}).blur(function(){
    				$('.mm').css('box-shadow','none');
    			})
    		})

    		//账号框
    		$('.zhk').change(function(){
    			var a=$('.zhk').val();
    			/*console.log(a);*/
	    		if(a!=''){
	    			$('.zh>button').show();
	    		}else if(a==''){
					$('.zh>button').hide();
	    		}
	    	})
    		$('.zh>button').click(function(){
    			$('.zhk').attr('value','');
    		})

    		//点击 显示 扫码登陆页面
    		$('.box226>img').click(function(){
    			$('.box23').show();
    		})
    		//点击 显示 账号登陆页面
    		$('.ewmfm').click(function(){
    			$('.box23').hide();
    		})
    	