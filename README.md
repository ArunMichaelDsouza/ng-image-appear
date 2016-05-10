# ng-image-appear [![npm version](https://badge.fury.io/js/ng-image-appear.svg)](https://badge.fury.io/js/ng-image-appear) [![NPM Downloads](https://img.shields.io/npm/dm/ng-image-appear.svg?style=flat-square)](https://www.npmjs.com/package/ng-image-appear) [![Latest Stable Version](https://img.shields.io/bower/v/ng-image-appear.svg?style=flat-square)](http://bower.io/search/?q=ng-image-appear)
AngularJS Module to make images appear with transition as they load. 
> Wraps the ``img`` tag within a wrapper and adds a gif loader in between. No more ugly-looking progressively loading images!

### [Demo on CodePen](http://codepen.io/amdsouza92/full/aNQeWW/)

## Installation

#### CDN 

Use ng-image-appear directly from jsdelivr CDN

```html
https://cdn.jsdelivr.net/angular.image-appear/1.5.4/ng-image-appear.min.js
```

#### via bower

You can install the package using bower. Make sure you have bower installed, then run : 

```html
bower install ng-image-appear
```

#### via npm

```html
npm install ng-image-appear
```

Or, [download](https://github.com/ArunMichaelDsouza/ng-image-appear/releases) the latest version and include ``ng-image-appear.min.js`` to your project.

Add ``ngImageAppear`` as a dependency in your angular app module.

## Usage

Include the directive with an ``img`` tag in your HTML file with any of the available options.

Include the ``src`` and the ``ng-image-appear`` directive as an ``attribute``.

Example - 
```javascript
var myApp = angular.module('myApp', ['ngImageAppear']);

myApp.controller('appCtrl', ['$scope', function($scope) {
				
}]);
```
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear 
	responsive
	transition-duration="1s"
	animation="fillIn"
	animation-duration="1s"
	easing="ease-out"
/> 
```

## Options

#### ``transition-duration``
This parameter specifies the transition duration for the image to appear. Default value is ``700ms``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	transition-duration="4s"
/> 
```

#### ``bg-color``
Adds a background color to the image wrapper element. 

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	bg-color="#000"
/> 
```

#### ``no-loader``
If this option is specified, then no gif loader is shown in the image wrapper element.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	no-loader
/> 
```

#### ``responsive``
Use this option to make the image wrapper responsive. In that case the width of the wrapper is calculated in ``%``, otherwise its calculated in ``px``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	responsive
/> 
```

#### ``placeholder``
Adds a default placeholder in the image wrapper background.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	placeholder
/> 
```

You can override the default placeholder background and add your own by passing an image link to this option.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	placeholder="http://getuikit.com/docs/images/placeholder_600x400.svg"
/> 
```

#### ``placeholder-class``
Use this option to add a CSS class to the placeholder background.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	placeholder
	placeholder-class="placeholder-css"
/> 
```

#### ``placeholder-style``
Add CSS styles to the placeholder background using this option.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	placeholder
	placeholder-styles="background-size: contain;"
/> 
```

#### ``loader-img``
Add a custom ``gif`` loader in the image wrapper. Default ``width`` and ``height`` of the loader is ``40px``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	loader-img="http://www.arabianbusiness.com/skins/ab.main/gfx/loading_spinner.gif"
/> 
```

#### ``loader-class``
Use this option to add a CSS class to the loader element.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	loader-class="loader-css"
/> 
```

#### ``loader-style``
Add CSS styles to the loader element using this option.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	loader-styles="width: 60px; height: 60px; left: calc((100% - 60px) / 2); top: calc((100% - 60px) / 2);"
/> 
```

#### ``animation``
Add a CSS3 powered animation to the image as it appears. Default animation is ``fadeIn``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	animation="fillIn"
/> 
```

The following CSS3 animations are built-in to ng-image-appear - 

##### ``fadeIn (default)``

##### ``fadeInUp``

##### ``fadeInRight``

##### ``fadeInDown``

##### ``fadeInLeft``

##### ``bounceIn``

##### ``bounceInUp``

##### ``bounceInRight``

##### ``bounceInDown``

##### ``bounceInLeft``

##### ``flipInX``

##### ``flipInY``

##### ``zoomIn``

##### ``blurIn``

##### ``blurInUp``

##### ``blurInRight``

##### ``blurInDown``

##### ``blurInLeft``

##### ``fillIn``

#### ``animation-duration``

This parameter specifies the animation duration for the image to appear. Default value is ``700ms``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	animation="fillIn"
	animation-duration="2s"
/> 
```

#### ``easing``

Specify the timing-function for the CSS3 powered transition/animation. Default value is ``ease-in-out``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	animation="bounceIn"
	easing="ease-out"
/> 
```

## License

MIT Licensed

Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.