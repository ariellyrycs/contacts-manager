/**
 * Created by arobles on 11/9/14.
 */

angular.module('ContactsApp', ['ngRoute', 'ngResource']).config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/contacts', {
       controller: 'ListCtrl',
        templateUrl: 'views/list.html'
    });
    $locationProvider.html5Mode(true);
});

