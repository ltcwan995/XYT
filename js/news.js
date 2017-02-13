function item_masonry(){ 
	$('.item img').load(function(){ 
		$('.infinite_scroll').masonry({ 
			itemSelector: '.masonry_brick',
			columnWidth:226,
			gutterWidth:15								
		});		
	});
		
	$('.infinite_scroll').masonry({ 
		itemSelector: '.masonry_brick',
		columnWidth:226,
		gutterWidth:15								
	});	
}

$(function(){

	function item_callback(){ 
		$('.item').mouseover(function(){
			$(this).css('box-shadow', '0 1px 5px rgba(35,25,25,0.5)');
			$('.btns',this).show();
		}).mouseout(function(){
			$(this).css('box-shadow', '0 1px 3px rgba(34,25,25,0.2)');
			$('.btns',this).hide();		 	
		});
		
		item_masonry();	

	}
	item_callback();  

	$('.item').fadeIn();

	var sp = 1
	
	$(".infinite_scroll").infinitescroll({
		navSelector  	: "#more",
		nextSelector 	: "#more a",
		itemSelector 	: ".item",
		
		loading:{
			img: "./images/loading.png",
			msgText: '正在努力加载中.... ',
			finishedMsg: '木有了',
			finished: function(){
				sp++;
				if(sp>=10){ //到第10页结束事件
					$("#more").remove();
					$("#infscr-loading").hide();
					$("#page").show();
					$(window).unbind('.infscr');
				}
			}	
		},errorCallback:function(){ 
			$("#page").show();
		}
		
	},function(newElements){
		var $newElems = $(newElements);
		$('.infinite_scroll').masonry('appended', $newElems, false);
		$newElems.fadeIn();
		item_callback();
		return;
	});

});
     
window.onload=function(){
var box = document.getElementById("box");
        var box1 = box.children[0];
        var date = new Date();
        //2.通过方法获取年月日星期
        var year = date.getFullYear();
        var month = date.getMonth();
        var ri = date.getDate();
        var week = date.getDay();
        //3.赋值给相应的盒子。
        var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        box1.innerHTML = year+"年"+(month+1)+"月 "+ri+"日"+arr[week];
        console.log(year+"年"+(month+1)+"月 "+ri+"日"+arr[week])
}
