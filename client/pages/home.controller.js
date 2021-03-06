(function () {
    'use strict';

    angular
        .module('application')
        .controller('HomeController', HomeController);

    function HomeController($http, sessionService) {
        var vm = this;
        vm.sessionObj = sessionService.getSession();

        // FUNCTION DEFINITION

        /**
         * Calculate rating percentage of the all the videos
         * @param  {string} array    Takes the array of rating for each video and return percentage object
         */
        function ratePercent(array) {
            var result = {};
            var final = {};
            array.forEach(function (item, idx) {
                if (result[item] >= 0) {
                    result[item]++;
                } else {
                    result[item] = 1;
                }
            });
            for (var prop in result) {
                final[prop] = (result[prop] / array.length) * 100;
            }
            return final;
        }

        /**
         * Get list of all the videos from the API
         */
        function getVideosList() {
            $http.get('http://localhost:3009/videos?sessionId=' + vm.sessionObj.sessionId).then(function (res) {
                vm.videosList = res.data.data;
                vm.videosList.forEach(function (item) {
                    vm.ratings = item.ratings;
                    vm.rate = ratePercent(vm.ratings)
                });
            });
        }


        // FUNCTION ASSIGNMENT
        vm.ratePercent = ratePercent;
        vm.getVideosList = getVideosList;

        // FUNCTION CALLING
        vm.getVideosList();
    }
})();