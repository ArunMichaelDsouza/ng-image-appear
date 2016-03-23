"use strict";

var el = document.getElementsByTagName('img'), imgElement;
for(var i=0; i<el.length; i++) {
    imgElement = el[i];
    if(imgElement.hasAttribute('ng-image-appear')) {
        imgElement.setAttribute('opacity', 0);
    }
}

var ngImageAppear = angular.module('ngImageAppear', []).directive('ngImageAppear', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            // Fetching data attributes
            var transitionDuration = attrs.transitionDuration;
            console.log(transitionDuration);

            element.css({
                'opacity': 0
            });
            element.bind('load', function() {
                console.log("img loaded");
                element.css({
                    'transition': ' all '+ transitionDuration+'s' +' ease-in-out ',
                    'opacity': 1
                });
            });

        }
    };
});