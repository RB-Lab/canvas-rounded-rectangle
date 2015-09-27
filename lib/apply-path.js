/**
 * @function applyPath - performs all ncesessary manipulations to make a rounded rectangle path
 * @param {CanvasRenderingContext2D|Path2D} path - canvas 2D context OR instance of Path2D
 * @param {Number} x - top left corner x coordinate
 * @param {Number} y - top left corner y coordinate
 * @param {Object} style - css-like style object
 * @param {Number} style.borderRadius - border radius
 * @param {Number} style.width - rectangle width
 * @param {Number} style.height - rectangle height
 */

module.exports = function applyPath(path, x, y, style){
	var radius = style.borderRadius || 0;
	var width = style.width || 0;
	var height = style.height || 0;

	path.moveTo(x + radius, y);
	path.lineTo(x + width - radius, y);
	path.quadraticCurveTo(x + width, y, x + width, y + radius);
	path.lineTo(x + width, y + height - radius);
	path.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	path.lineTo(x + radius, y + height);
	path.quadraticCurveTo(x, y + height, x, y + height - radius);
	path.lineTo(x, y + radius);
	path.quadraticCurveTo(x, y, x + radius, y);
};
