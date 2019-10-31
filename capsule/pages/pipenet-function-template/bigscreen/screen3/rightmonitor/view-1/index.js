(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd && define.amd.vendor !== 'dojotoolkit.org')
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/bigscreen/screen3/rightmonitor/view-1/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/lodash.isobject/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isobject/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/pipenet-core/lib/react/Dialog.js":
/*!*******************************************************!*\
  !*** ./node_modules/pipenet-core/lib/react/Dialog.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var appReactDialogId = 0;

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this, props));
    _this.dialogId = "app-react-dialog-id-".concat(appReactDialogId++);
    _this.dialogIndex = -1;
    _this.state = {
      dialogMounted: false
    };
    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var closeBtn = this.props.closeable ? 1 : 0;
      var offset = this.getOffset();
      this.dialogIndex = layer.open(_objectSpread({
        content: "<div class=\"app-react-dialog\" id=\"".concat(this.dialogId, "\" style=\"width:100%;height:100%;overflow:hidden;\"></div>")
      }, this.props, {
        closeBtn: closeBtn,
        offset: offset,
        anim: -1,
        resize: false,
        isOutAnim: false,
        type: 1,
        full: function full($layer) {},
        restore: function restore($layer) {},
        min: function min($layer) {},
        success: function success($layer, index) {
          _this2.setState({
            dialogMounted: true
          });
        },
        cancel: function cancel() {
          _this2.handleLayerClose();

          return false;
        }
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.dialogIndex !== -1) {
        layer.close(this.dialogIndex);
      }
    }
  }, {
    key: "handleLayerClose",
    value: function handleLayerClose() {
      this.props.onClose();
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var initTop = null;
      var initLeft = null; // 这么写，为了提高 options.params 的优先级

      if (typeof this.props.top === 'number' || typeof this.props.left === 'number') {
        if (typeof this.props.top === 'number') {
          initTop = this.props.top;
        }

        if (typeof this.props.left === 'number') {
          initLeft = this.props.left;
        }
      } else {
        var initCfg = $.ecity.frame.sysCfg.data.init;

        if (initCfg.defaultDialog && initCfg.defaultDialog.offset) {
          try {
            initTop = parseInt(initCfg.defaultDialog.offset.top);
            initLeft = parseInt(initCfg.defaultDialog.offset.left);
          } catch (err) {
            console.error(err);
          }
        }
      }

      var offset = 'auto';

      if (typeof initTop === 'number' && typeof initLeft === 'number') {
        offset = ["".concat(initTop, "px"), "".concat(initLeft, "px")];
      } else if (typeof initTop === 'number' && typeof initLeft !== 'number') {
        offset = "".concat(initTop, "px");
      } else if (typeof initTop !== 'number' && typeof initLeft === 'number') {
        var tmpTop = $('body').height() * 0.3;
        offset = ["".concat(tmpTop, "px"), "".concat(initLeft, "px")];
      }

      return offset;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.dialogMounted) {
        return null;
      }

      return ReactDOM.createPortal(this.props.children, document.getElementById(this.dialogId));
    }
  }]);

  return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


Dialog.defaultProps = {
  onClose: function onClose() {},
  title: '--',
  closeable: true,
  maxable: false,
  mainble: false
};

/***/ }),

/***/ "./node_modules/pipenet-core/lib/react/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/pipenet-core/lib/react/connect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connect; });
function connect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
  if (!mapStateToProps) {
    mapStateToProps = null;
  }

  if (!mapDispatchToProps) {
    mapDispatchToProps = null;
  }

  if (!mergeProps) {
    mergeProps = null;
  }

  if (!options) {
    options = {
      withRef: true
    };
  } else {
    options.withRef = true;
  }

  return window.ReactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps, options);
}

/***/ }),

/***/ "./node_modules/pipenet-core/lib/react/dynamic.js":
/*!********************************************************!*\
  !*** ./node_modules/pipenet-core/lib/react/dynamic.js ***!
  \********************************************************/
/*! exports provided: checkPluginDataModel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPluginDataModel", function() { return checkPluginDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dynamic; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var cached = {};

function registerModel(app, model) {
  model = model.default || model;

  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

var defaultLoadingComponent = function defaultLoadingComponent() {
  return null;
};

function asyncComponent(config) {
  var resolve = config.resolve;
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(DynamicComponent, _React$Component);

      function DynamicComponent() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, DynamicComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DynamicComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _this.LoadingComponent = config.LoadingComponent || defaultLoadingComponent;
        _this.state = {
          AsyncComponent: null
        };

        _this.load();

        return _this;
      }

      _createClass(DynamicComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.mounted = true;
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.mounted = false;
        }
      }, {
        key: "load",
        value: function load() {
          var _this2 = this;

          resolve().then(function (m) {
            var AsyncComponent = m.default || m;

            if (_this2.mounted) {
              _this2.setState({
                AsyncComponent: AsyncComponent
              });
            } else {
              _this2.state.AsyncComponent = AsyncComponent; // eslint-disable-line
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var AsyncComponent = this.state.AsyncComponent;
          var LoadingComponent = this.LoadingComponent;
          if (AsyncComponent) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AsyncComponent, this.props);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingComponent, this.props);
        }
      }]);

      return DynamicComponent;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
}

function checkPluginDataModel(obj, url) {
  if (_typeof(obj) !== 'object') {
    throw Error("\u529F\u80FD ".concat(url, "\uFF0C\u5BFC\u51FA\u7684\u6570\u636E\u7ED3\u6784\u5F02\u5E38"));
  }

  if (!obj.View) {
    throw Error('功能导出数据结构中，缺少 View 对象');
  }

  if (!obj.models) {
    throw Error('功能导出数据结构中，缺少 models 对象');
  }
}
function dynamic(config) {
  var _config$url = config.url,
      url = _config$url === void 0 ? '' : _config$url;
  var _window$globalCoreDic = window.globalCoreDictionary,
      app = _window$globalCoreDic.dvaApp,
      loadScript = _window$globalCoreDic.loadScript,
      loadCss = _window$globalCoreDic.loadCss;
  return asyncComponent(_objectSpread({
    resolve: function resolve() {
      loadCss("".concat(loadCss, "/style/index.css"));
      return new Promise(function (resolve) {
        loadScript(url).then(function () {
          checkPluginDataModel(window.default);
          window.default.models.forEach(function (model) {
            return registerModel(app, model);
          });
          resolve(window.default);
        });
      });
    }
  }, config));
}

dynamic.setDefaultLoadingComponent = function (LoadingComponent) {
  defaultLoadingComponent = LoadingComponent;
};

/***/ }),

/***/ "./node_modules/pipenet-core/lib/react/getRoutes.js":
/*!**********************************************************!*\
  !*** ./node_modules/pipenet-core/lib/react/getRoutes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRoutes; });
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic */ "./node_modules/pipenet-core/lib/react/dynamic.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }

  var arr1 = str1.split('/');
  var arr2 = str2.split('/');

  if (arr2.every(function (item, index) {
    return item === arr1[index];
  })) {
    return 1;
  } else if (arr1.every(function (item, index) {
    return item === arr2[index];
  })) {
    return 2;
  }

  return 3;
}

