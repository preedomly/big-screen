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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/bigscreen/screen2/zhongduan/view-1/index.js");
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

/***/ "./src/pages/bigscreen/screen2/zhongduan/model/index.js":
/*!**************************************************************!*\
  !*** ./src/pages/bigscreen/screen2/zhongduan/model/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: 'zhongduanspace',
  state: {
    opened: false
  },
  effects: {
    *getZhongduanxx({
      payload
    }, {
      call,
      put
    }) {
      /*    let zhongduanData;
          const response = yield call(getzhongduan,payload);
          zhongduanData = response.result;*/
      console.log(payload);
      yield put({
        type: 'ztzhongduanData',
        payload: payload
      });
    }

  },
  reducers: {
    ztzhongduanData(state, {
      payload
    }) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        zhongduanReturn: payload
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

/***/ "./src/pages/bigscreen/screen2/zhongduan/view-1/View.js":
/*!**************************************************************!*\
  !*** ./src/pages/bigscreen/screen2/zhongduan/view-1/View.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pipenet_core_lib_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipenet-core/lib/react */ "./node_modules/pipenet-core/lib/react/index.js");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.less */ "./src/pages/bigscreen/screen2/zhongduan/view-1/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_2__);
var _dec, _class2, _temp;


 // import './style/index.global.less';



