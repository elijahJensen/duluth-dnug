var inject = ['AccountService'];

var ContactsController = function(accntService){
	var vm = this;
	vm.contacts = [];
	
	function init(){
		vm.contacts = accntService.getUsers(); 
	};
	
	init();
	
	return vm;
};

ContactsController.$inject = inject;

module.exports = ContactsController;