function getRenderArr(routes) {
  var renderArr = [];
  renderArr.push(routes[0]);

  var _loop = function _loop(i) {
    var isAdd = false; // 是否包含

    isAdd = renderArr.every(function (item) {
      return getRelation(item, routes[i]) === 3;
    }); // 去重

    renderArr = renderArr.filter(function (item) {
      return getRelation(item, routes[i]) !== 1;
    });

    if (isAdd) {
      renderArr.push(routes[i]);
    }
  };

  for (var i = 1; i < routes.length; i += 1) {
    _loop(i);
  }

  return renderArr;
}
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */


function getRoutes(path, routerData) {
  var routes = Object.keys(routerData).filter(function (routePath) {
    return routePath.indexOf(path) === 0 && routePath !== path;
  }); // Replace path to '' eg. path='user' /user/name => name

  routes = routes.map(function (item) {
    return item.replace(path, '');
  }); // Get the route to be rendered to remove the deep rendering

  var renderArr = getRenderArr(routes); // Conversion and stitching parameters

  var renderRoutes = renderArr.map(function (item) {
    var exact = !routes.some(function (route) {
      return route !== item && getRelation(route, item) === 1;
    });
    return _objectSpread({}, routerData["".concat(path).concat(item)], {
      key: "".concat(path).concat(item),
      path: "".concat(path).concat(item),
      exact: exact
    });
  });
  renderRoutes.forEach(function (item) {
    if (!item.component && typeof item.path === 'string' && item.path.length > 0) {
      item.component = Object(_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])({
        url: item.url
      });
    }
  });
  return renderRoutes;
}

/***/ }),

/***/ "./node_modules/pipenet-core/lib/react/index.js":
/*!******************************************************!*\
  !*** ./node_modules/pipenet-core/lib/react/index.js ***!
  \******************************************************/
/*! exports provided: connect, Dialog, getRoutes, ReactRouterDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect */ "./node_modules/pipenet-core/lib/react/connect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _connect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog */ "./node_modules/pipenet-core/lib/react/Dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _Dialog__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react-router-dom */ "./node_modules/pipenet-core/lib/react/react-router-dom/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRoutes", function() { return _react_router_dom__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _getRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getRoutes */ "./node_modules/pipenet-core/lib/react/getRoutes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactRouterDOM", function() { return _getRoutes__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/pipenet-core/lib/react/react-router-dom/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/pipenet-core/lib/react/react-router-dom/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (window.ReactRouterDOM);

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./node_modules/yc/lib/http/http.js":
/*!******************************************!*\
  !*** ./node_modules/yc/lib/http/http.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getCfg = getCfg;
exports.getUrl = getUrl;
exports.get = get;
exports.post = post;

var _qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

var _sysConfig = __webpack_require__(/*! ../sysConfig */ "./node_modules/yc/lib/sysConfig/index.js");

var _sysConfig2 = _interopRequireDefault(_sysConfig);

var _request = __webpack_require__(/*! ../request/request */ "./node_modules/yc/lib/request/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getToken() {
  var initConfig = _sysConfig2.default.getInit();
  var token = '';
  if (initConfig && initConfig.sys) {
    try {
      token = localStorage.getItem(initConfig.sys + '-token') || '';
    } catch (e) {
      console.log(e);
      token = '';
    }
  }
  return token;
}

var taskCfg = null;

/**
 * 获取服务方法路径
 * @param {string} path rest 服务方法路径
 * @returns {string} url 服务方法地址
 * @ignore
 */
function getFuncPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var params = arguments[1];

  if (path.length === 0) {
    throw new Error('path 参数不允许为空');
  }

  var nextPath = path.indexOf('/') === 0 ? path : '/' + path;
  if (params) {
    if (nextPath.indexOf('?') === -1) {
      nextPath += '?';
    }
    // 参数序列化
    var nextPrams = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.entries(params)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var value = _ref2[1];

        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          nextPrams[key] = JSON.stringify(value);
        } else {
          nextPrams[key] = value;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    nextPath += (0, _qs.stringify)(nextPrams);
  }
  return nextPath;
}

function getTaskServiceCfg(svn) {
  if (taskCfg === null) {
    taskCfg = getCfg();
  }
  return taskCfg[svn];
}

function getCfg() {
  if (taskCfg === null) {
    taskCfg = {};
    var taskServices = _sysConfig2.default.getCfgByKey('servicecfg');

    var proxy = taskServices.proxy,
        service = taskServices.service;

    if (!Array.isArray(proxy)) {
      throw new Error('参数 proxy 异常，只允许为数组');
    }
    if (!Array.isArray(service)) {
      throw new Error('参数 service 异常，只允许为数组');
    }
    service.forEach(function (src) {
      var nextSrc = _extends({}, src);
      if (nextSrc.proxy) {
        for (var i = 0; i < proxy.length; i++) {
          var pry = proxy[i];
          if (pry.status !== '0' && pry.name === nextSrc.proxy) {
            var url = nextSrc.url;

            nextSrc.url = pry.url + '?' + url;
            nextSrc.originalUrl = url;
            break;
          }
        }
      }

      taskCfg[src.name] = nextSrc;
    });
  }
  return taskCfg;
}

function getUrl(opt) {
  var svn = opt.svn,
      path = opt.path,
      _opt$params = opt.params,
      params = _opt$params === undefined ? null : _opt$params,
      _opt$isProxy = opt.isProxy,
      isProxy = _opt$isProxy === undefined ? true : _opt$isProxy;

  var currentCfg = getTaskServiceCfg(svn);
  var url = isProxy ? currentCfg.url : currentCfg.originalUrl;
  url += getFuncPath(path, params);
  return url;
}

function get(_ref3) {
  var _ref3$svn = _ref3.svn,
      svn = _ref3$svn === undefined ? 'QUERY_SVR' : _ref3$svn,
      _ref3$path = _ref3.path,
      path = _ref3$path === undefined ? '' : _ref3$path,
      _ref3$data = _ref3.data,
      data = _ref3$data === undefined ? {} : _ref3$data,
      _ref3$validate = _ref3.validate,
      validate = _ref3$validate === undefined ? true : _ref3$validate;

  var token = getToken();
  if (token.length > 0) {
    data.token = token;
  }
  var url = getUrl({ svn: svn, path: path, params: data });

  // return new Promise(resolve => {
  //   $.get(
  //     url,
  //     data,
  //     res => {
  //       resolve(res);
  //     },
  //     'json'
  //   );
  // });

  return (0, _request2.default)(url, { validate: validate });
}

function post(_ref4) {
  var _ref4$svn = _ref4.svn,
      svn = _ref4$svn === undefined ? 'QUERY_SVR' : _ref4$svn,
      _ref4$path = _ref4.path,
      path = _ref4$path === undefined ? '' : _ref4$path,
      _ref4$data = _ref4.data,
      data = _ref4$data === undefined ? {} : _ref4$data,
      _ref4$headers = _ref4.headers,
      headers = _ref4$headers === undefined ? { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' } : _ref4$headers,
      _ref4$validate = _ref4.validate,
      validate = _ref4$validate === undefined ? true : _ref4$validate;

  var token = getToken();
  if (token.length > 0) {
    data.token = token;
  }
  var url = getUrl({ svn: svn, path: path });

  // return new Promise(resolve => {
  //   $.post(
  //     url,
  //     data,
  //     res => {
  //       resolve(res);
  //     },
  //     'json'
  //   );
  // });

  return (0, _request2.default)(url, { method: 'POST', body: data, headers: headers, validate: validate });
}

exports.default = { get: get, post: post, getUrl: getUrl };
//# sourceMappingURL=../../maps/http/http.js.map


/***/ }),

