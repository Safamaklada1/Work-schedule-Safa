(function(){
	angular.module("app").factory("dateTime",dateTime);
	function dateTime(){
		function viewDate(){
			
			date=moment(Date.now()).format("DD/MM/YYYY,dddd");
			}
			return {
				date:viewDate()
			}
			
		
		
	
	
	}
	
	
	
})();
