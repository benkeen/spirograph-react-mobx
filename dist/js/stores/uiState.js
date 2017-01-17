'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

var _mobx = require('mobx');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

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

(0, _mobx.useStrict)(true);

// One Store To Rule Them All.
var UIStateStore = (_class = function () {

    // a lot of the computation of the spirographs need to know the height
    function UIStateStore() {
        _classCallCheck(this, UIStateStore);

        _initDefineProp(this, 'panels', _descriptor, this);

        (0, _jquery2.default)(window).resize(function () {
            //            this.updateWindowDimensions();
        });
    }

    _createClass(UIStateStore, [{
        key: 'addPanel',
        value: function addPanel(params) {
            var newPanel = new _panel2.default(this, params);
            this.panels.push(newPanel);
        }
    }, {
        key: 'removePanel',
        value: function removePanel(panelID) {
            console.log(panelID);
            //this.panels.splice(this.panels.indexOf(panel), 1);
        }
    }, {
        key: 'drawAll',
        value: function drawAll() {
            _.each(this.panels, function (panel) {
                panel.draw();
            });
        }
    }]);

    return UIStateStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'panels', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class.prototype, 'addPanel', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'addPanel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removePanel', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'removePanel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'drawAll', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'drawAll'), _class.prototype)), _class);

// exports a singleton store

exports.default = new UIStateStore();
//# sourceMappingURL=uiState.js.map
