(function(){
	// angular.module("app").controller("message",message);
	angular.module("app").controller("message",message);
	function message($scope){
		$scope.name;
		$scope.date;
		$scope.messageTo;
		
		$scope.send=function(){
			var messageToM=(JSON.parse(localStorage.getItem("messageToM")));
			 if(!messageToM)messageToM=[];
			var message1={date:$scope.date,name:$scope.name,message:$scope.messageTo};
			messageToM.push(message1);
			console.log(message1);
			localStorage.setItem("messageToM",JSON.stringify(messageToM));
		
	};
	
	}
})();
