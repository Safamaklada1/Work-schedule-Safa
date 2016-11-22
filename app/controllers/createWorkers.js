(function() {
	angular.module("app").controller("createWorkers", createWorkers);

	function createWorkers($scope) {
		$scope.date = moment(Date.now()).format("DD/MM/YYYY");
		$scope.name
		$scope.shift
		$scope.email
		$scope.address
		$scope.phone
		$scope.jobTitle = {
			value1 : 'v',
			value2 : 'v',
			value3 : 'v',
			value4 : 'v',
			value5 : 'v',
			value6 : 'v',
		};
		$scope.addSerialNumber = function() {
			var i = 1
			$('tbody tr').each(function(index) {
				$(this).find('td:nth-child(1)').html(index + 1);
			});
		};
		$scope.worker = function() {
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
			// console.log(worker1);
			if (worker1.shift == 1) {
				shift1 = (JSON.parse(localStorage.getItem("shift1")));
				if (!shift1)
					shift1 = [];

				shift1.push(worker1.name);
				localStorage.setItem("shift1", JSON.stringify(shift1));

			} else if (worker1.shift == 2) {
				shift2 = (JSON.parse(localStorage.getItem("shift2")));
				if (!shift2)
					shift2 = [];

				shift2.push(worker1.name);
				localStorage.setItem("shift2", JSON.stringify(shift2));

			} else if (worker1.shift == 3) {
				shift3 = (JSON.parse(localStorage.getItem("shift3")));
				if (!shift3)
					shift3 = [];

				shift3.push(worker1.name);
				localStorage.setItem("shift3", JSON.stringify(shift3));

			}
			$scope.getWorker = allworkers;
			localStorage.setItem("allworkers", JSON.stringify(allworkers));

		};
		$scope.getList = function() {

			$scope.getWorker = JSON.parse(localStorage.getItem("allworkers"));
			// $scope.getshift=JSON.parse(localStorage.getItem("shift1"));
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
			}

		};
	}

})();
