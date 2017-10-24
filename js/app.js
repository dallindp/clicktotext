var click = angular.module('click', ['ui.router','ngAnimate', 'ngSanitize']);


click.config(function($stateProvider,$urlRouterProvider,$httpProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('test',{
      url: '/test',
      templateUrl: './views/test.html',
      controller: 'testCtrl'
    })
    .state('uno',{
      url: '/uno',
      templateUrl: './views/uno.html',
      controller: 'unoCtrl'
    })
});

click.run(function($rootScope, $state) {
  $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
      window.scrollTo(0, 0);
  });
});
