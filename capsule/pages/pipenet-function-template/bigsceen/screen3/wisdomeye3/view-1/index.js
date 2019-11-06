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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/bigsceen/screen3/wisdomeye3/view-1/index.js");
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

/***/ "./src/pages/bigsceen/screen3/wisdomeye3/model/index.js":
/*!**************************************************************!*\
  !*** ./src/pages/bigsceen/screen3/wisdomeye3/model/index.js ***!
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

/***/ "./src/pages/bigsceen/screen3/wisdomeye3/view-1/View.js":
/*!**************************************************************!*\
  !*** ./src/pages/bigsceen/screen3/wisdomeye3/view-1/View.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.less */ "./src/pages/bigsceen/screen3/wisdomeye3/view-1/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      dataSource: [],
      a: [],
      pumping: [{
        "id": "1",
        "name": "印染1#泵站",

        /*"number": [1000306],*/
        "number": [1000042]
      }, {
        "id": "2",
        "name": "西湖桥泵站",
        "number": [1000046]
      }, {
        "id": "3",
        "name": "湖塘泵站",
        "number": [1000042]
      }, {
        "id": "4",
        "name": "滨海1#泵站",
        "number": [1000087]
      }, {
        "id": "5",
        "name": "钱二泵站",
        "number": [1000061]
      }, {
        "id": "6",
        "name": "钱一泵站",
        "number": [1000041]
      }, {
        "id": "7",
        "name": "柯海1#泵站",
        "number": [1000040]
      }, {
        "id": "8",
        "name": "柯海3#泵站",
        "number": [1000129]
      }, {
        "id": "9",
        "name": "夏履泵站",
        "number": [1000032]
      }, {
        "id": "10",
        "name": "安昌泵站",
        "number": [1000032]
      }, {
        "id": "11",
        "name": "滨海北侧1#泵站",
        "number": [1000032]
      }, {
        "id": "12",
        "name": "马鞍泵站",
        "number": [1000032]
      }, {
        "id": "13",
        "name": "柯东泵站",
        "number": [1000304]
      }, {
        "id": "14",
        "name": "福全泵站",
        "number": [1000284]
      }, {
        "id": "15",
        "name": "中心泵站",
        "number": [1000284]
      }],
      terminal: [{
        "id": "1",
        "name": "永信村3#终端",
        "number": [1000000, 1000002]
      }, {
        "id": "2",
        "name": "永信村2#终端",
        "number": [1000002, 1000000]
      }, {
        "id": "3",
        "name": "白马山村1#终端",
        "number": [1000122, 1000123, 1000124]
      }, {
        "id": "4",
        "name": "白马山5#终端",
        "number": [1000224]
      }, {
        "id": "5",
        "name": "白马山8#终端",
        "number": [1000200]
      }, {
        "id": "6",
        "name": "白马山9#终端",
        "number": [1000201]
      }, {
        "id": "7",
        "name": "白马山10#终端",
        "number": [1000180]
      }, {
        "id": "8",
        "name": "宾舍2#终端",
        "number": [1000172]
      }, {
        "id": "10",
        "name": "河塔村3#终端",
        "number": [1000101]
      }, {
        "id": "11",
        "name": "蜀风村5#终端",
        "number": [1000127]
      }, {
        "id": "12",
        "name": "夏泽村3#终端",
        "number": [1000176]
      }, {
        "id": "13",
        "name": "双叶村终端",
        "number": [1000117]
      }, {
        "id": "14",
        "name": "莲东村终端",
        "number": [1000068]
      }, {
        "id": "15",
        "name": "梅山村3#终端",
        "number": [1000134, 1000135, 1000170]
      }, {
        "id": "16",
        "name": "兴华村3#终端",
        "number": [1000003, 1000004, 1000005]
      }, {
        "id": "17",
        "name": "兴华村2#终端",
        "number": [1000003, 1000004, 1000005]
      }, {
        "id": "18",
        "name": "兴华村1#终端",
        "number": [1000003, 1000004, 1000005]
      }, {
        "id": "19",
        "name": "五洋村1#终端",
        "number": [1000212, 1000213, 1000137, 1000226]
      }, {
        "id": "20",
        "name": "黄贤村终端",
        "number": [1000131]
      }, {
        "id": "21",
        "name": "栅溪村终端",
        "number": [1000130]
      }, {
        "id": "22",
        "name": "龙尾山村3#终端",
        "number": [1000214, 1000217]
      }, {
        "id": "23",
        "name": "兴联村5#终端",
        "number": [1000132]
      }, {
        "id": "24",
        "name": "黄山畈村终端",
        "number": [1000205]
      }, {
        "id": "25",
        "name": "朱家坞村3#终端",
        "number": [1000207]
      }, {
        "id": "26",
        "name": "铜井村2#终端",
        "number": [1000071, 1000072]
      }, {
        "id": "27",
        "name": "欣华村终端",
        "number": [1000082]
      }, {
        "id": "28",
        "name": "前蒋家池终端",
        "number": [1000076]
      }, {
        "id": "29",
        "name": "枢里村4#终端",
        "number": [1000120]
      }, {
        "id": "30",
        "name": "徐家畈3#终端",
        "number": [1000077]
      }, {
        "id": "31",
        "name": "皇村终端",
        "number": [1000178]
      }, {
        "id": "32",
        "name": "舒村终端",
        "number": [1000094]
      }, {
        "id": "33",
        "name": "小舜江村4#终端",
        "number": [1000152, 1000155, 1000244]
      }, {
        "id": "34",
        "name": " 若耶5#终端",
        "number": [1000054, 1000055]
      }]
    };

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

    this.zhongduan = () => {
      var bengzhan = document.getElementById("bengzhan");
      var zhongduan = document.getElementById("zhongduan");
      bengzhan.style.borderImage = "url('/images/imgs/03图层管理/泵站.png') 0 0 0 0 fill round";
      zhongduan.style.borderImage = "url('/images/imgs/03图层管理/终端-点击.png') 0 0 0 0 fill round";
      this.props.dispatch({
        type: "projectMap/QueryMapVideo",
        layerId: 56,
        payload: {
          where: '1=1',
          geometryType: 'esriGeometryPoint',
          spatialRel: 'esriSpatialRelIntersects',
          f: 'json'
        }
      });
    };

    this.bengzhan = () => {
      var bengzhan = document.getElementById("bengzhan");
      var zhongduan = document.getElementById("zhongduan");
      bengzhan.style.borderImage = "url('/images/imgs/03图层管理/泵站-点击.png') 0 0 0 0 fill round";
      zhongduan.style.borderImage = "url('/images/imgs/03图层管理/终端.png') 0 0 0 0 fill round";
      this.props.dispatch({
        type: "projectMap/QueryMapVideo",
        layerId: 15,
        payload: {
          where: '1=1',
          geometryType: 'esriGeometryPoint',
          spatialRel: 'esriSpatialRelIntersects',
          f: 'json'
        }
      });
    };

    this.handleChange = value => {
      var b = [];
      console.log(value);

      if (value === null || value === '') {
        this.setState({
          dataSource: this.state.a
        });
      }

      this.state.a.forEach(element => {
        if (element.indexOf(value) >= 0) {
          // 包含；
          b.push(element);
        }
      });
      this.setState({
        dataSource: b
      });
    };

    this.loadNewTc = () => {
      var type = 15;
      var value = $("#rv")[0].innerText.trim();

      if (value == null || value == "") {
        return;
      }

      var returnValue = {};
      this.state.pumping.forEach(element => {
        if (value == element.name) {
          returnValue = element;
        }
      });
      this.state.terminal.forEach(element => {
        if (value == element.name) {
          returnValue = element;
          type = 56;
        }
      }); // 创建新的图层

      this.props.dispatch({
        type: "projectMap/QueryMapVideo",
        layerId: type,
        payload: {
          where: '1=1',
          returnValue: returnValue,
          geometryType: 'esriGeometryPoint',
          spatialRel: 'esriSpatialRelIntersects',
          f: 'json'
        }
      });
    };
  }

  onClose() {
    console.log('onClose');
  }

  componentDidMount() {
    var a = [];
    console.log(this.state);
    this.state.pumping.forEach(element => {
      a.push(element.name);
    });
    this.state.terminal.forEach(element => {
      a.push(element.name);
    });
    this.setState({
      a: a
    });
    this.setState({
      dataSource: a
    }); // $.ecity.dialog.message('message', 3000, 200, 400);
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.bbox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.bengzhan()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        borderImage: "url('/images/imgs/03图层管理/泵站-点击.png') 0 0 0 0 fill round",
        borderImageRepeat: 'stretch'
      },
      id: "bengzhan"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6CF5\u7AD9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.zhongduan()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        borderImage: "url('/images/imgs/03图层管理/终端.png') 0 0 0 0 fill round",
        borderImageRepeat: 'stretch'
      },
      id: "zhongduan"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u7EC8\u7AEF")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        borderImage: "url('/images/imgs/03图层管理/video/工程.png') 0 0 0 0 fill round",
        borderImageRepeat: 'stretch'
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u5DE5\u7A0B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        borderImage: "url('/images/imgs/03图层管理/video/车载.png') 0 0 0 0 fill round",
        borderImageRepeat: 'stretch'
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u8F66\u8F7D")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        borderImage: "url('/images/imgs/03图层管理/video/抢修.png') 0 0 0 0 fill round",
        borderImageRepeat: 'stretch'
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62A2\u4FEE"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.sbox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3/34"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "36/247"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "145/155"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "145/155"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "145/155"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.sou
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.sone,
      style: {
        borderImage: "url('/images/imgs/03图层管理/video/3、安防监控/框.png') 0 0 0 0 fill round",
        borderImageRepeat: 'stretch'
      }
    }, "\u89C6\u9891\u76D1\u63A7\u8BBE\u5907\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "39/281")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["AutoComplete"], {
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.stwo,
      dataSource: this.state.dataSource,
      onChange: this.handleChange,
      id: "rv"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: () => this.loadNewTc()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        borderImage: "url('/images/imgs/03图层管理/video/3、安防监控/搜索.png') 0 0 0 0 fill round",
        borderImageRepeat: 'stretch'
      },
      className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.sousuo
    }))));
  }

});

/***/ }),

/***/ "./src/pages/bigsceen/screen3/wisdomeye3/view-1/index.js":
/*!***************************************************************!*\
  !*** ./src/pages/bigsceen/screen3/wisdomeye3/view-1/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/pages/bigsceen/screen3/wisdomeye3/view-1/View.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/pages/bigsceen/screen3/wisdomeye3/model/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  View: _View__WEBPACK_IMPORTED_MODULE_0__["default"],
  models: [_model__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./src/pages/bigsceen/screen3/wisdomeye3/view-1/style/index.less":
/*!***********************************************************************!*\
  !*** ./src/pages/bigsceen/screen3/wisdomeye3/view-1/style/index.less ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"bbox":"index__bbox___68H38","sbox":"index__sbox___2FQQf","sou":"index__sou___Zk2FZ","sone":"index__sone___2DWfV","stwo":"index__stwo___u1uYJ","sousuo":"index__sousuo___26rXl"};

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