let _class = (_dec = Object(pipenet_core_lib_react__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => ({
  zhongduanReturn: state.zhongduanspace.zhongduanReturn
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

  onClose() {// console.log('onClose');
  }

  componentDidMount() {
    /* this.query();*/
    // console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {// console.log('componentWillReceiveProps');
    // console.log(nextProps.toolParams);
  }

  componentWillUnmount() {// console.log('componentWillUnmount');
  }

  render() {
    var res = [{
      "名称": "河塔村1#终端",
      "简介": "本终端污水处理系统设计规模30吨/日，占地面积200平方米，主要收集、处理石家片区的农村生活污水，受益农户100户，处理工艺采用高负荷地下渗滤污水处理复合技术，水达到浙江省《农村生活污水处理设施水污染物排放标准》DB33/973-2015一级标准。"
    }, {
      "名称": "河塔村2#终端",
      "简介": "本终端污水处理系统设计规模30吨/日，占地面积200平方米，主要收集、处理石家片区的农村生活污水，受益农户80户，处理工艺采用A2O污水处理复合技术，水达到浙江省《农村生活污水处理设施水污染物排放标准》DB33/973-2017一级标准。"
    }, {
      "名称": "九岩村3#终端",
      "简介": "本终端污水处理系统设计规模30吨/日，占地面积200平方米，主要收集、处理石家片区的农村生活污水，受益农户120户，水达到浙江省《农村生活污水处理设施水污染物排放标准》DB33/973-2015一级标准。"
    }, {
      "名称": "九岩村5#终端",
      "简介": "本终端污水处理系统设计规模30吨/日，占地面积200平方米，主要收集、处理石家片区的农村生活污水，受益农户60户，处理工艺采用高负荷地下渗滤污水处理复合技术，水达到浙江省《农村生活污水处理设施水污染物排放标准》DB33/973-2018一级标准。"
    }, {
      "名称": "棠棣兰谷终端",
      "简介": "本终端污水处理系统设计规模30吨/日，占地面积400平方米，主要收集、处理石家片区的农村生活污水，受益农户110户，水达到浙江省《农村生活污水处理设施水污染物排放标准》DB33/973-2015一级标准。"
    }];
    const {
      zhongduanReturn
    } = this.props;

    if (zhongduanReturn == undefined) {
      return (// <div className="main">
        //   opened: {`${this.props.opened}`}
        //   <Button onClick={this.handleClick}>改变</Button>
        //   <Button onClick={this.handleClick2}>改变2</Button>
        // </div>
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.topLeft
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.titleNode,
          style: {
            background: "url('/images/imgs/标题框.png') no-repeat"
          }
        }, "\u7EC8\u7AEF\u4ECB\u7ECD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.realtime
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.sbox
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.diva
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
          style: {
            background: "url('/images/imgs/实景图片.png') no-repeat",
            borderImageRepeat: 'stretch'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
          style: {
            background: "url('/images/imgs/实景图片.png') no-repeat",
            borderImageRepeat: 'stretch'
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.text1
        }, "\u672C\u7EC8\u7AEF\u6C61\u6C34\u5904\u7406\u7CFB\u7EDF\u8BBE\u8BA1\u89C4\u6A2130\u5428/\u65E5\uFF0C\u5360\u5730\u9762\u79EF200\u5E73\u65B9\u7C73\uFF0C\u4E3B\u8981\u6536\u96C6\u3001\u5904\u7406\u77F3\u5BB6\u7247\u533A\u7684\u519C\u6751\u751F\u6D3B\u6C61\u6C34\uFF0C\u53D7\u76CA\u519C\u6237100\u6237\uFF0C\u5904\u7406\u5DE5\u827A\u91C7\u7528\u9AD8\u8D1F\u8377\u5730\u4E0B\u6E17\u6EE4\u6C61\u6C34\u5904\u7406\u590D\u5408\u6280\u672F\uFF0C\u6C34\u8FBE\u5230\u6D59\u6C5F\u7701\u300A\u519C\u6751\u751F\u6D3B\u6C61\u6C34\u5904\u7406\u8BBE\u65BD\u6C34\u6C61\u67D3\u7269\u6392\u653E\u6807\u51C6\u300BDB33/973-2015\u4E00\u7EA7\u6807\u51C6\u3002")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.divb
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
          src: "/images/imgs/scene2/\u5DE5\u827A\u56FE/A2O+\u4EBA\u5DE5\u6E7F\u5730.mp4",
          muted: true,
          controls: "controls",
          autoplay: "autoplay",
          loop: "loop",
          width: "1282",
          height: "610"
        })))))
      );
    } else {
      var clgy = zhongduanReturn.attributes.val.处理工艺;

      if (clgy != null) {
        for (var i = 0; i < res.length; i++) {
          var ALTID = zhongduanReturn.attributes.val.ALTID;
          var name = zhongduanReturn.attributes.val.终端名称;
          clgy = clgy.replace("/", ""); // console.log(zhongduanReturn.attributes.val);

          name = name.replace("#", "%23");
          var img2 = "/images/imgs/scene2/工艺图/" + clgy + ".mp4"; // console.log(img2);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.topLeft,
            id: "dh"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.titleNode,
            style: {
              background: "url('/images/imgs/标题框.png') no-repeat"
            }
          }, "\u7EC8\u7AEF\u4ECB\u7ECD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.realtime
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.sbox
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.diva
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
            style: {
              borderImage: "url('http://192.168.30.212:8088/upload/" + name + ".jpg') 5 1 1 5 fill round",
              borderImageRepeat: 'stretch'
            }
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
            style: {
              borderImage: "url('http://192.168.30.212:8088/upload/柯东泵站.jpg') 5 1 1 5 fill round",
              borderImageRepeat: 'stretch'
            }
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.text1
          }, res[i].简介)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.divb
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
            src: img2,
            muted: true,
            autoplay: "autoplay",
            loop: "loop",
            width: "1282",
            height: "610"
          })))));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.topLeft
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.titleNode,
        style: {
          background: "url('/images/imgs/标题框.png') no-repeat"
        }
      }, "\u7EC8\u7AEF\u4ECB\u7ECD"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.realtime
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.sbox
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.diva
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
        style: {
          background: "url('/images/imgs/实景图片.png') no-repeat",
          borderImageRepeat: 'stretch'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.img1,
        style: {
          background: "url('/images/imgs/实景图片.png') no-repeat",
          borderImageRepeat: 'stretch'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.text1
      }, "\u672C\u7EC8\u7AEF\u6C61\u6C34\u5904\u7406\u7CFB\u7EDF\u8BBE\u8BA1\u89C4\u6A2130\u5428/\u65E5\uFF0C\u5360\u5730\u9762\u79EF200\u5E73\u65B9\u7C73\uFF0C\u4E3B\u8981\u6536\u96C6\u3001\u5904\u7406\u77F3\u5BB6\u7247\u533A\u7684\u519C\u6751\u751F\u6D3B\u6C61\u6C34\uFF0C\u53D7\u76CA\u519C\u6237100\u6237\uFF0C\u5904\u7406\u5DE5\u827A\u91C7\u7528\u9AD8\u8D1F\u8377\u5730\u4E0B\u6E17\u6EE4\u6C61\u6C34\u5904\u7406\u590D\u5408\u6280\u672F\uFF0C\u6C34\u8FBE\u5230\u6D59\u6C5F\u7701\u300A\u519C\u6751\u751F\u6D3B\u6C61\u6C34\u5904\u7406\u8BBE\u65BD\u6C34\u6C61\u67D3\u7269\u6392\u653E\u6807\u51C6\u300BDB33/973-2015\u4E00\u7EA7\u6807\u51C6\u3002")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.divb
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        src: img2,
        muted: true,
        controls: "controls",
        autoplay: "autoplay",
        loop: "loop",
        width: "1282",
        height: "610"
      })))));
    }
  }

}, _temp)) || _class2);



/***/ }),

/***/ "./src/pages/bigscreen/screen2/zhongduan/view-1/index.js":
/*!***************************************************************!*\
  !*** ./src/pages/bigscreen/screen2/zhongduan/view-1/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/pages/bigscreen/screen2/zhongduan/view-1/View.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/pages/bigscreen/screen2/zhongduan/model/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  View: _View__WEBPACK_IMPORTED_MODULE_0__["default"],
  models: [_model__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./src/pages/bigscreen/screen2/zhongduan/view-1/style/index.less":
/*!***********************************************************************!*\
  !*** ./src/pages/bigscreen/screen2/zhongduan/view-1/style/index.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"topLeft":"index__topLeft___1AV0g","titleNode":"index__titleNode___3TVIS","realtime":"index__realtime___2blKD","sbox":"index__sbox___3xnco","diva":"index__diva___Qf8WV","text1":"index__text1___1WolV","img1":"index__img1___3ccFw","divb":"index__divb___2r3LC","txt1":"index__txt1___2GyAE"};

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