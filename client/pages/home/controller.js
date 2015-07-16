var inject = ['EventService', 'USERGROUP'];

var HomeController = function(eventService, USERGROUP){
	
	var vm = this;
	vm.event = null;
	vm.userGroup = USERGROUP;
	
	function init(){
		eventService.getPagedData().then(function(data){
			vm.event = data[data.length - 1];
		});
	};
	
	init();
	
	return vm;
};

HomeController.$inject = inject;

module.exports = HomeController;
