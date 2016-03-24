"use strict";

// var el = document.getElementsByTagName('img'), imgElement;
// for(var i=0; i<el.length; i++) {
//     imgElement = el[i];
//     if(imgElement.hasAttribute('ng-image-appear')) {
//         imgElement.setAttribute('opacity', 0);
//     }
// }

var ngImageAppear = angular.module('ngImageAppear', []).directive('ngImageAppear', function() {
    return {
        priority: 1001,
        restrict: 'A',
        link: function(scope, element, attrs) {

            element.css({
                'opacity': 0
            });

            // Fetching data attributes
            var transitionDuration = attrs.transitionDuration;
            console.log(transitionDuration);

            var showLoader = element[0].hasAttribute('show-loader');
            console.log(showLoader);

            var loaders = [];

            if(showLoader) {
                var elem = element[0];
                var parent = elem.parentNode;
                var wrapper = document.createElement('div');
                wrapper.setAttribute('style', 'position: relative; display: inline-block; background-color: #eee;');
                parent.replaceChild(wrapper, elem);
                wrapper.appendChild(elem);

                var loaderElement = document.createElement('img');
                loaderElement.src = 'http://www.fotos-lienzo.es/media/aw_searchautocomplete/default/loading.gif';
                loaderElement.style = 'width: 5%; height: auto; position: absolute; left: 47.5%; top: 50%;';
                loaderElement.className = 'img-loader';
                wrapper.appendChild(loaderElement);

                loaders = document.getElementsByClassName('img-loader');
            }

            element.bind('load', function() {
                console.log("img loaded");

                while (loaders[0]) {
                    loaders[0].parentNode.removeChild(loaders[0]);
                }
               

                element.css({
                    'transition': ' all '+ transitionDuration+'s' +' ease-in-out ',
                    'opacity': 1
                });
            });

        }
    };
});