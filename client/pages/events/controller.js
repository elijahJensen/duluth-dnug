var inject = ['EventService', 'MeetupService', '$sce']

var EventsController = function(eventService, meetupService, $sce){
	
	var vm = this;
	vm.event = {
		title : "",
		location : "",
		locationMapUrl: "",
		dateTime : "",
		info : ""};
	vm.events = [];

	function init(){
		if (AppSettings.MEETUP_API_KEY && AppSettings.MEETUP_URLNAME){
			meetupService.getPastEvents().then(function(result){
				if (result && result.data && result.data.results)
					for (var i=0; i < result.data.results.length; i++){
						var data = result.data.results[i];
						vm.events.push({title:data.name,
								location:data.venue.name + ' ' + data.venue.address_1 + ', ' + data.venue.city,
								dateTime:new Date(data.time).toString(),
							  info:$sce.trustAsHtml(data.description)});
					}
					vm.events.reverse();
				});
		}else{
			eventService.getPagedData().then(function(data){
				vm.events = data;
			});	
		}
		
	};
	
	init();
	
	return vm;
};

EventsController.$inject = inject;
module.exports = EventsController;