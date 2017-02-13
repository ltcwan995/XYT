//$(function(){
//  $(".icon-font").on("click",function(){
//      console.log(1);
//      $("#search-popover").fadeToggle();
//  })
//})
$(function(){
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        console.log(top);
       if(top>600){
         $("#header").css({"height":0,"trasition":1})
         $(".topics").css({"position":"fixed","right":10,"top":15})
       }else{
        $("#header").css({"height":160})
        $(".topics").css({"position":"absolute","right":10,"top":600})

       /* $(".topics").animate({"top":550},3000);*/
       }
    })
})
window.onload=function(){
    var box = document.getElementById("box");
        var btn = box.children[2];
        var txt = box.children[1];
        var xl  = box.children[3];
        var pl=document.getElementById("pl");
        var lis=xl.getElementsByTagName("li");
                pl.innerHTML=lis.length;
        //2.绑定事件
        btn.onclick = function () {
            //3.书写事件驱动程序
            //(0).对txt.value值进行判断，如果是“”，弹窗提示。
            if(txt.value == ""){
                alert("请输入文本，文本内容不能为空！");
                //return 0/-1/false;
                return;
            }
            //(1).创建一个新的li标签。然后内容赋值为，textarea中的内容。
            var newLi = document.createElement("li");
            var date1=new Date();
            var year=date1.getFullYear();
            var month=date1.getMonth()+1;
            var day=date1.getDate();
            var hour=date1.getHours();
            var minute=date1.getMinutes();
            var second=date1.getSeconds();
            var lis=xl.getElementsByTagName("li")
            var floor=lis.length+1;
            //console.log(floor)
            newLi.innerHTML="<img src=\"img/05.jpg\" width=\"40\" height=\"40\">"+txt.value+"<a href=javascript:;>删除</a><span>"+year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second+"</span><i>"+floor+"楼"+"</i>";
            //(2).把生成好的li放入到ul中。
            xl.appendChild(newLi);
            //(3).清除内容
            txt.value = "";
            if(xl.children.length==0){
                xl.appendChild(newLi);
            }else{
                xl.insertBefore(newLi,ul.children[0]);
            }
            var spans=document.getElementById("pl");
            var aArr=xl.getElementsByTagName("a");
            for(var i=0;i<aArr.length;i++){
                aArr[i].onclick=function(){
                    xl.removeChild(this.parentNode); 
                    pl.innerHTML=aArr.length;
                console.log(aArr.length); 
                }
                
            } 
            var lis=xl.getElementsByTagName("li");
                pl.innerHTML=lis.length;
        }
}
$(function(){
     $(window).scroll(function(){
        var top=$(window).scrollTop();
        /*console.log(top);*/
       if(top>300){
        $(".liuyan").css({"position":"fixed"})
       }else{
           $(".liuyan").css({"position":"absolute"})       
       }
       /* $(".topics").animate({"top":550},3000);*/
     })
//    $(".liuyan").on("click",function(){
//      console.log(2);
//      $(window).scrollTop(2700);
// })
})    
$(function(){
   var lisarry=$(".IMG li");
   var i=0;
            var timer=setInterval(function(){
            $(".IMG li").eq(i).animate({"opacity":1},600).siblings().animate({"opacity":0},600)
            if(i>5){
             return i=0;
            }
            i++;
            console.log(i)
                  },1500)
})   




        


    

   