(function () {
  'use strict';

  angular.module('application').component('topbar', {
    templateUrl: 'components/topbar.html',
    controller: TopbarController,
    controllerAs: 'vm',
    bindings: {
      hero: '='
    }
  });

  /** @ngInject */
  function TopbarController(sessionService, $cookies, $state, $http) {
    var vm = this;
    vm.sessionObj = sessionService.getSession();
    function logout() {
      $http.get('http://localhost:3009/user/logout?sessionId=' + vm.sessionObj.sessionId).then(function (res) {
        $state.go('login');
      });
    }

    // function assignment
    vm.logout = logout;
  }
})();