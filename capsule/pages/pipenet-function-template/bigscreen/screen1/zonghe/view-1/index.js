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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/bigscreen/screen1/zonghe/view-1/index.js");
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

/***/ "./node_modules/_countup.js@1.9.3@countup.js/dist/countUp.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_countup.js@1.9.3@countup.js/dist/countUp.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,n){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});

/***/ }),

/***/ "./node_modules/_object-assign@4.1.1@object-assign/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_object-assign@4.1.1@object-assign/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/_prop-types@15.7.2@prop-types/checkPropTypes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_prop-types@15.7.2@prop-types/checkPropTypes.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/_prop-types@15.7.2@prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/_prop-types@15.7.2@prop-types/factoryWithTypeCheckers.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_prop-types@15.7.2@prop-types/factoryWithTypeCheckers.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/_react-is@16.11.0@react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/_prop-types@15.7.2@prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/_prop-types@15.7.2@prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/_prop-types@15.7.2@prop-types/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/_prop-types@15.7.2@prop-types/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/_react-is@16.11.0@react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/_prop-types@15.7.2@prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/_prop-types@15.7.2@prop-types/lib/ReactPropTypesSecret.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_prop-types@15.7.2@prop-types/lib/ReactPropTypesSecret.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/_react-countup@4.2.2@react-countup/build/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_react-countup@4.2.2@react-countup/build/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js"));
var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/_warning@4.0.3@warning/warning.js"));
var CountUp = _interopDefault(__webpack_require__(/*! countup.js */ "./node_modules/_countup.js@1.9.3@countup.js/dist/countUp.min.js"));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var createCountUpInstance = function createCountUpInstance(el, props) {
  var decimal = props.decimal,
      decimals = props.decimals,
      duration = props.duration,
      easingFn = props.easingFn,
      end = props.end,
      formattingFn = props.formattingFn,
      prefix = props.prefix,
      separator = props.separator,
      start = props.start,
      suffix = props.suffix,
      useEasing = props.useEasing;
  return new CountUp(el, start, end, decimals, duration, {
    decimal: decimal,
    easingFn: easingFn,
    formattingFn: formattingFn,
    separator: separator,
    prefix: prefix,
    suffix: suffix,
    useEasing: useEasing,
    useGrouping: !!separator
  });
};

