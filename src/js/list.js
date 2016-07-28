$(function(){
		$('.bigul>li').first().find('i').css("background","url(../img/jiantou.png) no-repeat -2px 2px");
		$('.bigul h2').on('click',function(){
			if ($(this).parent('li').find('.middleul').is(":hidden")) {
				$(this).find('i').css("background","url(../img/jiantou.png) no-repeat -2px 2px");
				$(this).parent('li').find('.middleul').show();
			}else{
				$(this).find('i').css("background","url(../img/jiantou.png) no-repeat -2px -6px");
				$(this).parent('li').find('.middleul').hide();
			}
	
		});
		$('.middleul h3').on('click',function(){
			if ($(this).parent('li').find('.smallul').is(":hidden")) {
				$(this).css("background","url(../css/img/jianhao.png) no-repeat 10px 50%");
				$(this).parent('li').find('.smallul').show();
			}else{
				$(this).css("background","url(../css/img/jiahao.png) no-repeat 10px 50%");
				$(this).parent('li').find('.smallul').hide();
			}
		});
});