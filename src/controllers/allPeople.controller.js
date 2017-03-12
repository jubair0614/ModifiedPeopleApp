/**
 * Created by jubair.mostafa on 3/1/2017.
 */

(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.controller('allPeopleController', constructor);

    constructor.$inject = ['peopleFactory', '$state'];
    function constructor(peopleFactory, $state) {
        this.allPeople = peopleFactory.getAllPeople();

        this.personDetails = function(person){
            $state.go('personDetails', {id: person.id});
        }

        this.goAddPerson = function () {
            $state.go('addPeople');
        }
        
        /*this.personUpdate = function (people) {
            $state.go('editPerson', {id:people.id}, '/edit');
        }*/
    }

})(window.angular);