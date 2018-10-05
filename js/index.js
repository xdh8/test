
            //轮播
            $(function(){
                var m=0;
                function run(){
                    timer=setInterval(function(){
                        m++;
                        if(m>5){
                            m=0;
                        }
                        $('.box4 div').eq(m).addClass('imgShow').siblings('div').removeClass('imgShow');
                        $('.box47 a').eq(m).addClass('numShow').siblings().removeClass('numShow')
                    },3000)
                }
                run();
                $('.box4').mouseenter(function(){
                    clearInterval(timer);
                }).mouseleave(function(){
                    run();
                })
                $('.box47 a').mouseover(function(){
                    m=$(this).index();
                    $(this).addClass('numShow').siblings().removeClass('numShow');
                    $('.box4 div').eq(m).addClass('imgShow').siblings().removeClass('imgShow')
                })
            })

            //点击'换一换'，换随机图,没实现
            $(function(){
                $('.box10a1').mouseover(function(){
                    $(this).css({
                        "background":"red",
                        "color":"white,",
                        "cursor":"pointer",
                    })
                }).mouseout(function(){
                    $(this).css({
                        "background":"white",
                        "color":"black,"
                    })
                })
            })

            //搜索栏与左侧导航 隐藏与显示
            $(window).scroll(function(){
                if($(this).scrollTop()>=800){
                    $('.box11a').slideDown();
                    $('.box12a').slideDown();
                }else{
                    $('.box11a').slideUp();
                    $('.box12a').slideUp();
                }

            })

            //左侧导航
            //鼠标导航变色
            var arrColor=['rgb(255,0,55)','rgb(100,195,50)','rgb(255,0,55)','rgb(10,165,230)','rgb(240,85,85)','rgb(100,195,50)','rgb(235,95,140)','rgb(25,200,170)','rgb(255,0,55)','#999'];
            var bgC;
            $('.box12a>div').each(function(){
                var index=$(this).index();
                $(this).mouseover(function(){
                    bgC=$(this).css('background');
                    $(this).css('background',arrColor[index]);
                }).mouseout(function(){
                    $(this).css('background',bgC);
                })
            })
            //页面滚动，导航变色
            var arrScroll=[0,$('.tmcs').offset().top-65,$('.tmgj').offset().top-65,$('.mlrs').offset().top-65,$('.cdkw').offset().top-65,$('.jjsh').offset().top-65,$('.dzac').offset().top-65,$('.hwcx').offset().top-65,$('.cnxh').offset().top-65,];
            /*console.log(arrScroll);*/
            $(window).scroll(function(){
                var top=$(window).scrollTop();
                /*console.log($(window).scrollTop());*/
                for(var i=0; i<arrScroll.length; i++){
                    if(top<arrScroll[i+1] && top>=arrScroll[i]){
                        $('.box12a>div').eq(i).css('background',arrColor[i]).siblings().css('background','#666');
                        $('.box12a>div').eq(9).css('background','#999');
                    }else if(top>arrScroll[i]){
                        $('.box12a>div').eq(i).css('background',arrColor[i]).siblings().css('background','#666');
                        $('.box12a>div').eq(9).css('background','#999');
                    }
                }
            })
            //点击导航，滚动至指定位置
            $('.box12a>div').each(function(){
                $(this).click(function(){
                    var index=$(this).index();
                    $(window).scrollTop(arrScroll[index]);
                    if(index==9){
                        $(window).scrollTop(0);
                        //滚动动画格式错误
                        //$(window).animate({scrollTop:'arrScroll[index]'},500);
                    }
                });
            })

            //天猫超市里的选项卡
            $(function(){
                var a=0;
                function run(){
                    timer=setInterval(function(){
                        a++;
                        if(a>1){
                            a=0;
                        };
                        $('.box13a313>div').eq(a).show().siblings().hide();
                        $('.box13a314>div').eq(a).css({'background':'green','color':'white'}).siblings().css({'background':'#eee','color':'black'});
                    },1000)
                }
                run();
                $('.box13a31').mouseenter(function(){
                    $('.box13a31 img').css('opacity','0.7');
                    clearInterval(timer);
                }).mouseleave(function(){
                    run();
                    $('.box13a31 img').css('opacity','1');
                })
                $('.box13a314>div').mouseenter(function(){
                    $(this).css({'background':'green','color':'white'}).siblings().css({'background':'#eee','color':'black'});
                    a=$(this).index();
                    $('.box13a313>div').eq(a).show().siblings().hide();
                })
            })

            //右侧栏 隐藏不了
            /*$(function(){
                if($('.box3111').css('opacity')==0){
                    $(this).hide()
                }
            })*/

