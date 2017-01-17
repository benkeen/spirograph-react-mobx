import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import _ from 'lodash';
import utils from '../core/utils';


class Spirograph extends React.Component {

	constructor (props) {
		super(props);
		this.updateCanvasSize = this.updateCanvasSize.bind(this);
	}

	componentDidMount () {
		this.updateCanvasSize();
	}

	// when the component is mounted or the screen is resized, we need to recompute the width of the canvas area HERE. 
	// That updates the information in the panel store.
	updateCanvasSize() {
		const canvas = ReactDOM.findDOMNode(this.refs.spiroCanvas);

		let cs = getComputedStyle(canvas);
		canvas.height = parseInt(cs.getPropertyValue('height'), 10);
		canvas.width = parseInt(cs.getPropertyValue('width'), 10);

		this.props.updateCanvasSize({ 
			width: canvas.width,
			height: canvas.height
		});
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.isDrawing && !this.props.isDrawing) {
			this.draw();
		}

		return false;
	}

	draw () {
		// meh... there's no WAY I'm storing references to this component's DOM content in the sodding store...
		this.theta = 0;
		this.canvas = ReactDOM.findDOMNode(this.refs.spiroCanvas);
		this.ctx = this.canvas.getContext('2d');

		this.ctx.centerX = this.canvas.width / 2;
		this.ctx.centerY = this.canvas.height / 2;

		// move the center to the middle of the canvas and invert the axis so it appears to
		// draw the spirograph in the right order
		this.ctx.translate(this.ctx.centerX, this.ctx.centerY);
		this.ctx.scale(1, -1);

console.log(this.props);

		this.interval = setInterval(() => {
			this.nextLine();
		}, 30);
	}

	batchedLineTo () {
		const { outerRadiusInPixels, innerRadiusInPixels, pointFromCenterInPixels } = this.props;

		let val1 = this.theta * (1 - outerRadiusInPixels / innerRadiusInPixels);
		let val2 = innerRadiusInPixels - outerRadiusInPixels;
		let x = Math.cos(this.theta) * val2 + pointFromCenterInPixels * Math.cos(val1);
		let y = Math.sin(this.theta) * val2 + pointFromCenterInPixels * Math.sin(val1);
		this.ctx.moveTo(x, y);

		this.theta += 0.01;
		val1 = this.theta * (1 - outerRadiusInPixels / innerRadiusInPixels);
		val2 = innerRadiusInPixels - outerRadiusInPixels;
		x = Math.cos(this.theta) * val2 + pointFromCenterInPixels * Math.cos(val1);
		y = Math.sin(this.theta) * val2 + pointFromCenterInPixels * Math.sin(val1);
		this.ctx.lineTo(x, y);
	}

	onComplete () {
		clearInterval(this.interval);
	}

	nextLine () {
		const { lineThickness, lineColor, lineTransparency, speed, maxLoops } = this.props;

		this.ctx.beginPath();
		this.ctx.lineWidth = lineThickness;
		this.ctx.strokeStyle = `rgba(${lineColor.r}, ${lineColor.g}, ${lineColor.b}, ${lineTransparency})`;

		for (var i=0; i<speed; i++) {
			if (this.theta / Math.PI / 2 > maxLoops) {
				break;
			}
			this.batchedLineTo();
		}
		this.ctx.stroke();

		if (this.theta / (Math.PI * 2) > maxLoops) {
			console.log('complete.')
			this.onComplete();
		}
	}

	render () {
//		const { canvasHeight, canvasWidth } = this.props;  
// width={width} height={height}
		return (
			<canvas className="spiroCanvas" ref="spiroCanvas"></canvas>
		);
	}
}


export default Spirograph;
