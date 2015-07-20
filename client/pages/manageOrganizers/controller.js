/**
 * Created by dwaldo on 7/14/2015.
 */
var inject = ['AccountService', '$state'];

var ManageOrganizersController = function(accntService, $state) {

  var vm = this;
  vm.users = null;
  
  vm.registerForm = {
    failMessage: null,
    successMessage: null,
    firstName: null,
    lastName: null,
    title: null,
    email: null,
    emailConfirm: null,
    pword: null,
    pwordConfirm: null
  };

  vm.createAccount = register.bind(vm.registerForm)

  vm.deleteUser = function(user){
    accntService.deleteUser(user);
  }
  
  function init(){
    vm.users = accntService.getUsers();    
  }

  function register() {
    var form = this;
    if (form.email !== form.emailConfirm) {
      form.failMessage = "Email addresses do not match!";
      return;
    }
    if (form.pword !== form.pwordConfirm) {
      form.failMessage = "Password does not match!";
      return;
    }
    var user = {
      firstName : form.firstName,
      lastName : form.lastName,
      title : form.title,
      email : form.email
      };
                
    accntService.createNewUser(form.email, form.pword, user).then(function(response) {
      if (response.message) {
        form.failMessage = "Failed to create account! " + response.message;
      } else {
        form.successMessage = "Account created!";
      }
    });
  }

  init();
  
  return vm;

};

ManageOrganizersController.$inject = inject;

module.exports = ManageOrganizersController;