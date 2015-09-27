/* global Path2D */
var applyPath = require('./apply-path');

/**
 * @function roundRect - creates a Path2D instance of rounded rectangle
 * @param {Number} x - top left corner x coordinate
 * @param {Number} y - top left corner y coordinate
 * @param {Object} style - css-like style object (see in ./apply-path)
 *
 * @returns {Path2D} - Path2D instance
 */

module.exports = function make(x, y, style) {
	var path = new Path2D();
	applyPath(path, x, y, style);
	return path;
};
