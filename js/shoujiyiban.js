/* 
* @Author: Marte
* @Date:   2016-10-08 08:51:06
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-08 17:37:30
*/

$(document).ready(function(){
    $("body :not(#download)").animate({"opacity":1},4000)
    $("#download").animate({"left":2000,"opacity":0},3000)
});
$(function(){
    $(window).scroll(function(){
        var top=$(window).scrollTop();
       // console.log(top);
       if(top>60){
         $(".mobile-store").css("display","block","cursor")
       }else{
        $(".mobile-store").css("display","none")
       }
    })
})
$(function(){
    $(".mobile-store").on("click",function(){
        $(".erweima").css("display","block")
    })
    $(".close").on("click",function(){
        $(".erweima").css("display","none")
    })
})