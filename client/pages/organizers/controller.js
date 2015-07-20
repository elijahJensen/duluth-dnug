var inject = ['AccountService'];

var OrganizersController = function(accntService){
	var vm = this;
	vm.contacts = [];
	
	function init(){
		vm.contacts = accntService.getUsers(); 
	};
	
	init();
	
	return vm;
};

OrganizersController.$inject = inject;

module.exports = OrganizersController;
