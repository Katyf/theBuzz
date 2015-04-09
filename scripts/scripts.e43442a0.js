"use strict";function homeController(a,b){a.getWeather(),b.getUserItems()}function weatherController(a,b){var c=this;c.currentweather=a.currentweather,c.user=b.user,c.userId=b.userId,c.updateLocation=function(a){b.updateLocation(a).then(function(a){c.location={},b.getUserItems()})}}function loginController(a,b){var c=this;c.login=function(d){a.login(d).then(function(a){c.credentials={},b.path("/")})}}function signupController(a,b){var c=this;c.signup=function(d){a.signup({user:d}).then(function(a){c.credentials={},b.path("/")})}}function userController(a){var b=this;b.user=a.user,b.userId=a.userId,b.newNote=function(c){a.newNote(c).then(function(c){b.note={},console.log("hi from userController.newNote"),a.getUserItems()})},b.deleteNote=function(b){a.deleteNote(b),console.log("hi from UserController.deleteNote")},b.newLink=function(c){a.newLink(c).then(function(c){b.link={},console.log("hi from userController.newLink"),a.getUserItems()})},b.deleteLink=function(b){a.deleteLink(b),console.log("hi from UserController.deleteLink")},b.newFeed=function(c){a.newFeed({feed:c}).then(function(c){b.feedparams={},console.log("hi from userController.newFeed"),a.getUserItems()})},b.deleteFeed=function(b){a.deleteFeed(b),console.log("hi from UserController.deleteFeed")}}function menuController(a,b){var c=this;c.logout=function(){a.logout().then(function(){b.path("/login"),console.log("logged out!")})}}function tabController(){var a=this;a.tab=1,a.isSet=function(a){return this.tab===a},a.setTab=function(a){this.tab=a}}function rssReaderController(a,b,c){var d=this;d.user=c.user,d.loadFeed=function(c,d){b.parseFeed(d).then(function(b){a.loadButonText=angular.element(c.target).text(),a.feeds=b.data.responseData.feed.entries,console.log("$scope.feeds: ",b.data.responseData.feed.entries)})}}function welcomeController(a){var b=this;b.user=a.user,b.userId=a.userId}angular.module("frontendApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","MainController","MainDirective"]).constant("ServerUrl","https://damp-thicket-9341.herokuapp.com").constant("APIUrl","http://api.openweathermap.org/data/2.5/weather?q=").run(["$rootScope","$http","$window","$location","AuthFactory",function(a,b,c,d,e){if(e.isAuthenticated()){JSON.parse(c.localStorage.getItem("ga-user"))}else d.path("/login");a.$on("$routeChangeStart",function(a,b){d.path(e.isAuthenticated()?"/":"/login")})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeController"}).when("/login",{templateUrl:"views/login.html",controller:"LoginController"}).otherwise({redirectTo:"/"})}]),function(){function a(){return function(a){return a?Math.floor(1.8*(a-273.15)+32):void 0}}angular.module("frontendApp").filter("toF",a)}(),function(){function a(){return function(a){return a?20>a?"day-sunny":90>a?"day-cloudy":"cloudy":void 0}}angular.module("frontendApp").filter("weatherIcon",a)}(),function(){function a(){return function(a){return a?a.replace(/\.com/g,"").split(" ").map(function(a){return a[0].toUpperCase()+a.slice(1)}).join(" "):void 0}}angular.module("frontendApp").filter("urlFilter",a)}(),function(){function a(){return function(a){return a?a.replace(/&#8217;/g,"'").replace(/&#8220;/g,'"'):void 0}}angular.module("frontendApp").filter("xmlFilter",a)}(),function(){function a(){return function(a){return a?a.replace(/,+[a-z]+/g,""):void 0}}angular.module("frontendApp").filter("locationFilter",a)}(),angular.module("frontendApp").factory("AuthFactory",["$http","$window","ServerUrl",function(a,b,c){var d=function(b){return console.log(b),a.post(c+"/users",b).success(function(a){i(a),console.log("success!")})},e=function(b){return console.log(b),a.post(c+"/login",b).success(function(a){i(a)})},f=function(){return console.log("from AuthFactory"),a.get(c+"/logout").success(function(){b.localStorage.removeItem("ga-user")})},g=function(){var a=JSON.parse(b.localStorage.getItem("ga-user"));return a?!!a.token:!1},h=function(){},i=function(c){b.localStorage.setItem("ga-user",JSON.stringify(c)),a.defaults.headers.common.Authorization="Token token="+c.token};return{signup:d,login:e,logout:f,isAuthenticated:g,clearStorage:h}}]),angular.module("frontendApp").factory("WeatherFactory",["$http","$window","APIUrl",function(a,b,c){var d={},e="Boston,ma",f=function(){return a.get(c+e).success(function(a){console.log(a),angular.copy(a,d)}).error(function(a,b,c,d){console.log("Error:"+a,b,c,d)})};return{currentweather:d,getWeather:f}}]),angular.module("frontendApp").factory("UserFactory",["$http","ServerUrl",function(a,b){var c={},d=1,e=function(){var a=JSON.parse(localStorage.getItem("ga-user"));return d=a.id,console.log(d),d},f=function(){return e(),a.get(b+"/users/"+d).success(function(a){console.log(a),angular.copy(a,c)}).error(function(a,b,c,d){console.log("Error:"+a,b,c,d)})},g=function(c){e();var f={setting:c};return a.$.post(b+"/users/"+d+"/notes",f).success(function(a){console.log(a),console.log("Location updated")})},h=function(c){e();var f={note:c};return a.post(b+"/users/"+d+"/notes",f).success(function(a){console.log(a),console.log("Note created! Hello from UserFactory.newNote")})},i=function(c){return a["delete"](b+"/users/"+d+"/notes/"+c.id).success(function(){console.log("note deleted")})},j=function(c){e();var f={link:c};return a.post(b+"/users/"+d+"/links",f).success(function(a){console.log(a),console.log("Link created! Hello from UserFactory.newLink")})},k=function(c){return a["delete"](b+"/users/"+d+"/links/"+c.id).success(function(){console.log("link deleted")})},l=function(c){return e(),console.log(c),a.post(b+"/users/"+d+"/feeds",c).success(function(a){console.log(a),console.log("Feed Created! Hi from UserFactory.newFeed")})},m=function(c){return a["delete"](b+"/users/"+d+"/feeds/"+c.id).success(function(){console.log("feed deleted")})};return{user:c,setUserId:e,getUserItems:f,updateLocation:g,newNote:h,deleteNote:i,newLink:j,deleteLink:k,newFeed:l,deleteFeed:m}}]),angular.module("frontendApp").factory("RssReaderFactory",["$http",function(a){return{parseFeed:function(b){return a.jsonp("//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q="+encodeURIComponent(b))}}}]),angular.module("MainController",[]),angular.module("MainController").controller("HomeController",homeController),homeController.$inject=["WeatherFactory","UserFactory"],angular.module("MainController").controller("WeatherController",weatherController),weatherController.$inject=["WeatherFactory","UserFactory"],angular.module("MainController").controller("LoginController",loginController),loginController.$inject=["AuthFactory","$location"],angular.module("MainController").controller("SignupController",signupController),signupController.$inject=["AuthFactory","$location"],angular.module("MainController").controller("UserController",userController),userController.$inject=["UserFactory"],angular.module("MainController").controller("MenuController",menuController),menuController.$inject=["AuthFactory","$location"],angular.module("MainController").controller("TabController",tabController),tabController.$inject=[],angular.module("frontendApp").controller("RssReaderController",rssReaderController),rssReaderController.$inject=["$scope","RssReaderFactory","UserFactory"],angular.module("MainController").controller("WelcomeController",welcomeController),welcomeController.$inject=["UserFactory"],angular.module("MainDirective",[]),angular.module("MainDirective").directive("loginForm",[function(){return{restrict:"E",templateUrl:"views/login-form.html",controller:"LoginController",controllerAs:"loginController",bindToController:!0,scope:{credentials:"="}}}]),angular.module("MainDirective").directive("signupForm",[function(){return{restrict:"E",templateUrl:"views/signup-form.html",controller:"SignupController",controllerAs:"signupController",bindToController:!0,scope:{credentials:"="}}}]),angular.module("MainDirective").directive("kfWeather",[function(){return{restrict:"E",templateUrl:"views/kfWeather.html",scope:{weather:"="},controller:"WeatherController",controllerAs:"weatherControllerr",bindToController:!0}}]),angular.module("MainDirective").directive("userItems",[function(){return{restrict:"E",templateUrl:"views/user-items.html",scope:{user:"="},controller:"UserController",controllerAs:"userController",bindToController:!0}}]),angular.module("MainDirective").directive("menu",[function(){return{restrict:"E",templateUrl:"views/partials/menu.html",controller:"MenuController",controllerAs:"menuController",bindToController:!0,scope:{credentials:"="}}}]);