
var inject = ['$sceDelegateProvider'];

var SceConfig = function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
};

SceConfig.$inject = inject;

module.exports = SceConfig;