(function () {
    'use strict';

    angular
        .module('application')
        .controller('VideoDetail', VideoDetail);

    function VideoDetail($http, sessionService, $stateParams) {
        var vm = this;
        vm.sessionObj = sessionService.getSession();
        vm.rating = [1, 2, 3, 4, 5];

        // FUNTION DEFINITION

        /**
         * Calculate the rating percentage of the video
         * @param  {string} array     Count of all current rating of video 
         * @return {obj}    final     returns the calculated percentages of the available ratings of video
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
         * Calculate my rating percentage of the video
         * @param  {string} idx     Takes my rating when i click on some value
         */
        function myRating(idx) {
            var count = idx + 1;
            vm.selected = idx;
            $http.post('http://localhost:3009/video/ratings?sessionId=' + vm.sessionObj.sessionId, { "videoId": $stateParams.vid, "rating": count }).then(function (res) {
                var response = res.data.data;
                vm.newRatingArray = response.ratings;
                vm.rate = vm.ratePercent(vm.newRatingArray);
            });

        }

        /**
         * Get the details of single video
         */
        function getSingleVideo() {
            $http.get('http://localhost:3009/video?sessionId=' + vm.sessionObj.sessionId + '&videoId=' + $stateParams.vid).then(function (res) {
                vm.videoSpecs = res.data.data;
                vm.ratingArray = vm.videoSpecs.ratings;
                vm.rate = vm.ratePercent(vm.ratingArray);
                console.log(vm.videoSpecs);
            });
        }



        // FUNCTION ASSIGNMENT
        vm.myRating = myRating;
        vm.ratePercent = ratePercent;
        vm.getSingleVideo = getSingleVideo;

        // FUNCTION CALLING
        vm.getSingleVideo();

    }
})();