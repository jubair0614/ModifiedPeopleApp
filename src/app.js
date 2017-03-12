/**
 * Created by jubair.mostafa on 3/1/2017.
 */

(function (angular) {
    'use strict';

    function initApp() {
        var app = angular.module('peopleApp');

        angular.bootstrap(document, ['peopleApp']);
    }

    document.addEventListener('DOMContentLoaded', initApp, false);
})(window.angular);