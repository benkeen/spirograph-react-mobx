/**
 * General helper methods.
 */

const getGreatestCommonDivisor = (a, b) => {
	var t;
	while (b != 0) {
		b = a % (t = b);
		a = t;
	}
	return a;
}

// const getLineTransparency = () => {
// 	var lineTransparency = parseFloat($(this.$lineTransparency).val());
// 	return lineTransparency.toFixed(2);
// }


export default {
	getGreatestCommonDivisor
};