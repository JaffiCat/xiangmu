//点击最近收藏、最近浏览切换div
$(function(){
	render();
	$('.liulan').click(function(){
		$(this).css({background:'#ffffff',color:'#8a8a8a'});
		$('.lastshoucang').css({background:'#8a8a8a',color:'#ffffff'});
		$('.tuijianbox').show();
		$('.shoucangbox').hide();
	});
	$('.lastshoucang').click(function(){
		$(this).css({background:'#ffffff',color:'#8a8a8a'});
		$('.liulan').css({background:'#8a8a8a',color:'#ffffff'});
		$('.shoucangbox').show();
		$('.tuijianbox').hide();
	});
	//点击删除tr
	$('#removetr').click(function(){
		var $tr = $(this).closest('tr');

		// 把过期时间设置成昨天
				var now = new Date();
				now.setDate(now.getDate()-1);
		document.cookie ='goods=null;expires=' + now;
		$tr.remove();
		$('.zongji').find('b').html(0);
		$('.jisuanliang').find('i').html(0);
		$('.zj').find('i').html(0);
	});
});
//获取cookie，创建商品信息
function render(){
				var _cookie = document.cookie.split('; ');
				var $tr = $('<tr/>').addClass('productlist');
				var $table = $('table');
					$tr.appendTo($table);
			// 遍历cookie
				if(_cookie != ''){
					$.each(_cookie,function(idx,val){
						var info = JSON.parse(val.split('=')[1]);
						
						var $td1 = $('<td/>').addClass('piccon').appendTo('.productlist');
						$('<div class="productpic"></div>').appendTo('.piccon');
						$('<a href="#"><img src='+info.imgurl+'/></a>').appendTo('.productpic');
						$('<div class="productword"></div>').appendTo('.piccon');
						$('<p/>').html(info.name).appendTo('.productword');
						$('<span>颜色：'+info.yanse+'</span>&nbsp;&nbsp;&nbsp;<span>尺寸:'+info.chicun+'</span>').appendTo('.productword');
						
						$('<td/>').addClass('shoujia').appendTo('.productlist');
						$('<del/>').html(info.yuanjia).appendTo('.shoujia');
						$('<p/>').html('￥'+info.price).appendTo('.shoujia');
						
						$('<td/>').addClass('num').appendTo('.productlist');
						$('<span/>').addClass('jian').html('-').appendTo('.num');
						$('<input type="text" value="'+info.shuliang+'"/>').attr('id','numtxt').appendTo('.num');
						$('<span/>').addClass('jia').html('+').appendTo('.num');
						
						$('<td/>').addClass('allmoney').appendTo('.productlist');
						var money = info.shuliang * info.price;
						$('<p/>').html('￥'+money).appendTo('.allmoney');
						
						$('<td/>').addClass('caozuo').appendTo('.productlist');
						$('<a href="#">移入收藏夹</a><br>').appendTo('.caozuo');
						$('<a href="javascript:;" id="removetr">删除</a>').appendTo('.caozuo');
						$('.zongji').find('b').html(info.shuliang);
						$('.jisuanliang').find('i').html(money);
						$('.zj').find('i').html(money);
					});	
				}	
		var $numtxt = parseInt($('#numtxt').val());
		$('.jia').on('click',function(){
			$numtxt = $numtxt + 1;
			$('#numtxt').val($numtxt);		
		});
		$('.jian').on('click',function(){
			if($numtxt <= 1){
				$('$numtxt').val(1);
			}else{
				$numtxt = $numtxt - 1;
				$('#numtxt').val($numtxt);
			}	
		});
		
};