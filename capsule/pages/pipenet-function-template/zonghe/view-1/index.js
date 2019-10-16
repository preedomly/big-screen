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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/zonghe/view-1/index.js");
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

/***/ "./src/pages/zonghe/model/index.js":
/*!*****************************************!*\
  !*** ./src/pages/zonghe/model/index.js ***!
  \*****************************************/
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

/***/ "./src/pages/zonghe/view-1/View.js":
/*!*****************************************!*\
  !*** ./src/pages/zonghe/view-1/View.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.less */ "./src/pages/zonghe/view-1/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.zonghe
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.comprehensive,
      style: {
        borderImage: "url('/images/imgs/标题框.png') 0 0 0 0 fill round",
        borderImageRepeat: 'stretch'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: ':javascript'
    }, "\u7EFC\u5408\u4FE1\u606F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.realtime,
      style: {
        borderImage: "url('/images/imgs/框.png') 5 1 1 5 fill round",
        borderImageRepeat: 'stretch'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
      style: {
        background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "1066"), "\u5E73\u65B9\u516C\u91CC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
    }, "\u670D\u52A1\u9762\u79EF")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
      style: {
        background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "13573"), "\u6237"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
    }, "\u6392\u6C34\u6237")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
      style: {
        background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "396"), "\u5BB6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
    }, "\u5165\u7F51\u4F01\u4E1A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
      style: {
        background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "1050"), "\u516C\u91CC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
    }, "\u7BA1\u7F51\u603B\u957F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
      style: {
        background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "450"), "\u4E2A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
    }, "\u6CF5\u7AD9\u603B\u6570")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
      style: {
        background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "450"), "\u4E2A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
    }, "\u7EC8\u7AEF\u603B\u6570"))));
  }

});

/***/ }),

/***/ "./src/pages/zonghe/view-1/index.js":
/*!******************************************!*\
  !*** ./src/pages/zonghe/view-1/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/pages/zonghe/view-1/View.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/pages/zonghe/model/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  View: _View__WEBPACK_IMPORTED_MODULE_0__["default"],
  models: [_model__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./src/pages/zonghe/view-1/style/index.less":
/*!**************************************************!*\
  !*** ./src/pages/zonghe/view-1/style/index.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"zonghe":"index__zonghe___3XnzC","comprehensive":"index__comprehensive___1Jm0p","realtime":"index__realtime___ieRdF","semicircleframe":"index__semicircleframe___3t0yW","one":"index__one___1KM7l","fuwu":"index__fuwu___366jt"};

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