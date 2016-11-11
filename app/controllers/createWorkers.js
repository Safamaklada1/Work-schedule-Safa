(function(){
	angular.module("app").controller("createWorkers",createWorkers);
	
	function createWorkers($scope){
		$scope.name;
		$scope.shift;
		$scope.jobTitle={
			value1:'v',
			value2:'v',
			value3:'v',
			value4:'v',
			value5:'v',
			value6:'v',
			};
		$scope.worker=function(){
			var allworkers=(JSON.parse(localStorage.getItem("allworkers")));
			 if(!allworkers)allworkers=[];
			var worker1={shift:$scope.shift,name:$scope.name,a:$scope.jobTitle.value1,b:$scope.jobTitle.value2,c:$scope.jobTitle.value3,d:$scope.jobTitle.value4,e:$scope.jobTitle.value5,f:$scope.jobTitle.value6};
			allworkers.push(worker1);
			console.log(worker1);
			localStorage.setItem("allworkers",JSON.stringify(allworkers));
			
			
		};
		$scope.getList=function(){
			
			$scope.getWorker=JSON.parse(localStorage.getItem("allworkers"));
			
	};
	}
	
})();