/***/ "./node_modules/yc/lib/http/index.js":
/*!*******************************************!*\
  !*** ./node_modules/yc/lib/http/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = __webpack_require__(/*! ../request/request */ "./node_modules/yc/lib/request/request.js");

var _request2 = _interopRequireDefault(_request);

var _http = __webpack_require__(/*! ./http.js */ "./node_modules/yc/lib/http/http.js");

var http = _interopRequireWildcard(_http);

var _request3 = __webpack_require__(/*! ../request */ "./node_modules/yc/lib/request/index.js");

var base = _interopRequireWildcard(_request3);

var _table = __webpack_require__(/*! ./table.js */ "./node_modules/yc/lib/http/table.js");

var table = _interopRequireWildcard(_table);

var _layer = __webpack_require__(/*! ./layer.js */ "./node_modules/yc/lib/http/layer.js");

var layer = _interopRequireWildcard(_layer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

http.base = _extends({
  request: _request2.default
}, base);

http.table = table;
http.layer = layer;

exports.default = http;
//# sourceMappingURL=../../maps/http/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/http/layer.js":
/*!*******************************************!*\
  !*** ./node_modules/yc/lib/http/layer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by remote on 2017/6/6.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 用于进行空间查询
                                                                                                                                                                                                                                                                   */


exports.identify = identify;
exports.query = query;
exports.queryOld = queryOld;
exports.append = append;
exports.del = del;
exports.update = update;
exports.attachments = attachments;

var _http = __webpack_require__(/*! ./http.js */ "./node_modules/yc/lib/http/http.js");

var http = _interopRequireWildcard(_http);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 用于多图层查询
 *
 * @function identify
 * @param {Object} identifyOption - 查询参数
 * @param {string} identifyOption.geometry - "xmin,ymin,xmax,ymax"
 * @param {string} identifyOption.geometryType - "esriGeometryEnvelopen"
 * @param {string} identifyOption.sr - "2437"
 * @param {string} identifyOption.layerDefs - "visible:2,5 | all"
 * @param {number} identifyOption.tolerance - "2"
 * @param {number} identifyOption.mapExtent - 地图范围
 * @param {number} identifyOption.imageDisplay - xxx
 * @param {bool} identifyOption.returnGeometry - 是否返回 geom 信息
 * @param {string} [svn='QUERY_SVR'] - QUERY_SVR
 *
 * @return {Promise}
 */
function identify() {
  var identifyOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var svn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'QUERY_SVR';

  var path = '/identify';
  if (!identifyOption.f) {
    identifyOption.f = 'json';
  }
  if (identifyOption.geometry) {
    identifyOption.geometry = JSON.stringify(identifyOption.geometry);
  }
  if (identifyOption.layerDefs) {
    identifyOption.layerDefs = JSON.stringify(identifyOption.layerDefs);
  }
  if (identifyOption.mapExtent) {
    identifyOption.mapExtent = JSON.stringify(identifyOption.mapExtent);
  }

  if (identifyOption.geometryType === 'esriGeometryPoint') {
    if (!identifyOption.scale) alert('请传入地图显示比例');
    var resolution = 25.39999918 / 96 * identifyOption.scale / 1000;
    var dis = resolution * 8;
    var x = void 0;
    var y = void 0;
    if (identifyOption.geometry.indexOf('{') > -1) {
      identifyOption.geometry = JSON.parse(identifyOption.geometry);
      x = identifyOption.geometry.x;
      y = identifyOption.geometry.y;
    } else {
      x = parseFloat(identifyOption.geometry.split(',')[0]);
      y = parseFloat(identifyOption.geometry.split(',')[1]);
    }
    identifyOption.geometryType = 'esriGeometryEnvelope';
    identifyOption.geometry = x - dis + ',' + (y - dis) + ',' + (x + dis) + ',' + (y + dis);
  }

  // 判断是 post 还是 get，所有的字符参数长度相加
  // IE最小：2083
  if (identifyOption.geometry && identifyOption.geometry.length > 1024) {
    return http.post({
      svn: svn,
      path: path,
      data: _extends({ f: 'json' }, identifyOption)
    });
  } else {
    return http.get({
      svn: svn,
      path: path,
      data: _extends({ f: 'json' }, identifyOption)
    });
  }
}

/**
 * 用于单图层查询
 *
 * @function query
 * @param {string} layerId - 元数据的layerId
 * @param {Object} queryOption - 查询参数
 * @param {string} queryOption.geometry - "xmin,ymin,xmax,ymax"
 * @param {string} queryOption.geometryType - "esriGeometryEnvelopen"
 * @param {string} queryOption.spatialRel - "esriSpatialRelIntersects"
 * @param {string} queryOption.where - "1=1"
 * @param {string} queryOption.objectIds - 查询某几个 gid 的值，"123,1234123"
 * @param {string} queryOption.outFields - 返回字段"xxx,xxx"
 * @param {bool} queryOption.returnGeometry - 是否返回 geom 信息
 * @param {string} queryOption.returnIdsOnly - 只返回 gid 信息
 * @param {bool} queryOption.returnCountOnly - 只返回总条数
 * @param {string} queryOption.orderByFields - 以某个字段排序
 * @param {Array} queryOption.outStatistics - 统计信息
 * @param {string} queryOption.outStatistics[].statisticType -
 *                  统计类型 "<count | sum | min | max | avg | stddev | var>"
 * @param {string} queryOption.outStatistics[].onStatisticField - 统计某个字段 "Field1"
 * @param {string} queryOption.outStatistics[].outStatisticFieldName - 显示字段名称 "Out_Field_Name1"
 * @param {string} queryOption.groupByFieldsForStatistics - 以某个字段排序
 * @param {string} queryOption.pageno - 以某个字段排序
 * @param {string} queryOption.pagesize - 以某个字段排序
 * @param {bool} queryOption.returnGeometry - 是否返回 geom 信息
 * @param {string} [svn='QUERY_SVR'] - QUERY_SVR
 *
 * @return {Promise}
 */
function query(layerId) {
  var queryOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/' + layerId + '/query';

  if (!queryOption.f) {
    queryOption.f = 'json';
  }
  if (Array.isArray(queryOption.outFields)) {
    queryOption.outFields = queryOption.outFields.toString();
  }
  if (Array.isArray(queryOption.orderByFields)) {
    queryOption.orderByFields = queryOption.orderByFields.toString();
  }
  if (Array.isArray(queryOption.groupByFieldsForStatistics)) {
    queryOption.groupByFieldsForStatistics = queryOption.groupByFieldsForStatistics.toString();
  }
  if (Array.isArray(queryOption.geometry)) {
    queryOption.geometry = JSON.stringify(queryOption.geometry);
  }
  if (Array.isArray(queryOption.outStatistics)) {
    queryOption.outStatistics = JSON.stringify(queryOption.outStatistics);
  }
  if (Array.isArray(queryOption.returnDistinctValues)) {
    queryOption.returnDistinctValues = JSON.stringify(queryOption.returnDistinctValues);
  }
  if (Array.isArray(queryOption.objectIds)) {
    queryOption.objectIds = queryOption.objectIds.join(',');
  }

  var strQuery = (queryOption.geometry || '') + (queryOption.where || '') + (queryOption.objectIds || '') + (queryOption.outFields || '') + (queryOption.orderByFields || '');
  // IE最小：2083
  if (queryOption.outStatistics || strQuery.length > 1500) {
    return http.post({
      svn: svn,
      path: path,
      data: queryOption
    });
  } else {
    return http.get({
      svn: svn,
      path: path,
      data: queryOption
    });
  }
}

/**
 * 用于废管查询
 *
 * @function queryOld
 * @param {string} layerId - 元数据 layerId
 * @param {Object} queryOption - 查询参数
 * @param {string} queryOption.geometry - "xmin,ymin,xmax,ymax"
 * @param {string} queryOption.geometryType - "esriGeometryEnvelopen"
 * @param {string} queryOption.spatialRel - "esriSpatialRelIntersects"
 * @param {string} queryOption.where - "1=1"
 * @param {string} queryOption.objectIds - 查询某几个 gid 的值，"123,1234123"
 * @param {string} queryOption.outFields - 返回字段"xxx,xxx"
 * @param {bool} queryOption.returnGeometry - 是否返回 geom 信息
 * @param {string} queryOption.returnIdsOnly - 只返回 gid 信息
 * @param {bool} queryOption.returnCountOnly - 只返回总条数
 * @param {string} queryOption.orderByFields - 以某个字段排序
 * @param {Array} queryOption.outStatistics - 统计信息
 * @param {string} queryOption.outStatistics[].statisticType -
 *                  统计类型 "<count | sum | min | max | avg | stddev | var>"
 * @param {string} queryOption.outStatistics[].onStatisticField - 统计某个字段 "Field1"
 * @param {string} queryOption.outStatistics[].outStatisticFieldName - 显示字段名称 "Out_Field_Name1"
 * @param {string} queryOption.groupByFieldsForStatistics - 以某个字段排序
 * @param {string} queryOption.pageno - 以某个字段排序
 * @param {string} queryOption.pagesize - 以某个字段排序
 * @param {bool} queryOption.returnGeometry - 是否返回 geom 信息
 * @param {string} [svn='QUERY_SVR'] - QUERY_SVR
 *
 * @return {Promise}
 */
function queryOld(layerId, queryOption) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/' + layerId + '/old/query';
  if (!queryOption.f) {
    queryOption.f = 'json';
  }
  if (Array.isArray(queryOption.outFields)) {
    queryOption.outFields = queryOption.outFields.toString();
  }
  if (Array.isArray(queryOption.orderByFields)) {
    queryOption.orderByFields = queryOption.orderByFields.toString();
  }
  if (Array.isArray(queryOption.groupByFieldsForStatistics)) {
    queryOption.groupByFieldsForStatistics = queryOption.groupByFieldsForStatistics.toString();
  }
  if (Array.isArray(queryOption.geometry)) {
    queryOption.geometry = JSON.stringify(queryOption.geometry);
  }
  if (Array.isArray(queryOption.outStatistics)) {
    queryOption.outStatistics = JSON.stringify(queryOption.outStatistics);
  }
  if (Array.isArray(queryOption.returnDistinctValues)) {
    queryOption.returnDistinctValues = JSON.stringify(queryOption.returnDistinctValues);
  }
  if (Array.isArray(queryOption.objectIds)) {
    queryOption.objectIds = queryOption.objectIds.join(',');
  }

  var strQuery = (queryOption.geometry || '') + (queryOption.where || '') + (queryOption.objectIds || '') + (queryOption.outFields || '') + (queryOption.orderByFields || '');
  // IE最小：2083
  if (queryOption.outStatistics || strQuery.length > 1500) {
    return http.post({
      svn: svn,
      path: path,
      data: queryOption
    });
  } else {
    return http.get({
      svn: svn,
      path: path,
      data: queryOption
    });
  }
}

