(function() {
	angular.module("app").controller("getShifts", getShifts);
	function getShifts($scope, dateTime) {

		$scope.date = date;
		
		$scope.shift3Editable = false;
		$scope.shift2Editable = false;
		$scope.shift1Editable = false;
		$scope.getShift = function() {
			$scope.getShift1 = JSON.parse(localStorage.getItem("shift1"));
			$scope.getShift2 = JSON.parse(localStorage.getItem("shift2"));
			$scope.getShift3 = JSON.parse(localStorage.getItem("shift3"));
			$scope.getAllWorkers = JSON.parse(localStorage.getItem("allworkers"));
		};
		$scope.changedNameShift1 = function() {
			$scope.nameToChange = JSON.parse(localStorage.getItem("shift1"));
			$scope.theName = this.d.name;

		};
		$scope.saveShift1 = function() {
			var allWorkers = JSON.parse(localStorage.getItem("allworkers"));

			$scope.newShift1 = angular.toJson($scope.getShift1);
			localStorage.setItem("shift1", ($scope.newShift1));
		};
		$scope.changedNameShift2 = function() {
			$scope.nameToChange = JSON.parse(localStorage.getItem("shift2"));
			$scope.theName = this.d.name;

		};
		$scope.saveShift2 = function() {
			var allWorkers = JSON.parse(localStorage.getItem("allworkers"));

			$scope.newShift2 = angular.toJson($scope.getShift2);
			localStorage.setItem("shift1", ($scope.newShift2));
		};
		$scope.changedNameShift3 = function() {
			$scope.nameToChange = JSON.parse(localStorage.getItem("shift3"));
			$scope.theName = this.d.name;

		};
		$scope.saveShift3 = function() {
			var allWorkers = JSON.parse(localStorage.getItem("allworkers"));

			$scope.newShift3 = angular.toJson($scope.getShift3);
			localStorage.setItem("shift3", ($scope.newShift3));
		};
		$scope.getShiftsInDay = function() {
			shift1 = (JSON.parse(localStorage.getItem("shift1")));
			shift2 = (JSON.parse(localStorage.getItem("shift2")));
			shift3 = (JSON.parse(localStorage.getItem("shift3")));
			$scope.week1 = [];
			$scope.week2 = [];
			$scope.week3 = [];
			$scope.week4 = [];
			$scope.day1 = [];
			$scope.morning = [];
			$scope.afternoon = [];
			$scope.night = [];
			$scope.week1.push({
				sunday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				monday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				tuesday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				wednesday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				thursday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				friday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				saturday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				}
			});
			$scope.week2.push({
				sunday : {
					morning : shift2,
					afternoon : shift3,
					night : shift1
				},
				monday : {
					morning : shift2,
					afternoon : shift3,
					night : shift1
				},
				tuesday : {
					morning : shift2,
					afternoon : shift3,
					night : shift1
				},
				wednesday : {
					morning : shift2,
					afternoon : shift3,
					night : shift1
				},
				thursday : {
					morning : shift2,
					afternoon : shift3,
					night : shift1
				},
				friday : {
					morning : shift2,
					afternoon : shift3,
					night : shift1
				},
				saturday : {
					morning : shift2,
					afternoon : shift3,
					night : shift1
				}
			});
			$scope.week3.push({
				sunday : {
					morning : shift3,
					afternoon : shift1,
					night : shift2
				},
				monday : {
					morning : shift3,
					afternoon : shift1,
					night : shift2
				},
				tuesday : {
					morning : shift3,
					afternoon : shift1,
					night : shift2
				},
				wednesday : {
					morning : shift3,
					afternoon : shift1,
					night : shift2
				},
				thursday : {
					morning : shift3,
					afternoon : shift1,
					night : shift2
				},
				friday : {
					morning : shift3,
					afternoon : shift1,
					night : shift2
				},
				saturday : {
					morning : shift3,
					afternoon : shift1,
					night : shift2
				}
			});
			$scope.week4.push({
				sunday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				monday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				tuesday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				wednesday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				thursday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				friday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				},
				saturday : {
					morning : shift1,
					afternoon : shift2,
					night : shift3
				}
			});

			localStorage.setItem("week1", JSON.stringify($scope.week1));
			localStorage.setItem("week2", JSON.stringify($scope.week2));
			localStorage.setItem("week3", JSON.stringify($scope.week3));
			localStorage.setItem("week4", JSON.stringify($scope.week4));
			$scope.getWeek1 = (JSON.parse(localStorage.getItem("week1")));
			$scope.getWeek2 = (JSON.parse(localStorage.getItem("week2")));
			$scope.getWeek3 = (JSON.parse(localStorage.getItem("week3")));
			$scope.getWeek4 = (JSON.parse(localStorage.getItem("week4")));

		};
		$scope.getShiftsInDay();
	};

})();
