

            //一 二级菜单变色
            $(function(){
                $('.box41>div').mouseover(function(){
                    var index=$(this).index();
                    $('.box41>div').eq(index).css({'color':'white','background':'rgb(35,200,170)'});
                    $('.box4213>h3').css('backgrounk','black');
                }).mouseout(function(){
                    var index=$(this).index();
                    $('.box41>div').eq(index).css({'color':'black','background':'white'});
                })
            })

            //类似选项卡 自行车 冲锋衣 互换
            $(function(){
                $('.box451').click(function(){
                    $(this).css({'color':'rgb(35,200,170)','border-bottom':'2px solid rgb(35,200,170)'});
                    $('.box452').css({'color':'black','border-bottom':'2px solid white'});
                    $('.box453').show();
                    $('.box454').hide();
                });
                $('.box452').click(function(){
                    $(this).css({'color':'rgb(35,200,170)','border-bottom':'2px solid rgb(35,200,170)'});
                    $('.box451').css({'color':'black','border-bottom':'2px solid white'});
                    $('.box454').show();
                    $('.box453').hide();
                });
            })
                
            //添加小图
            $(function(){
                $('.box442>a').each(function(){
                    var a=$(this).index()+1;
                    $(this).css('background','url(img/list/442'+a+'.jpg)');
                })
                $('.box443>a').each(function(){
                    var a=$(this).index()+1;
                    $(this).css('background','url(img/list/443'+a+'.jpg)');
                })
                $('.box444>a').each(function(){
                    var a=$(this).index()+1;
                    $(this).css('background','url(img/list/444'+a+'.jpg)');
                })
                $('.box441>div').each(function(){
                    $(this).mouseover(function(){
                        $(this).css({'color':'white','background':'rgb(35,200,170)'}).siblings().css({'color':'black','background':'#eee'});
                        var i=$(this).index();
                        $('.box46>div').eq(i).show().siblings().hide();
                    });
                })
            })
            
            //轮播
            //潮牌休闲 无缝轮播
            $(function(){
                $('.next2').click(function(){
                    $('.lun2>div').each(function(){
                        var ol=$(this).position().left;
                        ol+=170;
                        if(ol>=340){
                            ol=-170;
                            $(this).css('left',ol+'px');
                        }else{
                            $(this).animate({left:ol+'px'},100);
                        }
                    })
                })
            })
            $(function(){
                $('.prev2').click(function(){
                    $('.lun2>div').each(function(){
                        var ol=$(this).position().left;
                        ol-=170;
                        if(ol<=-340){
                            ol=170;
                            $(this).css('left',ol+'px');
                        }else{
                            $(this).animate({left:ol+'px'},100);
                        }
                    })
                })
            })
            //户外大牌 无缝轮播
            $(function(){
                $('.next3').click(function(){
                    $('.lun3>div').each(function(){
                        var ol=$(this).position().left;
                        ol+=170;
                        if(ol>=170){
                            ol=-170;
                            $(this).css('left',ol+'px');
                        }else{
                            $(this).animate({left:ol+'px'},100);
                        }
                    })
                })
            })
            $(function(){
                $('.prev3').click(function(){
                    $('.lun3>div').each(function(){
                        var ol=$(this).position().left;
                        ol-=170;
                        if(ol<=-170){
                            ol=170;
                            $(this).css('left',ol+'px');
                        }else{
                            $(this).animate({left:ol+'px'},100);
                        }
                    })
                })
            })
            //运动用品 无缝轮播
            $(function(){
                $('.next4').click(function(){
                    $('.lun4>div').each(function(){
                        var ol=$(this).position().left;
                        ol+=170;
                        if(ol>=170){
                            ol=-170;
                            $(this).css('left',ol+'px');
                        }else{
                            $(this).animate({left:ol+'px'},100);
                        }
                    })
                })
            })
            $(function(){
                $('.prev4').click(function(){
                    $('.lun4>div').each(function(){
                        var ol=$(this).position().left;
                        ol-=170;
                        if(ol<=-170){
                            ol=170;
                            $(this).css('left',ol+'px');
                        }else{
                            $(this).animate({left:ol+'px'},100);
                        }
                    })
                })
            })

            //滚动 显示
            $(function(){
                $('.yc').each(function(){
                    var n=0;
                    /*var yc=$(this).index();
                    console.log(yc);*/
                    $(document).scroll(function(){
                        var st=$(this).scrollTop();
                        /*console.log(st);*/
                        console.log($(document).height());
                        if(st>$(document).height()*0.6 && n<=18){
                            $('.yc').eq(n).show();
                            n++;
                        }
                    })
                })
                
            })
        