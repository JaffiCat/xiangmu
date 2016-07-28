//显示导航
$(function(){
	$('.pulldown .nav-list').show();
	$('.pulldown h2').hover(function(){
		$('.nav-list').show();
	});
	$('.nav-list').hover(function(){
		$('.nav-list').show();			
	});
});
//轮播图
;$(function(){
       var $pic = $('.pic');
       var timer;
       var index = 0;
       var len = $pic.find('li').length;
          
	//创建轮播圆点
	var nav = $('.banner-nav ul');
	$('<li/>').html('新秋上装').appendTo(nav);
	$('<li/>').html('夏季清仓').appendTo(nav);
	$('<li/>').html('AMH男装').appendTo(nav);
	$('<li/>').html('韩风快时尚童装').appendTo(nav);
          show();
	
	  // 鼠标移入清除定时器，鼠标移出重启定时器
	  $pic.on('mouseenter',function(){
		  clearInterval(timer);
	  }).on('mouseleave',function(){
		  timer = setInterval(lunbo,2000);
	  }).trigger('mouseleave');
	  // 轮播函数
	
	$('.banner-nav ul li').on('mouseenter',function(){
              index = $(this).index();
		show();
		clearInterval(timer);
          });
	
          function lunbo(){
              index++;
              show();
          }

	// 显示图片的函数
	  function show(){
		  if(index<0){
			  index = len - 1;
		  }else if(index > len - 1){
			  index = 0;
		  }
		
		bofang();
		$('.banner-nav>ul>li').eq(index).addClass('select').siblings().removeClass('select');
      }
	function bofang(){
		$pic.find('li').eq(index).stop(true,false).animate({opacity:1},600).siblings().stop(true,false).animate({opacity:0},600);
	}
});
//点击‘换一批’按钮更换ul
$(function(){
	var $change = $('.pinpai .change');	
	$change.on('click',function(){
		if($('.tubiao1').is(':visible')){
			$('.tubiao1').hide();
			$('.tubiao2').show();
		}else{
			$('.tubiao2').hide();
			$('.tubiao1').show();
		}
	})
});

//Tab切换
$(function(){
			// 隐藏除第一个以外的所有.content
			// $('.content').hide().first().show();
			$('.content').not(':first').hide();
			$('.tabcon span').hover(function(){
				// 得到当前索引值
				var index = $(this).index();

				// 当前加高亮
				$(this).addClass('active').siblings('span').removeClass('active');
				$('.content').eq(index).show().siblings('.content').hide();
			});
		});
//物品列表轮播
$(function(){
            // 2）用jquery选择器获取页面元素
			var $lunbobox = $('.lunbobox');
            var $lunbonav = $('.lunbonav');
			var $shopping = $('.shopping');
            var i = 0;
            
            // 图片数量
            var len = $('.lunbobox>div').length;
			console.log(len);

            // 初始化
            goshow();

            // 设置定时器，3秒切换一张图片
            var mytimer;

            // 鼠标移入清除定时器，鼠标移出重启定时器
            $lunbobox.on('mouseenter',function(){
                clearInterval(mytimer);
            }).on('mouseleave',function(){
                mytimer = setInterval(carousel,2000);
            }).trigger('mouseleave');

			//console.log($('.lunbonav li').length);
            // hover切换图片
            $('.lunbonav').on('mouseenter','li',function(){
                i = $(this).index();
				//console.log(i);        
				clearInterval(mytimer);
				goshow();
            }).on('mouseleave','li',function(){
				mytimer = setInterval(carousel,2000);
			});

            // 轮播函数
            function carousel(){
                i++;
                goshow();
            }


            // 显示图片的函数
            function goshow(){
                // 处理index值，使其实现循环轮播
                if(i<0){
                    i = len - 1;
                }else if(i > len - 1){
                    i = 0;
                }
                // 大图
                $('.lunbobox>div').eq(i).stop(true,true).fadeIn(900).siblings().stop(true,true).fadeOut(900);
				$('.lunbonav li').eq(i).find('a').addClass('hovercolor');
				$('.lunbonav li').eq(i).siblings().find('a').removeClass('hovercolor');
            }
   });
 //排行榜
 $(function(){
			$phbli = $('.paihangbang').find('li');
			$phbli.not(':first').find('.phbhide').hide();
			$phbli.hover(function(){
				$(this).find('.phbhide').show();
				$(this).find('h4').hide();
				$(this).siblings().find('.phbhide').hide();
				$(this).siblings().find('h4').show();			
			});
});
//友情连接
/*
$(function(){
		
			var add = $('.friendlink li');
			var len = add.length;
			var speed= 0.5;
		var friendtime = setInterval(function(){
			for(var i=0;i<len;i++){
				var chushi =$('.friendlink li').eq(i).offset().left;
				//console.log(chushi);
					
					if(chushi>0){
						speed= speed-0.5;
						$('.friendlink li').eq(i).animate({left:speed});
					}
			 }
		},80);
})
*/
$(function(){
var $link = $('.friendlink > ul');
	var friendtime = 0;
	function runlink(){
		friendtime = setInterval(function(){
			var speed = 3;
			var $left = $link.position().left;
			$left -= speed;
			if($left <= -600){
				$left = 0;
			}
			$link.css('left',$left);
		},100)
	}
	runlink();
	$link.hover(
		function(){
			clearInterval(friendtime);
		},
		function(){
			friendtime = setInterval(function(){
				var speed = 3;
				var $left = $link.position().left;
				$left -= speed;
				if($left <= -600){
					$left = 0;
				}
				$link.css('left',$left);
			},100)
		}
	)
});