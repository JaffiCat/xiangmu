//放大镜
window.onload = function () {
            var objDemo = document.getElementById("demo");
            var objSmallBox = document.getElementById("small-box");
            var objMark = document.getElementById("mark");
            var objFloatBox = document.getElementById("float-box");
            var objBigBox = document.getElementById("big-box");
            var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

            objMark.onmouseover = function () {
                objFloatBox.style.display = "block";
                objBigBox.style.display = "block";
            }

            objMark.onmouseout = function () {
                objFloatBox.style.display = "none";
                objBigBox.style.display = "none";
            }

            objMark.onmousemove = function (ev) {

                var _event = ev || window.event;  
				//鼠标的位置
                var left = _event.pageX - objDemo.offsetLeft -240- objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
				//这里不能写client，因为是相对于可是窗口，如果你滚动的话就会失效，所以要用page
                var top = _event.pageY - objDemo.offsetTop -240 - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

                if (left < 0) {
                    left = 0;
                } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
                    left = objMark.offsetWidth - objFloatBox.offsetWidth;
                }

                if (top < 0) {
                    top = 0;
                } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
                    top = objMark.offsetHeight - objFloatBox.offsetHeight;
                }

                objFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
                objFloatBox.style.top = top + "px";

                var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
                var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);

                objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
                objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
            }
};
$(function(){
	//点击小图片改变大盒子的图片
	$('.xiaopic p').on('click',function(){
		$(this).find('img').addClass('showimgborder');
		$(this).siblings().find('img').removeClass('showimgborder');
		$(this).addClass('showbg').siblings().removeClass('showbg');
		var imgsrc = $(this).find('img')[0].src;
		//console.log(imgsrc);
		$('#hidepic').attr('src',imgsrc);
		$('#fangdapicid').attr('src',imgsrc);
	})
	//分享到
	$('.fxd').hover(function(){
		$('.hidefx').show();
	},function(){
		$('.hidefx').hide();
	});
	$('.hidefx').on('mouseenter',function(){
		$('.hidefx').show();
	}).on('mouseleave',function(){
		$('.hidefx').hide();
	});
	//选择尺寸、颜色
	$('.rule li span').on('click',function(){
		$(this).addClass('selected').css('borderColor','#ce2640');
		$(this).siblings().removeClass('selected').css('borderColor','#dddddd');
		var neirong =$(this).text();
		$('.rule .tishi').html('您已选择了['+neirong+']');
	});
	//二维码
	$('.guanfangwx').hover(function(){
		$('.erweima').show();
	},function(){
		$('.erweima').hide();
	});
	$('.wxcode').hover(function(){
		$('.erweima').show();
	},function(){
		$('.erweima').hide();
	});
	//切换详情页tab按钮
	$('.selcontent').not(':first').hide();
	$('.selbox li').on('click',function(){
		var liindex = $(this).index();
		if($(this).index()==1 || $(this).index()==2){
			$('.maincon').css('height','3200px');
		}
		if($(this).index()==0){
			$('.maincon').css('height','10300px');
		}
		$(this).addClass('redbordertop').siblings().removeClass('redbordertop');
		$('.selcontent').eq(liindex).show().siblings('.selcontent').hide();
	});
	//tab拉到距离顶部一定距离固定
	var $seltop = $('.seltop').offset().top;
	$(window).scroll(function(){
      var windowTop = document.documentElement.scrollTop||document.body.scrollTop;
	  if(windowTop>$seltop){
			$('.seltop').addClass('fixed');	
		  }else{
			$('.seltop').removeClass('fixed'); 
		  }
	});
	//点击加减数量
	var $shuliang = parseInt($('.shuliang').val());
		$('.jia').on('click',function(){
			console.log(111);
			$shuliang = $shuliang + 1;
			$('.shuliang').val($shuliang);
		});
		$('.jian').on('click',function(){
			if($shuliang <= 1){
				$('.shuliang').val(1);
			}else{
				$shuliang = $shuliang - 1;
				$('.shuliang').val($shuliang);
			}	
		});
	//点击加入购物车信息			
	$('.pushbtn').on('click',function(){
		//如果没有选尺寸
		if($('.chicun').find('.selected').length==0){
			alert('请选择尺寸');
		}
		//如果没有选颜色
		if($('.yanse').find('.selected').length==0){
			alert('请选择颜色');
		}
		//selected长度都不为0才写入
		if($('.chicun').find('.selected').length!=0 && $('.yanse').find('.selected').length!=0){
			var $chicun = $('.chicun').find('.selected').text();
			var $yanse = $('.yanse').find('.selected').text();
		//创建一个空对象
		var goodName = 'zjh';
		var value = {};
			value.imgurl = $('#goodspic').attr('src');
			value.name = $('.xinxitop').find('h2').text();
			value.price = $('#jiageid').text();
			value.chicun = $chicun;
			value.yanse = $yanse;
			value.shuliang = $shuliang;
			value.yuanjia = $('.yuanjia').text();
			_cookie = goodName + '=' + JSON.stringify(value);
				console.log(_cookie);
				document.cookie = _cookie + ';path=/';
				$('.popover').show();
		}
	});
	//关闭弹窗
	$('.close1').on('click',function(){
		$('.popover').hide();
	});
	$('.close2').on('click',function(){
		$('.popover').hide();
	});
});