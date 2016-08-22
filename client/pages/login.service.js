(function () {
    'use strict';

    angular
        .module('application')
        .service('sessionService', function ($cookieStore) {
            
           return {
               sessionId: '',
               setSession: setSession,
               getSession: getSession
           };
           
           
           
           
           // Function Definition
            function setSession(sessionObj){
                $cookieStore.put('storeSession', sessionObj);
            }

            function getSession(){
                var sessionObj = $cookieStore.get('storeSession');
                return sessionObj;
            }

            function destroySession(sessionObj){
                $cookies.remove('storeSession');
            }

            // $cookieStore.put('storeSession', vm.sessionId);
           
    });
})();