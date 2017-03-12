/**
 * Created by jubair.mostafa on 3/5/2017.
 */

(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');
    app.directive('mySampleDirective', factoryFunction);
    
    function factoryFunction() {
        return {
            restrict: 'E',
            templateUrl: 'directives/templates/inlineEdit.html'
        };
    }
    
})(window.angular);

/*(function (angular) {
    'use strict';

    var app = angular.module('peopleApp');

    app.directive('editable', factoryFunction);

    factoryFunction.$inject = [];
    function factoryFunction() {
        return {
            restrict: 'E',
            scope: {model: '='},
            replace: false,
            template:
            '<span> +' +
            '<input type="text" ng-model="model" ng-show="edit" ng-enter="edit=false">' +
            '<span ng-show="!edit" style="text-decoration: underline">{{model}}</span>' +
            '</span>',
            link: function ($scope, element, attrs) {
                $scope.edit = false;
                element.bind('click', function () {
                    $scope.$apply($scope.edit = true);
                    element.find('input').focus();
                })
            }
        };
    }

})(window.angular);*/

/*
var $scope;
var app = angular.module('miniapp', []);
app.directive('editable', function() {
    return {
        restrict: 'E',
        scope: {model: '='},
        replace: false,
        template:
        '<span>'+
        '<input type="text" ng-model="model" ng-show="edit" ng-enter="edit=false"></input>'+
        '<span ng-show="!edit" style="text-decoration:underline">{{model}}</span>'+
        '</span>',
        link: function(scope, element, attrs) {
            scope.edit = false;
            element.bind('click', function() {
                scope.$apply(scope.edit = true);
                element.find('input').focus();
            });
        }
    };
});

app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind('keypress', function(e) {
            if (e.charCode === 13 || e.keyCode ===13 ) {
                scope.$apply(attrs.ngEnter);
            }
        });
    };
});

function Ctrl($scope) {
    $scope.yourname = "Shakespeare";
    $scope.yourframework = "AngularJS";
}*/
