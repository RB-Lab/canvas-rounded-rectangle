var applyPath = require('./apply-path');
var applyStyles = require('canvas-styles').applyStyles;

/**
 * @function draw - draws rounded rectangle on canvas
 * @param {CanvasRenderingContext2D} ctx - canvas 2D context
 * @param {Number} x - top left corner x coordinate
 * @param {Number} y - top left corner y coordinate
 * @param {Object} style - css-like style object (see in ./apply-path)
 */

module.exports = function draw(ctx, x, y, style){
	ctx.beginPath();
	applyPath(ctx, x, y, style);
	applyStyles(ctx, style);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
};
