var inject = [];

var ContactsController = function(){
	var vm = this;
	vm.contacts = [];
	
	function init(){
		vm.contacts.push({first : "Don",
						  last : "Waldo",
						  email : "don.g.waldo@gmail.com"						  
			});
		vm.contacts.push({first : "James",
						  last : "Ekstrom",
						  email : "james.ekstrom@ari.com"	
		});
	};
	
	init();
	
	return vm;
};

ContactsController.$inject = inject;

module.exports = ContactsController;
