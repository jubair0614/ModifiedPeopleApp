/**
 * Created by jubair.mostafa on 3/2/2017.
 */

(function (angular) {
    var app = angular.module('peopleApp');

    app.controller('editPersonController', construction);

    construction.$inject = ['peopleFactory', '$state', '$stateParams'];
    function construction(peopleFactory, $state, $stateParams) {

        //console.log($stateParams.id);
        var id = $stateParams.id;
        this.personInfo = peopleFactory.getPeople(id);
        
        this.updatePeople = function () {
            peopleFactory.updatePeople(this.personInfo);
            $state.go('allPeople');
        }

        this.showAllPeople = function () {
            $state.go('allPeople');
        }
    }

})(window.angular);