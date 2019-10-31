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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/bigscreen/screen2/workorder/view-1/index.js");
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

/***/ "./src/pages/bigscreen/screen2/workorder/model/index.js":
/*!**************************************************************!*\
  !*** ./src/pages/bigscreen/screen2/workorder/model/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: 'pageReact2',
  state: {
    opened: false
  },
  effects: {},
  reducers: {
    setOpened(state) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        opened: true
      });
    }

  }
});

/***/ }),

/***/ "./src/pages/bigscreen/screen2/workorder/view-1/View.js":
/*!**************************************************************!*\
  !*** ./src/pages/bigscreen/screen2/workorder/view-1/View.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pipenet_core_lib_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pipenet-core/lib/react */ "./node_modules/pipenet-core/lib/react/index.js");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.less */ "./src/pages/bigscreen/screen2/workorder/view-1/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_2__);

 // import './style/index.global.less';

 // @connect(({ pageReact2 }) => ({
//   opened: pageReact2.opened,
// }))

/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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
    var demo = $("#demo")[0];
    var demo1 = $("#demo1")[0];
    var demo2 = $("#demo2")[0];
    var speed = 500;
    demo2.innerHTML = demo1.innerHTML;

    function Marquee() {
      if (demo2.offsetTop - demo.scrollTop <= 0) {
        demo.scrollTop -= demo1.offsetHeight;
      } else {
        demo.scrollTop = demo.scrollTop + 3;
      }
    }

    var MyMar = setInterval(Marquee, speed);
    setInterval(Marquee, 500);
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    /*    //书讯快递循环垂直向上滚动
        function movedome(){
          var margintop=30;//上边距的偏移量
          var stop=false;
          setInterval(function(){
            if(stop==true){
              return;
            }
            console.log(6666);
            console.log($("#SC").find("tr")[1]);
            $("#SC").find("tr")[1].animate({"margin-top":margintop--},0,function(){
              console.log(7777);
              console.log($(this));
              console.log($(this).height());
              var $li=$(this);
              if(!$li.is(":animated")){//第一个li的动画结束时
                if(-margintop>$li.height()){
                  $li.css("margin-top","0px").appendTo($("#aaa .index__striped1___1P7oS"));
                  margintop=0;
                }
              }
            });
          },1000);
          //鼠标放到快递信息(ul)上时
          $("#aaa .index__striped1___1P7oS").hover(function(){
            $(this).css("cursor","pointer");
            stop=true;//停止动画
          },function(){
            stop=false;//开始动画
          });
        }
        movedome();*/
    console.log('componentWillReceiveProps');
    console.log(nextProps.toolParams);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    var res = [{
      "工单号": "2019102201",
      "工单类型": "管网-窨井类",
      "受理时间": "2019/10/21 14:03:58",
      "反应人": "袁超",
      "反应内容": "井盖破损。南复线南侧，杨绍线246号路灯杆处，井盖破损。",
      "状态": "延期"
    }, {
      "工单号": "2019102202",
      "工单类型": "泵站-配电设备",
      "受理时间": "2019/10/21 10:14:07",
      "反应人": "蒋契学",
      "反应内容": "蓬山泵站，无功补偿偏低",
      "状态": "处理中"
    }, {
      "工单号": "2019102203",
      "工单类型": "终端-配电设备",
      "受理时间": "2019/10/21 9:27:09",
      "反应人": "金佳",
      "反应内容": "回流泵手动开启后，外部电源跳闸。",
      "状态": "已完成"
    }, {
      "工单号": "2019102204",
      "工单类型": "管网-窨井类",
      "受理时间": "2019/10/18 11:21:55",
      "反应人": "黄瑛",
      "反应内容": "宾舍村板桥269门口井盖破裂",
      "状态": "已完成"
    }, {
      "工单号": "2019102205",
      "工单类型": "管网-排气阀",
      "受理时间": "2019/10/17 15:25:12",
      "反应人": "封建龙",
      "反应内容": "福全至金庄，8#桥管朝北排气阀，漏水。",
      "状态": "已完成"
    }, {
      "工单号": "2019102206",
      "工单类型": "泵站-其他",
      "受理时间": "2019/10/17 10:24:54",
      "反应人": "高晓玲",
      "反应内容": "小赭3#泵站，格栅机垃圾多液位差大需清理。",
      "状态": "处理中"
    }, {
      "工单号": "2019102207",
      "工单类型": "泵站-泵机设备",
      "受理时间": "2019/10/16 15:53:28",
      "反应人": "单阳波",
      "反应内容": "滨海1#泵站3号泵阀门故障。",
      "状态": "处理中"
    }, {
      "工单号": "2019102208",
      "工单类型": "管网-窨井类",
      "受理时间": "2019/10/15 14:46:47",
      "反应人": "金彬",
      "反应内容": "路南村3#村居旁，井盖被浇死。",
      "状态": "处理中"
    }, {
      "工单号": "2019102209",
      "工单类型": "终端-计量设备",
      "受理时间": "2019/10/15 10:47:37",
      "反应人": "章晓东",
      "反应内容": "中盛陵终端，流量计故障。",
      "状态": "延期"
    }, {
      "工单号": "2019102210",
      "工单类型": "管网-吸污疏通",
      "受理时间": "2019/10/22 8:44:00",
      "反应人": "沈莉琴",
      "反应内容": "需要疏通车，兴越小区21幢。",
      "状态": "处理中"
    }, {
      "工单号": "2019102211",
      "工单类型": "管网-吸污疏通",
      "受理时间": "2019/9/9 15:16:00",
      "反应人": "邢玉荣",
      "反应内容": "新未庄小区，小区里超市背后窨井满溢。",
      "状态": "已完成"
    }, {
      "工单号": "2019102212",
      "工单类型": "管网-吸污疏通",
      "受理时间": "2019/10/21 9:12:00",
      "反应人": "谢慧琴",
      "反应内容": "福立花园12幢，营业房北侧窨井污水满溢。",
      "状态": "已完成"
    }, {
      "工单号": "2019102213",
      "工单类型": "管网-吸污疏通",
      "受理时间": "2019/10/20 13:35:00",
      "反应人": "高晴瑜",
      "反应内容": "聚贤花苑46栋，需要疏通车。",
      "状态": "已完成"
    }, {
      "工单号": "2019102214",
      "工单类型": "管网-吸污疏通",
      "受理时间": "2019/10/20 9:32:00",
      "反应人": "徐迅红",
      "反应内容": "和谐家园1栋北，需要疏通车。",
      "状态": "处理中"
    }, {
      "工单号": "2019102215",
      "工单类型": "管网-吸污疏通",
      "受理时间": "2019/10/18 9:13:00",
      "反应人": "宋汉菠",
      "反应内容": "兴越南区11幢，需要疏通车吸污车。",
      "状态": "处理中"
    }];
    return (// <div className="main">
      //   opened: {`${this.props.opened}`}
      //   <Button onClick={this.handleClick}>改变</Button>
      //   <Button onClick={this.handleClick2}>改变2</Button>
      // </div>
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.div1
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.titleNode,
        style: {
          background: "url('/images/imgs/标题框.png') no-repeat"
        }
      }, "\u5DE5\u5355\u4FE1\u606F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.realtime
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.sbox
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "SC",
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.smalltable
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.table
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.striped
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u5DE5\u5355\u53F7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u5DE5\u5355\u7C7B\u578B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u53D7\u7406\u65F6\u95F4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u53CD\u5E94\u4EBA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u53CD\u5E94\u5185\u5BB9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\u72B6\u6001"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "demo",
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.demo
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "demo1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.table
      }, res.map((record, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.striped1
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          width: 337
        }
      }, record["工单号"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          width: 437
        }
      }, record["工单类型"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          width: 437
        }
      }, record["受理时间"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          width: 338
        }
      }, record["反应人"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          width: 437
        }
      }, record["反应内容"].substring(0, 10)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          width: 239
        }
      }, record["状态"]))), ";")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "demo2",
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_2___default.a.demo2
      }))))))
    );
  }

});

/***/ }),

/***/ "./src/pages/bigscreen/screen2/workorder/view-1/index.js":
/*!***************************************************************!*\
  !*** ./src/pages/bigscreen/screen2/workorder/view-1/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/pages/bigscreen/screen2/workorder/view-1/View.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/pages/bigscreen/screen2/workorder/model/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  View: _View__WEBPACK_IMPORTED_MODULE_0__["default"],
  models: [_model__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./src/pages/bigscreen/screen2/workorder/view-1/style/index.less":
/*!***********************************************************************!*\
  !*** ./src/pages/bigscreen/screen2/workorder/view-1/style/index.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"div1":"index__div1___2suB-","titleNode":"index__titleNode___5woYt","realtime":"index__realtime___nIZ4_","sbox":"index__sbox___1kIrx","demo":"index__demo___3KuQG","demo2":"index__demo2___-diND","smalltable":"index__smalltable___KoZiL","table":"index__table___4Zy24","striped1":"index__striped1___1P7oS","striped":"index__striped___hEdPn","striped2":"index__striped2___2WbV5"};

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