/**
 * 添加记录
 *
 * @function append
 * @param {number} layerId - 元数据 layerId
 * @param {Array} attributes - 待添加数据
 * @param {string} attributes[].geometry - 空间信息
 * @param {number} attributes[].geometry.x - x 坐标
 * @param {number} attributes[].geometry.y - y 坐标
 * @param {Object} attributes[].attributes - 属性信息
 * @param {string} [svn=QUERY_SVR] - QUERY_SVR
 *
 * @return {Promise}
 */
function append(layerId, attributes) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/' + layerId + '/applyEdits';
  var adds = [];
  if (isObject(attributes)) {
    adds = [{ attributes: attributes }];
  } else if (Array.isArray(attributes)) {
    adds = attributes.map(function (attr) {
      return { attributes: attr };
    });
  } else {
    throw new Error('attributes的类型异常');
  }

  var data = {
    adds: JSON.stringify(adds),
    f: 'json'
  };
  return http.post({
    svn: svn,
    path: path,
    data: data
  });
}

/**
 * 删除数据
 *
 * @function del
 * @param {number} layerId - 元数据 layerId
 * @param {string} ids - 待删除 gid "112,123,4333,"
 * @param {string} [svn=QUERY_SVR] - QUERY_SVR
 *
 * @return {Promise}
 */
function del(layerId, ids) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/' + layerId + '/applyEdits';
  var data = {
    deletes: ids,
    f: 'json'
  };
  return http.get({
    svn: svn,
    path: path,
    data: data
  });
}

/**
 * 更新数据
 *
 * @function update
 * @param {number} layerId - 元数据 layerId
 * @param {Array} attributes - 待更新数据
 * @param {Object} attributes[].geometry - 空间信息
 * @param {number} attributes[].geometry.x - x 坐标
 * @param {number} attributes[].geometry.y - y 坐标
 * @param {Object} attributes[].attributes - 属性信息
 * @param {string} [svn=QUERY_SVR] - QUERY_SVR
 *
 * @return {Promise}
 */
function update(layerId, attributes) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/' + layerId + '/applyEdits';
  var updates = [];
  if (isObject(attributes)) {
    updates = [{ attributes: attributes }];
  } else if (Array.isArray(attributes)) {
    updates = attributes.map(function (attr) {
      return { attributes: attr };
    });
  } else {
    throw new Error('attributes的类型异常');
  }
  var data = {
    updates: JSON.stringify(updates),
    f: 'json'
  };
  return http.post({
    svn: svn,
    path: path,
    data: data
  });
}

/**
 * 获取附件信息（未启用）
 *
 * @function attachments
 * @param {number} layerId - 元数据 layerId
 * @param {number} objectId - 数据 gid
 * @param {string} [svn=QUERY_SVR] - QUERY_SVR
 *
 * @return {Promise}
 */
function attachments(layerId, objectId) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/' + layerId + '/' + objectId + '/attachments';
  return http.get({
    svn: svn,
    path: path
  });
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) == '[object Object]';
}
//# sourceMappingURL=../../maps/http/layer.js.map


/***/ }),

/***/ "./node_modules/yc/lib/http/table.js":
/*!*******************************************!*\
  !*** ./node_modules/yc/lib/http/table.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fields = fields;
exports.query = query;
exports.append = append;
exports.del = del;
exports.update = update;
exports.attachments = attachments;

var _http = __webpack_require__(/*! ./http.js */ "./node_modules/yc/lib/http/http.js");

