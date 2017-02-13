/* 
* @Author: Marte
* @Date:   2016-10-05 08:50:58
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-05 15:19:01
*/
window.onload=function(){
        $(".anli-center ul li").hover(function(){
            var index=$(this).index();
            console.log(index);
            $(".anli-word ul li").eq(index).css("display","block").siblings().css("display","none");
        })
    }
