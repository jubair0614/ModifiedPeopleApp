/**
 * Created by jubair.mostafa on 3/1/2017.
 */

(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');
    app.service('peopleService', constructor);
    
    constructor.$inject = [];

    function constructor() {
        var peopleId = 1;

        var peoples = [
            {
                'id': 0,
                'name': 'jubair',
                'address': 'Fazlul Huq Muslim Hall, University of Dhaka',
                'mobileNumber': '01783905098'
            }
        ];

        this.savePeople = function (people) {
            people.id = peopleId++;
            peoples.push(people);
        }

        this.updatePeople = function (people) {
            for(var i in peoples){
                if(peoples[i].id == people.id){
                    peoples[i] = people;
                }
            }
        }

        this.getPeople = function (id) {
            for(var i in peoples){
                if(peoples[i].id == id){
                    return peoples[i];
                }
            }
        }

        this.getAllPeople = function () {
            return peoples;
        }

        this.deletePeople = function (id) {
            for (var i in peoples) {
                if (peoples[i].id == id) {
                    peoples.splice(i, 1);
                }
            }
        }

    }
})(window.angular);

















/*//save method create a new contact if not already exists
 //else update the existing object
 this.save = function (contact) {
 if (contact.id == null) {
 //if this is new contact, add it in contacts array
 contact.id = uid++;
 contacts.push(contact);
 } else {
 //for existing contact, find this contact using id
 //and update it.
 for (i in contacts) {
 if (contacts[i].id == contact.id) {
 contacts[i] = contact;
 }
 }
 }

 }

 //simply search contacts list for given id
 //and returns the contact object if found
 this.get = function (id) {
 for (i in contacts) {
 if (contacts[i].id == id) {
 return contacts[i];
 }
 }

 }

 //iterate through contacts list and delete
 //contact if found
 this.delete = function (id) {
 for (i in contacts) {
 if (contacts[i].id == id) {
 contacts.splice(i, 1);
 }
 }
 }

 //simply returns the contacts list
 this.list = function () {
 return contacts;
 }
 */