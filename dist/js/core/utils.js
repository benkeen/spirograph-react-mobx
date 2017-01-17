"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * General helper methods.
 */

var getGreatestCommonDivisor = function getGreatestCommonDivisor(a, b) {
	var t;
	while (b != 0) {
		b = a % (t = b);
		a = t;
	}
	return a;
};

var getPointFromCenterInPixels = function getPointFromCenterInPixels(innerRadiusInPixels, pointFromCenterPercentage) {
	return parseInt(innerRadiusInPixels / 100 * pointFromCenterPercentage, 10);
};

// const getLineTransparency = () => {
// 	var lineTransparency = parseFloat($(this.$lineTransparency).val());
// 	return lineTransparency.toFixed(2);
// }


exports.default = {
	getPointFromCenterInPixels: getPointFromCenterInPixels,
	getGreatestCommonDivisor: getGreatestCommonDivisor
};
//# sourceMappingURL=utils.js.map
