var inject = ['Firebase', '$q'];

/**
 * Firebase principle service, to retrieve authorized users.
 * @param {object} Firebase
 * @param {object} $q (anuglar's q)
 */
var PrincipleService = function(Firebase, $q) {

  var service = this;
  var identity = undefined;
  var ref = new Firebase('https://' + AppSettings.FIREBASE_URL);

  service.isIdentityResolved = function() {
    return angular.isDefined(identity);
  };

  service.isAuthenticated = function() {
    return ref.getAuth();
  };

  /**
   * Retrieves a user account by user id.
   * @param {bool} force (optional), ensures user data is reloaded from the server.
   * @return {object} user data object if success, error if failure
   */
  service.getUser = function(force) {
    var deferred = $q.defer();
    if (force === true) identity = undefined;
    if (service.isIdentityResolved()) {
      deferred.resolve(identity);
    } else {
      ref.child("users").child(ref.getAuth().uid)
        .once("value", function(snapshot) {
          identity = snapshot.val();
          deferred.resolve(identity);
        }, function(error) {
          deferred.resolve(error);
        });
    }
    return deferred.promise;
  };

  return service;

}

PrincipleService.$inject = inject;

module.exports = PrincipleService;
