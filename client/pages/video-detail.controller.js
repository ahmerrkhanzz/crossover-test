(function() {
    'use strict';

    angular
        .module('application')
        .controller('VideoDetail', VideoDetail);

        function VideoDetail ($http, sessionService, $stateParams) {
            var vm = this;
            vm.sessionObj = sessionService.getSession();

            // function definition

            

            function percentCalc (array) {
                // var arr = [4,4,2,1,5,5,5,5,1,3];
                var result = {};
                var resultPercentage = [];
                    array.forEach(function(item, idx){
                    if (result[item] >= 0) {
                        result[item]++;
                    } else {
                        result[item] = 1;
                    }
                    // return result[item];
                });
                 console.log(result);
    
                for (var prop in result) {
                    var x = (result[prop] / array.length) * 100;
                    resultPercentage.push(x);
                    console.log(resultPercentage);
                }
                
                
            }



            // function countInArray(array, value) {
            //     var count = 0;
            //     var arr = [];
            //     for (var i = 0; i <= array.length; i++) {
            //         if (array[i] === value) {
            //             count++;
            //             console.log({
            //                 value:value,
            //                 count:count
            //             });
            //         }
            //     }
            //     var countPercent = (count / array.length) * 100;
            //     return countPercent;
            // }

            // function isRating(x) {
            //     var n = x + 1;
            //     vm.ratingArray.push(n);
            //     var a = countInArray(vm.ratingArray, 1);
            //     var b = countInArray(vm.ratingArray, 2);
            //     var c = countInArray(vm.ratingArray, 3);
            //     var d = countInArray(vm.ratingArray, 4);
            //     var e = countInArray(vm.ratingArray, 5);
            //     vm.ratePercentage = [a, b, c, d, e];
            //     console.log("Percentage after i have rated " + vm.ratePercentage);
            // }

            $http.get('http://localhost:3009/video?sessionId=' + vm.sessionObj.sessionId + '&videoId=' + $stateParams.vid).then(function(res){
                vm.videoSpecs = res.data.data;
                vm.ratingArray = vm.videoSpecs.ratings;
                // vm.percentCalc(vm.ratingArray);
                // vm.countInArray(vm.ratingArray, 5);
                console.log(vm.ratingArray);
                console.log(vm.percentCalc(vm.ratingArray));
                // var a = countInArray(vm.ratingArray, 1); // returns number of times that element occur in array
                // var b = countInArray(vm.ratingArray, 2);
                // var c = countInArray(vm.ratingArray, 3);
                // var d = countInArray(vm.ratingArray, 4);
                // var e = countInArray(vm.ratingArray, 5);
                // vm.ratePercentage = [a, b, c, d, e];
                // console.log("Percentage before i have rated " + vm.ratePercentage);
                // vm.rating = [1,2,3,4,5];
            });


            // function assignment
            // vm.isRating = isRating;
            vm.percentCalc = percentCalc;
                // vm.countInArray = countInArray;
            
        }
})();