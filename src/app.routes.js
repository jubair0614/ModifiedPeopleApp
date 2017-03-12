/**
 * Created by jubair.mostafa on 3/1/2017.
 */
(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');
    app.config(addRoutes);

    addRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    function addRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('people', {
                url: '/people',
                templateUrl: 'views/people.view.html',
                controller: 'peopleController',
                controllerAs: 'pCtlr'
            })
            .state('allPeople', {
                url: '/people/all',
                templateUrl: 'views/allPeople.view.html',
                controller: 'allPeopleController',
                controllerAs: 'allPCtlr'
            })
            .state('addPeople', {
                url: '/people/add',
                templateUrl: 'views/addPeople.view.html',
                controller: 'addPeopleController',
                controllerAs: 'addPCtlr'
            })

            .state('personDetails', {
                    url: '/people/:id',
                    templateUrl: 'views/onePerson.view.html',
                    controller: 'onePersonController',
                    controllerAs: 'onePCtlr'
                })
            .state('editPerson', {
                    url: '/people/:id/edit',
                    templateUrl: 'views/editPerson.view.html',
                    controller: 'editPersonController',
                    controllerAs: 'editPCtlr'
                });

        //urlRouterProvider.when('', '/people');
        $locationProvider.hashPrefix('');
    }

})(window.angular);