import { observable, action, computed } from 'mobx';
import uuid from 'node-uuid';
import _ from 'lodash';
import utils from '../core/utils';


class Panel {
	id = null; // immutable
	store = null;

	@observable canvasWidth = 0;
	@observable canvasHeight = 0;

	@action.bound updateCanvasSize (dimensions) {
		this.canvasWidth = dimensions.width;
		this.canvasHeight = dimensions.height;
	}

	// drawing state
	@observable isDrawing = false;
	@action.bound draw () {
		this.isDrawing = true;
	}
	@action.bound pause () {
		this.isDrawing = false;
	}

	// UI state
	@observable currTab = '';
	@action selectTab (tab) {
		this.currTab = tab;
	}

	// settings
	@observable innerCircleSizePercentage = 50;
	@action setInnerCircleSizePercentage (value) {
		this.innerCircleSizePercentage = value;
	}
	@observable pointFromCenterPercentage = 50;
	@action setPointFromCenterPercentage (value) {
		this.pointFromCenterPercentage = value;
	}
	@computed get pointFromCenterInPixels () {
		let px = parseInt((this.innerRadiusInPixels / 100) * this.pointFromCenterPercentage, 10);
		return px;
	}

	@observable speed = 150;
	@action setSpeed (value) {
		this.speed = value;
	}
	@observable lineThickness = 1;
	@observable lineTransparency = 0.5;
	@observable lineColorHex = null;
	@observable lineColor = null;

	@computed get outerRadiusInPixels () {
		return (this.canvasWidth / 2) - 20;
	}

	@computed get innerRadiusInPixels () {
		return parseInt((this.outerRadiusInPixels / 100) * this.innerCircleSizePercentage, 10);
	}

	// exceedingly crumby way of determining when we need to stop the spirograph
	@computed get maxLoops () {
		let maxLoops = this.innerRadiusInPixels / utils.getGreatestCommonDivisor(this.outerRadiusInPixels, this.innerRadiusInPixels);
		return maxLoops;
	}

// const getLineTransparency = () => {
// 	var lineTransparency = parseFloat($(this.$lineTransparency).val());
// 	return lineTransparency.toFixed(2);
// }

	// our constructor
	constructor(store, params, id = uuid.v4()) {
		this.store = store;
		this.id = id;

		_.each(Object.keys(params), (key) => {
			this[key] = params[key];
		});
	}
}

export default Panel;