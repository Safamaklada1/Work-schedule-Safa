(function() {
	angular.module("app").controller("createWorkers", createWorkers);

	function createWorkers($scope, dateTime) {
		$scope.date = date;

		$scope.name
		$scope.shift
		$scope.email
		$scope.address

		$scope.jobTitle = {
			value1 : 'v',
			value2 : 'v',
			value3 : 'v',
			value4 : 'v',
			value5 : 'v',
			value6 : 'v',
		};
		$scope.addSerialNumber = function() {
			var i = 1;
			$('tbody tr').each(function(index) {
				$(this).find('td:nth-child(1)').html(index + 1);
			});
		};

		$scope.worker = function() {
			if (!$scope.shift || !$scope.name || !$scope.email || !$scope.address || !$scope.address)
				alert("תמלא שדות חובה");
			else {
				var day;
				var shift1;
				var shift2;
				var shift3;
				var allworkers = (JSON.parse(localStorage.getItem("allworkers")));
				if (!allworkers)
					allworkers = [];
				var worker1 = {
					shift : $scope.shift,
					name : $scope.name,
					email : $scope.email,
					address : $scope.address,
					phone : $scope.phone,
					shiftManager : $scope.jobTitle.value1,
					control : $scope.jobTitle.value2,
					kOperator : $scope.jobTitle.value3,
					lab : $scope.jobTitle.value4,
					k200 : $scope.jobTitle.value5,
					pr : $scope.jobTitle.value6
				};
				allworkers.push(worker1);

				
				if (worker1.shift == 1) {
					shift1 = (JSON.parse(localStorage.getItem("shift1")));
					if (!shift1)
						shift1 = [];

					shift1.push({
						name : worker1.name
					});
					localStorage.setItem("shift1", JSON.stringify(shift1));

				} else if (worker1.shift == 2) {
					shift2 = (JSON.parse(localStorage.getItem("shift2")));
					if (!shift2)
						shift2 = [];

					shift2.push({
						name : worker1.name
					});
					localStorage.setItem("shift2", JSON.stringify(shift2));

				} else if (worker1.shift == 3) {
					shift3 = (JSON.parse(localStorage.getItem("shift3")));
					if (!shift3)
						shift3 = [];

					shift3.push({
						name : worker1.name
					});
					localStorage.setItem("shift3", JSON.stringify(shift3));

				}

				$scope.getWorker = allworkers;

				localStorage.setItem("allworkers", JSON.stringify(allworkers));

			}
		};
		$scope.getShiftsInDay = function() {
			shift1 = (JSON.parse(localStorage.getItem("shift1")));
			shift2 = (JSON.parse(localStorage.getItem("shift2")));
			shift3 = (JSON.parse(localStorage.getItem("shift3")));
			$scope.week1 = [];

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
			$scope.week2 = {
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
			};
			$scope.week3 = {
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
			};
			$scope.week4 = {
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
			};

			localStorage.setItem("week1", JSON.stringify($scope.week1));
			localStorage.setItem("week2", JSON.stringify($scope.week2));
			localStorage.setItem("week3", JSON.stringify($scope.week3));
			localStorage.setItem("week4", JSON.stringify($scope.week4));
			$scope.getWeek1 = (JSON.parse(localStorage.getItem("week1")));
			$scope.getWeek2 = (JSON.parse(localStorage.getItem("week2")));
			$scope.getWeek3 = (JSON.parse(localStorage.getItem("week3")));
			$scope.getWeek4 = (JSON.parse(localStorage.getItem("week4")));
			console.log($scope.getWeek1);
		};
		$scope.getList = function() {

			$scope.getWorker = JSON.parse(localStorage.getItem("allworkers"));

		};
		$scope.deleteWorker = function(index) {

			var deletWorker = $scope.getWorker.splice(index, 1);
			localStorage.setItem("allworkers", JSON.stringify($scope.getWorker));
			console.log(deletWorker);

			if (deletWorker[0].shift === 1) {
				var shift = JSON.parse(localStorage.getItem("shift1"));
				var index = shift.indexOf(deletWorker[0].name);
				shift.splice(index, 1);
				localStorage.setItem("shift1", JSON.stringify(shift));
			} else if (deletWorker[0].shift === 2) {
				var shift = JSON.parse(localStorage.getItem("shift2"));
				var index = shift.indexOf(deletWorker[0].name);
				shift.splice(index, 1);
				localStorage.setItem("shift2", JSON.stringify(shift));
			} else if (deletWorker[0].shift === 3) {
				var shift = JSON.parse(localStorage.getItem("shift3"));
				var index = shift.indexOf(deletWorker[0].name);
				shift.splice(index, 1);
				localStorage.setItem("shift3", JSON.stringify(shift));
			}

		};
	}

})();
