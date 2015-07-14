var inject = ['Firebase', '$q'];

var PrincipalService = function(Firebase, $q) {
  
  var service = this;
  var identity = undefined;
  var ref = new Firebase('https://' + FIREBASE_URL);

  service.isIdentityResolved = function() {
    return angular.isDefined(identity);
  };

  service.isAuthenticated = function() {
    return getAuth();
  };

  function getAuth(){
    return ref.getAuth();
  }

  return service;

}

PrincipalService.$inject = inject;

module.exports = PrincipalService;