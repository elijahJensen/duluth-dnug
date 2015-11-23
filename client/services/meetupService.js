var inject = ['$q', '$http'];

/**
 * Meetup.com service to pull info from meetup.com.
 * @param {object} $q (anuglar's q)
 */
var MeetupService = function($q,$http) {

  var service = this;
  var baseUrl = '/api/v1/events';
  var groupQuery = '?key='+ AppSettings.MEETUP_API_KEY + '&group_urlname=' + AppSettings.MEETUP_URLNAME + '&sign=true';
   
   /**
   * Get meetup events for user group.
   * @return {array} of events
   */
  service.getUpcomingEvents = function() {
   return $http.get(baseUrl + groupQuery + "&status=upcoming",{
      cache: true,
    });
  }

  service.getPastEvents = function() {
   return $http.get(baseUrl + groupQuery + "&status=past",{
      cache: true,
    });
  }
  return service;
}

MeetupService.$inject = inject;

module.exports = MeetupService;