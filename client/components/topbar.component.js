(function(){
  'use strict';

  angular.module('application').component('topbar', {
    templateUrl: 'components/topbar.html',
    controller: TopbarController,
    controllerAs: 'vm',
    bindings: {
      hero: '='
    }
  });

  function TopbarController(){
      console.log("test");
  }
})();