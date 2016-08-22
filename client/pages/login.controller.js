(function () {
    'use strict';

    angular
        .module('application')
        .controller('LoginController', LoginController);

    function LoginController($http, md5, $state, sessionService, $cookies) {
        var vm = this;
       
        function submit() {
            $http.post('http://localhost:3009/user/auth', {"username":vm.username, "password":md5.createHash(vm.password || '')}).then(function (res) {
                //res.data;
                vm.response = res.data;
                sessionService.setSession(res.data);
                if(vm.response.sessionId){
                    $state.go('home');
                }
                
            });
        }
        
        // function assignment
        vm.submit = submit;

    }
})();