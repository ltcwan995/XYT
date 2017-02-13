window.onload=function(){
        $(".icon-font").on("click",function(){
//  console.log(1);
    $("#search-popover").fadeToggle(function(){
        
    });
})
  $(function(){
    var slider =$("#slider");
    var liArr = $(".slider-img li");
    var arrowArr = $(".arrow span");
    var spanFather = $(".ctrl-square");
    var num = 0;
    liArr.eq(0).css("left",0).siblings().css("left",slider.width())
    for(var i=0;i<liArr.length;i++){
        $("<span>"+(i+1)+"</span>").appendTo(spanFather);
    }
    light();
    $(".ctrl-square").on("click","span",function () {
        var index = $(this).index();
            // 四步法则：
            if(index>num){//判断另一个位置
                //固定另一个位置（属性）
                liArr.eq(index).css("left",slider.width())
                //移动当前的图片（框架）
                liArr.eq(num).animate({"left":-slider.width()});
                //移动另一张图片（框架）
                liArr.eq(index).animate({"left":0});
                num = index;

            }else if(index<num){//判断另一个位置
                //固定另一个位置（属性）
                liArr.eq(index).css("left",-slider.width());
                //移动当前的图片（框架）
                liArr.eq(num).animate({"left":slider.width()})
                //animation(liArr[num],{"left":slider.offsetWidth});
                //移动另一张图片（框架）
                liArr.eq(index).animate({"left":0})
                //animation(liArr[index],{"left":0})
                num=index;
            }
            light();


    })
    arrowArr.eq(0).on("click", function () {
        liArr.eq(num).animate({"left":slider.width()})
        //animation(liArr[num],{"left":slider.offsetWidth});
        --num<0?num = liArr.length-1:num;
        liArr.eq(num).css("left", -slider.width()) ;
        liArr.eq(num).animate({"left":0})
        //animation(liArr[num],{"left":0});
        light();
    })
    arrowArr.eq(1).on("click",autoplay);
    slider.timer = setInterval(autoplay,2000);
    slider.on("mouseover", function () {
        clearInterval(slider.timer);
    })
    slider.on("mouseout", function () {
        slider.timer = setInterval(autoplay,2000);
    })
    function light(){
        $(".ctrl-square span").eq(num).addClass("current").siblings().removeClass("current")
    }
//2、向左移动
    function autoplay(){
        liArr.eq(num).animate({"left":-slider.width()})
        ++num>liArr.length-1?num=0:num;
        liArr.eq(num).css("left",slider.width());
        liArr.eq(num).animate({"left":0})
        light();
    }
})   
}
$(function(){
    $(".ms li").hover(function(){
        var index=$(this).index()
        var lis=$(".ms li");
        for(var i=0;i<lis.length;i++){
            //console.log(index)
         $(".IMG li").eq(index).css("opacity",1).siblings().css("opacity",0);
        console.log($(".IMG li:eq(index) a img"))   
         // console.log(imgs.eq(index))
        }
   })
    $(function(){
        $(".close").on("click",function(){
            $(".fh").css("width","20px").animate({"left":1000},200);
            $(".side").css("display","none");
            $(".zk").css("display","block");

        })
        $(".zk").on("click",function(){
            $(".fh").css("width","40px").animate({"left":960},200);
             $(".side").css("display","block");
             $(".zk").css("display","none")
        })
    })
    $(function(){
        $(".selec ul li").on("click",function(){
            var index=$(this).index();
            var seleclis=$(".selec ul li");
            for(var i=0;i<seleclis.length;i++){
                $(".selec ul li").eq(index).css("border-bottom","2px solid skyblue").siblings().css("border-bottom",0);
            }
            $(".xueyuan ul").eq(index).animate({"opacity":1,"z-index":10}).siblings().animate({"opacity":0})
        })
    })
    $(function(){
        $(".top").on("click",function(){
            $(window).scrollTop(0);
        })
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
$(function(){
   var lisarry=$(".IMG li");
   var i=0;
            var timer=setInterval(function(){
            $(".IMG li").eq(i).animate({"opacity":1},600).siblings().animate({"opacity":0},600)
            if(i>5){
             return i=0;
            }
            i++;
//          console.log(i)
                  },1500)
          /*$(".ms li").on("mouseenter",function(){
            clearInterval(timer);
           })
           $(".ms li").on("mouseleave",function(){
            i++;
            console.log(i)
           })*/
})
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