var CountUp$1 =
/*#__PURE__*/
function (_Component) {
  _inherits(CountUp$$1, _Component);

  function CountUp$$1() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CountUp$$1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CountUp$$1)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "createInstance", function () {
      if (typeof _this.props.children === 'function') {
        // Warn when user didn't use containerRef at all
        warning(_this.containerRef.current && (_this.containerRef.current instanceof HTMLElement || _this.containerRef.current instanceof SVGTextElement), "Couldn't find attached element to hook the CountUp instance into! Try to attach \"containerRef\" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.");
      }

      return createCountUpInstance(_this.containerRef.current, _this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "pauseResume", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          reset = _assertThisInitialize.reset,
          start = _assertThisInitialize.restart,
          update = _assertThisInitialize.update;

      var onPauseResume = _this.props.onPauseResume;

      _this.instance.pauseResume();

      onPauseResume({
        reset: reset,
        start: start,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize2.pauseResume,
          start = _assertThisInitialize2.restart,
          update = _assertThisInitialize2.update;

      var onReset = _this.props.onReset;

      _this.instance.reset();

      onReset({
        pauseResume: pauseResume,
        start: start,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restart", function () {
      _this.reset();

      _this.start();
    });

    _defineProperty(_assertThisInitialized(_this), "start", function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize3.pauseResume,
          reset = _assertThisInitialize3.reset,
          start = _assertThisInitialize3.restart,
          update = _assertThisInitialize3.update;

      var _this$props = _this.props,
          delay = _this$props.delay,
          onEnd = _this$props.onEnd,
          onStart = _this$props.onStart;

      var run = function run() {
        return _this.instance.start(function () {
          return onEnd({
            pauseResume: pauseResume,
            reset: reset,
            start: start,
            update: update
          });
        });
      }; // Delay start if delay prop is properly set


      if (delay > 0) {
        _this.timeoutId = setTimeout(run, delay * 1000);
      } else {
        run();
      }

      onStart({
        pauseResume: pauseResume,
        reset: reset,
        update: update
      });
    });

    _defineProperty(_assertThisInitialized(_this), "update", function (newEnd) {
      var _assertThisInitialize4 = _assertThisInitialized(_this),
          pauseResume = _assertThisInitialize4.pauseResume,
          reset = _assertThisInitialize4.reset,
          start = _assertThisInitialize4.restart;

      var onUpdate = _this.props.onUpdate;

      _this.instance.update(newEnd);

      onUpdate({
        pauseResume: pauseResume,
        reset: reset,
        start: start
      });
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", React__default.createRef());

    return _this;
  }

  _createClass(CountUp$$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          delay = _this$props2.delay;
      this.instance = this.createInstance(); // Don't invoke start if component is used as a render prop

      if (typeof children === 'function' && delay !== 0) return; // Otherwise just start immediately

      this.start();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props3 = this.props,
          end = _this$props3.end,
          start = _this$props3.start,
          suffix = _this$props3.suffix,
          prefix = _this$props3.prefix,
          redraw = _this$props3.redraw,
          duration = _this$props3.duration,
          separator = _this$props3.separator;
      var hasCertainPropsChanged = duration !== nextProps.duration || end !== nextProps.end || start !== nextProps.start || suffix !== nextProps.suffix || prefix !== nextProps.prefix || separator !== nextProps.separator;
      return hasCertainPropsChanged || redraw;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // If duration, suffix, prefix, separator or start has changed
      // there's no way to update the values.
      // So we need to re-create the CountUp instance in order to
      // restart it.
      var _this$props4 = this.props,
          end = _this$props4.end,
          start = _this$props4.start,
          suffix = _this$props4.suffix,
          prefix = _this$props4.prefix,
          duration = _this$props4.duration,
          separator = _this$props4.separator,
          preserveValue = _this$props4.preserveValue;

      if (duration !== prevProps.duration || start !== prevProps.start || suffix !== prevProps.suffix || prefix !== prevProps.suffix || separator !== prevProps.separator) {
        this.instance.reset();
        this.instance = this.createInstance();
        this.start();
      } // Only end value has changed, so reset and and re-animate with the updated
      // end value.


      if (end !== prevProps.end) {
        if (!preserveValue) {
          this.instance.reset();
        }

        this.instance.update(end);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.instance.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          style = _this$props5.style;
      var containerRef = this.containerRef,
          pauseResume = this.pauseResume,
          reset = this.reset,
          restart = this.restart,
          update = this.update;

      if (typeof children === 'function') {
        return children({
          countUpRef: containerRef,
          pauseResume: pauseResume,
          reset: reset,
          start: restart,
          update: update
        });
      }

      return React__default.createElement("span", {
        className: className,
        ref: containerRef,
        style: style
      });
    }
  }]);

  return CountUp$$1;
}(React.Component);

_defineProperty(CountUp$1, "propTypes", {
  decimal: PropTypes.string,
  decimals: PropTypes.number,
  delay: PropTypes.number,
  easingFn: PropTypes.func,
  end: PropTypes.number.isRequired,
  formattingFn: PropTypes.func,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
  prefix: PropTypes.string,
  redraw: PropTypes.bool,
  separator: PropTypes.string,
  start: PropTypes.number,
  suffix: PropTypes.string,
  style: PropTypes.object,
  useEasing: PropTypes.bool,
  preserveValue: PropTypes.bool
});

_defineProperty(CountUp$1, "defaultProps", {
  decimal: '.',
  decimals: 0,
  delay: null,
  duration: null,
  easingFn: null,
  formattingFn: null,
  onEnd: function onEnd() {},
  onPauseResume: function onPauseResume() {},
  onReset: function onReset() {},
  onStart: function onStart() {},
  onUpdate: function onUpdate() {},
  prefix: '',
  redraw: false,
  separator: '',
  start: 0,
  suffix: '',
  style: undefined,
  useEasing: true,
  preserveValue: false
});

// since it only checks for truthy values -1 is enough to mock an element.

var NO_ELEMENT = -1;

var useCountUp = function useCountUp(props) {
  var _props = _objectSpread2({}, CountUp$1.defaultProps, {}, props);

  var start = _props.start,
      formattingFn = _props.formattingFn;

  var _useState = React.useState(typeof formattingFn === 'function' ? formattingFn(start) : start),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var countUpRef = React.useRef(null);

  var createInstance = function createInstance() {
    var countUp = createCountUpInstance(NO_ELEMENT, _props);
    var formattingFnRef = countUp.options.formattingFn;

    countUp.options.formattingFn = function () {
      var result = formattingFnRef.apply(void 0, arguments);
      setCount(result);
    };

    return countUp;
  };

  var getCountUp = function getCountUp() {
    var countUp = countUpRef.current;

    if (countUp !== null) {
      return countUp;
    }

    var newCountUp = createInstance();
    countUpRef.current = newCountUp;
    return newCountUp;
  };

  var reset = function reset() {
    var onReset = _props.onReset;
    getCountUp().reset();
    onReset({
      pauseResume: pauseResume,
      start: restart,
      update: update
    });
  };

  var restart = function restart() {
    var onStart = _props.onStart,
        onEnd = _props.onEnd;
    getCountUp().reset();
    getCountUp().start(function () {
      onEnd({
        pauseResume: pauseResume,
        reset: reset,
        start: restart,
        update: update
      });
    });
    onStart({
      pauseResume: pauseResume,
      reset: reset,
      update: update
    });
  };

  var pauseResume = function pauseResume() {
    var onPauseResume = _props.onPauseResume;
    getCountUp().pauseResume();
    onPauseResume({
      reset: reset,
      start: restart,
      update: update
    });
  };

  var update = function update(newEnd) {
    var onUpdate = _props.onUpdate;
    getCountUp().update(newEnd);
    onUpdate({
      pauseResume: pauseResume,
      reset: reset,
      start: restart
    });
  };

  React.useEffect(function () {
    var delay = _props.delay,
        onStart = _props.onStart,
        onEnd = _props.onEnd;
    var timeout = setTimeout(function () {
      onStart({
        pauseResume: pauseResume,
        reset: reset,
        update: update
      });
      getCountUp().start(function () {
        clearTimeout(timeout);
        onEnd({
          pauseResume: pauseResume,
          reset: reset,
          start: restart,
          update: update
        });
      });
    }, delay * 1000);
    return reset;
  }, []);
  return {
    countUp: count,
    start: restart,
    pauseResume: pauseResume,
    reset: reset,
    update: update
  };
};

exports.default = CountUp$1;
exports.useCountUp = useCountUp;


/***/ }),

