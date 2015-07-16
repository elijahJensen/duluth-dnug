var inject = ['Firebase', '$q', '$firebaseArray'];

/**
 * Firebase account service, to create new simple user accounts.
 * @param {object} Firebase
 * @param {object} $q (anuglar's q)
 */
var AccountService = function(Firebase, $q, $firebaseArray) {

  var service = this;
  var ref = new Firebase('https://' + FIREBASE_URL).child("users");
  var users = null;
  
   function init(){
      users = $firebaseArray(ref);
   }
   
   /**
   * Get user accounts.
   * @return {array} of user accounts
   */
  service.getUsers = function() {
    return users;
  }
  
   /**
   * Removes a user account.
   * NOTE: Does not remove users login info
   * @return {array} of user accounts
   */
  service.deleteUser = function(user){
    return users.$remove(user);
  }
  
  /**
   * Creates a new firebase user.
   * @param {string} email address
   * @param {pword} password
   * @return {object} user data object if success, error object if failure
   */
  service.createNewUser = function(email, pword, userObj) {
    var deferred = $q.defer();
    ref.createUser({
      email: email.toLowerCase(),
      password: pword
    }, function(error, userData) {
      if (error) {
        deferred.resolve(error);
      } 
      else { //priority set for lookup on email...
        ref.child(userData.uid).setWithPriority(userObj, email);
        deferred.resolve(userData.uid);
      }
    });
    return deferred.promise;
  }

  /**
   * Update user info of an existing firebase user.
   * @param {userData} User info, with fields uid, userName, and jobTitle.
   * @return {bool} true if success, false if failure
   */
  service.updateUserInfo = function(userData){
    var deferred = $q.defer();
    ref.child(userData.uid).update({
      name: userData.userName,
      jobTitle : userData.jobTitle
    }, function(error){
      deferred.resolve(error);
    });
    return deferred.promise;
  }

  /**
   * Changes password of an existing firebase user.
   * @param {string} email address
   * @param {oldPword} password
   * @param {newPword} password
   * @return {bool} true if success, false if failure
   */
  service.changePassword = function(email, oldPword, newPword) {
    var deferred = $q.defer();
    ref.changePassword({
      email: email.toLowerCase(),
      oldPassword: oldPword,
      newPassword: newPword
    }, function(error) {
      if (error === null) {
        deferred.resolve(true);
      } else {
        deferred.resolve(false);
      }
    });
    return deferred.promise;
  }

  /**
   * Reset password of an existing firebase user via email.
   * @param {string} email address
   * @return {bool} true if success, false if failure
   */
  service.resetPassword = function(email) {
    var deferred = $q.defer();
    ref.resetPassword({
      email: email.toLowerCase()
    }, function(error) {
      if (error === null) {
        deferred.resolve(true);
      } else {
        deferred.resolve(false);
      }
    });
    return deferred.promise;
  }
  
  init();
  return service;

}

AccountService.$inject = inject;

module.exports = AccountService;