var inject = ['EventService', 'PrincipleService']

var EventsController = function(eventService, principleService){
	
	var vm = this;
	vm.events = null;
	vm.userAuth = null;
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
		vm.userAuth = principleService.isAuthenticated();	
	};
	
	vm.add = function(){
		vm.event.dateTime = vm.event.dateTime.getTime();
		eventService.add(vm.event);
		vm.event = null;
	};
	
	vm.delete = function(event){
		eventService.delete(event);
	};
	
	init();
	
	return vm;
};

EventsController.$inject = inject;
module.exports = EventsController;