/***/ "./node_modules/_react-is@16.11.0@react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_react-is@16.11.0@react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/_react-is@16.11.0@react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/_react-is@16.11.0@react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/_react-is@16.11.0@react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/_warning@4.0.3@warning/warning.js":
/*!********************************************************!*\
  !*** ./node_modules/_warning@4.0.3@warning/warning.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


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

/***/ "./src/pages/bigscreen/screen1/zonghe/model/index.js":
/*!***********************************************************!*\
  !*** ./src/pages/bigscreen/screen1/zonghe/model/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_comprehensive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/comprehensive.js */ "./src/pages/bigscreen/screen1/zonghe/services/comprehensive.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: 'comprehensiveN',
  state: {
    technologyData: 0,
    opend: ''
  },
  effects: {
    *information({
      payload
    }, {
      call,
      put
    }) {
      let technologyData;
      const response = yield call(_services_comprehensive_js__WEBPACK_IMPORTED_MODULE_1__["information"], payload);
      console.log(363636363636);
      console.log(response);
      technologyData = response.result;
      yield put({
        type: 'comprehensive2',
        payload: technologyData
      });
    }

  },
  reducers: {
    comprehensive2(state, {
      payload
    }) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        zhComprehensive: payload
      });
    }

  },

  setOpened(state) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      opend: true
    });
  }

});

/***/ }),

/***/ "./src/pages/bigscreen/screen1/zonghe/services/comprehensive.js":
/*!**********************************************************************!*\
  !*** ./src/pages/bigscreen/screen1/zonghe/services/comprehensive.js ***!
  \**********************************************************************/
