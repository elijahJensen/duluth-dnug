var inject = ['LoginService', '$state'];

var LoginController = function(loginService, $state){
	
	var vm = this;
	vm.loginForm = {
	    message: null,
	    email: null,
	    pword: null
  	};
	  
	vm.login = function(){
		loginService.loginUser(vm.loginForm.email, vm.loginForm.pword).then(function(user) {
	      if (!user) {
	        vm.loginForm.message = "Login failed!  Email or password is incorrect, or account does not exist";
	      } else {
	        $state.go('app.events', {
	          reload: true
	        });
      }
    });
	};
	
	return vm;
};

LoginController.$inject = inject;

module.exports = LoginController;
