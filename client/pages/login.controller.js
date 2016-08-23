(function () {
    'use strict';

    angular
        .module('application')
        .controller('LoginController', LoginController);

    function LoginController($http, md5, $state, sessionService, $cookies) {
        var vm = this;

        // FUNCTION DEFINITION

       /**
         * send username and password for login authentication
         */
        function submit() {
            $http.post('http://localhost:3009/user/auth', {"username":vm.username, "password":md5.createHash(vm.password || '')}).then(function (res) {
                vm.response = res.data;
                sessionService.setSession(res.data);
                if(vm.response.sessionId){
                    $state.go('home');
                }
                
            });
        }
        
        // FUNCTION ASSIGNMENT
        vm.submit = submit;

    }
})();