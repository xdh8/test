
                //页面加载完，协议显示
                $(document).load(function(){
                    $('.xieyi').show();
                })
                //协议
                $(function(){
                    //用a标签当按键，用以下清除原动作，自行加事件
                    //<a href="javascript:void(0);"></a>
                    //e.stopPropagation()  同上

                    //点击同意协议
                    $('.xieyi4').click(function(){
                        $('.xieyi').hide();
                    })
                })

                //正则 手机号
                var pattern=/^1(([358]\d)|(47)|(66)|(7[013678])|(9[89]))\d{8}$/;
                /*console.log(pattern.test(v));*/

                //绿底滑块
                $('.box2221').mousedown(function(e){
                    var evt=e||window.event;
                    //获取鼠标至滑块（包括隐藏的绿色部分）左边的距离
                    var dx=evt.clientX-$(this).offset().left;
                    /*console.log('dx:'+dx);*/
                    $(document).mousemove(function(ev){
                        var evt=ev||window.event;
                        //获取小滑块（有箭头部分）离窗口左边距离
                        var l=evt.clientX-dx-562;
                        console.log('l:'+l);
                        //滑块离窗口左边距离赋值改变
                        if(l>=0){
                            l=0;
                            //小滑块移至最右边时，停在那里
                            $(this).off('mousemove');
                            //并且 验证框相关改变
                            $('.box222>span').html('验证通过').css('color','white');
                            $('.box22212').html('<div>√</div>');
                            $('.box22212>div').css({
                                'color':'white',
                                'width':'18px',
                                'height':'18px',
                                'line-height':'18px',
                                'background':'rgb(120,190,60)',
                                'border':'1px solid rgb(120,190,60)',
                                'border-radius':'50%',
                                'margin':'8px auto',
                            });
                            //按钮'下一步'变色
                            $('.box23').css('background','red').mouseover(function(){
                                $(this).css('background','rgba(255,50,50,0.8)');
                            }).mouseout(function(){
                                $(this).css('background','rgb(255,50,50)');
                            });
                            //点击'下一步' 让下一个页面显示
                            $('.box23').click(function(){
                                var v=$('.box213').val();
                                console.log(v);
                                if(pattern.test(v)){
                                    console.log(pattern.test(v));
                                    $('.box3').css('display','block');
                                }
                            });
                        }else if(l<=-260){
                            l=-260;
                        }
                        $('.box2221').css('left',l);
                    })
                    //根据滑块位置，选择停在最右边还是返回最左边
                    $(document).mouseup(function(){
                        $(this).off('mousemove');
                        if($('.box2221').offset().left>=562){
                            $('.box2221').css('left',0);
                        }else{
                            $('.box2221').css('left',-260);
                        }

                    })
                })
                
                //手机号框    
                $('.box213').blur(function(){
                    //判断手机号是否正确 正则
                    var v=$('.box213').val();
                    /*console.log(v);*/
                    //1.设置用户名 验证手机 接受前面的手机号码
                    $('.box332').html(v);
                    //没输入
                    if(v==''){
                        $(this).css({'border':'1px solid red','color':'red',});
                        $('.box21>div').html('<div>x</div> 请输入你的手机号码');
                        $('.box21>div>div').css({
                            'display':'inline-block',
                            'width':'12px',
                            'height':'12px',
                            'line-height':'11px',
                            'text-align':'center',
                            'background':'red',
                            'color':'white',
                            'border':'1px solid red',
                            'border-radius':'50%',
                            'margin-top':'8px',
                            'font-size':'11px',
                            'font-weight':'bold',
                        });
                        //号码格式正确
                    }else if(pattern.test(v)){
                        $(this).css({'border':'1px solid black','color':'black',});
                        $('.box21>div').html('<div>√</div>');
                        $('.box21>div>div').css({
                            'display':'inline-block',
                            'width':'12px',
                            'height':'12px',
                            'line-height':'12px',
                            'text-align':'center',
                            'background':'green',
                            'color':'white',
                            'border':'1px solid green',
                            'border-radius':'50%',
                            'margin-top':'8px',
                            'font-size':'10px',
                            'font-weight':'bold',
                        });
                        //号码格式错误且不为空
                    }else if(pattern.test(v)!=true && v!=''){
                            $(this).css({'border':'1px solid red','color':'red',});
                            $('.box21>div').html('<div>x</div> 手机号码格式不正确，请重新输入');
                            $('.box21>div>div').css({
                                'display':'inline-block',
                                'width':'12px',
                                'height':'12px',
                                'line-height':'11px',
                                'text-align':'center',
                                'background':'red',
                                'color':'white',
                                'border':'1px solid red',
                                'border-radius':'50%',
                                'margin-top':'8px',
                                'font-size':'11px',
                                'font-weight':'bold',
                            });
                    }
                })

                //发送验证码 倒计时     没实现
                /*$('.box343').click(function(){
                    var i=90;
                    var run=function(){
                        timer=setInterval(function(){
                            i--;
                            if(i<0){
                                $(this).html('免费获取验证码');
                            $(this).html('重新发送验证码'+i)
                                return;
                            }
                        },1000)
                    }
                    run();
                })*/
    	