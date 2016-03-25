"use strict";
var ngImageAppear = angular.module('ngImageAppear', []).directive('ngImageAppear', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            // Hiding element from view during page load
            element.css({
                'opacity': 0
            });

            // Element attribute declarations
            var transitionDuration, 
                showLoader,
                loaderBgColor;

            // Fetching element attributes
            transitionDuration = attrs.transitionDuration; // Get transition duration
            console.log(transitionDuration);
            showLoader = element[0].hasAttribute('show-loader'); // Check if loader is to be shown
            console.log(showLoader);
            loaderBgColor = attrs.loaderBgColor; // Get loader wrapper bg color
            console.log(loaderBgColor); 

            // Container for loader element
            var loader = [];

            // DOM manipulation element declarations
            var imgElement, 
                parentElement, 
                imgWrapper, 
                loaderElement,
                wrapperStyles = 'position: relative; display: inline-block; background-color: '+loaderBgColor+';';

            // Function to create image wrapper element
            function generateImageWrapper() {
                imgElement = element[0]; // Get image element
                parentElement = imgElement.parentNode; // Find parent of image element

                imgWrapper = document.createElement('div'); // Create wrapper element for image
                imgWrapper.setAttribute('style', wrapperStyles); // Set default CSS for wrapper element

                parentElement.replaceChild(imgWrapper, imgElement); // Replace actual image element with wrapper element
                imgWrapper.appendChild(imgElement); // Append actual image element to wrapper element
                // This will wrap the image element into a parent div tag used for showing the loader
            };

            // Function to render loader
            function renderLoader() {
                loaderElement = document.createElement('img'); 
                loaderElement.src = 'http://www.fotos-lienzo.es/media/aw_searchautocomplete/default/loading.gif';
                loaderElement.style = 'width: 5%; height: auto; position: absolute; left: 47.5%; top: 45%;';
                loaderElement.className = 'img-loader';
                imgWrapper.appendChild(loaderElement);
            };

            // Show loader if attribute is present
            if(showLoader) {
                generateImageWrapper(); // Create image wrapper for loader
                renderLoader(); // Show loader
                loader = document.getElementsByClassName('img-loader'); // Get loader element
            }

            // Detect image load event
            element.bind('load', function() {
                console.log("img loaded");

                // Remove loader element if present
                while (loader[0]) {
                    loader[0].parentNode.removeChild(loader[0]);
                    imgWrapper.style.backgroundColor = '';
                    imgWrapper.style.position = '';
                }
                
                // Add CSS3 animation/transition to image element
                element.css({
                    'transition': ' all '+ transitionDuration+'s' +' ease-in-out ',
                    'opacity': 1,
                    'animation': 'fadeInUp .8s'
                });
            });
        }
    };
});