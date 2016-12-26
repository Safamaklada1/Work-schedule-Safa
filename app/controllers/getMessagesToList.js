(function() {
	angular.module("app").controller("getMessagesToList", getMessagesToList);

	function getMessagesToList($scope) {
		$scope.getMessagesFromLocal = function() {
			$scope.getMessages = JSON.parse(localStorage.getItem("messageToM"));
		};
	}

})();
