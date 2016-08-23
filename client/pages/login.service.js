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
           
           // FUNCTION DEFINITION

           /**
           * setting the username/sessionid in the browser cookie
           */
            function setSession(sessionObj){
                $cookieStore.put('storeSession', sessionObj);
            }

            /**
           * returns the session ID/username for browser cookie
           */
            function getSession(){
                var sessionObj = $cookieStore.get('storeSession');
                return sessionObj;
            }

             /**
             * removes the sessionID from browser cookie and destroys the session
             */
            function destroySession(sessionObj){
                $cookies.remove('storeSession');
            }

           
    });
})();