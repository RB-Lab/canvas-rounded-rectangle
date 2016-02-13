
/**
 * @function roundedRectangle - creates Path2D object represented rounded rectangle
 * @param {Object} style - css-like style object
 * @param {Number} [style.top = 0] - top coordinate
 * @param {Number} [style.left = 0] - left coordinate
 * @param {Number} [style.width = 0] - rectangle width
 * @param {Number} [style.height = 0] - rectangle height
 * @param {Number} [style.borderRadius = 0] - radius of the coreners
 * @returns {Path2D} - rounded rectangle
 */
 /* global Path2D */

export default function roundedRectangle({
	top = 0,
	left = 0,
	width = 0,
	height = 0,
	borderRadius = 0
}) {
	const path = new Path2D();
	path.moveTo(left + borderRadius, top);
	path.lineTo(left + width - borderRadius, top);
	path.quadraticCurveTo(left + width, top, left + width, top + borderRadius);
	path.lineTo(left + width, top + height - borderRadius);
	path.quadraticCurveTo(left + width, top + height, left + width - borderRadius, top + height);
	path.lineTo(left + borderRadius, top + height);
	path.quadraticCurveTo(left, top + height, left, top + height - borderRadius);
	path.lineTo(left, top + borderRadius);
	path.quadraticCurveTo(left, top, left + borderRadius, top);
	return path;
}
