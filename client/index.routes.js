(function() {
  'use strict';

  angular
    .module('application')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: "pages/login.html",
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: "pages/home.html",
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('videoDetail', {
        url: '/detail/:vid',
        templateUrl: 'pages/video-detail.html',
        controller: 'VideoDetail',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