var http = _interopRequireWildcard(_http);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fieldCache = new Map();

/**
 * 获取单表字段配置信息
 *
 * @function fields
 * @param {string} tableName - 表名
 * @param {string} [svn='QUERY_SVR'] - QUERY_SVR
 *
 * @return {Promise}
 */
/**
 * @module
 * Created by remote on 2017/6/6.
 *
 * 用于进行 table 查询
 */
function fields(tableName) {
  var svn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'QUERY_SVR';

  var flag = svn + '_' + tableName;
  if (fieldCache.has(flag)) {
    return new Promise(function (resolve) {
      resolve(fieldCache.get(flag));
    });
  } else {
    var path = '/table/' + tableName;
    return http.get({
      svn: svn,
      path: path,
      data: {
        f: 'json'
      }
    }).then(function (res) {
      fieldCache.set(flag, res);
      return res;
    });
  }
}

/**
 * 获取单表字段配置信息
 *
 * @param {string} tableName - 表名
 * @param {Object} queryOption - 查询条件
 * @param {string} queryOption.geometry - "xmin,ymin,xmax,ymax"
 * @param {string} queryOption.geometryType - "esriGeometryEnvelopen"
 * @param {string} queryOption.spatialRel - "esriSpatialRelIntersects"
 * @param {string} queryOption.where - "1=1"
 * @param {string|string[]} queryOption.objectIds - 查询某几个 gid 的值，"123,1234123"
 * @param {string|string[]} queryOption.outFields - 返回字段，"xxx,xxx"
 * @param {bool} queryOption.returnGeometry - 是否返回 geom 信息
 * @param {string} queryOption.returnIdsOnly - 只返回 gid 信息
 * @param {bool} queryOption.returnCountOnly - 只返回总条数
 * @param {string|string[]} queryOption.orderByFields - 以某个字段排序
 * @param {Object[]} queryOption.outStatistics - 统计信息
 * @param {string} queryOption.outStatistics[].statisticType - 统计类型
 * "<count | sum | min | max | avg | stddev | var>"
 * @param {string} queryOption.outStatistics[].onStatisticField - 统计某个字段 "Field1"
 * @param {string} queryOption.outStatistics[].outStatisticFieldName - 显示字段名称 "Out_Field_Name1"
 * @param {string} queryOption.returnDistinctValues - 返回值去重，"xxx,xxx"
 * @param {string|string[]} queryOption.groupByFieldsForStatistics - 以某个字段排序
 * @param {string} queryOption.pageno - 以某个字段排序
 * @param {string} queryOption.pagesize - 以某个字段排序
 * @param {string} [svn='QUERY_SVR'] - taskServices.json 中的 name
 *
 * @return {Promise} - 返回 promise 对象
 *
 * @function query
 */
function query(tableName, queryOption) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/table/' + tableName + '/query';

  if (!queryOption.f) {
    queryOption.f = 'json';
  }
  if (Array.isArray(queryOption.outFields)) {
    queryOption.outFields = queryOption.outFields.toString();
  }
  if (Array.isArray(queryOption.orderByFields)) {
    queryOption.orderByFields = queryOption.orderByFields.toString();
  }
  if (Array.isArray(queryOption.groupByFieldsForStatistics)) {
    queryOption.groupByFieldsForStatistics = queryOption.groupByFieldsForStatistics.toString();
  }
  if (Array.isArray(queryOption.outStatistics)) {
    queryOption.outStatistics = JSON.stringify(queryOption.outStatistics);
  }
  if (Array.isArray(queryOption.returnDistinctValues)) {
    queryOption.returnDistinctValues = JSON.stringify(queryOption.returnDistinctValues);
  }
  if (Array.isArray(queryOption.objectIds)) {
    queryOption.objectIds = queryOption.objectIds.join(',');
  }

  var strQuery = (queryOption.geometry || '') + (queryOption.where || '') + (queryOption.objectIds || '') + (queryOption.outFields || '') + (queryOption.orderByFields || '');
  // IE最小：2083
  if (queryOption.outStatistics || strQuery.length > 1500) {
    return http.post({
      svn: svn,
      path: path,
      data: queryOption
    });
  } else {
    return http.get({
      svn: svn,
      path: path,
      data: queryOption
    });
  }
}

/*
 "\"attributes\" : {"
 + "\"ProNo\" : \"NWS-001-001\","
 + "\"ProName\" : \"工程001\","
 + "\"ProType\" : \"农网改造\""
 + "}"
 */
/**
 * 添加记录
 *
 * @param {string} tableName - 表名
 * @param {Array|Object} attributes - 待添加数据组
 * @param {string} [svn='QUERY_SVR'] - taskServices.json 中的 name
 *
 * @return {Promise} - 返回 promise 对象
 * @function append
 */
function append(tableName, attributes) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/table/' + tableName + '/applyEdits';
  var adds = [];
  if (isObject(attributes)) {
    adds = [{ attributes: attributes }];
  } else if (Array.isArray(attributes)) {
    adds = attributes.map(function (attr) {
      return { attributes: attr };
    });
  } else {
    throw new Error('attributes的类型异常');
  }

  var data = {
    adds: JSON.stringify(adds),
    f: 'json'
  };
  return http.post({
    svn: svn,
    path: path,
    data: data
  });
}

/**
 * 删除数据
 *
 * @param {string} tableName - 表名
 * @param {string} ids - 待删除 gid "112,123,4333,"
 * @param {string} [svn='QUERY_SVR'] - taskServices.json 中的 name
 *
 * @return {Promise} - 返回 promise 对象
 * @function del
 */
function del(tableName, ids) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/table/' + tableName + '/applyEdits';
  var data = {
    deletes: ids,
    f: 'json'
  };
  return http.post({
    svn: svn,
    path: path,
    data: data
  });
}

/**
 * 更新数据
 *
 * @param {string} tableName - 表名
 * @param {Array|Object} attributes - 待更新数据
 * @param {string} [svn='QUERY_SVR'] - taskServices.json 中的 name
 *
 * @return {Promise} - 返回 promise 对象
 * @function update
 */
function update(tableName, attributes) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/table/' + tableName + '/applyEdits';
  var updates = [];
  if (isObject(attributes)) {
    updates = [{ attributes: attributes }];
  } else if (Array.isArray(attributes)) {
    updates = attributes.map(function (attr) {
      return { attributes: attr };
    });
  } else {
    throw new Error('attributes的类型异常');
  }
  var data = { updates: JSON.stringify(updates) };
  return http.post({
    svn: svn,
    path: path,
    data: data
  });
}

/**
 * 获取附件信息
 *
 * @param {string} tableName - 表名
 * @param {number} objectId - 数据 gid
 * @param {string} [svn='QUERY_SVR'] - taskServices.json 中的 name
 *
 * @return {Promise} - 返回 promise 对象
 * @function attachments
 */
function attachments(tableName, objectId) {
  var svn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'QUERY_SVR';

  var path = '/table/' + tableName + '/' + objectId + '/attachments';
  return http.get({
    svn: svn,
    path: path
  });
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) == '[object Object]';
}
//# sourceMappingURL=../../maps/http/table.js.map


