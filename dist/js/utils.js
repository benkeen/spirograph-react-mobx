"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * General helper methods. Mostly needed by the spirograph component.
 */

var getMaxLoops = function getMaxLoops(innerRadiusInPixels, outerRadiusInPixels) {
	console.log(innerRadiusInPixels, outerRadiusInPixels);
	return 1;

	//	return innerRadiusInPixels / getGreatestCommonDivisor(outerRadiusInPixels, innerRadiusInPixels);
};

var getGreatestCommonDivisor = function getGreatestCommonDivisor(a, b) {
	var t;
	while (b != 0) {
		b = a % (t = b);
		a = t;
	}
	return a;
};

var getOuterRadiusInPixels = function getOuterRadiusInPixels(canvasWidth) {
	// this.canvas.width
	return canvasWidth / 2 - 20;
};

var getInnerRadiusInPixels = function getInnerRadiusInPixels(outerRadiusInPixels, innerCircleSizePercentage) {
	return parseInt(outerRadiusInPixels / 100 * innerCircleSizePercentage, 10);
};

var getPointFromCenterInPixels = function getPointFromCenterInPixels(innerRadiusInPixels, pointFromCenterPercentage) {
	return parseInt(innerRadiusInPixels / 100 * pointFromCenterPercentage, 10);
};

// const getLineTransparency = () => {
// 	var lineTransparency = parseFloat($(this.$lineTransparency).val());
// 	return lineTransparency.toFixed(2);
// }


exports.default = {
	getMaxLoops: getMaxLoops,
	getOuterRadiusInPixels: getOuterRadiusInPixels,
	getInnerRadiusInPixels: getInnerRadiusInPixels,
	getPointFromCenterInPixels: getPointFromCenterInPixels,
	getGreatestCommonDivisor: getGreatestCommonDivisor
};
//# sourceMappingURL=utils.js.map
