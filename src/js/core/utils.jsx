/**
 * General helpers.
 */

const getGreatestCommonDivisor = (a, b) => {
	var t;
	while (b != 0) {
		b = a % (t = b);
		a = t;
	}
	return a;
}


export default {
	getGreatestCommonDivisor
};