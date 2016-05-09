# ng-image-appear [![npm version](https://badge.fury.io/js/ng-image-appear.svg)](https://badge.fury.io/js/ng-image-appear) [![NPM Downloads](https://img.shields.io/npm/dm/ng-image-appear.svg?style=flat-square)](https://www.npmjs.com/package/ng-image-appear) [![Latest Stable Version](https://img.shields.io/bower/v/ng-image-appear.svg?style=flat-square)](http://bower.io/search/?q=ng-image-appear)
AngularJS Module to make images appear with transition as they load. 

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

Include the directive with the ``img`` tag in your HTML file with any of the available options.

Include the ``src`` and include the ``ng-image-appear`` directive as an ``attribute``.

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

## License

MIT Licensed

Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.