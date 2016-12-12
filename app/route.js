(function (){
	var app = angular.module("app");
	app.config(route);
	function route($routeProvider){
		$routeProvider.when("/createWorkers",{
			// template:"<div>hello</div>"
			templateUrl:"app/views/workersList.html",
			controller:"createWorkers"
		}).when("/message",{
			
			templateUrl:"app/views/message.html",
			controller:"message"
		
		}).when("/getMessagesToList",{
			
			templateUrl:"app/views/managerMessages.html",
			controller:"getMessagesToList"
		}).when("/getShifts",{
			templateUrl:"app/views/december2016.html",
			controller:"getShifts"
		}).when("/",{
			templateUrl:"app/views/december2016.html",
			controller:"getShifts"
		})
		;
	}
	
	
})();