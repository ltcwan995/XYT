$(".search").on("click",function(){
		var txt=$(".y-popover-inner input[type=text]").val();
		window.localStorage.setItem("tag",txt);
		if(txt==""){
			alert("搜索内容不能为空")
		}
	})
$("document").ready(function(){
    $("#loading").animate({"opacity":0},3000)
});
//用户注销
$(function(){
	$(".userName").on("mouseover",function(){
		$(".logoff").css({"display":"block"})
	})
	$(".userName").on("mouseleave",function(){
		$(".logoff").css({"display":"none"})
	})
	$(".logoff").on("mouseenter",function(){
		$(".logoff").css({"display":"block"})
	})
	$(".logoff").on("mouseleave",function(){
		$(".logoff").css({"display":"none"})
	})
})
//用户的登录名信息显示
 $(function(){
 	var username=window.localStorage.getItem("success");
    if(username!=undefined){
    	$(".userName").html(username);
    }
    else{
    	$(".userName").html("用户");
    }
	//注销
	$(".logoff a").on("click",function(){
		window.localStorage.removeItem("success");
		$(".userName").html("用户");
	})
 })