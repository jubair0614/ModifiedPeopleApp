/**
 * Created by jubair.mostafa on 3/1/2017.
 */
(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.factory('peopleFactory', factory);

    factory.$inject = [];

    function factory() {
        var peopleId = 1;

        var peoples = [
            {
                'id': 0,
                'name': 'jubair',
                'address': 'Fazlul Huq Muslim Hall, University of Dhaka',
                'mobileNumber': '01789455'
            }
        ];

        function savePeople(people) {
            people.id = peopleId++;
            people.mobileNumber.toString();
            peoples.push(people);
        }

        function updatePeople(people) {
            for(var i in peoples){
                if(peoples[i].id == people.id){
                    peoples[i] = people;
                }
            }
        }

        function getPeople(id) {
            for(var i in peoples){
                if(peoples[i].id == id){
                    peoples[i].mobileNumber = Number(peoples[i].mobileNumber);
                    return peoples[i];
                }
            }
        }

        function getAllPeople() {
            return peoples;
        }

        function deletePeople(id) {
            for (var i in peoples) {
                if (peoples[i].id == id) {
                    peoples.splice(i, 1);
                }
            }
        }

        return {
            savePeople : function (people){
                return savePeople(people);
            },
            updatePeople : function (people){
                return updatePeople(people);
            },
            getPeople : function (id){
                return getPeople(id);
            },
            getAllPeople : function (){
                return getAllPeople();
            },
            deletePeople : function (id){
                return deletePeople(id);
            }
        };
    }
})(window.angular);