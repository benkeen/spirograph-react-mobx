'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = require('mobx-react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../core/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spirograph = function (_React$Component) {
	_inherits(Spirograph, _React$Component);

	function Spirograph(props) {
		_classCallCheck(this, Spirograph);

		var _this = _possibleConstructorReturn(this, (Spirograph.__proto__ || Object.getPrototypeOf(Spirograph)).call(this, props));

		_this.updateCanvasSize = _this.updateCanvasSize.bind(_this);
		return _this;
	}

	_createClass(Spirograph, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.updateCanvasSize();
		}

		// when the component is mounted or the screen is resized, we need to recompute the width of the canvas area HERE. 
		// That updates the information in the panel store.

	}, {
		key: 'updateCanvasSize',
		value: function updateCanvasSize() {
			var canvas = _reactDom2.default.findDOMNode(this.refs.spiroCanvas);
			this.props.updateCanvasSize({
				width: canvas.width,
				height: canvas.height
			});
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			if (nextProps.isDrawing && !this.props.isDrawing) {
				this.draw();
			}

			return false;
		}
	}, {
		key: 'draw',
		value: function draw() {
			var _this2 = this;

			console.log(this.props);

			// meh... there's no WAY I'm storing references to this component's DOM content in the sodding store...
			this.theta = 0;
			this.canvas = _reactDom2.default.findDOMNode(this.refs.spiroCanvas);
			this.ctx = this.canvas.getContext('2d');

			this.interval = setInterval(function () {
				_this2.nextLine();
			}, 30);
		}
	}, {
		key: 'batchedLineTo',
		value: function batchedLineTo() {
			var _props = this.props,
			    outerRadiusInPixels = _props.outerRadiusInPixels,
			    innerRadiusInPixels = _props.innerRadiusInPixels,
			    pointFromCenterInPixels = _props.pointFromCenterInPixels;

			var val1 = this.theta * (1 - outerRadiusInPixels / innerRadiusInPixels);
			var val2 = innerRadiusInPixels - outerRadiusInPixels;
			var x = Math.cos(this.theta) * val2 + pointFromCenterInPixels * Math.cos(val1);
			var y = Math.sin(this.theta) * val2 + pointFromCenterInPixels * Math.sin(val1);
			this.ctx.moveTo(x, y);

			this.theta += 0.01;
			val1 = this.theta * (1 - outerRadiusInPixels / innerRadiusInPixels);
			val2 = innerRadiusInPixels - outerRadiusInPixels;
			x = Math.cos(this.theta) * val2 + pointFromCenterInPixels * Math.cos(val1);
			y = Math.sin(this.theta) * val2 + pointFromCenterInPixels * Math.sin(val1);
			this.ctx.lineTo(x, y);
		}
	}, {
		key: 'onComplete',
		value: function onComplete() {
			clearInterval(this.interval);
		}
	}, {
		key: 'nextLine',
		value: function nextLine() {
			var _props2 = this.props,
			    lineThickness = _props2.lineThickness,
			    lineColor = _props2.lineColor,
			    lineTransparency = _props2.lineTransparency,
			    speed = _props2.speed,
			    maxLoops = _props2.maxLoops;


			this.ctx.beginPath();
			this.ctx.lineWidth = lineThickness;
			this.ctx.strokeStyle = 'rgba(' + lineColor.r + ', ' + lineColor.g + ', ' + lineColor.b + ', ' + lineTransparency + ')';

			for (var i = 0; i < speed; i++) {
				if (this.theta / Math.PI / 2 > maxLoops) {
					break;
				}
				this.batchedLineTo();
			}
			this.ctx.stroke();

			if (this.theta / (Math.PI * 2) > maxLoops) {
				console.log('complete.');
				this.onComplete();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('canvas', { className: 'spiroCanvas', ref: 'spiroCanvas' });
		}
	}]);

	return Spirograph;
}(_react2.default.Component);

exports.default = Spirograph;
//# sourceMappingURL=spirograph.js.map