/***/ }),

/***/ "./node_modules/yc/lib/request/getXmlHttp.js":
/*!***************************************************!*\
  !*** ./node_modules/yc/lib/request/getXmlHttp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getXmlHttp;
function getXmlHttp() {
  // 创建一个新变量并赋值false，使用 false 作为判断条件说明还没有创建XMLHTTPRequest对象
  var xmlhttp = false;
  try {
    // 尝试创建 XMLHttpRequest 对象，除 IE 外的浏览器都支持这个方法。
    xmlhttp = new window.XMLHttpRequest();
  } catch (e) {
    try {
      // 使用较新版本的 IE 创建 IE 兼容的对象（Msxml2.XMLHTTP）。
      xmlhttp = window.ActiveXobject('Msxml12.XMLHTTP');
    } catch (e2) {
      try {
        // 使用较老版本的 IE 创建 IE 兼容的对象（Microsoft.XMLHTTP）。
        xmlhttp = window.ActiveXobject('Microsoft.XMLHTTP');
      } catch (e3) {
        // 如果失败了还保持false
        xmlhttp = false;
      }
    }
  }
  return xmlhttp;
}
//# sourceMappingURL=../../maps/request/getXmlHttp.js.map


/***/ }),

/***/ "./node_modules/yc/lib/request/index.js":
/*!**********************************************!*\
  !*** ./node_modules/yc/lib/request/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setConfig = setConfig;
exports.ajax = ajax;
exports.get = get;
exports.post = post;
exports.get1 = get1;

var _lodash = __webpack_require__(/*! lodash.isobject */ "./node_modules/lodash.isobject/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _getXmlHttp = __webpack_require__(/*! ./getXmlHttp */ "./node_modules/yc/lib/request/getXmlHttp.js");

var _getXmlHttp2 = _interopRequireDefault(_getXmlHttp);

var _request = __webpack_require__(/*! ./request */ "./node_modules/yc/lib/request/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultParmas = {
  timeout: 0
};

function setConfig(params) {
  if (params.timeout > 0) {
    defaultParmas.timeout = params.timeout;
  }
  if (typeof params.onCatch === 'function') {
    defaultParmas.onCatch = params.onCatch;
  }
}

/**
 * ajax 请求
 *
 * @param {Object} params - 请求参数
 * @param {string} params.url - 请求地址
 * @param {Object} params.data - 请求条件
 * @param {string} [params.type='get'] - 请求方法: get or post
 * @param {Object} [params.headers] - 表头配置
 * @param {number} [params.time=0] - 超时时间，默认为 0，不开启
 * @param {function} [params.onChage] - 异常时触发的方法
 *
 * @returns {Promise} es6 的 promise 对象
 */
function ajax(params) {
  var newParams = _extends({}, defaultParmas, params);

  var _newParams$url = newParams.url,
      url = _newParams$url === undefined ? '' : _newParams$url,
      _newParams$data = newParams.data,
      data = _newParams$data === undefined ? {} : _newParams$data,
      _newParams$type = newParams.type,
      type = _newParams$type === undefined ? 'get' : _newParams$type,
      passParams = _objectWithoutProperties(newParams, ['url', 'data', 'type']);

  // 新增时间戳


  data.t = new Date().getMilliseconds();

  if (type === 'post') {
    var newData = {};
    Object.keys(data).forEach(function (key) {
      var tmp = data[key];
      if (Array.isArray(tmp) || (0, _lodash2.default)(tmp)) {
        tmp = JSON.stringify(tmp);
      }
      newData[key] = tmp;
    });
    return (0, _request2.default)(url, _extends({
      method: 'POST',
      body: newData
    }, passParams));
  } else if (type === 'get') {
    var finalUrl = url;
    if (finalUrl.lastIndexOf('?') !== finalUrl.length - 1) {
      finalUrl = finalUrl + '?';
    }
    Object.keys(data).forEach(function (key) {
      var tmp = data[key];
      if (Array.isArray(tmp) || (typeof tmp === 'undefined' ? 'undefined' : _typeof(tmp)) === 'object') {
        tmp = JSON.stringify(tmp);
      }
      // 新增 encodeURIComponent 转码，可能会出现别的问题
      tmp = encodeURIComponent(tmp);
      finalUrl = '' + finalUrl + key + '=' + tmp + '&';
    });
    finalUrl = finalUrl.substring(0, finalUrl.length - 1);
    return (0, _request2.default)(finalUrl, passParams);
  }
}

function get() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return ajax(_extends({ url: url, data: data, type: 'get' }, params));
}

function post() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' };
  return ajax(_extends({ url: url, data: data, type: 'post', headers: headers }, params));
}

function get1(baseUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var url = baseUrl;
  if (url.lastIndexOf('?') !== url.length - 1) {
    url += '?';
  }
  Object.keys(params).forEach(function (key) {
    url += key + '=' + params[key] + '&';
  });
  url = url.substring(0, url.length - 1);
  var xmlhttp = (0, _getXmlHttp2.default)();
  if (xmlhttp === false) {
    throw new Error('XMLHttpRequest 对象创建失败');
  }
  xmlhttp.open('GET', url, false);
  xmlhttp.send();
  if (xmlhttp.status === 200) {
    return xmlhttp.responseText;
  }
  return null;
}

exports.default = { get: get, post: post, ajax: ajax, get1: get1 };
//# sourceMappingURL=../../maps/request/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/request/request.js":
/*!************************************************!*\
  !*** ./node_modules/yc/lib/request/request.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _isomorphicFetch = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  var errortext = codeMessage[response.status] || response.statusText;
  var error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {string} [options.method] POST|GET|PUT|DELETE
 * @return {string|undefined} [options.contentType] www
 */
function request(url, options) {
  var defaultOptions = {
    credentials: 'include'
  };
  var newOptions = _extends({}, defaultOptions, options);
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    var body = newOptions.body;
    if (!(body instanceof FormData)) {
      newOptions.headers = _extends({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }, newOptions.headers);
      if (newOptions.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') > -1) {
        var queryParams = '';
        if (Object.prototype.toString.call(body) === '[object Object]') {
          queryParams = Object.keys(body).map(function (key) {
            var val = body[key];
            if (val instanceof Object) {
              val = JSON.stringify(val);
            }
            return key + '=' + val;
          }).join('&');
        }
        newOptions.body = queryParams;
      } else {
        newOptions.body = JSON.stringify(newOptions.body);
      }
    } else {
      // newOptions.body is FormData
      newOptions.headers = _extends({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data; charset=utf-8'
      }, newOptions.headers);
    }
  }

  return (0, _isomorphicFetch2.default)(url, newOptions).then(checkStatus).then(function (response) {
    /**
     * https://davidwalsh.name/fetch
     *
     * clone() - Creates a clone of a Response object.
     * error() - Returns a new Response object associated with a network error.
     * redirect() - Creates a new response with a different URL.
     * arrayBuffer() - Returns a promise that resolves with an ArrayBuffer.
     * blob() - Returns a promise that resolves with a Blob.
     * formData() - Returns a promise that resolves with a FormData object.
     * json() - Returns a promise that resolves with a JSON object.
     * text() - Returns a promise that resolves with a USVString (text).
     */
    if (newOptions.blob) {
      return response.blob();
    }
    return response.json();
  });
}

