var app=angular.module("searchApp",[]);
app.controller('searchCtrl',['$scope','$http',function($scope,$http){
	$http.get(
		'/information/json/search.json'
	).success(function(response){
		var result1=[];
		var result2=[];
		var flag=0;
		var goal=window.localStorage.getItem("tag");
		for(var i=0;i<response.length;i++){
			for(var j=0;j<response[i].tag.length;j++){
				if(response[i].tag[j]==goal||response[i].info[j].indexOf(goal)>=0){
					flag++;
					result1.push(response[i]);
					$(".showTip").hide();
				}
			}
		}
		for(var k=0;k<response.length;k++){
			if(response[k].info.indexOf(goal)>=0){
				flag++;
				result2.push(response[k]);
				$(".showTip").hide();
			}
		}
		if(flag==0){
			$(".showTip").fadeIn(4500);
		}else{
			$(".content").fadeIn(4500);
		}
		if(result1.length==0){
			$scope.data=result2;
		}
		if(result2.length==0){
			$scope.data=result1;
		}
		if(result1.length!=0&&result2.length!=0){
			$scope.data=result1;
		}
	});
	setTimeout(function(){
		$('body').append("<script src='js/echo.min.js'></script>")
		$('body').append("<script>Echo.init({offset: 0,throttle: 1500})</script>")
	},100)
}]);
