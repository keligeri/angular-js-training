'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
git che
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/myview'});
}]);
