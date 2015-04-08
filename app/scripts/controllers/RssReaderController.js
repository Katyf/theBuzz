'use strict';

angular.module('frontendApp').controller('RssReaderController', rssReaderController);

 rssReaderController.$inject=['$scope','RssReaderFactory', 'UserFactory'];

 function rssReaderController($scope,Feed, UserFactory) {
    var vm = this;
    vm.user = UserFactory.user;

    vm.loadFeed=function(e,feedSrc){
       // debugger;
        Feed.parseFeed(feedSrc).then(function(res){
            $scope.loadButonText = angular.element(e.target).text();
            $scope.feeds = res.data.responseData.feed.entries;
            console.log('$scope.feeds: ', res.data.responseData.feed.entries);
        });
    };
}


// 'use strict';

// angular.module('frontendApp').controller('RssReaderController', rssReaderController);

//  rssReaderController.$inject=['$scope','RssReaderFactory', 'UserFactory'];

//  function rssReaderController($scope,Feed, UserFactory) {
//     var vm = this;
//     vm.user = UserFactory.user;

//     vm.loadFeed=function(e, feedSrc){
//         Feed.parseFeed(feedSrc).then(function(res){
//             vm.loadButonText=angular.element(e.target).text();
//             vm.feeds=res.data.responseData.feed.entries;
//             console.log('hi from rss reader controller');
//         });
//     };

//      vm.sayhi = function(e){
//         console.log('heeeey');
//     };
// }
