// 'use strict';

// angular.module('frontendApp').controller('RssReaderController', ['$scope','RssReaderFactory', function ($scope,Feed) {
//     $scope.loadFeed=function(e){
//       //debugger;
//         Feed.parseFeed($scope.feedSrc).then(function(res){
//             $scope.loadButonText=angular.element(e.target).text();
//             $scope.feeds=res.data.responseData.feed.entries;
//             console.log('hi from rss reader controller');
//         });
//     };
// }]);



'use strict';

angular.module('frontendApp').controller('RssReaderController', rssReaderController);

 rssReaderController.$inject=['$scope','RssReaderFactory', 'UserFactory'];

 function rssReaderController($scope,Feed, UserFactory) {
    var vm = this;
    vm.user = UserFactory.user;

    $scope.loadFeed=function(e){
        Feed.parseFeed($scope.feedSrc).then(function(res){
            $scope.loadButonText=angular.element(e.target).text();
            $scope.feeds=res.data.responseData.feed.entries;
            console.log('hi from rss reader controller');
        });
    };
}


