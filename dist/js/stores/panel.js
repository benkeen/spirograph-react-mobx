'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

var _mobx = require('mobx');

var _nodeUuid = require('node-uuid');

var _nodeUuid2 = _interopRequireDefault(_nodeUuid);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../core/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Panel = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, (_class = function () {
    _createClass(Panel, [{
        key: 'updateCanvasSize',
        value: function updateCanvasSize(dimensions) {
            this.canvasWidth = dimensions.width;
            this.canvasHeight = dimensions.height;
        }

        // drawing state
        // immutable

    }, {
        key: 'draw',
        value: function draw() {
            this.isDrawing = true;
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.isDrawing = false;
        }

        // UI state

    }, {
        key: 'selectTab',
        value: function selectTab(tab) {
            this.currTab = tab;
        }

        // settings

    }, {
        key: 'setInnerCircleSizePercentage',
        value: function setInnerCircleSizePercentage(value) {
            this.innerCircleSizePercentage = value;
        }
    }, {
        key: 'setPointFromCenterPercentage',
        value: function setPointFromCenterPercentage(value) {
            this.pointFromCenterPercentage = value;
        }
    }, {
        key: 'setSpeed',
        value: function setSpeed(value) {
            this.speed = value;
        }
    }, {
        key: 'outerRadiusInPixels',
        get: function get() {
            return this.canvasWidth / 2 - 20;
        }
    }, {
        key: 'innerRadiusInPixels',
        get: function get() {
            return parseInt(this.outerRadiusInPixels / 100 * this.innerCircleSizePercentage, 10);
        }

        // exceedingly crumby way of determining when we need to stop the spirograph

    }, {
        key: 'maxLoops',
        get: function get() {
            console.log(this.innerRadiusInPixels, this.outerRadiusInPixels);
            return this.innerRadiusInPixels / _utils2.default.getGreatestCommonDivisor(this.outerRadiusInPixels, this.innerRadiusInPixels);
        }

        // @observable pointFromCenterInPixels = null;

        // our constructor

    }]);

    function Panel(store, params) {
        var _this = this;

        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _nodeUuid2.default.v4();

        _classCallCheck(this, Panel);

        this.id = null;
        this.store = null;

        _initDefineProp(this, 'canvasWidth', _descriptor, this);

        _initDefineProp(this, 'canvasHeight', _descriptor2, this);

        _initDefineProp(this, 'isDrawing', _descriptor3, this);

        _initDefineProp(this, 'currTab', _descriptor4, this);

        _initDefineProp(this, 'innerCircleSizePercentage', _descriptor5, this);

        _initDefineProp(this, 'pointFromCenterPercentage', _descriptor6, this);

        _initDefineProp(this, 'speed', _descriptor7, this);

        _initDefineProp(this, 'lineThickness', _descriptor8, this);

        _initDefineProp(this, 'lineTransparency', _descriptor9, this);

        _initDefineProp(this, 'lineColorHex', _descriptor10, this);

        _initDefineProp(this, 'lineColor', _descriptor11, this);

        this.store = store;
        this.id = id;

        _lodash2.default.each(Object.keys(params), function (key) {
            _this[key] = params[key];
        });
    }

    return Panel;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'canvasWidth', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'canvasHeight', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'updateCanvasSize', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'updateCanvasSize'), _class.prototype), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'isDrawing', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'draw', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'draw'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pause', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'pause'), _class.prototype), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'currTab', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _applyDecoratedDescriptor(_class.prototype, 'selectTab', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'selectTab'), _class.prototype), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'innerCircleSizePercentage', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 50;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setInnerCircleSizePercentage', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setInnerCircleSizePercentage'), _class.prototype), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'pointFromCenterPercentage', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 50;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setPointFromCenterPercentage', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setPointFromCenterPercentage'), _class.prototype), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'speed', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 150;
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setSpeed', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setSpeed'), _class.prototype), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'lineThickness', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 1;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'lineTransparency', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return 0.5;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'lineColorHex', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return '#0044cc';
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'lineColor', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {
            r: 50,
            g: 150,
            b: 255
        };
    }
}), _applyDecoratedDescriptor(_class.prototype, 'outerRadiusInPixels', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'outerRadiusInPixels'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'innerRadiusInPixels', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'innerRadiusInPixels'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'maxLoops', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'maxLoops'), _class.prototype)), _class));
exports.default = Panel;
//# sourceMappingURL=panel.js.map