/*! exports provided: information */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "information", function() { return information; });
/* harmony import */ var yc_lib_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yc/lib/http */ "./node_modules/yc/lib/http/index.js");
/* harmony import */ var yc_lib_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yc_lib_http__WEBPACK_IMPORTED_MODULE_0__);

const {
  get
} = yc_lib_http__WEBPACK_IMPORTED_MODULE_0___default.a;
async function information(params) {
  console.log(params);
  const response = await get({
    svn: 'BIG_SCREEN',
    path: 'information',
    validate: false
  });
  console.log(response);
  return response;
}

/***/ }),

/***/ "./src/pages/bigscreen/screen1/zonghe/view-1/View.js":
/*!***********************************************************!*\
  !*** ./src/pages/bigscreen/screen1/zonghe/view-1/View.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _class; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.less */ "./src/pages/bigscreen/screen1/zonghe/view-1/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pipenet_core_lib_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pipenet-core/lib/react */ "./node_modules/pipenet-core/lib/react/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countup */ "./node_modules/_react-countup@4.2.2@react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);
var _dec, _class2, _temp;






let _class = (_dec = Object(pipenet_core_lib_react__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => ({
  comprehensiveN: state.comprehensiveN.zhComprehensive
})), _dec(_class2 = (_temp = class _class2 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      timer: null // 定时器

    };

    this.query = () => {
      const payload = {};
      this.props.dispatch({
        type: 'comprehensiveN/information',
        payload
      });
    };
  }

  onClose() {
    console.log('onClose');
  }

  componentWillMount() {
    this.query();
  }

  componentDidMount() {}

  render() {
    const {
      comprehensiveN
    } = this.props;
    console.log(this.props);

    if (comprehensiveN === undefined) {
      return null;
    } else {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.web_font
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
        start: 0,
        end: 1066
      })), "\u5E73\u65B9\u516C\u91CC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
      }, "\u670D\u52A1\u9762\u79EF")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
        style: {
          background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
        start: 0,
        end: 13573
      })), "\u6237"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
      }, "\u6392\u6C34\u6237")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
        style: {
          background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
        start: 0,
        end: 396
      })), "\u5BB6"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
      }, "\u5165\u7F51\u4F01\u4E1A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
        style: {
          background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
        start: 0,
        end: comprehensiveN.total.total.toString().split('.')[0]
      }), " "), "\u516C\u91CC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
      }, "\u7BA1\u7F51\u603B\u957F")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
        style: {
          background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
        start: 0,
        end: comprehensiveN.punSum.punsum
      })), "\u4E2A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
      }, "\u6CF5\u7AD9\u603B\u6570")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.semicircleframe,
        style: {
          background: "url('/images/imgs/综合信息-半圆框.png') no-repeat"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.one
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
        start: 0,
        end: comprehensiveN.terminalSum.terminalsum
      }), " "), "\u4E2A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _style_index_less__WEBPACK_IMPORTED_MODULE_1___default.a.fuwu
      }, "\u7EC8\u7AEF\u603B\u6570"))));
    }
  }

}, _temp)) || _class2);



/***/ }),

/***/ "./src/pages/bigscreen/screen1/zonghe/view-1/index.js":
/*!************************************************************!*\
  !*** ./src/pages/bigscreen/screen1/zonghe/view-1/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/pages/bigscreen/screen1/zonghe/view-1/View.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/pages/bigscreen/screen1/zonghe/model/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  View: _View__WEBPACK_IMPORTED_MODULE_0__["default"],
  models: [_model__WEBPACK_IMPORTED_MODULE_1__["default"]]
});

/***/ }),

/***/ "./src/pages/bigscreen/screen1/zonghe/view-1/style/index.less":
/*!********************************************************************!*\
  !*** ./src/pages/bigscreen/screen1/zonghe/view-1/style/index.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"zonghe":"index__zonghe___1clJ9","comprehensive":"index__comprehensive___2gk6t","realtime":"index__realtime___6B5Lt","semicircleframe":"index__semicircleframe___2vDNy","one":"index__one___3rVRF","fuwu":"index__fuwu___1akFS"};

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