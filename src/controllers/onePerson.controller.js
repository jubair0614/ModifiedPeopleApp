/**
 * Created by jubair.mostafa on 3/2/2017.
 */
(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.controller('onePersonController', construction);

    construction.$inject = ['peopleFactory', '$state', '$stateParams'];
    function construction(peopleFactory, $state, $stateParams) {

        //console.log($stateParams.id);
        var id = $stateParams.id;
        this.personInfo = peopleFactory.getPeople(id);

        this.backAllPeople = function () {
            $state.go('allPeople');
        }

        this.editOnePerson = function () {
            $state.go('editPerson', {id: id}, '/edit');
        }
    }
})(window.angular);