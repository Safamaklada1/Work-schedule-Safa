(function(){
	angular.module("app").controller("getShifts",getShifts);
	function getShifts($scope,dateTime){
		// $scope.date=moment(Date.now()).format("DD/MM/YYYY");
		$scope.date=date;
		$scope.shift3Editable=false;
		$scope.shift2Editable=false;
		$scope.shift1Editable=false;
		$scope.getShift=function(){	    
		$scope.getShift1=JSON.parse(localStorage.getItem("shift1"));
		$scope.getShift2=JSON.parse(localStorage.getItem("shift2"));
		$scope.getShift3=JSON.parse(localStorage.getItem("shift3"));
		$scope.getAllWorkers=JSON.parse(localStorage.getItem("allworkers"));};
		$scope.changedNameShift1=function(){
			$scope.nameToChange=JSON.parse(localStorage.getItem("shift1"));
			$scope.theName=this.s.name;
			console.log($scope.getAllWorkers);
			console.log($scope.theName);
			};
		$scope.saveShift1=function(){
		var allWorkers=JSON.parse(localStorage.getItem("allworkers"));
			console.log(allWorkers);
			$scope.newShift1=angular.toJson($scope.getShift1);
			localStorage.setItem("shift1",($scope.newShift1));
			};
	$scope.changedNameShift2=function(){
			$scope.nameToChange=JSON.parse(localStorage.getItem("shift2"));
			$scope.theName=this.s.name;
			console.log($scope.getAllWorkers);
			console.log($scope.theName);
			};
		$scope.saveShift2=function(){
		var allWorkers=JSON.parse(localStorage.getItem("allworkers"));
			console.log(allWorkers);
			$scope.newShift2=angular.toJson($scope.getShift2);
			localStorage.setItem("shift1",($scope.newShift2));
			};
			$scope.changedNameShift3=function(){
			$scope.nameToChange=JSON.parse(localStorage.getItem("shift3"));
			$scope.theName=this.s.name;
			console.log($scope.getAllWorkers);
			console.log($scope.theName);
			};
		$scope.saveShift3=function(){
		var allWorkers=JSON.parse(localStorage.getItem("allworkers"));
			console.log(allWorkers);
			$scope.newShift3=angular.toJson($scope.getShift3);
			localStorage.setItem("shift3",($scope.newShift3));
			};
	};
	
})();