exports.default = request;
//# sourceMappingURL=../../maps/request/request.js.map


/***/ }),

/***/ "./node_modules/yc/lib/sysConfig/index.js":
/*!************************************************!*\
  !*** ./node_modules/yc/lib/sysConfig/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(/*! ../request */ "./node_modules/yc/lib/request/index.js");

var _xml2json = __webpack_require__(/*! ./xml2json */ "./node_modules/yc/lib/sysConfig/xml2json.js");

var _xml2json2 = _interopRequireDefault(_xml2json);

var _text2xml = __webpack_require__(/*! ./text2xml */ "./node_modules/yc/lib/sysConfig/text2xml.js");

var _text2xml2 = _interopRequireDefault(_text2xml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initUrl = '/config/init.json'; /**
                                    * 系统配置信息获取
                                    */


var cache = {};

function getFile(path) {
  var url = path.indexOf('/') === 0 ? path : '/' + path;
  var fileName = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
  var suffix = url.substring(url.lastIndexOf('.') + 1);
  try {
    var responseText = (0, _request.get1)(url);
    var tmpObj = null;
    if (suffix === 'js') {
      if (typeof window[fileName] !== 'undefined') {
        throw new Error('\u88C5\u8F7D\u914D\u7F6E\u6587\u4EF6' + fileName + '.' + suffix + '\u65F6\u53D1\u751F\u5F02\u5E38\uFF0C\u6587\u4EF6\u53D8\u91CF\u540D\u5DF2\u5B58\u5728\uFF0C\u4E0D\u5141\u8BB8\u52A0\u8F7D');
      }
      var randomFileName = 'random' + new Date().getMilliseconds();
      var index = responseText.indexOf('=');
      if (index > -1) {
        var body = responseText.substring(index + 1);
        responseText = 'var ' + randomFileName + ' = ' + body;
      }
      window.eval(responseText);
      tmpObj = JSON.parse(JSON.stringify(window[randomFileName]));
      delete window[randomFileName];
      return tmpObj;
    } else if (suffix === 'json') {
      tmpObj = JSON.parse(responseText);
    } else if (suffix === 'xml') {
      var xml = (0, _text2xml2.default)(responseText);
      tmpObj = (0, _xml2json2.default)(xml);
    } else {
      throw new Error('网站配置信息仅支持 js, json, xml 格式');
    }
    return tmpObj;
  } catch (e) {
    throw new Error('\u88C5\u8F7D\u914D\u7F6E\u6587\u4EF6' + fileName + '.' + suffix + '\u65F6\u53D1\u751F\u5F02\u5E38\uFF0C\u5F02\u5E38\u4FE1\u606F\uFF1A' + e.message);
  }
}

function getCfgByKey() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (cache[key]) {
    return JSON.parse(JSON.stringify(cache[key]));
  } else {
    var initCfg = null;
    if (cache['init']) {
      initCfg = cache['init'];
    } else {
      initCfg = getFile(initUrl);
      cache['init'] = initCfg;
    }
    if (key === 'init') {
      return initCfg;
    }
    if (!Array.isArray(initCfg.cfgs)) {
      throw new Error('init 配置信息异常，cfgs 节点非数组');
    }
    for (var i = 0; i < initCfg.cfgs.length; i++) {
      var cfg = initCfg.cfgs[i];
      if (cfg.key === key) {
        // 优化权限控制，严格使用 init.json 中的 loaded 参数，不能逾越
        if (cfg.loaded === false) {
          return null;
        }
        var tmpFile = getFile(cfg.url);
        cache[key] = tmpFile;
        return tmpFile;
      }
    }
    return null;
  }
}

function getMenu() {
  return getCfgByKey('sysmenu');
}

function getInit() {
  return getCfgByKey('init');
}

exports.default = { getCfgByKey: getCfgByKey, getMenu: getMenu, getInit: getInit };
//# sourceMappingURL=../../maps/sysConfig/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/sysConfig/text2xml.js":
/*!***************************************************!*\
  !*** ./node_modules/yc/lib/sysConfig/text2xml.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = text2xml;
function text2xml(str) {
  var xml = void 0;
  var out = null;
  try {
    if (typeof ActiveXObject === 'function') {
      xml = new window.ActiveXObject('Microsoft.XMLDOM');
    } else if (typeof DOMParser === 'function') {
      xml = new window.DOMParser();
    }
    xml.async = false;

    if (typeof xml.load === 'function') {
      out = xml.load(str);
    } else if (typeof xml.parseFromString === 'function') {
      out = xml.parseFromString(str, 'text/xml');
    }
  } catch (e) {
    throw new Error('xml\u89E3\u6790\u5F02\u5E38\uFF0C\u5F02\u5E38\u4FE1\u606F' + e.message);
  }
  return out;
}
//# sourceMappingURL=../../maps/sysConfig/text2xml.js.map


/***/ }),

/***/ "./node_modules/yc/lib/sysConfig/xml2json.js":
/*!***************************************************!*\
  !*** ./node_modules/yc/lib/sysConfig/xml2json.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = xmlToJson;

var _text2xml = __webpack_require__(/*! ./text2xml */ "./node_modules/yc/lib/sysConfig/text2xml.js");

var _text2xml2 = _interopRequireDefault(_text2xml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}
function jsVar(s) {
  return String(s || '').replace(/-/g, '_');
}
function myArr(o) {
  var tmp = o;
  if (!Array.isArray(tmp)) {
    tmp = [o];
  }
  tmp.length = tmp.length;
  return tmp;
}

function parseXML(node, simple, extended) {
  if (!node) return null;
  var txt = '';
  var obj = null;
  var att = null;
  var cnn = '';
  if (node.childNodes) {
    if (node.childNodes.length > 0) {
      Object.keys(node.childNodes).forEach(function (key) {
        var cn = node.childNodes[key];
        var cnt = cn.nodeType;
        var cnv = cn.text || cn.nodeValue || '';
        cnn = jsVar(cn.localName || cn.nodeName);
        if (cnt === 3 || cnt === 4 || !cnn) {
          if (cnv.match(/^\s+$/)) {
            return;
          }
          txt += cnv.replace(/^\s+/, '').replace(/\s+$/, '');
        } else if (cnt !== 8) {
          obj = obj || {};
          if (obj[cnn]) {
            if (!obj[cnn].length) obj[cnn] = myArr(obj[cnn]);
            obj[cnn] = myArr(obj[cnn]);

            obj[cnn][obj[cnn].length] = parseXML(cn, true);
            obj[cnn].length = obj[cnn].length;
          } else {
            obj[cnn] = parseXML(cn);
          }
        }
      });
    }
  }
  if (node.attributes) {
    if (node.attributes.length > 0) {
      att = {};
      obj = obj || {};
      Object.keys(node.attributes).forEach(function (key) {
        var at = node.attributes[key];
        var atn = jsVar(at.name);
        var atv = at.value;
        att[atn] = atv;
        if (obj[atn]) {
          obj[cnn] = myArr(obj[cnn]);

          obj[atn][obj[atn].length] = atv;
          obj[atn].length = obj[atn].length;
        } else {
          obj[atn] = isNaN(atv) ? atv : Number(atv);
        }
      });
    }
  }
  if (obj) {
    obj = Object.assign(txt !== '' ? txt : {}, obj || {});
    txt = obj.text ? (_typeof(obj.text) === 'object' ? obj.text : [obj.text || '']).concat([txt]) : txt;
    if (txt) obj.text = txt;
    txt = '';
  }
  var out = obj || txt;
  if (extended) {
    if (txt) out = {};
    txt = out.text || txt || '';
    if (txt) out.text = txt;
    if (!simple) out = myArr(out);
  }
  return out;
}

