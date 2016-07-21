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
				$pic.find('li').eq(index).stop(true,false).animate({opacity:1},600).siblings().stop(true,false).animate({opacity:0},600)
			}
});