var inject = ['EventService']

var EventsController = function(eventService){
	
	var vm = this;
	vm.events = null;
	vm.event = {
		title : "",
		location : "",
		locationMapUrl: "",
		dateTime : "",
		info : ""
	};
 
	function init(){
		eventService.getPagedData().then(function(data){
			vm.events = data;
		});	
	};
	
	init();
	
	return vm;
};

EventsController.$inject = inject;
module.exports = EventsController;