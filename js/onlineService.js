$(function(){
	
	var _userAgent = window.navigator.userAgent.toLowerCase();
	if(_userAgent.indexOf('android')<0 && _userAgent.indexOf('iphone')<0 &&  _userAgent.indexOf('ipad')<0 )
	{ 
	
	if($.cookie("onlineSP")==null||$.cookie("onlineSP")=="0"||$.cookie("onlineSP")=="")
		{
			$('.onlineService').hide();
			$('.box_os').show();		
		}
		else if($.cookie("onlineSP")=="1")
		{
			$('.onlineService').show();
			$('.box_os').hide();		
		}
	
	}
	else{
		$('.onlineService').hide();
		$('.box_os').hide();
		
	}
	
	$('.onlineService .ico_os').click(function()
	{		
		$('.onlineService').hide();
		$('.box_os').show();
		$.cookie("onlineSP","0",{expires:1,path:"/",domain:"umiwi.com"});		
	});
	$('.os_x').click(function()
	{
		$('.box_os').hide();
		$('.onlineService').show();
		$.cookie("onlineSP","1",{expires:2100000000,path:"/",domain:"umiwi.com"});
	});
	$boxOsFun = function(){var st=$(document).scrollTop();if (!window.XMLHttpRequest) {$('.box_os').css('top',st+44);$('.onlineService').css('top',st+44);}};
	$(window).bind('scroll', $boxOsFun);
	$boxOsFun();
	
	var feedback_url ='http://www.17sucai.com';
	
	$('.acbox .ico_pp').hover(function(){
		$(this).stop().animate({height:'52px'},'fast');
		},function(){
		$(this).stop().animate({height:'33px'},'fast');
		}
	);
	$('.acbox .ico_gt').hover(function(){
		$(this).stop().animate({height:'52px'},'fast');
		},function(){
		$(this).stop().animate({height:'33px'},'fast');
		}
	);
	
	$('.onlineService .ico_pp').hover(function(){
		$(this).stop().animate({width:'87px'},'fast');
		},function(){
		$(this).stop().animate({width:'39px'},'fast');
		}
	);
	$('.onlineService .ico_gt').hover(function(){
		$(this).stop().animate({width:'97px'},'fast');
		},function(){
		$(this).stop().animate({width:'39px'},'fast');
		}
	);
	
	$('.ico_gt').click(function(){
		$("html, body").animate({scrollTop:0}, 1);
	})
	

});