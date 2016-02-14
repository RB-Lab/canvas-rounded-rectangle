# Canvas Rounded Rectangle
## Geometry type for [canvas-tree](https://www.npmjs.com/package/canvas-tree)

### Creates Path2D object represented rounded rectangle

#### Installation

```bash
    $ npm install --save canvas-rounded-rectangle
```

#### Usage

```javascript

    import roundedRectangle from 'canvas-rounded-rectangle';
    import createCanvas from 'canvas-tree';

    const style = {
        top: 60,
        left: 80,
        width: 100,
        height: 50,
        stroke: '#3333ff',
        fill: '#fffaaa',
        borderRadius: 5,
        strokeWidth: 2,
        hover: {
            stroke: '#ff3333'
        }
    }

    const $canvas = document.getElementById('canvas');

    // as geometry type for
    const canvas = createCanvas($canvas);

    canvas.update({
        children: [
            {
                geometry: roundedRectangle,
                children: [],
                style
            }
        ]
    });

    // standalone
    const path = roundedRectangle(style);
    const ctx = $canvas.getContext('2d');
    ctx.lineWidth = style.strokeWidth;
    ctx.strokeStyle = style.stroke;
    ctx.fill =  style.fill;
    ctx.fill(path);
    ctx.stroke(path);
    // if(ctx.isPointInPath(path, x, y)) ... etc...

```
