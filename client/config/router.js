var inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function RouteConfig(stateProvider, locationProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'pages/app/index.html',
      controller: 'AppController',
      controllerAs: 'appVm'
      // resolve: {
      //   authorize: ['autherizationService',
      //     function(authorization) {
      //       return authorization.authorize();
      //     }
      //   ]
      // }
    })
    .state('app.home', {
      url: '/',
      templateUrl: 'pages/home/index.html',
      controller: 'HomeController',
      controllerAs: 'homeVm'
    })
    .state('app.events', {
      url: '/events',
      templateUrl: 'pages/events/index.html',
      controller: 'EventsController',
      controllerAs: 'eventVm'
    })
    .state('app.contact', {
      url: '/contact',
      templateUrl: 'pages/contact/index.html',
      controller: 'ContactController',
      controllerAs: 'contactVm'
    })
    .state('app.organizers', {
      url: '/organizers',
      templateUrl: 'pages/organizers/index.html',
      controller: 'OrganizersController',
      controllerAs: 'organizersVm'
    })
    .state('app.login', {
      url: '/login',
      templateUrl: 'pages/login/index.html',
      controller: 'LoginController',
      controllerAs: 'loginVm'
    });
    
  locationProvider.html5Mode(true);
  
};

RouteConfig.$inject = inject;

module.exports = RouteConfig;
