"use strict";
var ngImageAppear = angular.module('ngImageAppear', []).directive('ngImageAppear', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                console.log("img loaded");
                element.css({
                    'display': 'block'
                });
            });

        }
    };
});