var inject = ['EventService'];

var HomeController = function(eventService){
	
	var vm = this;
	vm.event = null;
	
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
