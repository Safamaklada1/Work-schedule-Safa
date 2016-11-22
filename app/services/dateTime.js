(function(){
	angular.module("app").factory("dateTime",dateTime);
	function dateTime(){
		function viewDate(){
			
			var date=moment(Date.now()).format("DD/MM/YYYY");
			return {
				date:date
			};
		}
		
	
	
	}
	
	
	
})();
