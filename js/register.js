/* 
* @Author: Marte
* @Date:   2016-10-06 21:06:20
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-12 16:51:48
*/

window.onload=function(){
        $(".img").on("mouseover",function(){
            console.log(1);
            $(".logo").animate({"top":-60},200);
            $(".img").css("background","#37c2ff");
        })
        $(".img").on("mouseleave",function(){
            console.log(1);
            $(".logo").animate({"top":0},200);
            $(".img").css("background","white");
        })
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    var inp = document.getElementsByTagName("input")[0];
    var emai = document.getElementById("emai")
    //绑定事件
    inp.oninput=function(){
        if(inp.value==""){
            emai.innerHTML ="<img src=\"img/wrong.png\" width=\"14\" height=\"14\">"+"请你输入正确的邮箱";
            emai.style.color="#e32929"
        }else if(reg.test(inp.value)){
            emai.innerHTML = "<img src=\"img/right.png\" width=\"14\" height=\"14\">"+"邮箱格式正确";
            emai.style.color="green"
        }else{
            emai.innerHTML ="<img src=\"img/wrong.png\" width=\"14\" height=\"14\">"+"邮箱格式错误";
            emai.style.color="#e32929"
        };
        console.log(reg.test(inp.value));
    }
//  inp.onblur=function(){
//    emai.style.display="none";
//  }
//  inp.onfocus=function(){
//    emai.style.display="block";
//  }
}
 $(function(){
 	 //登录验证
    $("#loading").on("click",function(){
        var inp =$("#inp");
    	var pw = $("#pw");
        var username=inp.val();
        var info=window.localStorage.getItem(username);
        if(info==undefined||info==""){
            $("#emai").html("<img src=\"img/wrong.png\" width=\"14\" height=\"14\">"+"你输入的邮箱不存在！");
            $("#emai").css("color","#e32929");
        }
        else{
            if(pw.val()==info){
                alert("恭喜您！登录成功 正在跳转到主页……");
                window.localStorage.setItem("success",username);
                window.location.href="index.html";
            }
            else{
               $("#emai").html("<img src=\"img/wrong.png\" width=\"14\" height=\"14\">"+"你输入的密码不正确！");
            $("#emai").css("color","#e32929");
            }
        }
//    user.val("学号/手机号");
//    user.css("color","#ccc")
  })
})
$(function(){
    $(window).scroll(function(){
        var top=$(window).scrollTop();
       // console.log(top);
       if(top>60){
        $("#header").css("border-bottom","1px solid #c0ccd9")
       }else{
        $("#header").css("border-bottom",0)
       }
    })
})
$(document).ready(function(){
  $(".fh").animate({"width":40},1000);
});
$(function(){
    $(".close").on("click",function(){
        $(".fh").animate({"width":0},400);
        $(".zk").css("display","block");
    })
    $(".zk").on("click",function(){
        $(".fh").animate({"width":40},400);
        $(".zk").css("display","none");
    })
})