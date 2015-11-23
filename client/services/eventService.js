

/**
 * Created by dwaldo on 2/26/2015.
 */

var inject = ['Firebase', '$firebaseArray', '$firebaseObject'];

var EventService = function(Firebase, $firebaseArray, $firebaseObject) {

  var ref = new Firebase('https://' + AppSettings.FIREBASE_URL).child('events');
  var eventList = null;
  var service = this;
  var count = 0;
  service.pageSize = 5;

  service.init = function() {
  };

  service.add = function(event) {
    return eventList.$add(event);
  };

  service.delete = function(game) {
    return eventList.$remove(game);
  };

  service.get = function(eventId) {
    return $firebaseObject(ref.child(eventId)).$loaded();
  };

  service.save = function(event) {
    ('$save' in event.__proto__) ? event.$save() : eventList.$save(event);
  };

  service.getPagedData = function() {
    return getEventListByPriority(service.pageSize).$loaded();
  };

  function getEventListByPriority(pageSize){
    count += pageSize;
    eventList = $firebaseArray(ref.orderByChild('dateTime').limitToLast(count));
    return eventList;
  };

  return service;

};

EventService.$inject = inject;

module.exports = EventService;
