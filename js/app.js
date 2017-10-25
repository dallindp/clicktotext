var click = angular.module('click', ['ui.router','ngAnimate', 'ngSanitize']);


click.config(function($stateProvider,$urlRouterProvider,$httpProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('uno',{
      url: '/uno',
      templateUrl: './views/uno.html',
      controller: 'unoCtrl'
    })
    .state('ampersand',{
      url: '/ampersand',
      templateUrl: './views/ampersand.html',
      controller: 'ampersandCtrl'
    })
    .state('semicolon',{
      url: '/semicolon',
      templateUrl: './views/semicolon.html',
      controller: 'semicolonCtrl'
    })
    .state('questionmark',{
      url: '/questionmark',
      templateUrl: './views/questionmark.html',
      controller: 'questionmarkCtrl'
    })
});

click.run(function($rootScope, $state) {
  $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
      window.scrollTo(0, 0);
  });
});
