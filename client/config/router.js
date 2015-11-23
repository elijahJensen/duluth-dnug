var inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

function RouteConfig($stateProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

  $urlRouterProvider.otherwise("/");
  $urlMatcherFactoryProvider.strictMode(false);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'pages/app/index.html',
      controller: 'AppController',
      controllerAs: 'appVm',
      resolve: {
        authorize: ['AutherizationService',
          function(authorization) {
            return authorization.authorize();
          }
        ]
      }
    })
    .state('app.home', {
      url: '/',
      anonymous: true,
      templateUrl: 'pages/home/index.html',
      controller: 'HomeController',
      controllerAs: 'homeVm'
    })
    .state('app.events', {
      url: '/events',
      anonymous: true,
      templateUrl: 'pages/events/index.html',
      controller: 'EventsController',
      controllerAs: 'eventVm'
    })
    .state('app.manageEvents', {
      url: '/events/manage',
      templateUrl: 'pages/manageEvents/index.html',
      controller: 'ManageEventsController',
      controllerAs: 'manageEventsVm'
    })
    .state('app.organizers', {
      url: '/organizers',
      anonymous: true,
      templateUrl: 'pages/organizers/index.html',
      controller: 'OrganizersController',
      controllerAs: 'organizersVm',
    })
    .state('app.manageOrganizers', {
      url: '/organizers/manage',
      templateUrl: 'pages/manageOrganizers/index.html',
      controller: 'ManageOrganizersController',
      controllerAs: 'manageOrganizersVm'
    })
    .state('app.login', {
      url: '/login',
      anonymous: true,
      templateUrl: 'pages/login/index.html',
      controller: 'LoginController',
      controllerAs: 'loginVm'
    });

  $locationProvider.html5Mode(true);
  
};

RouteConfig.$inject = inject;

module.exports = RouteConfig;