function xmlToJson(xml, extended) {
  if (!xml) return {};

  var tmpXml = xml;
  if (typeof tmpXml === 'string') {
    tmpXml = (0, _text2xml2.default)(tmpXml);
  }
  if (!tmpXml.nodeType) return;
  if (tmpXml.nodeType === 3 || tmpXml.nodeType === 4) return tmpXml.nodeValue;

  var root = tmpXml.nodeType === 9 ? tmpXml.documentElement : tmpXml;
  var out = parseXML(root, true, extended);
  return out;
}
//# sourceMappingURL=../../maps/sysConfig/xml2json.js.map


/***/ }),

/***/ "./src/pages/bigscreen/screen3/rightmonitor/model/index.js":
/*!*****************************************************************!*\
  !*** ./src/pages/bigscreen/screen3/rightmonitor/model/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Formurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Formurl */ "./src/pages/bigscreen/screen3/rightmonitor/services/Formurl.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: 'rightmonitor',
  state: {
    opened: false
  },
  effects: {
    *getRightmonitor({
      payload
    }, {
      call,
      put
    }) {
      console.log(5555555555555);
      console.log(payload.target.innerText);
      var number = payload.target.innerText.replace("#", ""); //发一个请求

      var url = "http://192.168.30.212:10088/RtspClient/pullStream/" + number;
      const response = yield call(_services_Formurl__WEBPACK_IMPORTED_MODULE_1__["getVideo"], url);
      var number = payload.target.innerText;
      yield put({
        type: 'rightmonitorData',
        payload: number
      });
    }

  },
  reducers: {
    rightmonitorData(state, {
      payload
    }) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        rightmonitorReturn: payload
      });
    },

    setOpened(state) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        opened: true
      });
    }

  }
});

/***/ }),

/***/ "./src/pages/bigscreen/screen3/rightmonitor/services/Formurl.js":
/*!**********************************************************************!*\
  !*** ./src/pages/bigscreen/screen3/rightmonitor/services/Formurl.js ***!
  \**********************************************************************/
/*! exports provided: getVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideo", function() { return getVideo; });
/* harmony import */ var yc_lib_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yc/lib/http */ "./node_modules/yc/lib/http/index.js");
/* harmony import */ var yc_lib_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yc_lib_http__WEBPACK_IMPORTED_MODULE_0__);

const {
  get
} = yc_lib_http__WEBPACK_IMPORTED_MODULE_0___default.a;
async function getVideo(params) {
  const response = await get({
    svn: 'BIG_SCREEN',
    path: 'getVideo',
    data: params,
    validate: false
  });
  return response;
}

/***/ }),

/***/ "./src/pages/bigscreen/screen3/rightmonitor/view-1/View.js":
/*!*****************************************************************!*\
  !*** ./src/pages/bigscreen/screen3/rightmonitor/view-1/View.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pipenet_core_lib_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipenet-core/lib/react */ "./node_modules/pipenet-core/lib/react/index.js");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.less */ "./src/pages/bigscreen/screen3/rightmonitor/view-1/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_2__);
var _dec, _class2, _temp;


 // import './style/index.global.less';



let _class = (_dec = Object(pipenet_core_lib_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => ({
  rightmonitorReturn: state.rightmonitor.rightmonitorReturn
})), _dec(_class2 = (_temp = class _class2 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      this.props.dispatch({
        type: 'pageReact/setOpened',
        payload: {}
      });
    };

    this.handleClick2 = () => {
      this.props.dispatch({
        type: 'pageReact2/setOpened'
      });
    };
  }

  onClose() {
    console.log('onClose');
  }

  componentDidMount() {
    // $.ecity.dialog.message('message', 3000, 200, 400);
    // $.ecity.dialog.confirm('confirm');
    // $.ecity.dialog.show();
    // $.ecity.dialog.show({
    //   id: 'iam',
    //   noHtml: true,
    // });
    // const dialog = $.ecity.dialog.getDialog('iam');
    // dialog.close();
    // setTimeout(() => {
    //   $.ecity.dialog.showOrHideDlgs(false);
    //   setTimeout(() => {
    //     $.ecity.dialog.showOrHideDlgs(true);
    //   }, 2000);
    // }, 2000);
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    console.log(nextProps.toolParams);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const {
      rightmonitorReturn
    } = this.props;

    if (rightmonitorReturn == undefined) {
      return (// <div className="main">
        //   opened: {`${this.props.opened}`}
        //   <Button onClick={this.handleClick}>改变</Button>
        //   <Button onClick={this.handleClick2}>改变2</Button>
        // </div>
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.leftvideo
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.bbox
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.bigtop
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000061.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "2241:530"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.sbox
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.small_one
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000300.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "1105:481"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.small_two
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000299.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "1105:481"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.small_three
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000298.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "1105:481"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.small_fore
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000296.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "1105:481"
        })))))
      );
    } else {
      var number = rightmonitorReturn.replace("#", "");
      var url = "http://192.168.30.212:20000/hls/" + number + ".m3u8";
      console.log(676767);
      console.log(url);
      return (// <div className="main">
        //   opened: {`${this.props.opened}`}
        //   <Button onClick={this.handleClick}>改变</Button>
        //   <Button onClick={this.handleClick2}>改变2</Button>
        // </div>
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.leftvideo
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.bbox
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.bigtop
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": url,
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "2241:530"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.sbox
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.small_one
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000300.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "1105:481"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.small_two
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000299.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "1105:481"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.small_three
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000298.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "1105:481"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.small_fore
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("easy-player", {
          "video-url": "http://192.168.30.212:20000/hls/1000296.m3u8",
          live: "false",
          "auto-play": "true",
          stretch: "true",
          aspect: "1105:481"
        })))))
      );
    }
  }

}, _temp)) || _class2);



/***/ }),

/***/ "./src/pages/bigscreen/screen3/rightmonitor/view-1/index.js":
/*!******************************************************************!*\
  !*** ./src/pages/bigscreen/screen3/rightmonitor/view-1/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/pages/bigscreen/screen3/rightmonitor/view-1/View.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/pages/bigscreen/screen3/rightmonitor/model/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  View: _View__WEBPACK_IMPORTED_MODULE_0__["default"],
  models: [_model__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./src/pages/bigscreen/screen3/rightmonitor/view-1/style/index.less":
/*!**************************************************************************!*\
  !*** ./src/pages/bigscreen/screen3/rightmonitor/view-1/style/index.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"leftvideo":"index__leftvideo___3qVPM","bbox":"index__bbox___PkdpU","bigtop":"index__bigtop___1t34G","sbox":"index__sbox___2DqDb","small_one":"index__small_one___30n1i","small_two":"index__small_two___2bkdl","small_three":"index__small_three___3mobc","small_fore":"index__small_fore___18fj-"};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map