var angular = require("angular");
require('angular-ui-router');
require('./templates');
require('angularfire');

angular.module('app.dnug', [
	  'firebase',
	  'ui.router',
	  'templates'
])
.constant('USERGROUP', 'Duluth .NET User Group')
.config(require("./config/router"))
.config(require("./config/sce"))
.service('EventService', require("./services/eventService"))
.service('LoginService', require('./services/loginService'))
.service('AutherizationService', require('./services/autherizationService'))
.service('AccountService', require('./services/accountService'))
.service('PrincipleService', require('./services/principleService'))
.service('MeetupService', require("./services/meetupService"))
.controller('AppController', require('./pages/app/controller'))
.controller('OrganizersController', require('./pages/organizers/controller'))
.controller('EventsController', require('./pages/events/controller'))
.controller('HomeController', require('./pages/home/controller'))
.controller('LoginController', require('./pages/login/controller'))
.controller('ManageEventsController', require('./pages/manageEvents/controller'))
.controller('ManageOrganizersController', require('./pages/manageOrganizers/controller'))
.controller('OrganizersController', require('./pages/organizers/controller'))
.run(['$rootScope', '$state', '$stateParams', 'AutherizationService', 'PrincipleService',
    function($rootScope, $state, $stateParams, authorizationService, principleService) {

       $rootScope.$on("$stateChangeError", console.log.bind(console));

      $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
        // Track the state the user wants to go to, for authorization service
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;

        if (!toState.anonymous && !principleService.isAuthenticated()) {
          $state.transitionTo('app.login')
          event.preventDefault();
        }

        // If the principle is resolved, do an authorization check immediately.
        // Otherwise, it'll be done when the state it resolved.
        if (principleService.isIdentityResolved()) {
          authorizationService.authorize();
        }
      });
    }
  ]);

module.exports = angular;
