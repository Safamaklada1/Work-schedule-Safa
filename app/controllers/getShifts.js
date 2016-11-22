(function(){
	angular.module("app").controller("getShifts",getShifts);
	function getShifts($scope){
		$scope.date=moment(Date.now()).format("DD/MM/YYYY");
		$scope.getShift=function(){
		$scope.getShift1=JSON.parse(localStorage.getItem("shift1"));
		$scope.getShift2=JSON.parse(localStorage.getItem("shift2"));
		$scope.getShift3=JSON.parse(localStorage.getItem("shift3"));
	};
	};
	
})();
