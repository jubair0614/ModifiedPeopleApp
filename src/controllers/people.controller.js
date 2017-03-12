/**
 * Created by jubair.mostafa on 3/1/2017.
 */

(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.controller('peopleController', constructor);

    constructor.$inject = ['peopleFactory', '$state'];
    function constructor(peopleFactory, $state) {
        this.goAddPeople = function () {
            $state.go('addPeople');
        }

        this.goAllPeople = function () {
            $state.go('allPeople');
        }
    }

})(window.angular);