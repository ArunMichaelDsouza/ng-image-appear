<img src="https://github.com/ArunMichaelDsouza/ng-image-appear/raw/master/icon.png" width="250" height="auto" alt="ng-image-appear icon"/>

# ng-image-appear [![npm version](https://badge.fury.io/js/ng-image-appear.svg)](https://badge.fury.io/js/ng-image-appear) [![NPM Downloads](https://img.shields.io/npm/dm/ng-image-appear.svg?style=flat-square)](https://www.npmjs.com/package/ng-image-appear) [![Latest Stable Version](https://img.shields.io/bower/v/ng-image-appear.svg?style=flat-square)](http://bower.io/search/?q=ng-image-appear) [![](https://data.jsdelivr.com/v1/package/npm/ng-image-appear/badge)](https://www.jsdelivr.com/package/npm/ng-image-appear)
AngularJS Module to make images appear with transition as they load. 
> Wraps the ``img`` tag within a wrapper and adds a gif loader in between. No more ugly-looking progressively loading images!

[http://arunmichaeldsouza.github.io/ng-image-appear/](http://arunmichaeldsouza.github.io/ng-image-appear/)

### [Demo on CodePen](http://codepen.io/amdsouza92/full/aNQeWW/)

![ng-image-appear](https://raw.githubusercontent.com/ArunMichaelDsouza/ng-image-appear/master/demo/images/intro.gif)

This project has also been ported to ReactJS - [react-image-appear](https://github.com/ArunMichaelDsouza/react-image-appear).

<br/>

## Installation

#### CDN 

Use ng-image-appear directly from jsdelivr CDN

```html
https://cdn.jsdelivr.net/npm/ng-image-appear@1.11.11/dist/ng-image-appear.min.js
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

<br/>

## Usage

Include the directive with an ``img`` tag in your HTML file with any of the available [options](#options).

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

<br/>

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

<br/>

#### ``bg-color``
Adds a background color to the image wrapper element. 

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	bg-color="#50a4e2"
/> 
```

![bg-color](https://raw.githubusercontent.com/ArunMichaelDsouza/ng-image-appear/master/demo/images/bg-color.gif)

<br/>

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

![no-loader](https://raw.githubusercontent.com/ArunMichaelDsouza/ng-image-appear/master/demo/images/no-loader.gif)

<br/>

#### ``responsive``
Use this option to make the image wrapper responsive. In that case the width of the wrapper is calculated in ``%``, otherwise it is calculated in ``px``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	responsive
/> 
```

![responsive](https://raw.githubusercontent.com/ArunMichaelDsouza/ng-image-appear/master/demo/images/responsive.gif)

<br/>

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

![placeholder](https://raw.githubusercontent.com/ArunMichaelDsouza/ng-image-appear/master/demo/images/placeholder.gif)

You can override the default placeholder background and add your own by passing an image link to this option.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	placeholder="http://getuikit.com/docs/images/placeholder_600x400.svg"
/> 
```

![placeholder-custom](https://github.com/ArunMichaelDsouza/ng-image-appear/raw/master/demo/images/placeholder-custom.gif)

<br/>

#### ``placeholder-class``
Use this option to add a CSS class to the placeholder background.

Example - 
```html
<style>
	.placeholder-css {
		background-size: contain;
	}
</style>

<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	placeholder
	placeholder-class="placeholder-css"
/> 
```

<br/>

#### ``placeholder-style``
Add CSS styles to the placeholder background using this option.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	placeholder
	placeholder-style="background-size: contain;"
/> 
```

<br/>

#### ``loader-img``
Add a custom ``gif`` loader in the image wrapper. Default ``width`` and ``height`` of the loader is ``40px``. The image must be a ``gif``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	loader-img="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
/> 
```

![loader-img](https://raw.githubusercontent.com/ArunMichaelDsouza/ng-image-appear/master/demo/images/loader-img.gif)

<br/>

#### ``loader-class``
Use this option to add a CSS class to the loader element.

Example - 
```html
<style>
	.loader-css {
		width: 60px; 
		height: 60px; 
		left: calc((100% - 60px) / 2); 
		top: calc((100% - 60px) / 2);
	}
</style>

<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	loader-class="loader-css"
/> 
```

<br/>

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

<br/>

#### ``animation``
Add a CSS3 powered animation to the image as it appears. Default animation is ``fadeIn``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	animation="bounceIn"
/> 
```

![animation](https://raw.githubusercontent.com/ArunMichaelDsouza/ng-image-appear/master/demo/images/animation.gif)

ng-image-appear has the following built-in CSS3 animations - 

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

<br/>

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

<br/>

#### ``easing``

Specifies the timing-function for the CSS3 powered transition/animation. Default value is ``ease-in-out``.

Example - 
```html
<img 
	src="https://newevolutiondesigns.com/images/freebies/tropical-beach-background-8.jpg" 
	ng-image-appear
	animation="bounceIn"
	easing="ease-out"
/> 
```

<br/>

## Contributors

| [<img src="https://avatars3.githubusercontent.com/u/4924614" width="100px;"/><br /><sub><b>Arun Michael Dsouza</b></sub>](https://github.com/ArunMichaelDsouza)<br />| [<img src="https://avatars3.githubusercontent.com/u/606978" width="100px;"/><br /><sub><b>Travis Vignon</b></sub>](https://github.com/lookitsatravis)<br />| [<img src="https://avatars0.githubusercontent.com/u/15611832" width="100px;"/><br /><sub><b>Lukas Drgon</b></sub>](https://github.com/LukasDrgon)<br /> |
| :---: | :---: | :---: |

<br/>

## License

MIT Licensed

Copyright (c) 2016 Arun Michael Dsouza (amdsouza92@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
