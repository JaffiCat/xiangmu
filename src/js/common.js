
//网站导航
$(function(){
	var $showOrhide = $('.header-box .showOrhide');
	$showOrhide.on('mousemove',function(){
		$('.hidebox').show();
	}).on('mouseout',function(){
		$('.hidebox').hide();
	});
	$('.hidebox').hover(function(){
		$('.hidebox').show();
	},function(){
		$('.hidebox').hide();
	});
});
//vip导航
$(function(){
	var $viphover = $('.viphover');
	$viphover.on('mousemove',function(){
		$('.vipclub').show();
	}).on('mouseout',function(){
		$('.vipclub').hide();
	});
	var $handuhover = $('.handuhover');
	$handuhover.on('mousemove',function(){
		$('.handunews').show();
	}).on('mouseout',function(){
		$('.handunews').hide();
	});
	$('.selectnav ul').on('mousemove',function(){
		$(this).show();
	}).on('mouseleave',function(){
		$(this).hide();
	});
});
//公用导航
$(function(){
	$('.pulldown .nav-list').hide();
	$('.pulldown h2').hover(function(){
		$('.nav-list').show();
	},function(){
		$('.nav-list').hide();
	});
	var  $pulldown = $('.pulldown');
	var  $navlength = $('.nav-list').length;
	var navlast = $('.nav-list li').last();
	var a= $('.righthide>div');
		$('.nav-list li').on('mouseenter',function(){
				$('.nav-list').show();
				var k = $(this).index();
				$(this).addClass('bgcolor');
				$('.righthide').show();
				a.eq(k).fadeIn();
				a.eq(k).siblings().hide();
		}).on('mouseleave',function(){
			$('.nav-list').hide();
			var k = $(this).index();
				$(this).removeClass('bgcolor');
				a.eq(k).hide();
				$('.righthide').hide();
		});	
});
//右边悬浮返回顶部
$(function(){
	$(window).scroll(function(){
      var windowTop = document.documentElement.scrollTop||document.body.scrollTop;
      if(windowTop>450){
		$(".floatbox").fadeIn();
      }
      else{
		$(".floatbox").hide();
      }
//顶部搜索框
	  if(windowTop>760){
			$('#floattop').slideDown();
			
		  }else{
			$('#floattop').slideUp(); 
		  }
	});
	$('.floatbox .a5').click(function(){
		$("html, body").animate({'scrollTop':0},300);
	});	
});
