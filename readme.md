# Canvas Rounded Rectangle
### Draw rounded rectangle on canvas

Use it with Browserify or Webpack.

#### Installation

```bash
	$ npm install --save canvas-rounded-rectangle
```

#### Usage

```javascript

	var roundRect = require('canvas-rounded-rectangle');
	
	var myRectStyle = {
		fill: '#f4f4f4',
		stroke: '#122292',
		strokeWidth: 1,
		strokeStyle: 'dashed',
		borderRadius: 5,
		height: 60,
		width: 150
	}
	
	var ctx = document.getElementById('canvas').getContext('2D');
	
	roundRect.draw(ctx, 20, 20, myRectStyle); // and we've got a rounded rectangle on canvas
	
	// OR, if browser supports Path2D
	
	if('Path2D' in window){
		var applyStyles = require('canvas-styles').applyStyles;

		var rect = roundRect.make(20, 100, myRectStyle); // rect now is Path2D object
		applyStyles(ctx, myRectStyle);
		ctx.stroke(path);
		ctx.fill(path); // and we've also got a rounded rectangle on canvas

		// but now we can also do something like that:
		console.log(ctx.isPointInPath(rect, 100, 120)); // true
	}
	
```