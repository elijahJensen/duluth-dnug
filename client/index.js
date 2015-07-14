var angular = require("angular");
require('angular-ui-router');
require('./templates');
require('angularfire');

angular.module('app.dsdnug', [
	  'firebase',
	  'ui.router',
	  'templates'
])
.config(require("./config/router"))
.config(require("./config/sce"))
.service('EventService', require("./services/eventService"))
.service('LoginService', require('./services/loginService'))
.service('PrincipleService', require('./services/principleService'))
.controller('AppController', require('./pages/app/controller'))
.controller('ContactController', require('./pages/contact/controller'))
.controller('EventsController', require('./pages/events/controller'))
.controller('HomeController', require('./pages/home/controller'))
.controller('LoginController', require('./pages/login/controller'));

module.exports = angular;
