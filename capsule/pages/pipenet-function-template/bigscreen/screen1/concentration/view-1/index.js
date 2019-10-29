(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("antd"), require("React"));
	else if(typeof define === 'function' && define.amd && define.amd.vendor !== 'dojotoolkit.org')
		define(["antd", "React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("antd"), require("React")) : factory(root["antd"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/bigscreen/screen1/concentration/view-1/index.js");
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

/***/ "./src/pages/bigscreen/screen1/concentration/model/index.js":
/*!******************************************************************!*\
  !*** ./src/pages/bigscreen/screen1/concentration/model/index.js ***!
  \******************************************************************/
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

/***/ "./src/pages/bigscreen/screen1/concentration/view-1/View.js":
/*!******************************************************************!*\
  !*** ./src/pages/bigscreen/screen1/concentration/view-1/View.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.less */ "./src/pages/bigscreen/screen1/concentration/view-1/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
 // import './style/index.global.less';



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    this.eq = linkUrl => {
      //让三期隐藏
      $("#eq").css("display", "block");
      $("#eqp").css("borderImage", "url('/images/imgs/出口COD-TAB点击.png') 0 0 0 0 fill round");
      $("#sq").css("display", "none");
      $("#sqp").css("borderImage", "url('/images/imgs/出口COD-TAB.png') 0 0 0 0 fill round");
    };

    this.sq = linkUrl => {
      //让一二期隐藏
      console.log(111);
      $("#sq").css("display", "block");
      $("#sqp").css("borderImage", "url('/images/imgs/出口COD-TAB点击.png') 0 0 0 0 fill round");
      $("#eq").css("display", "none");
      $("#eqp").css("borderImage", "url('/images/imgs/出口COD-TAB.png') 0 0 0 0 fill round");
    };
  }

  render() {
    var res = [{
      "id": "1",
      "name": "区排",
      "company": "绍兴水处理发展有限公司",
      "qs": "一期",
      "a": "258.88",
      "b": "347.9",
      "c": "356.43",
      "d": "279.15",
      "e": "248.33"
    }, {
      "id": "2",
      "name": "滨海水务",
      "company": "绍兴水处理发展有限公司",
      "qs": "三期",
      "a": "434.66",
      "b": "429.8",
      "c": "402.67",
      "d": "462.33",
      "e": "437.45"
    }, {
      "id": "3",
      "name": "天马线",
      "company": "绍兴水处理发展有限公司",
      "qs": "三期",
      "a": "464.941",
      "b": "447.54",
      "c": "407.41",
      "d": "447.34",
      "e": "472.51"
    }, {
      "id": "4",
      "name": "齐马1期",
      "company": "绍兴水处理发展有限公司",
      "qs": "三期",
      "a": "455.88",
      "b": "400.79",
      "c": "447.62",
      "d": "451.6",
      "e": "438.67"
    }, {
      "id": "5",
      "name": "马鞍线",
      "company": "绍兴水处理发展有限公司",
      "qs": "三期",
      "a": "480.74",
      "b": "482.2",
      "c": "407.05",
      "d": "431.83",
      "e": "487.97"
    }, {
      "id": "6",
      "name": "袍江线",
      "company": "绍兴水处理发展有限公司",
      "qs": "三期",
      "a": "494.334",
      "b": "470.44",
      "c": "484.55",
      "d": "463.57",
      "e": "493.4"
    }, {
      "id": "7",
      "name": "新滨海2#线",
      "company": "绍兴水处理发展有限公司",
      "qs": "二期",
      "a": "465.77",
      "b": "483.79",
      "c": "426.52",
      "d": "407.08",
      "e": "497.95"
    }, {
      "id": "8",
      "name": "滨海3#线",
      "company": "绍兴水处理发展有限公司",
      "qs": "二期",
      "a": "417.929",
      "b": "485.28",
      "c": "451.7",
      "d": "449.32",
      "e": "470.2"
    }, {
      "id": "9",
      "name": "滨海2#线",
      "company": "绍兴水处理发展有限公司",
      "qs": "二期",
      "a": "406.55",
      "b": "418.91",
      "c": "464.48",
      "d": "455.35",
      "e": "459.25"
    }, {
      "id": "10",
      "name": "滨海1#线",
      "company": "绍兴水处理发展有限公司",
      "qs": "二期",
      "a": "439.78",
      "b": "496.37",
      "c": "457.44",
      "d": "455.68",
      "e": "472.22"
    }];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.concentration
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.topConcentration
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.cod,
      style: {
        borderImage: "url('/images/imgs/标题框.png') 0 0 0 0 fill round",
        borderImageRepeat: "stretch"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u51FA\u53E3COD\u6D53\u5EA6")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.qishu
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one,
      onClick: () => this.eq(),
      id: "eqp",
      style: {
        borderImage: "url('/images/imgs/出口COD-TAB点击.png') 0 0 0 0 fill round",
        borderImageRepeat: "stretch"
      }
    }, " \u4E00\u4E8C\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.three,
      onClick: () => this.sq(),
      id: "sqp",
      style: {
        borderImage: "url('/images/imgs/出口COD-TAB.png') 0 0 0 0 fill round",
        borderImageRepeat: "stretch"
      }
    }, "\u4E09\u671F"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.districtRow,
      id: "eq",
      style: {
        borderImage: "url('/images/imgs/框.png') 0 0 0 0 fill round",
        borderImageRepeat: "stretch"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E00\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[0].a / 4,
      strokeWidth: 13,
      width: 300,
      strokeColor: "#0090ff",
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[0].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanA
    }, res[0].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E8C\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[6].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: "#0090ff",
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[6].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[6].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[7].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: "#ffc257",
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA,
      style: {
        color: '#ffc257'
      }
    }, res[7].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA,
      style: {
        color: '#ffc257'
      }
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew,
      style: {
        color: '#ffc257'
      }
    }, res[7].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[8].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: "#fd6f97",
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA,
      style: {
        color: '#fd6f97'
      }
    }, res[8].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA,
      style: {
        color: '#fd6f97'
      }
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew,
      style: {
        color: '#fd6f97'
      }
    }, res[8].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[9].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[9].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[9].name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E00\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[0].b / 4,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[0].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanA
    }, res[0].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E8C\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[6].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[6].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[6].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[7].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[7].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[7].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[8].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[8].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[8].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[9].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[9].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[9].name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E00\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[0].c / 4,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[0].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanA
    }, res[0].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E8C\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[6].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[6].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[6].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[7].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[7].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[7].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[8].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[8].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[8].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[9].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[9].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[9].name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.districtRow,
      id: "sq",
      style: {
        display: "none",
        borderImage: "url('/images/imgs/框.png') 0 0 0 0 fill round",
        borderImageRepeat: "stretch"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E09\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[1].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[1].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanA
    }, res[1].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[2].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[2].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[2].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[3].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[3].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[3].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[4].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[4].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[4].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[5].a / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[5].a), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[5].name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E09\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[1].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[1].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanA
    }, res[1].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[2].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[2].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[2].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[3].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[3].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[3].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[4].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[4].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[4].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[5].b / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[5].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[5].name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4E09\u671F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[1].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[1].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanA
    }, res[1].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[2].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[2].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[2].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[3].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[3].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[3].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[4].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[4].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[4].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.oneBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.codCircle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      type: "circle",
      percent: res[5].c / 5,
      strokeWidth: 13,
      width: 300,
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      format: percent => ``
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAAA
    }, res[5].c), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanAA
    }, "mg/l"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.spanANew
    }, res[5].name)))));
  }

});

/***/ }),

/***/ "./src/pages/bigscreen/screen1/concentration/view-1/index.js":
/*!*******************************************************************!*\
  !*** ./src/pages/bigscreen/screen1/concentration/view-1/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/pages/bigscreen/screen1/concentration/view-1/View.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/pages/bigscreen/screen1/concentration/model/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  View: _View__WEBPACK_IMPORTED_MODULE_0__["default"],
  models: [_model__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./src/pages/bigscreen/screen1/concentration/view-1/style/index.less":
/*!***************************************************************************!*\
  !*** ./src/pages/bigscreen/screen1/concentration/view-1/style/index.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"concentration":"index__concentration___1ucDe","topConcentration":"index__topConcentration___1ZQgh","cod":"index__cod___3SQlu","qishu":"index__qishu___3dxQm","one":"index__one___19jus","three":"index__three___22JJG","districtRow":"index__districtRow___2-fSb","oneBox":"index__oneBox___337sd","codCircle":"index__codCircle___2WN0t","spanA":"index__spanA___VxubM","spanANew":"index__spanANew___2BLB8","spanAA":"index__spanAA___qqQsn","spanAAA":"index__spanAAA___2H7Uw"};

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

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