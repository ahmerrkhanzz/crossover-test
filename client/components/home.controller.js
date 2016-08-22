(function(){
    'use strict';

    angular
        .module('application')
        .controller('HomeController', HomeController);

        function HomeController($http, sessionService) {
            var vm = this;
            vm.sessionObj = sessionService.getSession();
            $http.get('http://localhost:3009/videos?sessionId=' + vm.sessionObj).then(function(res){
                vm.videosList = res.data;
                console.log(vm.videosList);
            });
        }
})();