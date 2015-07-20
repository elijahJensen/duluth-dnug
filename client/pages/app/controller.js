/**
 * Created by dwaldo on 2/28/2015.
 */
var inject = ['PrincipleService', 'LoginService', '$state', 'USERGROUP'];
var AppController = function(principleService, loginService, $state, USERGROUP) {

  var vm = this;
  vm.userGroupName = USERGROUP;

  vm.isAuthenticated = function() {
    var isAuth = principleService.isAuthenticated();
    return isAuth;
  };

  vm.logOff = function() {
    loginService.logOff();
    $state.go('app.home');
  };

  return vm;

};

AppController.$inject = inject;

module.exports = AppController;
