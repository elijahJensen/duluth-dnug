var inject = ['EventService', 'PrincipleService']

var ManageEventsController = function(eventService, principleService){
	
	var vm = this;
	vm.events = null;
	vm.userAuth = null;

	
	vm.event = {
		title : "",
		location : "",
		dateTime : "",
		info : ""
	};
 
	function init(){
		if (AppSettings.MEETUP_API_KEY && AppSettings.MEETUP_URLNAME){
			vm.isUsingMeetup = true;
			vm.meetupUrl = "https://www.meetup.com/" + MEETUP_URLNAME;
			return;
		}
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

ManageEventsController.$inject = inject;
module.exports = ManageEventsController;