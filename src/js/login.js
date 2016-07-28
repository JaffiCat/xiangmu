//点击按钮切换手机方式和email方式
$(function(){
	$('#shoujibtn').on('click',function(){
		$('#shoujibtn').css('background','url(../css/img/anniu.png) no-repeat 0 -102px');
		$('#emailbtn').css('background','url(../css/img/anniu.png) no-repeat 0 -151px');
		$('.shoujitishi').show();
		$('.emailtishi').hide();
		$('.phoneway').show();
		$('.emailway').hide();
	});
	$('#emailbtn').on('click',function(){
		$('#shoujibtn').css('background','url(../css/img/anniu.png) no-repeat 0 -151px');
		$('#emailbtn').css('background','url(../css/img/anniu.png) no-repeat 0 -102px');
		$('.shoujitishi').hide();
		$('.emailtishi').show();
		$('.phoneway').hide();
		$('.emailway').show();
	});
	//表单验证
	//手机号码
	$('#phonetxt').blur(function(){
			var $phone = $('#phonetxt').val();
			$('.checkphone').remove();
			if(/^\s*$/.test($phone)){
			$('.zhengque1').remove();
			$('<span class="checkphone">手机格式不正确</span>').css({'color':'red'}).insertAfter('#sentyzm');
			}else if(!/^1[34578]\d{9}$/.test($phone)){
			$('.zhengque1').remove();
			$('<span class="checkphone">手机格式不正确</span>').css({'color':'red'}).insertAfter('#sentyzm');	
			}else{
			$('.zhengque1').remove();
			$('<img class="zhengque1" src="../img/zhengque.gif"/>').insertAfter('#sentyzm');
			}
		});
	//密码
	$('#pass1txt').blur(function(){
			var $pass1txt = $('#pass1txt').val();
			$('.checkpassword').remove();
			if(/^\w{0,5}$/.test($pass1txt)){
			$('.zhengque2').remove();
			$('<span class="checkpassword">密码长度不能小于6位</span>').css({'color':'red'}).insertAfter('#pass1txt');
			}else if(!/^\w{6,16}$/.test($pass1txt)){
			$('.zhengque2').remove();
			$('<span class="checkpassword">密码必须为6-16位字母、数字或字符</span>').css({'color':'red'}).insertAfter('#pass1txt');	
			}else{
			$('.zhengque2').remove();
			$('<img class="zhengque2" src="../img/zhengque.gif"/>').insertAfter('#pass1txt');
			}
		});
		//确认密码
	$('#pass2txt').blur(function(){
			var $pass2txt = $('#pass2txt').val();
			var $pass1txt = $('#pass1txt').val();
			$('.checkpassword2').remove();
			if(/^\s*$/.test($pass2txt)){
			$('.checkpassword2').remove();
			$('.zhengque3').remove();
			}else if($pass2txt!=$pass1txt){
			$('.zhengque3').remove();
			$('<span class="checkpassword2">两次输入必须一致</span>').css({'color':'red'}).insertAfter('#pass2txt');	
			}else{
			$('.zhengque3').remove();
			$('<img class="zhengque3" src="../img/zhengque.gif"/>').insertAfter('#pass2txt');
			}
		});
		//邮箱
		$('#emailtxt').blur(function(){
			var $emailtxt = $('#emailtxt').val();
			$('.checkemail').remove();
			if(/^\s*$/.test($emailtxt)){
			$('.zhengque4').remove();
			$('<span class="checkemail">请输入邮箱</span>').css({'color':'red'}).insertAfter('#emailtxt');
			}else if(!/^\w[\w\-\.]*@[0-9a-zA-Z\-]{2,}\.[a-zA-Z]{2,}$/.test($emailtxt)){
			$('.zhengque4').remove();
			$('<span class="checkemail">E-mail格式不正确</span>').css({'color':'red'}).insertAfter('#emailtxt');	
			}else{
			$('.zhengque4').remove();
			$('<img class="zhengque4" src="../img/zhengque.gif"/>').insertAfter('#emailtxt');
			}
		});
		//邮箱密码
	$('#emailpass1txt').blur(function(){
			var $emailpass1txt = $('#emailpass1txt').val();
			$('.checkemailpw').remove();
			if(/^\w{0,5}$/.test($emailpass1txt)){
			$('.zhengque5').remove();
			$('<span class="checkemailpw">密码长度不能小于6位</span>').css({'color':'red'}).insertAfter('#emailpass1txt');
			}else if(!/^\w{6,16}$/.test($emailpass1txt)){
			$('.zhengque5').remove();
			$('<span class="checkemailpw">密码必须为6-16位字母、数字或字符</span>').css({'color':'red'}).insertAfter('#emailpass1txt');	
			}else{
			$('.zhengque5').remove();
			$('<img class="zhengque5" src="../img/zhengque.gif"/>').insertAfter('#emailpass1txt');
			}
		});
		//邮箱确认密码
	$('#emailpass2txt').blur(function(){
			var $emailpass2txt = $('#emailpass2txt').val();
			var $emailpass1txt = $('#emailpass1txt').val();
			$('.checkemailpw2').remove();
			if(/^\s*$/.test($emailpass2txt)){
			$('.checkemailpw2').remove();
			$('.zhengque6').remove();
			}else if($emailpass2txt!=$emailpass1txt){
			$('.zhengque6').remove();
			$('<span class="checkemailpw2">两次输入必须一致</span>').css({'color':'red'}).insertAfter('#emailpass2txt');	
			}else{
			$('.zhengque6').remove();
			$('<img class="zhengque6" src="../img/zhengque.gif"/>').insertAfter('#emailpass2txt');
			}
		});
});