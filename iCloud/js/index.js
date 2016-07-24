
var app=angular.module('myapp',[]);
app.controller('ctrl',function($scope){
	$scope.todo=[];
	$scope.color=['#C970E2','#6DDC31','#41ACF9','#F2CC00','#9F845D','#F82469','#F99600'];
	//添加新列表
	$scope.index=0;
	$scope.add=function(){
		$scope.ids=$scope.todo.length+1;
		$scope.todo.push({
			id:$scope.ids,
			title:'新列表'+$scope.ids,
			color:$scope.color[$scope.todo.length%7],
			list:[]
		})
		  $scope.index=$scope.todo.length-1;
	}
	//左边点击出右边页面
	$scope.select=function(i){
		$scope.index=i;
		$scope.flag=true;
		$scope.f=false;
	}

	$scope.flag=true;

	//过滤数据(已完成)
	$scope.done=function(obj,boolrean){
		obj.done=boolrean;
	}

	//添加新项目
		$scope.addxm=function(i){
			$scope.todo[i].list.push(
				{
					content:'77789433',
					dtae:'123',
					done:false
				}
			)
		}

	//过滤数据(未完成)
	$scope.doing=function(obj,boolrean){
		obj.done=boolrean;
	}

	//已完成几项
	$scope.getnum=function(i){
		// console.log(i)
		$scope.num=0;
		for(var j=0;j<$scope.todo[i].list.length;j++){
			if($scope.todo[i].list[j].done==true){
				$scope.num++;
			}
		}
	}


	//改变右边选项颜色
	$scope.changcolor=function(i){
		$scope.changcolors="";
		$scope.changcolors=$scope.color[i];
		$scope.index=i;
	}

	//点击完成改变所有颜色
	$scope.overcolor=function(i){
		console.log($scope.todo[0].color);
		$scope.changcolors="";
		$scope.changcolors=$scope.color[i];
		$scope.todo[$scope.index].color=$scope.changcolors;
		$scope.f=false;
	}
	

	//ng-repeat  用$index  否则用index
})