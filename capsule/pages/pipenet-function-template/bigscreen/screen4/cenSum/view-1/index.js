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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/bigscreen/screen4/cenSum/view-1/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/eventemitter2/lib/eventemitter2.js":
/*!*********************************************************!*\
  !*** ./node_modules/eventemitter2/lib/eventemitter2.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {
      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      this._maxListeners = conf.maxListeners !== undefined ? conf.maxListeners : defaultMaxListeners;

      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this._newListener = conf.newListener);
      conf.removeListener && (this._removeListener = conf.removeListener);
      conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    } else {
      this._maxListeners = defaultMaxListeners;
    }
  }

  function logPossibleMemoryLeak(count, eventName) {
    var errorMsg = '(node) warning: possible EventEmitter memory ' +
        'leak detected. ' + count + ' listeners added. ' +
        'Use emitter.setMaxListeners() to increase limit.';

    if(this.verboseMemoryLeak){
      errorMsg += ' Event name: ' + eventName + '.';
    }

    if(typeof process !== 'undefined' && process.emitWarning){
      var e = new Error(errorMsg);
      e.name = 'MaxListenersExceededWarning';
      e.emitter = this;
      e.count = count;
      process.emitWarning(e);
    } else {
      console.error(errorMsg);

      if (console.trace){
        console.trace();
      }
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this._newListener = false;
    this._removeListener = false;
    this.verboseMemoryLeak = false;
    configure.call(this, conf);
  }
  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name !== undefined) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else {
          if (typeof tree._listeners === 'function') {
            tree._listeners = [tree._listeners];
          }

          tree._listeners.push(listener);

          if (
            !tree._listeners.warned &&
            this._maxListeners > 0 &&
            tree._listeners.length > this._maxListeners
          ) {
            tree._listeners.warned = true;
            logPossibleMemoryLeak.call(this, tree._listeners.length, name);
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    if (n !== undefined) {
      this._maxListeners = n;
      if (!this._conf) this._conf = {};
      this._conf.maxListeners = n;
    }
  };

  EventEmitter.prototype.event = '';


  EventEmitter.prototype.once = function(event, fn) {
    return this._once(event, fn, false);
  };

  EventEmitter.prototype.prependOnceListener = function(event, fn) {
    return this._once(event, fn, true);
  };

  EventEmitter.prototype._once = function(event, fn, prepend) {
    this._many(event, 1, fn, prepend);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    return this._many(event, ttl, fn, false);
  }

  EventEmitter.prototype.prependMany = function(event, ttl, fn) {
    return this._many(event, ttl, fn, true);
  }

  EventEmitter.prototype._many = function(event, ttl, fn, prepend) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      return fn.apply(this, arguments);
    }

    listener._origin = fn;

    this._on(event, listener, prepend);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this._newListener) {
      if (!this._events.newListener) {
        return false;
      }
    }

    var al = arguments.length;
    var args,l,i,j;
    var handler;

    if (this._all && this._all.length) {
      handler = this._all.slice();
      if (al > 3) {
        args = new Array(al);
        for (j = 0; j < al; j++) args[j] = arguments[j];
      }

      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this, type);
          break;
        case 2:
          handler[i].call(this, type, arguments[1]);
          break;
        case 3:
          handler[i].call(this, type, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
    }

    if (this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
      if (typeof handler === 'function') {
        this.event = type;
        switch (al) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          args = new Array(al - 1);
          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
          handler.apply(this, args);
        }
        return true;
      } else if (handler) {
        // need to make copy of handlers because list can change in the middle
        // of emit call
        handler = handler.slice();
      }
    }

    if (handler && handler.length) {
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this);
          break;
        case 2:
          handler[i].call(this, arguments[1]);
          break;
        case 3:
          handler[i].call(this, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
      return true;
    } else if (!this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }

    return !!this._all;
  };

  EventEmitter.prototype.emitAsync = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this._newListener) {
        if (!this._events.newListener) { return Promise.resolve([false]); }
    }

    var promises= [];

    var al = arguments.length;
    var args,l,i,j;
    var handler;

    if (this._all) {
      if (al > 3) {
        args = new Array(al);
        for (j = 1; j < al; j++) args[j] = arguments[j];
      }
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(this._all[i].call(this, type));
          break;
        case 2:
          promises.push(this._all[i].call(this, type, arguments[1]));
          break;
        case 3:
          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
          break;
        default:
          promises.push(this._all[i].apply(this, args));
        }
      }
    }

    if (this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      switch (al) {
      case 1:
        promises.push(handler.call(this));
        break;
      case 2:
        promises.push(handler.call(this, arguments[1]));
        break;
      case 3:
        promises.push(handler.call(this, arguments[1], arguments[2]));
        break;
      default:
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
        promises.push(handler.apply(this, args));
      }
    } else if (handler && handler.length) {
      handler = handler.slice();
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(handler[i].call(this));
          break;
        case 2:
          promises.push(handler[i].call(this, arguments[1]));
          break;
        case 3:
          promises.push(handler[i].call(this, arguments[1], arguments[2]));
          break;
        default:
          promises.push(handler[i].apply(this, args));
        }
      }
    } else if (!this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        return Promise.reject(arguments[1]); // Unhandled 'error' event
      } else {
        return Promise.reject("Uncaught, unspecified 'error' event.");
      }
    }

    return Promise.all(promises);
  };

  EventEmitter.prototype.on = function(type, listener) {
    return this._on(type, listener, false);
  };

  EventEmitter.prototype.prependListener = function(type, listener) {
    return this._on(type, listener, true);
  };

  EventEmitter.prototype.onAny = function(fn) {
    return this._onAny(fn, false);
  };

  EventEmitter.prototype.prependAny = function(fn) {
    return this._onAny(fn, true);
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype._onAny = function(fn, prepend){
    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if (!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    if(prepend){
      this._all.unshift(fn);
    }else{
      this._all.push(fn);
    }

    return this;
  }

  EventEmitter.prototype._on = function(type, listener, prepend) {
    if (typeof type === 'function') {
      this._onAny(type, listener);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    if (this._newListener)
       this.emit('newListener', type, listener);

    if (this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else {
      if (typeof this._events[type] === 'function') {
        // Change to array.
        this._events[type] = [this._events[type]];
      }

      // If we've already got an array, just add
      if(prepend){
        this._events[type].unshift(listener);
      }else{
        this._events[type].push(listener);
      }

      // Check for listener leak
      if (
        !this._events[type].warned &&
        this._maxListeners > 0 &&
        this._events[type].length > this._maxListeners
      ) {
        this._events[type].warned = true;
        logPossibleMemoryLeak.call(this, this._events[type].length, type);
      }
    }

    return this;
  }

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }
        if (this._removeListener)
          this.emit("removeListener", type, listener);

        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }
        if (this._removeListener)
          this.emit("removeListener", type, listener);
      }
    }

    function recursivelyGarbageCollect(root) {
      if (root === undefined) {
        return;
      }
      var keys = Object.keys(root);
      for (var i in keys) {
        var key = keys[i];
        var obj = root[key];
        if ((obj instanceof Function) || (typeof obj !== "object") || (obj === null))
          continue;
        if (Object.keys(obj).length > 0) {
          recursivelyGarbageCollect(root[key]);
        }
        if (Object.keys(obj).length === 0) {
          delete root[key];
        }
      }
    }
    recursivelyGarbageCollect(this.listenerTree);

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          if (this._removeListener)
            this.emit("removeListenerAny", fn);
          return this;
        }
      }
    } else {
      fns = this._all;
      if (this._removeListener) {
        for(i = 0, l = fns.length; i < l; i++)
          this.emit("removeListenerAny", fns[i]);
      }
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (type === undefined) {
      !this._events || init.call(this);
      return this;
    }

    if (this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else if (this._events) {
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if (this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.eventNames = function(){
    return Object.keys(this._events);
  }

  EventEmitter.prototype.listenerCount = function(type) {
    return this.listeners(type).length;
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (true) {
     // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return EventEmitter;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/fetch-jsonp/build/fetch-jsonp.js":
/*!*******************************************************!*\
  !*** ./node_modules/fetch-jsonp/build/fetch-jsonp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, module) {
  'use strict';

  var defaultOptions = {
    timeout: 5000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null
  };

  function generateCallbackFunction() {
    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
  }

  function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
      delete window[functionName];
    } catch (e) {
      window[functionName] = undefined;
    }
  }

  function removeScript(scriptId) {
    var script = document.getElementById(scriptId);
    if (script) {
      document.getElementsByTagName('head')[0].removeChild(script);
    }
  }

  function fetchJsonp(_url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // to avoid param reassign
    var url = _url;
    var timeout = options.timeout || defaultOptions.timeout;
    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    var timeoutId = undefined;

    return new Promise(function (resolve, reject) {
      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
      var scriptId = jsonpCallback + '_' + callbackFunction;

      window[callbackFunction] = function (response) {
        resolve({
          ok: true,
          // keep consistent with fetch API
          json: function json() {
            return Promise.resolve(response);
          }
        });

        if (timeoutId) clearTimeout(timeoutId);

        removeScript(scriptId);

        clearFunction(callbackFunction);
      };

      // Check if the user set their own params, and if not add a ? to start a list of params
      url += url.indexOf('?') === -1 ? '?' : '&';

      var jsonpScript = document.createElement('script');
      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
      if (options.charset) {
        jsonpScript.setAttribute('charset', options.charset);
      }
      jsonpScript.id = scriptId;
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

      timeoutId = setTimeout(function () {
        reject(new Error('JSONP request to ' + _url + ' timed out'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        window[callbackFunction] = function () {
          clearFunction(callbackFunction);
        };
      }, timeout);

      // Caught if got 404/500
      jsonpScript.onerror = function () {
        reject(new Error('JSONP request to ' + _url + ' failed'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    });
  }

  // export as global function
  /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

  module.exports = fetchJsonp;
});

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

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//! moment.js

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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

/***/ "./node_modules/yc/lib/addr/baidu.js":
/*!*******************************************!*\
  !*** ./node_modules/yc/lib/addr/baidu.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @module Addr/baidu
                                                                                                                                                                                                                                                                               */

/**
 * Created by remote on 2017/6/7.
 * 地址查询
 */


var _transform = __webpack_require__(/*! ../transform */ "./node_modules/yc/lib/transform/index.js");

var _transform2 = _interopRequireDefault(_transform);

var _baidu = __webpack_require__(/*! ./base/baidu.js */ "./node_modules/yc/lib/addr/base/baidu.js");

var _request = __webpack_require__(/*! ../request */ "./node_modules/yc/lib/request/index.js");

var _fetchJsonp = __webpack_require__(/*! fetch-jsonp */ "./node_modules/fetch-jsonp/build/fetch-jsonp.js");

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _parseSearchTextResult() {
  var isJwd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var addrs = arguments[1];
  var size = arguments[2];
  var callback = arguments[3];

  var transform = this.transform;
  var baiduGpsArr = [];
  var baiduAttrs = [];
  var len = addrs.length > size ? size : addrs.length;

  for (var i = 0; i < len; i++) {
    var item = addrs[i];
    var geo = item.geo;
    geo = geo.split(';')[0];
    geo = geo.substring(geo.indexOf('|') + 1);
    var sx = geo.substring(0, geo.indexOf(','));
    var sy = geo.substring(geo.indexOf(',') + 1);
    var x = Number(sx);
    var y = Number(sy);

    var name = item.name || '';
    var alias = '';
    var addr = item.addr || '';

    if ((typeof addr === 'undefined' ? 'undefined' : _typeof(addr)) === 'object') {
      alias = addr.alias;
    }

    // 坐标转换为本地坐标
    var baiduGps = (0, _baidu.convertMC2LL)({
      x: x,
      y: y
    });
    baiduGpsArr.push(baiduGps);
    baiduAttrs.push({
      name: name,
      alias: alias,
      addr: addr
    });
  }

  (0, _baidu.getGpsPointByBaiduGpsV2)(baiduGpsArr, 1, 5, function (points) {
    if (isJwd) {
      callback(points);
      return;
    }

    var result = points.map(function (point, index) {
      var retPoint = transform.convert2XY(point.x, point.y);
      return {
        geometry: retPoint,
        name: baiduAttrs[index].name,
        addr: baiduAttrs[index].addr,
        alias: baiduAttrs[index].alias,
        geometryType: 'esriGeometryPoint'
      };
    });

    callback && callback(result);
  });
}

var Baidu = function () {
  function Baidu(options) {
    _classCallCheck(this, Baidu);

    this.cityId = options.cityId || -1;
    // 默认使用客户端查询
    this.searchType = options.searchType || 'client';
    this.self = {};

    // 服务端百度查询地址
    this.serverUrl = options.serverUrl;
    // 是否为经纬度
    this.isJwd = options.isJwd;

    this.transform = new _transform2.default();
  }

  /**
   * 百度地址搜索, text支持文本和坐标两种方式
   *
   * @param {any} text
   * @param {any} size
   * @param {any} callback
   * @memberof module:Addr/baidu
   */


  _createClass(Baidu, [{
    key: 'search',
    value: function search(text, size, callback) {
      var that = this;
      if (!this.cityId) {
        throw new Error('cityId: ' + this.cityId + ', 异常, 请检查');
      }

      switch (that.searchType) {
        case 'client':
          that._searchClient(text, size, callback);
          break;
        case 'server':
          that._searchServer(text, size, callback);
          break;
        default:
          callback(null);
      }
    }
  }, {
    key: '_searchServer',
    value: function _searchServer(text, size, callback) {
      var data = {
        f: 'json',
        size: size,
        cityid: this.cityId,
        text: encodeURIComponent(text)
      };
      (0, _request.get)(this.serverUrl, data).then(function (res) {
        if (!res.features) {
          callback(null);
          return;
        }

        var result = res.features.map(function (feature) {
          var att = feature.attributes;

          return {
            name: att.name,
            addr: att.addr,
            geometry: feature.geometry,
            geometryType: 'esriGeometryPoint'
          };
        });

        callback(result);
      });
    }
  }, {
    key: '_searchClient',
    value: function _searchClient(text, size, callback) {
      var _this = this;

      var isJwd = this.isJwd;

      var tests = text.split(',');
      // 坐标搜索
      if (tests.length === 2 && Number(tests[0]) && Number(tests[1])) {}
      // 文本搜索
      else {
          var baseUrl = 'http://map.baidu.com/?newmap=1&reqflag=pcmap&biz=1&from=webmap&qt=s&da_src=pcmappg.searchBox.button';
          baseUrl += '&wd=' + encodeURIComponent(text) + '&c=' + this.cityId;
          baseUrl += '&src=0&wd2=&sug=0&l=11';
          baseUrl += '&from=webmap&tn=B_NORMAL_MAP&nn=0&ie=utf-8';
          baseUrl += '&t=' + new Date().getTime();

          (0, _fetchJsonp2.default)(baseUrl).then(function (res) {
            return res.json();
          }).then(function (res) {
            var addrs = res.content;
            if (!addrs || addrs.length === 0 || !Array.isArray(addrs)) {
              callback(null);
              return;
            }
            _parseSearchTextResult.call(_this, _this.isJwd, addrs, size, callback);
          }).catch(function () {
            return callback(null);
          });
        }
    }
  }]);

  return Baidu;
}();

exports.default = Baidu;
//# sourceMappingURL=../../maps/addr/baidu.js.map


/***/ }),

/***/ "./node_modules/yc/lib/addr/base/baidu.js":
/*!************************************************!*\
  !*** ./node_modules/yc/lib/addr/base/baidu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertMC2LL = convertMC2LL;
exports.convertLL2MC = convertLL2MC;
exports.getBaiduGpsPointByGps = getBaiduGpsPointByGps;
exports.getGpsPointByBaiduGps = getGpsPointByBaiduGps;
exports.getGpsPointByBaiduGpsV2 = getGpsPointByBaiduGpsV2;
exports.getPointByBaiduOnline = getPointByBaiduOnline;

var _fetchJsonp = __webpack_require__(/*! fetch-jsonp */ "./node_modules/fetch-jsonp/build/fetch-jsonp.js");

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MCBAND = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0]; /**
                                                                             * @module
                                                                             * @ignore
                                                                             */

var LLBAND = [75, 60, 45, 30, 15, 0];
var MC2LL = [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]];

var LL2MC = [[-0.0015702102444, 111320.7020616939, 1704480524535203.0, -10338987376042340.0, 26112667856603880.0, -35149669176653700.0, 26595700718403920.0, -10725012454188240.0, 1800819912950474.0, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]];

/**
 * 在线转换坐标
 * @param x
 * @param y
 * @param callback
 * @private
 */
function onlineTrans2Baidu(x, y, callback) {
  var baseUrl = 'http://api.map.baidu.com/ag/coord/convert?from=0&to=4';
  baseUrl += '&x=' + x;
  baseUrl += '&y=' + y;
  var theObj = this;
  (0, _fetchJsonp2.default)(baseUrl).then(res = res.json()).then(function (res) {
    if (res.error && res.error > 0) {
      throw new Error('在线请求坐标转换出错');
    }
    var x = Number(theObj._base64.base64decode(res.x));
    var y = Number(theObj._base64.base64decode(res.y));
    var result = { x: x, y: y };
    callback(result);
  });
}

/**
 * This callback is displayed as a global member.
 * @callback onlineTrans2BaiduV2Callback
 * @param {Object[]} result - 百度转换结果集
 */

/**
 * 在线转换百度坐标v2
 * @param {Array} points - 待转坐标组
 * @param {number} points[].x - x 轴坐标
 * @param {number} points[].y - y 轴坐标
 * @param {number} from - 源坐标类型
 *                      1：GPS设备获取的角度坐标，wgs84坐标;
 *                      2：GPS获取的米制坐标、sogou地图所用坐标;
 *                      3：google地图、soso地图、aliyun地图、mapabc地图和amap地图所用坐标，国测局坐标;
 *                      4：3中列表地图坐标对应的米制坐标;
 *                      5：百度地图采用的经纬度坐标;
 *                      6：百度地图采用的米制坐标;
 *                      7：mapbar地图坐标;
 *                      8：51地图坐标
 * @param {number} to - 目的坐标类型
 *                      5：bd09ll(百度经纬度坐标);
 *                      6：bd09mc(百度米制经纬度坐标);
 * @param {onlineTrans2BaiduV2Callback} callback - 转换成功回调
 * @throws 请求异常
 */
function onlineTrans2BaiduV2(points, from, to, callback) {
  var corrds = points.map(function (point) {
    return point.x + ',' + point.y;
  }).join(';');

  var ak = 'zU2UihPwB30egi7DCz84NGjOIxqci5MD';

  var url = 'http://api.map.baidu.com/geoconv/v1/?';
  url += 'from=' + from;
  url += '&to=' + to;
  url += '&ak=' + ak;
  url += '&coords=' + corrds;

  (0, _fetchJsonp2.default)(url).then(function (res) {
    return res.json();
  }).then(function (res) {
    if (res.status !== 0) {
      throw new Error('在线请求坐标转换出错, state 为' + res.status);
    }
    callback(res.result);
  });
}

function convertor(cD, cE) {
  if (cD === null || cE === null) {
    return null;
  }
  var ret = {};
  var T = cE[0] + cE[1] * Math.abs(cD.x);
  var cC = Math.abs(cD.y) / cE[9];
  var cF = cE[2] + cE[3] * cC + cE[4] * cC * cC + cE[5] * cC * cC * cC + cE[6] * cC * cC * cC * cC + cE[7] * cC * cC * cC * cC * cC + cE[8] * cC * cC * cC * cC * cC * cC;
  T *= cD.x < 0 ? -1 : 1;
  cF *= cD.y < 0 ? -1 : 1;

  ret.x = T;
  ret.y = cF;
  return ret;
}

function getRange(cD, cC, T) {
  cD = Math.max(cD, cC);
  cD = Math.min(cD, T);
  return cD;
}

function getLoop(cD, cC, T) {
  while (cD > T) {
    cD -= T - cC;
  }
  while (cD < cC) {
    cD += T - cC;
  }
  return cD;
}

// 百度web墨卡托转经纬度
function convertMC2LL(cD) {
  var cF = null;
  for (var cE = 0; cE < MCBAND.length; cE++) {
    if (cD.y >= MCBAND[cE]) {
      cF = MC2LL[cE];
      break;
    }
  }
  var T = convertor(cD, cF);
  return T;
}

// 百度经纬度转web墨卡托
function convertLL2MC(T) {
  var cE = null;
  T.x = getLoop(T.x, -180, 180);
  T.y = getRange(T.y, -74, 74);

  for (var cD = 0; cD < LLBAND.length; cD++) {
    if (T.y >= LLBAND[cD]) {
      cE = LL2MC[cD];
      break;
    }
  }
  if (cE === null) {
    for (var _cD = LLBAND.length - 1; _cD >= 0; _cD--) {
      if (T.y <= -LLBAND[_cD]) {
        cE = LL2MC[_cD];
        break;
      }
    }
  }
  return convertor(T, cE);
}

function getBaiduGpsPointByGps(p, callback) {
  onlineTrans2Baidu(p.x, p.y, function (res) {
    callback(res);
  });
}

function getGpsPointByBaiduGps(point, callback) {
  onlineTrans2Baidu(point.x, point.y, function (res) {
    var dx = res.x;
    var dy = res.y;
    var gpsX = 2 * point.x - dx;
    var gpsY = 2 * point.y - dy;

    var result = { x: gpsX, y: gpsY };
    callback(result);
  });
}

/**
 * This callback is displayed as a global member.
 * @callback getGpsPointByBaiduGpsV2Callback
 * @param {Object[]} result - 百度转换结果集
 */

/**
 * 百度的经纬度纠偏获取真实位置v2
 * @export
 * @param {Object[]} points - 点串
 * @param {number} points[].x - x 轴坐标
 * @param {number} points[].y - y 轴坐标
 * @param {number} from - 源坐标类型
 * @param {number} to - 目的坐标类型
 * @param {getGpsPointByBaiduGpsV2Callback} callback - 处理完成回调
 */
function getGpsPointByBaiduGpsV2(points, from, to, callback) {
  onlineTrans2BaiduV2(points, from, to, function (tmpPoints) {
    var result = tmpPoints.map(function (tmpPoint, index) {
      var point = points[index];
      var dx = tmpPoint.x;
      var dy = tmpPoint.y;
      var gpsX = 2 * point.x - dx;
      var gpsY = 2 * point.y - dy;
      return {
        x: gpsX,
        y: gpsY
      };
    });

    callback && callback(result);
  });
}

/**
 * This callback is displayed as a global member.
 * @callback getPointByBaiduOnlineCallback
 * @param {Object[]} result - 百度转换结果集
 */

/**
 * 通过百度地图 api 进行坐标转换
 * @param {Object[]} points - 点串
 * @param {number} points[].x - x 轴坐标
 * @param {number} points[].y - y 轴坐标
 * @param {number} from - 源坐标类型
 * @param {number} to - 目的坐标类型
 * @param {getPointByBaiduOnlineCallback} callback - 处理完成回调
 * @returns {void}
 */
function getPointByBaiduOnline(points, from, to, callback) {
  onlineTrans2BaiduV2(points, from, to, function (tmpPoints) {
    callback && callback(tmpPoints);
  });
}
//# sourceMappingURL=../../../maps/addr/base/baidu.js.map


/***/ }),

/***/ "./node_modules/yc/lib/addr/index.js":
/*!*******************************************!*\
  !*** ./node_modules/yc/lib/addr/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baidu = __webpack_require__(/*! ./baidu.js */ "./node_modules/yc/lib/addr/baidu.js");

var _baidu2 = _interopRequireDefault(_baidu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _baidu2.default; /**
                                    * Created by remote on 2017/6/8.
                                    */
//# sourceMappingURL=../../maps/addr/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/base/getUUID.js":
/*!*********************************************!*\
  !*** ./node_modules/yc/lib/base/getUUID.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUUID;
/**
 * @method getUuid
 * @memberof module:base
 */
function getUUID() {
  var s = [];
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  // bits 12-15 of the time_hi_and_version field to 0010
  s[14] = '4';
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);
  s[8] = '-';
  s[13] = '-';
  s[18] = '-';
  s[23] = '-';

  var uuid = s.join('');
  return uuid;
}
//# sourceMappingURL=../../maps/base/getUUID.js.map


/***/ }),

/***/ "./node_modules/yc/lib/base64/index.js":
/*!*********************************************!*\
  !*** ./node_modules/yc/lib/base64/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module
 */

/**
 *  Base64 encode / decode
 *
 *  @author haitao.tu
 *  @date   2010-04-26
 *  @email  tuhaitao@foxmail.com
 *
 */
var KEY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
/**
 * 占位符
 */
var PLACEHOLDER = 'CB3';

// private method for UTF-8 encoding
function utf8Encode(string) {
  string = string.replace(/\r\n/g, '\n');
  var utftext = '';
  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n);
    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      utftext += String.fromCharCode(c >> 6 | 192);
      utftext += String.fromCharCode(c & 63 | 128);
    } else {
      utftext += String.fromCharCode(c >> 12 | 224);
      utftext += String.fromCharCode(c >> 6 & 63 | 128);
      utftext += String.fromCharCode(c & 63 | 128);
    }
  }
  return utftext;
}

// private method for UTF-8 decoding
function utf8Decode(utftext) {
  var string = '';
  var i = 0;
  var c = 0;
  var c2 = 0;
  var c3 = 0;
  while (i < utftext.length) {
    c = utftext.charCodeAt(i);
    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    } else if (c > 191 && c < 224) {
      c2 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode((c & 31) << 6 | c2 & 63);
      i += 2;
    } else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      i += 3;
    }
  }
  return string;
}

/**
 * 将 base64URL 密文转为标准 base64 密文
 * @param {String} cipherText - 密文
 * @returns {String} - 标准 base64 密文
 */
function _toBase64(cipherText) {
  cipherText = cipherText.replace(new RegExp('\\-', 'gm'), '+').trim().replace(new RegExp('_', 'gm'), '/').trim();
  var mode = cipherText.length % 4;
  for (var i = 0; i < mode; i++) {
    cipherText += '=';
  }
  return cipherText;
}

/**
 * 使用 base64 url 进行加密
 *
 * @param {string} input - 明文
 * @returns {string} - 密文
 */
function encodeURL(input) {
  var str = encode(input);
  str = str.replace(new RegExp('\\+', 'gm'), '-').trim().replace(new RegExp('/', 'gm'), '_').trim().replace(new RegExp('=', 'gm'), '').trim();
  return str.trim();
}

/**
 * 解码 Base64 URL 标准密文
 * @param {String} input - 密文
 * @returns {String} - 明文
 */
function decodeURL(input) {
  input = _toBase64(input);
  return decode(input).trim();
}

/**
 * 是否为 base64 url 标准密文
 * @param {String} input - 密文
 * @returns {Boolean} - 是否
 */
function isBase64URL(input) {
  if (typeof input !== 'string') {
    return false;
  }
  input = _toBase64(input);
  return isBase64(input);
}

/**
 * public method for encoding
 *
 * @param {string} input
 * @returns {string}
 */
function encode(input) {
  var output = '';
  var chr1 = void 0;
  var chr2 = void 0;
  var chr3 = void 0;
  var enc1 = void 0;
  var enc2 = void 0;
  var enc3 = void 0;
  var enc4 = void 0;
  var i = 0;
  input = utf8Encode(input);
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = (chr1 & 3) << 4 | chr2 >> 4;
    enc3 = (chr2 & 15) << 2 | chr3 >> 6;
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = 64;
      enc4 = enc3;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + KEY.charAt(enc1) + KEY.charAt(enc2) + KEY.charAt(enc3) + KEY.charAt(enc4);
  }
  return output;
}

/**
 * public method for decoding
 *
 * @param {string} input
 * @returns {string}
 */
function decode(input) {
  var output = '';
  var chr1 = void 0;
  var chr2 = void 0;
  var chr3 = void 0;
  var enc1 = void 0;
  var enc2 = void 0;
  var enc3 = void 0;
  var enc4 = void 0;
  var i = 0;
  // eslint-disable-next-line
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  while (i < input.length) {
    enc1 = KEY.indexOf(input.charAt(i++));
    enc2 = KEY.indexOf(input.charAt(i++));
    enc3 = KEY.indexOf(input.charAt(i++));
    enc4 = KEY.indexOf(input.charAt(i++));
    chr1 = enc1 << 2 | enc2 >> 4;
    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
    chr3 = (enc3 & 3) << 6 | enc4;
    output += String.fromCharCode(chr1);
    if (enc3 !== 64) {
      output += String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output += String.fromCharCode(chr3);
    }
  }
  output = utf8Decode(output);
  return output;
}

/**
 * 是否为 base64 标准密文
 * @param {String} input - 密文
 * @returns {Boolean} - 是否
 */
function isBase64(input) {
  if (typeof input !== 'string') {
    return false;
  }
  var reg = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
  return !!input.match(reg);
}

/**
 * 变种 URL 加密
 * @param {String} input - 待加密文本
 */
function encodeURL2(input) {
  if (typeof input !== 'string') {
    throw new Error('参数类型错误');
  }
  if (input.length === 0) {
    throw new Error('参数不允许为空');
  }
  return PLACEHOLDER + encodeURL(input);
}

/**
 * 变种 URL 解码
 */
function decodeURL2(input) {
  if (isBase64URL2(input)) {
    return decodeURL(input.substring(PLACEHOLDER.length));
  }
  return '';
}

/**
 * 是否为变种 URL 密文
 * @returns {Boolean} - 是否
 */
function isBase64URL2(input) {
  return isBase64URL(input.substring(PLACEHOLDER.length));
}

exports.default = {
  encodeURL: encodeURL,
  decodeURL: decodeURL,
  isBase64URL: isBase64URL,
  encode: encode,
  decode: decode,
  isBase64: isBase64,
  encodeURL2: encodeURL2,
  decodeURL2: decodeURL2,
  isBase64URL2: isBase64URL2
};
//# sourceMappingURL=../../maps/base64/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/eventBus/eventBus.js":
/*!**************************************************!*\
  !*** ./node_modules/yc/lib/eventBus/eventBus.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventemitter = __webpack_require__(/*! eventemitter2 */ "./node_modules/eventemitter2/lib/eventemitter2.js");

var events = new _eventemitter.EventEmitter2({
  wildcard: true
});

// eventbus 是一个简单的EventEmitter2 对象
exports.default = events;
//# sourceMappingURL=../../maps/eventBus/eventBus.js.map


/***/ }),

/***/ "./node_modules/yc/lib/eventBus/index.js":
/*!***********************************************!*\
  !*** ./node_modules/yc/lib/eventBus/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventBus = __webpack_require__(/*! ./eventBus.js */ "./node_modules/yc/lib/eventBus/eventBus.js");

var _eventBus2 = _interopRequireDefault(_eventBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _eventBus2.default;
//# sourceMappingURL=../../maps/eventBus/index.js.map


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

/***/ "./node_modules/yc/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/yc/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transform = exports.Addr = exports.noop = exports.util = exports.sso = exports.base64 = exports.meta = exports.eventBus = exports.sysConfig = exports.http = exports.request = undefined;

var _request = __webpack_require__(/*! ./request */ "./node_modules/yc/lib/request/index.js");

Object.defineProperty(exports, 'request', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_request).default;
  }
});

var _http = __webpack_require__(/*! ./http */ "./node_modules/yc/lib/http/index.js");

Object.defineProperty(exports, 'http', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_http).default;
  }
});

var _sysConfig = __webpack_require__(/*! ./sysConfig */ "./node_modules/yc/lib/sysConfig/index.js");

Object.defineProperty(exports, 'sysConfig', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sysConfig).default;
  }
});

var _eventBus = __webpack_require__(/*! ./eventBus */ "./node_modules/yc/lib/eventBus/index.js");

Object.defineProperty(exports, 'eventBus', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_eventBus).default;
  }
});

var _meta = __webpack_require__(/*! ./meta */ "./node_modules/yc/lib/meta/index.js");

Object.defineProperty(exports, 'meta', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_meta).default;
  }
});

var _base = __webpack_require__(/*! ./base64 */ "./node_modules/yc/lib/base64/index.js");

Object.defineProperty(exports, 'base64', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_base).default;
  }
});

var _sso = __webpack_require__(/*! ./sso */ "./node_modules/yc/lib/sso/index.js");

Object.defineProperty(exports, 'sso', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sso).default;
  }
});

var _util = __webpack_require__(/*! ./util */ "./node_modules/yc/lib/util/index.js");

Object.defineProperty(exports, 'util', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_util).default;
  }
});

var _noop = __webpack_require__(/*! ./noop */ "./node_modules/yc/lib/noop/index.js");

Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_noop).default;
  }
});

var _addr = __webpack_require__(/*! ./addr */ "./node_modules/yc/lib/addr/index.js");

Object.defineProperty(exports, 'Addr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_addr).default;
  }
});

var _transform = __webpack_require__(/*! ./transform */ "./node_modules/yc/lib/transform/index.js");

Object.defineProperty(exports, 'Transform', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_transform).default;
  }
});

var _transcoding = __webpack_require__(/*! ./transcoding */ "./node_modules/yc/lib/transcoding/index.js");

var _transcoding2 = _interopRequireDefault(_transcoding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=../maps/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/meta/index.js":
/*!*******************************************!*\
  !*** ./node_modules/yc/lib/meta/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _meta = __webpack_require__(/*! ./meta */ "./node_modules/yc/lib/meta/meta.js");

var meta = _interopRequireWildcard(_meta);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = meta;
//# sourceMappingURL=../../maps/meta/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/meta/meta.js":
/*!******************************************!*\
  !*** ./node_modules/yc/lib/meta/meta.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetaList = getMetaList;
exports.getNetMetaList = getNetMetaList;
exports.getNotNetMetaList = getNotNetMetaList;
exports.getMetaByLayerDescripe = getMetaByLayerDescripe;
exports.getMetaByLayerName = getMetaByLayerName;
exports.getLayerIdsByLayerName = getLayerIdsByLayerName;
exports.getEqusByLayerName = getEqusByLayerName;
exports.getLayerId = getLayerId;
exports.getMetaByCode = getMetaByCode;
exports.getMetaByDname = getMetaByDname;
exports.getFieldsByDname = getFieldsByDname;
exports.getLayerIdByDname = getLayerIdByDname;
exports.getFieldsByDno = getFieldsByDno;
exports.getMetaInfoByDno = getMetaInfoByDno;
exports.getLayerNameByLayerId = getLayerNameByLayerId;
exports.getEquByLayerId = getEquByLayerId;
exports.getMetaByLayerId = getMetaByLayerId;
exports.getSortFieldsFromFields = getSortFieldsFromFields;
exports.getVisibleFieldsFromFields = getVisibleFieldsFromFields;
exports.getEditFieldsFromFields = getEditFieldsFromFields;
exports.getDisp4FromFieldsSync = getDisp4FromFieldsSync;
exports.getDisp4FromEquInfoSync = getDisp4FromEquInfoSync;
exports.getDisp4FromNetMetaSync = getDisp4FromNetMetaSync;
exports.getDisp4FromNetMetaListSync = getDisp4FromNetMetaListSync;

var _http = __webpack_require__(/*! ../http/http */ "./node_modules/yc/lib/http/http.js");

var _request = __webpack_require__(/*! ../request */ "./node_modules/yc/lib/request/index.js");

var NET_TYPE = 4;
var POINT_TYPE = 1;
var LINE_TYPE = 0;

var _cache = new Map();

/**
 * 装载元数据信息
 * @private
 * @returns {void}
 */
function _load() {
  var cfg = (0, _http.getCfg)();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.values(cfg)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      if (value.type === 'net') {
        var url = value.url + '/metas?f=json';
        var metaStr = (0, _request.get1)(url);
        try {
          var meta = JSON.parse(metaStr);
          if (meta === null) {
            console.error(url + ', \u5143\u6570\u636E\u4E3A\u7A7A');
          } else if (meta.error) {
            console.error(url + ', \u5143\u6570\u636E\u4FE1\u606F\u83B7\u53D6\u5931\u8D25\uFF0C' + meta.error.message);
          } else {
            _cache.set(value.name, meta);
          }
        } catch (err) {
          console.error(url + ', \u5F02\u5E38\u4FE1\u606F\uFF1A' + err.message);
        }
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
}

/**
 * 通过 name 获取该 url 对应的元数据信息(管网、非管网)
 *
 * @param {String} [svrName='QUERY_SVR'] - 管网服务地址别名
 * @returns {Object[]|Null} - 元数据信息
 * @private
 */
function __getMetaList() {
  var svrName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'QUERY_SVR';

  var meta = _cache.get(svrName);

  if (!meta) {
    _load();
    meta = _cache.get(svrName);
  }

  if (typeof meta === 'undefined') {
    return null;
  }
  return meta.metainfo.map(function (metainfo) {
    return Object.assign({}, metainfo);
  });
}

/**
 * 获取管网元数据信息
 *
 * @param {string} svrName - 管网服务地址别名
 * @returns {Array|null} - 管网元数据信息
 * @private
 */
function __getNetMetaList(svrName) {
  var metaList = __getMetaList(svrName);
  if (metaList === null) {
    return null;
  }

  return metaList.filter(function (meta) {
    return meta.type === NET_TYPE;
  });
}

/**
 * 从设备中筛选出点设备
 *
 * @param {Object[]} equs - 设备组
 * @param {Number} equs.geotype - 设备空间类型
 * @returns {Object[]} - 点设备
 * @private
 */
function __getPointEqusFromEqus(equs) {
  return equs.filter(function (equ) {
    return equ.geotype === POINT_TYPE;
  });
}

/**
 * 从设备中筛选出线设备
 *
 * @param {Object[]} equs - 设备组
 * @param {Number} equs.geotype - 设备空间类型
 * @returns {Object[]} - 线设备组
 * @private
 */
function __getLineEqusFromEqus(equs) {
  return equs.filter(function (equ) {
    return equ.geotype === LINE_TYPE;
  });
}

/**
 * 通过 layername 获取元数据信息
 * 前提是 layername 作为唯一标示存在
 *
 * @param {string} layerName - 图层名称
 * @param {string} netType - 管网类型
 * @param {string} svrName - 管网服务地址别名
 * @returns {Object|null} - 元数据信息
 * @private
 */
function __getMetaByLayerName(layerName, netType, svrName) {
  var metaList = __getMetaList(svrName);
  if (metaList === null) {
    return null;
  }

  for (var i = 0; i < metaList.length; i++) {
    var meta = metaList[i];
    if (meta.layername === layerName) {
      if (netType === undefined ? true : meta.type === parseInt(netType, 10)) {
        return meta;
      }
    }
  }
  return null;
}

/**
 * 通过图层别名获取元数据信息
 * 前提是 descripe 作为唯一标示存在
 *
 * @param {string} descripe - 图层别名
 * @param {string} svrName - 管网服务地址别名
 * @returns {Object|null} - 元数据信息
 * @private
 */
function __getMetaByLayerDescripe(descripe, svrName) {
  var metaList = __getMetaList(svrName);
  if (metaList === null) {
    return null;
  }

  for (var i = 0; i < metaList.length; i++) {
    var meta = metaList[i];
    if (meta.descripe === descripe) {
      return meta;
    }
  }
  return null;
}

/**
 * 用于处理 disptype=4 这种特殊情况，同步方式
 * @param {String} tableName - 表名
 * @param {Object[]} fields - 待装载字段
 * @param {Number} fields[].disptype - 显示类型，这里就是处理等于 4 这种情况
 * @param {String} fields[].name - 字段名
 * @param {String} fields[].alias - 字段别名
 * @param {String[]} fields[].values - 字段所对应枚举值
 * @param {String} svrName -管网服务地址别名
 * @returns {Object[]} - 字段枚举值信息
 */
function __factoryForDispType4Sync(tableName, fields, svrName) {
  var cfg = (0, _http.getCfg)();
  var svr = cfg.get(svrName);
  var url = svr.url + '/table/' + tableName + '/query?f=json';

  var newFields = [];
  fields.forEach(function (field) {
    var newField = Object.assign({}, field);
    if (field.disptype === 4) {
      var resStr = (0, _request.get1)(url, {
        where: '1=1',
        outFields: field.name,
        returnDistinctValues: true
      });
      var enums = [];
      var res = JSON.parse(resStr);
      res.features.forEach(function (feature) {
        var val = feature.attributes[newField.name];
        if (!(typeof val === 'string' && val.length === 0)) {
          enums.push(val);
        }
      });
      newField.values = enums;
    }
    newFields.push(newField);
  });
  return newFields;
}

/**
 * 通过 dname 获取管网元数据信息
 * @param {String} layerName - 图层名称
 * @param {String} dname - 设备别名
 * @param {String} svrName - 管网服务地址别名
 * @returns {Array|null} - 网元数据信息
 * @private
 */
function _getNetMetaByDname(layerName, dname, svrName) {
  var netMeta = __getMetaByLayerName(layerName, NET_TYPE, svrName);
  if (netMeta === null) {
    return null;
  }
  if (netMeta.net.length > 0) {
    for (var j = 0; j < netMeta.net.length; j++) {
      var equ = netMeta.net[j];
      if (equ.dname === dname) {
        return equ;
      }
    }
  }
  return null;
}

/**
 * 通过 dno 获取管网元数据信息
 * @param {String} layerName - 图层名称
 * @param {Number} dno - 设备编号
 * @param {String} svrName - 管网服务地址别名
 * @returns {Object[]|null} - 网元数据信息
 * @private
 */
function _getNetMetaByDno(layerName, dno, svrName) {
  var netMeta = __getMetaByLayerName(layerName, NET_TYPE, svrName);
  if (netMeta === null) {
    return null;
  }
  if (netMeta.net.length > 0) {
    for (var j = 0; j < netMeta.net.length; j++) {
      var equ = netMeta.net[j];
      if (equ.dno === dno) {
        return equ;
      }
    }
  }
  return null;
}

/**
 * 通过 code 获取元数据信息
 *
 * @param {String} code - 元数据编码
 * @param {String} svrName - 管网服务地址别名
 * @returns {Object[]|Null} - 元数据信息
 * @private
 */
function _getMetaByCode(code, svrName) {
  var results = [];

  var metaList = __getMetaList(svrName);
  if (metaList === null) {
    return results;
  }
  for (var i = 0; i < metaList.length; i++) {
    var meta = metaList[i];
    if (meta.code === code) {
      results.push(meta);
    }
  }
  return results;
}

/**
 * 获取元数据信息(管网、非管网)
 *
 * @param {string} svrName - 管网服务地址别名，例如 QUERY_SVR
 * @returns {Object[]} - 元数据信息
 */
function getMetaList(svrName) {
  return __getMetaList(svrName);
}

/**
 * 获取管网元数据信息
 *
 * @param {string} svrName - 管网服务地址别名，例如 QUERY_SVR
 * @returns {Object[]} - 管网元数据信息
 */
function getNetMetaList(svrName) {
  return __getNetMetaList(svrName);
}

/**
 * 获取要素元数据信息
 *
 * @param {string} svrName - 管网服务地址别名，例如 QUERY_SVR
 * @returns {Object[]|Null} - 要素元数据信息
 */
function getNotNetMetaList(svrName) {
  var metaList = __getMetaList(svrName);
  if (metaList === null) {
    return null;
  }

  return metaList.filter(function (meta) {
    return meta.type !== NET_TYPE;
  });
}

/**
 * 通过 layerDescripe 获取元数据信息
 * @param {string} descripe - 图层别名
 * @param {string} svrName - 管网服务地址别名，例如 QUERY_SVR
 * @returns {Object|null} - 要素数据信息
 */
function getMetaByLayerDescripe(descripe, svrName) {
  return __getMetaByLayerDescripe(descripe, svrName);
}

/**
 * 通过 layername 获取元数据信息
 * @param {string} layerName - 图层名
 * @param {string} svrName - 管网服务地址别名，例如 QUERY_SVR
 * @returns {Object|null} - 要素数据信息
 */
function getMetaByLayerName(layerName, svrName) {
  return __getMetaByLayerName(layerName, undefined, svrName);
}

/**
 * 通过 layerName 获取管网的设备 layerIds
 * @param {string} layerName - 图层名
 * @param {string} svrName - 管网服务地址别名，例如 QUERY_SVR
 * @param {string} type - 类型(枚举值: point, line, 其他情况代表同时包含 point 和 line)
 * @returns {number[]} - 管网的设备 layerId 集合
 */
function getLayerIdsByLayerName(layerName, svrName, type) {
  var equs = getEqusByLayerName(layerName, svrName);
  if (type === 'point') {
    equs = __getPointEqusFromEqus(equs);
  } else if (type === 'line') {
    equs = __getLineEqusFromEqus(equs);
  }
  return equs.map(function (equ) {
    return equ.layerid;
  });
}

/**
 * 获取某管网下所有设备信息
 *
 * @param {String} layerName - 图层名
 * @param {string} svrName - 管网服务地址别名，例如 QUERY_SVR
 * @returns {Array|Null} - 设备信息
 */
function getEqusByLayerName(layerName, svrName) {
  var equs = [];
  var meta = __getMetaByLayerName(layerName, NET_TYPE, svrName);

  if (meta !== null) {
    equs = meta.net;
  }

  return equs;
}

/**
 * 通过 layerName、dname 获取元数据的 layerId
 * 返回为 -1 时, 说明没有找到对应设备
 *
 * @param {String} layerName - 图层名
 * @param {String} [dname] - dname 不传说明查询非管网
 * @param {String} [svrName] - 管网服务地址别名
 * @returns {Number} - 元数据的 layerId
 */
function getLayerId(layerName, dname, svrName) {
  var layerId = -1;
  if (!dname) {
    var metaList = __getMetaList(svrName);
    if (metaList !== null) {
      for (var i = 0; i < metaList.length; i++) {
        var meta = metaList[i];
        if (meta.layername === layerName) {
          layerId = meta.layerid;
          break;
        }
      }
    }
  } else {
    layerId = getLayerIdByDname(layerName, dname, svrName);
  }
  return layerId;
}

/**
 * 通过 code 获取元数据信息
 * @param {String} code - 元数据编码
 * @param {String} svrName - 管网服务地址别名
 * @returns {Object[]|Null} - 元数据信息
 */
function getMetaByCode(code, svrName) {
  return _getMetaByCode(code, svrName);
}

/**
 * 通过 dname 获取管网设备信息
 *
 * @param {String} layerName - 图层名称
 * @param {String} dname - 设备别名
 * @param {String} svrName - 管网服务地址别名
 * @returns {Array|null} - 网元数据信息
 */
function getMetaByDname(layerName, dname, svrName) {
  return _getNetMetaByDname(layerName, dname, svrName);
}

/**
 * 通过 Dname 获取设备字段信息
 *
 * @param {String} layerName - 图层名称
 * @param {String} dname - 设备别名
 * @param {String} svrName - 管网服务地址别名
 * @returns {Object[]} - 设备字段信息
 */
function getFieldsByDname(layerName, dname, svrName) {
  var fields = [];
  var equ = _getNetMetaByDname(layerName, dname, svrName);
  if (equ !== null) {
    fields = getVisibleFieldsFromFields(equ.fields);
  }
  return fields;
}

/**
 * 通过 layerName 以及 dname 获取 layerId
 * 返回为 -1 时, 说明没有找到对应设备
 *
 * @param {String} layerName - 图层名称
 * @param {String} dname - 设备别名
 * @param {String} svrName - 管网服务地址别名
 * @returns {Number} - 相对应 layerId
 */
function getLayerIdByDname(layerName, dname, svrName) {
  var layerId = -1;
  var equ = _getNetMetaByDname(layerName, dname, svrName);
  if (equ !== null) {
    layerId = equ.layerid;
  }
  return layerId;
}

/**
 * 通过 dno 获取设备字段信息
 * @param {String} layerName - 管网名称
 * @param {String} dno - 设备编号
 * @param {String} svrName - 管网服务地址别名
 * @returns {Object[]} - 设备字段信息
 */
function getFieldsByDno(layerName, dno, svrName) {
  var fields = [];
  dno = parseInt(dno, 10);
  if (isNaN(dno)) {
    throw new Error('dno 参数类型异常, 只能为整型');
  }
  var equ = _getNetMetaByDno(layerName, dno, svrName);
  if (equ !== null) {
    fields = getVisibleFieldsFromFields(equ.fields);
  }
  return fields;
}

/**
 * 通过 dno 获取管网设备信息
 *
 * @param {String} layerName - 管网名称
 * @param {String} dno - 设备编号
 * @param {String} svrName - 管网服务地址别名
 * @returns {Object[]|Null} - 设备信息
 */
function getMetaInfoByDno(layerName, dno, svrName) {
  dno = parseInt(dno, 10);
  if (isNaN(dno)) {
    console.error('dno is not int');
    return null;
  }
  return _getNetMetaByDno(layerName, dno, svrName);
}

/**
 * 通过 layerId 获取 layerName
 * @param {Number} layerId - 图层 id
 * @param {String} svrName - 管网服务地址别名
 * @returns {String|Null} - 图层名
 */
function getLayerNameByLayerId(layerId, svrName) {
  if (isNaN(layerId)) {
    console.error('layerId is not int');
    return null;
  }
  var metaList = __getMetaList(svrName);
  for (var i = 0; i < metaList.length; i++) {
    var meta = metaList[i];
    if (meta.layerid === layerId) {
      return meta.layername;
    }
    if (meta.net.length > 0) {
      for (var j = 0; j < meta.net.length; j++) {
        var equ = meta.net[j];
        if (equ.layerid === layerId) {
          return meta.layername;
        }
      }
    }
  }
  return null;
}

/**
 * 通过 layerId 获取设备元数据信息
 * @param {Number} layerId - 图层 id
 * @param {String} svrName - 管网服务地址别名
 * @returns {Object|null} - 设备元数据信息
 */
function getEquByLayerId(layerId, svrName) {
  layerId = parseInt(layerId, 10);
  if (isNaN(layerId)) {
    throw new Error('layerId is not int');
  }
  var metaList = __getMetaList(svrName);
  for (var i = 0; i < metaList.length; i++) {
    var meta = metaList[i];
    if (meta.layerid === layerId) {
      return meta;
    }
    if (meta.net.length > 0) {
      for (var j = 0; j < meta.net.length; j++) {
        var equ = meta.net[j];
        if (equ.layerid === layerId) {
          return equ;
        }
      }
    }
  }
  return null;
}

/**
 * 通过 layerId 获取当前 layerId 所在管网元数据信息
 * ???需要区分管网、非管网
 * @param {Number} layerId - 图层 id
 * @param {String} svrName - 管网服务地址别名
 * @returns {Object|null} - 管网元数据信息
 */
function getMetaByLayerId(layerId, svrName) {
  layerId = parseInt(layerId, 10);
  if (isNaN(layerId)) {
    throw new Error('layerId is not number');
  }
  var netMetaList = __getNetMetaList(svrName);
  if (netMetaList === null) {
    return null;
  }
  for (var i = 0; i < netMetaList.length; i++) {
    var netMeta = netMetaList[i];
    if (netMeta.net.length > 0) {
      for (var j = 0; j < netMeta.net.length; j++) {
        if (netMeta.net[j].layerid === layerId) {
          return netMeta;
        }
      }
    }
  }
  return null;
}

/**
 * 字段排序
 *
 * @param {Object[]} fields - 字段
 * @param {Number} fields.findex - 序号
 * @returns {Object[]|null} - 字段
 */
function getSortFieldsFromFields(fields) {
  if (Array.isArray(fields)) {
    fields.sort(function (item1, item2) {
      return Number(item1.findex) - Number(item2.findex);
    });
    return fields;
  }
  return null;
}

/**
 * 筛选可见字段
 *
 * @param {Object[]} fields - 字段
 * @param {Number} fields.visible - 是否可见
 * @returns {Object[]|null} - 字段
 */
function getVisibleFieldsFromFields(fields) {
  if (Array.isArray(fields)) {
    return getSortFieldsFromFields(fields).filter(function (field) {
      return field.visible === 1;
    });
  }
  return null;
}

/**
 * 筛选可编辑字段
 *
 * @param {Object[]} fields - 字段
 * @param {Number} fields.visible - 是否可编辑
 * @returns {Object[]|null} - 字段
 */
function getEditFieldsFromFields(fields) {
  if (Array.isArray(fields)) {
    return getSortFieldsFromFields(fields).filter(function (field) {
      return field.editable === 1;
    });
  }
  return null;
}

/**
 * 同步获取 disptype=4 的字段枚举值
 * @param {String} tableName - 表名
 * @param {Object[]} fields - 字段信息
 * @param {String} svrName -管网服务地址别名
 * @returns {Deferred.promise} - 重新装载完数据后的回调
 */
function getDisp4FromFieldsSync(tableName, fields, svrName) {
  if (!Array.isArray(fields) || fields.length === 0) {
    console.error('参数 netInfo 中的 fields 字段异常');
    return;
  }
  return __factoryForDispType4Sync(tableName, fields, svrName);
}

/**
 * 同步获取 disptype=4 的字段枚举值
 * @param {String} layerName - 管网名称
 * @param {Object} equInfo - 设备信息
 * @param {Object[]} equInfo.fields - 字段信息
 * @param {Number} equInfo.geotype - 设备空间类型
 * @param {String} svrName -管网服务地址别名
 * @returns {Deferred.promise} - 重新装载完数据后的回调
 */
function getDisp4FromEquInfoSync(layerName, equInfo, svrName) {
  var newEquInfo = Object.assign({}, equInfo);
  var fields = newEquInfo.fields;
  var geoType = newEquInfo.geotype;
  var tableName = '';
  switch (geoType) {
    case 0:
      tableName = layerName + '_lin';
      break;
    case 1:
      tableName = layerName + '_nod';
      break;
    default:
      throw new Error('geoType 不符合要求');
  }
  if (tableName.length === 0) {
    console.error('参数 equInfo.geotype 不允许为空');
    return;
  }
  newEquInfo.fields = getDisp4FromFieldsSync(tableName, fields, svrName);
  return newEquInfo;
}

/**
 * 同步获取 disptype=4 的字段枚举值
 * @param {Object} netInfo - 设备信息
 * @param {String} netInfo.layername - 管网名称
 * @param {String} netInfo.code
 * @param {String} netInfo.db_mode
 * @param {String} netInfo.descripe
 * @param {String} netInfo.layerid
 * @param {String} netInfo.remark
 * @param {String} netInfo.type
 * @param {Object[]} netInfo.net - 设备信息
 * @param {String[]} netInfo.net[].fields - 字段信息
 * @param {String} svrName -管网服务地址别名
 * @returns {Object} - 重新装载完数据后的回调
 */
function getDisp4FromNetMetaSync(netMeta, svrName) {
  var newNetMeta = Object.assign({}, netMeta);

  newNetMeta.net.forEach(function (equInfo, index) {
    newNetMeta.net[index] = getDisp4FromEquInfoSync(newNetMeta.layername, equInfo, svrName);
  });

  return newNetMeta;
}

/**
 * 同步获取 disptype=4 的字段枚举值
 * @param {Object} netInfo - 设备信息
 * @param {String} netInfo.layername - 管网名称
 * @param {String} netInfo.code
 * @param {String} netInfo.db_mode
 * @param {String} netInfo.descripe
 * @param {String} netInfo.layerid
 * @param {String} netInfo.remark
 * @param {String} netInfo.type
 * @param {Object[]} netInfo.net - 设备信息
 * @param {String[]} netInfo.net[].fields - 字段信息
 * @param {String} svrName -管网服务地址别名
 * @returns {Object} - 重新装载完数据后的回调
 */
function getDisp4FromNetMetaListSync(netMetaList, svrName) {
  if (!Array.isArray(netMetaList) || netMetaList.length === 0) {
    console.error('参数 netMetaList 不允许为空数组');
    return;
  }

  return netMetaList.map(function (netMeta) {
    return getDisp4FromNetMetaSync(netMeta, svrName);
  });
}
//# sourceMappingURL=../../maps/meta/meta.js.map


/***/ }),

/***/ "./node_modules/yc/lib/noop/index.js":
/*!*******************************************!*\
  !*** ./node_modules/yc/lib/noop/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};
//# sourceMappingURL=../../maps/noop/index.js.map


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

/***/ "./node_modules/yc/lib/sso/index.js":
/*!******************************************!*\
  !*** ./node_modules/yc/lib/sso/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _base = __webpack_require__(/*! ../base64 */ "./node_modules/yc/lib/base64/index.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取令牌信息
 *
 * @param {String} tokenText - 令牌密文
 * @param {Number} timeout - 超时时长
 * @returns {Object} info - 令牌信息
 * @returns {String} info.user - 用户名
 * @returns {Boolean} info.valid - 是否有效
 */
/**
 * @module sso
 * 关于 sso 单点模拟登陆相关功能
 */
function getTokenInfo(tokenText) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var user = '';
  var valid = false;
  if (typeof tokenText !== 'string') {
    return { user: user, valid: valid };
  }
  if (_base2.default.isBase64URL2(tokenText)) {
    var clearText = _base2.default.decodeURL2(tokenText);
    user = clearText.substring(0, clearText.indexOf('_'));
    var time = clearText.substring(clearText.indexOf('_') + 1);
    var now = (0, _moment2.default)();
    var loginTime = (0, _moment2.default)(time);
    if (loginTime.isValid() && now.diff(loginTime, 'minute') <= timeout) {
      valid = true;
    }
  }
  return { user: user, valid: valid };
}

/**
 * 获取令牌密文
 *
 * @param {String} userName - 用户名
 * @returns {String} - 令牌密文
 */
function getCipherText(userName) {
  if (typeof userName !== 'string') {
    return '';
  }
  if (userName.length === 0) {
    return '';
  }
  var now = (0, _moment2.default)().format('YYYY-MM-DD HH:mm:ss');
  return _base2.default.encodeURL2(userName + '_' + now);
}

exports.default = { getTokenInfo: getTokenInfo, getCipherText: getCipherText };
//# sourceMappingURL=../../maps/sso/index.js.map


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

/***/ "./node_modules/yc/lib/transcoding/index.js":
/*!**************************************************!*\
  !*** ./node_modules/yc/lib/transcoding/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = encrypt;
exports.decrypt = decrypt;
exports.gcj_encrypt = gcj_encrypt;
exports.gcj_decrypt = gcj_decrypt;
exports.gcj_decrypt_exact = gcj_decrypt_exact;
exports.bd_encrypt = bd_encrypt;
exports.bd_decrypt = bd_decrypt;
exports.mercator_encrypt = mercator_encrypt;
exports.mercator_decrypt = mercator_decrypt;
/**
 * 标准 wgs84 与火星坐标系转换
 */
var PI = 3.14159265358979324;
var x_pi = 3.14159265358979324 * 3000.0 / 180.0;

/**
 * 从 wgs84 转码不同火星坐标系
 * @param {number} lat - 纬度
 * @param {number} lon - 经度
 * @param {string} coord - 火星坐标系，例如 gcj02
 */
function encrypt(lat, lon, coord) {
  switch (coord) {
    case 'gcj02':
      return gcj_encrypt(lat, lon);
    default:
      console.log('coord 不支持');
  }
}

/**
 * 从火星坐标系转码 wgs84
 * @param {number} lat - 火星纬度
 * @param {number} lon - 火星经度
 * @param {string} coord - 火星坐标系，例如 gcj02
 */
function decrypt(lat, lon, coord) {
  switch (coord) {
    case 'gcj02':
      return gcj_decrypt_exact(lat, lon);
    default:
      console.log('coord 不支持');
  }
}

// two point's distance
function distance(latA, lonA, latB, lonB) {
  var earthR = 6371000;
  var x = Math.cos(latA * PI / 180) * Math.cos(latB * PI / 180) * Math.cos((lonA - lonB) * PI / 180);
  var y = Math.sin(latA * PI / 180) * Math.sin(latB * PI / 180);
  var s = x + y;
  if (s > 1) s = 1;
  if (s < -1) s = -1;
  var alpha = Math.acos(s);
  var distance = alpha * earthR;
  return distance;
}
function outOfChina(lat, lon) {
  if (lon < 72.004 || lon > 137.8347) return true;
  if (lat < 0.8293 || lat > 55.8271) return true;
  return false;
}
function transformLat(x, y) {
  var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0;
  ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0;
  return ret;
}
function transformLon(x, y) {
  var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0;
  ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0;
  return ret;
}

function delta(lat, lon) {
  // Krasovsky 1940
  //
  // a = 6378245.0, 1/f = 298.3
  // b = a * (1 - f)
  // ee = (a^2 - b^2) / a^2;
  var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
  var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
  var dLat = transformLat(lon - 105.0, lat - 35.0);
  var dLon = transformLon(lon - 105.0, lat - 35.0);
  var radLat = lat / 180.0 * PI;
  var magic = Math.sin(radLat);
  magic = 1 - ee * magic * magic;
  var sqrtMagic = Math.sqrt(magic);
  dLat = dLat * 180.0 / (a * (1 - ee) / (magic * sqrtMagic) * PI);
  dLon = dLon * 180.0 / (a / sqrtMagic * Math.cos(radLat) * PI);
  return { lat: dLat, lon: dLon };
}

/**
 * WGS-84 to GCJ-02
 * @param {*} wgsLat
 * @param {*} wgsLon
 */
function gcj_encrypt(wgsLat, wgsLon) {
  if (outOfChina(wgsLat, wgsLon)) return { lat: wgsLat, lon: wgsLon };

  var d = delta(wgsLat, wgsLon);
  return { lat: wgsLat + d.lat, lon: wgsLon + d.lon };
}
/**
 * GCJ-02 to WGS-84
 * @param {*} gcjLat
 * @param {*} gcjLon
 */
function gcj_decrypt(gcjLat, gcjLon) {
  if (outOfChina(gcjLat, gcjLon)) return { lat: gcjLat, lon: gcjLon };

  var d = delta(gcjLat, gcjLon);
  return { lat: gcjLat - d.lat, lon: gcjLon - d.lon };
}
/**
 * GCJ-02 to WGS-84 exactly
 * @param {*} gcjLat
 * @param {*} gcjLon
 */
function gcj_decrypt_exact(gcjLat, gcjLon) {
  var initDelta = 0.01;
  var threshold = 0.000000001;
  var dLat = initDelta,
      dLon = initDelta;
  var mLat = gcjLat - dLat,
      mLon = gcjLon - dLon;
  var pLat = gcjLat + dLat,
      pLon = gcjLon + dLon;
  var wgsLat,
      wgsLon,
      i = 0;
  while (1) {
    wgsLat = (mLat + pLat) / 2;
    wgsLon = (mLon + pLon) / 2;
    var tmp = gcj_encrypt(wgsLat, wgsLon);
    dLat = tmp.lat - gcjLat;
    dLon = tmp.lon - gcjLon;
    if (Math.abs(dLat) < threshold && Math.abs(dLon) < threshold) break;

    if (dLat > 0) pLat = wgsLat;else mLat = wgsLat;
    if (dLon > 0) pLon = wgsLon;else mLon = wgsLon;

    if (++i > 10000) break;
  }
  //console.log(i);
  return { lat: wgsLat, lon: wgsLon };
}
/**
 * GCJ-02 to BD-09
 * @param {*} gcjLat
 * @param {*} gcjLon
 */
function bd_encrypt(gcjLat, gcjLon) {
  var x = gcjLon,
      y = gcjLat;
  var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
  var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
  bdLon = z * Math.cos(theta) + 0.0065;
  bdLat = z * Math.sin(theta) + 0.006;
  return { lat: bdLat, lon: bdLon };
}
/**
 * BD-09 to GCJ-02
 * @param {*} bdLat
 * @param {*} bdLon
 */
function bd_decrypt(bdLat, bdLon) {
  var x = bdLon - 0.0065,
      y = bdLat - 0.006;
  var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
  var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
  var gcjLon = z * Math.cos(theta);
  var gcjLat = z * Math.sin(theta);
  return { lat: gcjLat, lon: gcjLon };
}
/**
 * WGS-84 to Web mercator
 * mercatorLat -> y
 * mercatorLon -> x
 * @param {*} wgsLat
 * @param {*} wgsLon
 */
function mercator_encrypt(wgsLat, wgsLon) {
  var x = wgsLon * 20037508.34 / 180;
  var y = Math.log(Math.tan((90 + wgsLat) * PI / 360)) / (PI / 180);
  y = y * 20037508.34 / 180;
  return { lat: y, lon: x };
  /*
     if ((Math.abs(wgsLon) > 180 || Math.abs(wgsLat) > 90))
         return null;
     var x = 6378137.0 * wgsLon * 0.017453292519943295;
     var a = wgsLat * 0.017453292519943295;
     var y = 3189068.5 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
     return {'lat' : y, 'lon' : x};
     //*/
}
/**
 * Web mercator to WGS-84
 * mercatorLat -> y
 * mercatorLon -> x
 * @param {*} mercatorLat
 * @param {*} mercatorLon
 */
function mercator_decrypt(mercatorLat, mercatorLon) {
  var x = mercatorLon / 20037508.34 * 180;
  var y = mercatorLat / 20037508.34 * 180;
  y = 180 / PI * (2 * Math.atan(Math.exp(y * PI / 180)) - PI / 2);
  return { lat: y, lon: x };
  /*
     if (Math.abs(mercatorLon) < 180 && Math.abs(mercatorLat) < 90)
         return null;
     if ((Math.abs(mercatorLon) > 20037508.3427892) || (Math.abs(mercatorLat) > 20037508.3427892))
         return null;
     var a = mercatorLon / 6378137.0 * 57.295779513082323;
     var x = a - (Math.floor(((a + 180.0) / 360.0)) * 360.0);
     var y = (1.5707963267948966 - (2.0 * Math.atan(Math.exp((-1.0 * mercatorLat) / 6378137.0)))) * 57.295779513082323;
     return {'lat' : y, 'lon' : x};
     //*/
}
//# sourceMappingURL=../../maps/transcoding/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/transform/index.js":
/*!************************************************!*\
  !*** ./node_modules/yc/lib/transform/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transform = __webpack_require__(/*! ./transform.js */ "./node_modules/yc/lib/transform/transform.js");

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _transform2.default;
//# sourceMappingURL=../../maps/transform/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/transform/transform.js":
/*!****************************************************!*\
  !*** ./node_modules/yc/lib/transform/transform.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Transform;

var _sysConfig = __webpack_require__(/*! ../sysConfig */ "./node_modules/yc/lib/sysConfig/index.js");

var _sysConfig2 = _interopRequireDefault(_sysConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCfgByKey = _sysConfig2.default.getCfgByKey; /**
                                                    * @module
                                                    * @ignore
                                                    */

function Transform() {
  this.transParams = null;
  // 转换类型 1：为七参数法，2为七参数+四参数法，3为四参数法，4为六参数法,6为七参数+四参数反转 9 四参数不做矩阵变换
  this.m_transType = 0;
  // 椭球类型  客户地图所采用的椭球类型，1为北京54椭球，2为西安80椭球,3为WGS-84椭球
  this.m_ellipseType = 0;
  // 中央经线 单位：度
  this.m_middleLine = 0.0;
  // XY坐标方向与是否取反 1/0 反向/正向
  this.m_rev = 0;
  // 西安80椭球
  this.m_xaEllipse = {};
  // 北京54椭球
  this.m_bjEllipse = {};
  // WGS-84椭球
  this.m_gpsEllipse = {};
  // 六参数
  this.m_sixParam = {};
  // 四参数
  this.m_fourParam = {};
  // 七参数
  this.m_sevenParam = {};
  // 二参数
  this.m_twoParam = {};

  // 四参数 反转
  this.m_fourParam_reverse = {};
  // 七参数 反转
  this.m_sevenParam_reverse = {};

  // 北京-54椭球参数
  this.m_bjEllipse.a = 6378245;
  this.m_bjEllipse.f = 1 / 298.3;
  this.m_bjEllipse.e2 = 0.006693421623;
  this.m_bjEllipse.A1 = 111134.8611;
  this.m_bjEllipse.A2 = -16036.4803;
  this.m_bjEllipse.A3 = 16.8281;
  this.m_bjEllipse.A4 = -0.022;

  // 西安-80椭球参数
  this.m_xaEllipse.a = 6378140;
  this.m_xaEllipse.f = 1 / 298.257;
  this.m_xaEllipse.e2 = 0.0066943849995879;
  this.m_xaEllipse.A1 = 111133.0047;
  this.m_xaEllipse.A2 = -16038.5282;
  this.m_xaEllipse.A3 = 16.8326;
  this.m_xaEllipse.A4 = -0.022;

  // WGS-84椭球参数
  this.m_gpsEllipse.a = 6378137;
  this.m_gpsEllipse.f = 1 / 298.257233563;
  this.m_gpsEllipse.e2 = 0.006694379989;
  this.m_gpsEllipse.A1 = 0.0;
  this.m_gpsEllipse.A2 = 0.0;
  this.m_gpsEllipse.A3 = 0.0;
  this.m_gpsEllipse.A4 = 0.0;

  this.loadParams = function () {
    this.transParams = getCfgByKey('transParams');

    this.m_ellipseType = Number(this.transParams.ellipseType);
    this.m_middleLine = Number(this.transParams.middleLine);
    this.m_transType = Number(this.transParams.transType);
    this.m_rev = Number(this.transParams.rev);

    // 根据转换类型取相应的转换参数
    switch (this.m_transType) {
      // 四参数转换
      case 1:
        {
          this.m_fourParam.x_off = Number(this.transParams.four_param.x_off);
          this.m_fourParam.y_off = Number(this.transParams.four_param.y_off);
          this.m_fourParam.angle = Number(this.transParams.four_param.angle);
          this.m_fourParam.m = Number(this.transParams.four_param.m);
        }
        break;
      // 四参数转换不矩阵变化
      case 9:
        {
          this.m_fourParam.x_off = Number(this.transParams.four_param.x_off);
          this.m_fourParam.y_off = Number(this.transParams.four_param.y_off);
          this.m_fourParam.angle = Number(this.transParams.four_param.angle);
          this.m_fourParam.m = Number(this.transParams.four_param.m);
        }
        break;
      // 六参数转换
      case 2:
        {
          this.m_sixParam.x0_local = Number(this.transParams.six_param.x0_local);
          this.m_sixParam.y0_local = Number(this.transParams.six_param.y0_local);
          this.m_sixParam.x0_gps = Number(this.transParams.six_param.x0_gps);
          this.m_sixParam.y0_gps = Number(this.transParams.six_param.y0_gps);
          this.m_sixParam.angle = Number(this.transParams.six_param.angle);
          this.m_sixParam.m = Number(this.transParams.six_param.m);
        }
        break;
      // 七参数转换
      case 3:
        {
          this.m_twoParam.x_off = Number(this.transParams.seven_param.x_off);
          this.m_twoParam.y_off = Number(this.transParams.seven_param.y_off);

          //this.initSevenParamXYOff(m_sevenParam, 'seven_param');
          this.m_sevenParam.x_off = Number(this.transParams.seven_param.seven_x_off) || Number(this.transParams.seven_param.x_off);
          this.m_sevenParam.y_off = Number(this.transParams.seven_param.seven_y_off) || Number(this.transParams.seven_param.y_off);

          this.m_sevenParam.z_off = Number(this.transParams.seven_param.seven_z_off);
          this.m_sevenParam.x_angle = Number(this.transParams.seven_param.seven_x_angle) * Math.PI / 648000;
          this.m_sevenParam.y_angle = Number(this.transParams.seven_param.seven_y_angle) * Math.PI / 648000;
          this.m_sevenParam.z_angle = Number(this.transParams.seven_param.seven_z_angle) * Math.PI / 648000;
          this.m_sevenParam.m = Number(this.transParams.seven_param.seven_m);
        }
        break;
      // 七参数+四参数转换
      case 4:
        {
          this.m_fourParam.x_off = Number(this.transParams.seven_four.four_x_off);
          this.m_fourParam.y_off = Number(this.transParams.seven_four.four_y_off);
          this.m_fourParam.angle = Number(this.transParams.seven_four.four_angle);
          this.m_fourParam.m = Number(this.transParams.seven_four.four_m);

          //this.initSevenParamXYOff(m_sevenParam, 'seven_four');
          this.m_sevenParam.x_off = Number(this.transParams.seven_four.seven_x_off);
          this.m_sevenParam.y_off = Number(this.transParams.seven_four.seven_y_off);

          this.m_sevenParam.z_off = Number(this.transParams.seven_four.seven_z_off);
          this.m_sevenParam.x_angle = Number(this.transParams.seven_four.seven_x_angle) * Math.PI / 648000;
          this.m_sevenParam.y_angle = Number(this.transParams.seven_four.seven_y_angle) * Math.PI / 648000;
          this.m_sevenParam.z_angle = Number(this.transParams.seven_four.seven_z_angle) * Math.PI / 648000;
          this.m_sevenParam.m = Number(this.transParams.seven_four.seven_m);
        }
        break;
      // 二参数，中央经线投影
      case 5:
        {
          this.m_twoParam.x_off = Number(this.transParams.trans_off.x_off);
          this.m_twoParam.y_off = Number(this.transParams.trans_off.y_off);
        }
        break;
      // 七参数+二参数反转
      case 6:
        {
          this.m_twoParam.x_off = Number(this.transParams.seven_param_rev.x_off);
          this.m_twoParam.y_off = Number(this.transParams.seven_param_rev.y_off);

          this.m_sevenParam.x_off = Number(this.transParams.seven_param_rev.seven_x_off);
          this.m_sevenParam.y_off = Number(this.transParams.seven_param_rev.seven_y_off);
          this.m_sevenParam.z_off = Number(this.transParams.seven_param_rev.seven_z_off);
          this.m_sevenParam.x_angle = Number(this.transParams.seven_param_rev.seven_x_angle) * Math.PI / 648000;
          this.m_sevenParam.y_angle = Number(this.transParams.seven_param_rev.seven_y_angle) * Math.PI / 648000;
          this.m_sevenParam.z_angle = Number(this.transParams.seven_param_rev.seven_z_angle) * Math.PI / 648000;
          this.m_sevenParam.m = Number(this.transParams.seven_param_rev.seven_m);
        }
        break;
      // 七参数+四参数 正反转两种参数
      case 21:
        {
          // 正转 七，四参数
          this.m_fourParam.x_off = Number(this.transParams.seven_four.four_x_off);
          this.m_fourParam.y_off = Number(this.transParams.seven_four.four_y_off);
          this.m_fourParam.angle = Number(this.transParams.seven_four.four_angle);
          this.m_fourParam.m = Number(this.transParams.seven_four.four_m);

          //this.initSevenParamXYOff(m_sevenParam, "seven_four");
          this.m_sevenParam.x_off = Number(this.transParams.seven_four.seven_x_off);
          this.m_sevenParam.y_off = Number(this.transParams.seven_four.seven_y_off);
          this.m_sevenParam.z_off = Number(this.transParams.seven_four.seven_z_off);
          this.m_sevenParam.x_angle = Number(this.transParams.seven_four.seven_x_angle) * Math.PI / 648000;
          this.m_sevenParam.y_angle = Number(this.transParams.seven_four.seven_y_angle) * Math.PI / 648000;
          this.m_sevenParam.z_angle = Number(this.transParams.seven_four.seven_z_angle) * Math.PI / 648000;
          this.m_sevenParam.m = Number(this.transParams.seven_four.seven_m);

          // 反转四 七参数
          this.m_fourParam_reverse.x_off = Number(this.transParams.seven_four_reverse.four_x_off);
          this.m_fourParam_reverse.y_off = Number(this.transParams.seven_four_reverse.four_y_off);
          this.m_fourParam_reverse.angle = Number(this.transParams.seven_four_reverse.four_angle);
          this.m_fourParam_reverse.m = Number(this.transParams.seven_four_reverse.four_m);

          this.m_sevenParam_reverse.x_off = Number(this.transParams.seven_four_reverse.seven_x_off);
          this.m_sevenParam_reverse.y_off = Number(this.transParams.seven_four_reverse.seven_y_off);
          this.m_sevenParam_reverse.z_off = Number(this.transParams.seven_four_reverse.seven_z_off);
          this.m_sevenParam_reverse.x_angle = Number(this.transParams.seven_four_reverse.seven_x_angle) * Math.PI / 648000;
          this.m_sevenParam_reverse.y_angle = Number(this.transParams.seven_four_reverse.seven_y_angle) * Math.PI / 648000;
          this.m_sevenParam_reverse.z_angle = Number(this.transParams.seven_four_reverse.seven_z_angle) * Math.PI / 648000;
          this.m_sevenParam_reverse.m = Number(this.transParams.seven_four_reverse.seven_m);
        }
        break;
    }
  };

  /**
   * WGS的经纬度转给定坐标系的XY
   * @param lon
   * @param lat
   * @returns {any}
   */
  this.convert2XY = function (lon, lat) {
    try {
      var p = null;
      // 高斯坐标转换
      if (lon > 0) {
        var dLon = this.DuToDFM(lon);
        var dLat = this.DuToDFM(lat);

        p = this.CoorTrans(dLat, dLon, 0);
      }
      // xy值反转
      return { x: p.y, y: p.x };
    } catch (e) {
      return null;
    }
  };

  /**
   * 给定坐标系的XY转WGS的经纬度
   * @param x
   * @param y
   */
  this.convert2BL = function (x, y) {
    // xy值反转
    return this.CoorTransConverse(y, x);
  };

  // 高斯投影
  // ellipseType 椭球类型
  // middleLine 中央经线，单位：度
  // B,L 纬度和经度，单位弧度
  // x y 高斯投影后的平面坐标，单位：米
  // 返回值：操作是否成功，0-失败，1-成功
  this.GaosPrj = function (ellipseType, middleLine, B, L) {
    var retXY = null;
    var x = void 0,
        y = void 0;

    var e2 = 0.0;
    var a = 0.0;

    // 根据椭球类型取相应的参数
    switch (ellipseType) {
      // 北京54椭球
      case 1:
        a = this.m_bjEllipse.a;
        e2 = this.m_bjEllipse.e2;
        break;
      // 西安80椭球
      case 2:
        a = this.m_xaEllipse.a;
        e2 = this.m_xaEllipse.e2;
        break;
      // WGS-84椭球
      case 3:
        a = this.m_gpsEllipse.a;
        e2 = this.m_gpsEllipse.e2;
        break;
      default:
        break;
    }

    // 将度转换为弧度
    var b = B;
    // DFMToRad(B,b);

    // 计算经度差
    var l1 = 0.0;
    var mid = 0.0;
    mid = middleLine * Math.PI / 180.0;
    l1 = L - mid;

    // 高斯投影所需的系数
    var g = 0.0;
    g = Math.sqrt(e2 / (1 - e2)) * Math.cos(b);
    var g2 = 0.0,
        g4 = 0.0;
    g2 = g * g;
    g4 = g2 * g2;
    var t = 0.0;
    t = Math.tan(b);
    var t2 = 0.0,
        t4 = 0.0;
    t2 = t * t;
    t4 = t2 * t2;
    var m = 0.0;
    m = l1 * Math.cos(b);
    var m2 = 0.0,
        m3 = 0.0,
        m4 = 0.0,
        m5 = 0.0,
        m6 = 0.0;
    m2 = m * m;
    m3 = m2 * m;
    m4 = m3 * m;
    m5 = m4 * m;
    m6 = m5 * m;

    var N = 0.0;
    N = a / Math.sqrt(1 - e2 * Math.sin(b) * Math.sin(b));
    // 子午线弧长
    var x0 = 0.0;
    // 求子午线弧长
    x0 = this.MeriddianArcLength(ellipseType, B, 5);
    // 计算高斯平面坐标
    x = x0 + N * t * m2 / 2 + N * t * (5 - t2 + 9 * g2 + 4 * g4) * m4 / 24 + N * t * (61 - 58 * t2 + t4 + 270 * g2 - 330 * g2 * t2) * m6 / 720;
    y = N * m + N * (1 - t2 + g2) * m3 / 6 + N * (5 - 18 * t2 + 14 * g2 - 58 * g2 * t2) * m5 / 120 + 500000;

    retXY = { x: x, y: y };
    return retXY;
  };

  // 高斯逆向投影
  // ellipseType 椭球类型
  // middleLine 中央经线，单位：度
  // x y 高斯投影后的平面坐标，单位：米
  // B,L 纬度和经度，单位弧度
  // 返回值：操作是否成功，0-失败，1-成功
  this.GaussProjInvCal = function (ellipseType, middleLine, x, y) {
    var bl = null;
    var B = 0;
    var L = 0;

    // 调整X,Y坐标
    y -= 500000;

    // 得到常数
    var a = 0.0,
        e2 = 0.0;
    var A1 = 0.0,
        A2 = 0.0,
        A3 = 0.0,
        A4 = 0.0;
    switch (ellipseType) {
      // 北京54椭球
      case 1:
        a = this.m_bjEllipse.a;
        e2 = this.m_bjEllipse.e2;
        A1 = this.m_bjEllipse.A1;
        A2 = this.m_bjEllipse.A2;
        A3 = this.m_bjEllipse.A3;
        A4 = this.m_bjEllipse.A4;
        break;
      // 西安80椭球
      case 2:
        a = this.m_xaEllipse.a;
        e2 = this.m_xaEllipse.e2;
        A1 = this.m_xaEllipse.A1;
        A2 = this.m_xaEllipse.A2;
        A3 = this.m_xaEllipse.A3;
        A4 = this.m_xaEllipse.A4;
        break;
      // WGS-84椭球
      case 3:
        a = this.m_gpsEllipse.a;
        e2 = this.m_gpsEllipse.e2;
        A1 = this.m_gpsEllipse.A1;
        A2 = this.m_gpsEllipse.A2;
        A3 = this.m_gpsEllipse.A3;
        A4 = this.m_gpsEllipse.A4;
        break;

      default:
        break;
    }

    // 计算底点纬度
    var B0 = x / A1;
    var preB0 = 0.0;
    var eta = 0.0;
    do {
      preB0 = B0;
      B0 = B0 * Math.PI / 180.0;
      B0 = (x - (A2 * Math.sin(2 * B0) + A3 * Math.sin(4 * B0) + A4 * Math.sin(6 * B0))) / A1;
      eta = Math.abs(B0 - preB0);
    } while (eta > 0.000000001);
    B0 = B0 * Math.PI / 180.0;

    // 计算其它常数
    var sinB = Math.sin(B0);
    var cosB = Math.cos(B0);
    var t = Math.tan(B0);
    var t2 = t * t;
    var N = a / Math.sqrt(1 - e2 * sinB * sinB);
    var ng2 = cosB * cosB * e2 / (1 - e2);
    var V = Math.sqrt(1 + ng2);
    var yN = y / N;

    // 得到经纬度
    var L0 = middleLine * Math.PI / 180.0;
    B = B0 - (yN * yN - (5 + 3 * t2 + ng2 - 9 * ng2 * t2) * yN * yN * yN * yN / 12.0 + (61 + 90 * t2 + 45 * t2 * t2) * yN * yN * yN * yN * yN * yN / 360.0) * V * V * t / 2;

    L = L0 + (yN - (1 + 2 * t2 + ng2) * yN * yN * yN / 6.0 + (5 + 28 * t2 + 24 * t2 * t2 + 6 * ng2 + 8 * ng2 * t2) * yN * yN * yN * yN * yN / 120.0) / cosB;

    bl = { x: B, y: L };
    return bl;
  };

  // 计算子午线弧长
  // B纬度，单位：弧度，N为迭代次数
  // 返回值：子午线弧长
  this.MeriddianArcLength = function (ellipseType, B, N) {
    // 椭球长半轴和扁率
    var a = 0.0;
    var f = 0.0;
    // 椭球类型，1：54椭球，2：80椭球，3：84椭球
    switch (ellipseType) {
      case 1:
        a = this.m_bjEllipse.a;
        f = this.m_bjEllipse.f;
        break;
      case 2:
        a = this.m_xaEllipse.a;
        f = this.m_xaEllipse.f;
        break;
      case 3:
        a = this.m_gpsEllipse.a;
        f = this.m_gpsEllipse.f;
        break;
      default:
        break;
    }
    // 将度转换为弧度
    var lat = B;
    // DFMToRad(B,lat);
    var i = void 0,
        n = void 0,
        m = void 0;
    var e2 = void 0,
        ra = void 0,
        c = void 0,
        ff1 = void 0,
        k = void 0,
        ff2 = void 0,
        sin2 = void 0;
    var k2 = [];
    for (i = 0; i < N; i++) {
      k2[i] = 0.0;
    }
    // 计算椭球第一篇心率
    e2 = f * (2 - f);
    //
    ra = a * (1 - e2);
    for (c = 1.0, n = 1; n <= N; n++) {
      c *= (2 * n - 1.0) * (2 * n + 1.0) / (4 * n * n) * e2;
      for (m = 0; m < n; m++) {
        k2[m] += c;
      }
    }
    ff1 = 1.0 + k2[0];
    ff2 = -k2[0];
    sin2 = Math.sin(lat) * Math.sin(lat);
    for (k = 1.0, n = 1; n < N; n++) {
      k *= 2 * n / (2 * n + 1.0) * sin2;
      ff2 += -k2[n] * k;
    }
    return ra * (lat * ff1 + 0.5 * ff2 * Math.sin(2.0 * lat));
  };

  // 度分秒转换为弧度
  // ddffmm，要转换的参数，单位ddffmm（1202532.6）
  // rad，转换后的结果参数，单位：弧度
  // 返回值：操作是否成功，0-失败，1-成功
  this.DFMToRad = function (ddffmm, rad) {
    var degree = 0.0,
        minutes = 0.0,
        second = 0.0;
    // double tmp=0.0;
    var flag = 0;
    // 判断参数的正负
    if (ddffmm < 0) {
      flag = -1;
    } else {
      flag = 1;
    }
    // 取参数的绝对值
    ddffmm = Math.abs(ddffmm);
    // 取度
    degree = Math.floor(ddffmm / 10000);
    // 取分
    minutes = Math.floor((ddffmm - degree * 10000) / 100);
    // 取秒
    second = ddffmm - degree * 10000 - minutes * 100;
    var dd = 0.0;
    // 转换为弧度
    dd = flag * (degree + minutes / 60 + second / 3600);
    rad = dd * Math.PI / 180.0;

    return rad;
  };

  // 弧度转为ddffmm
  this.RadToDFM = function (rad, ddffmm) {
    // 转化为度
    var du = rad * 180.0 / Math.PI;
    var degree = Math.floor(du);
    var bigminutes = (du - degree) * 60;
    var minutes = Math.floor(bigminutes);
    var second = (bigminutes - minutes) * 60;
    ddffmm = degree * 10000 + minutes * 100 + second;

    return ddffmm;
  };

  /*
     * // 七参数转换 // param_7 七参数结构体 // X，Y，Z待转换的空间直角坐标，单位 米 //
     * X1，Y1,Z1转换后的空间直角坐标，单位：米 // 返回值：操作是否成功，0-失败，1-成功 private short
     * SevenParamTrans(SEVENPARAM param_7, double X, double Y, double Z, GpsXYZ
     * xyz) { double X1 = xyz.x, Y1 = xyz.y, Z1 = xyz.z;
     *
     * X1 = param_7.x_off + Y * param_7.z_angle - Z * param_7.y_angle + (1 +
     * param_7.m) * X; Y1 = param_7.y_off - X * param_7.z_angle + Z *
     * param_7.x_angle + (1 + param_7.m) * Y; Z1 = param_7.z_off + X *
     * param_7.y_angle - Y * param_7.x_angle + (1 + param_7.m) * Z;
     *
     * return 1; }
     */

  // 七参数转换(矩阵版)
  // param_7 七参数结构体
  // X，Y，Z待转换的空间直角坐标，单位 米
  // X1，Y1,Z1转换后的空间直角坐标，单位：米
  // 返回值：操作是否成功，0-失败，1-成功
  this.SevenParamTrans_Multi = function (param_7, X, Y, Z) {
    var xyzRet = null;
    var X1 = 0,
        Y1 = 0,
        Z1 = 0;

    // 秒转换
    var Cvt_Param_7 = param_7;

    // 条件
    var transX = X;
    var transY = Y;
    var transZ = Z;

    // Xi矩阵
    var Xi = new NNMatrix(3, 1);
    Xi.Matrix[0][0] = transX;
    Xi.Matrix[1][0] = transY;
    Xi.Matrix[2][0] = transZ;

    // DX矩阵
    var DX = new NNMatrix(3, 1);
    DX.Matrix[0][0] = Cvt_Param_7.x_off;
    DX.Matrix[1][0] = Cvt_Param_7.y_off;
    DX.Matrix[2][0] = Cvt_Param_7.z_off;

    // tY矩阵
    var tY = new NNMatrix(3, 1);

    // k矩阵
    var K = new NNMatrix(1, 1);
    K.Matrix[0][0] = 1 + Cvt_Param_7.m;

    // Mx矩阵
    var Mx = new NNMatrix(3, 3);
    Mx.Matrix[0][0] = 1.0;
    Mx.Matrix[0][1] = 0.0;
    Mx.Matrix[0][2] = 0.0;

    Mx.Matrix[1][0] = 0.0;
    Mx.Matrix[1][1] = Math.cos(Cvt_Param_7.x_angle);
    Mx.Matrix[1][2] = Math.sin(Cvt_Param_7.x_angle);

    Mx.Matrix[2][0] = 0.0;
    Mx.Matrix[2][1] = -Math.sin(Cvt_Param_7.x_angle);
    Mx.Matrix[2][2] = Math.cos(Cvt_Param_7.x_angle);

    // My矩阵
    var My = new NNMatrix(3, 3);

    My.Matrix[0][0] = Math.cos(Cvt_Param_7.y_angle);
    My.Matrix[0][1] = 0.0;
    My.Matrix[0][2] = -Math.sin(Cvt_Param_7.y_angle);

    My.Matrix[1][0] = 0.0;
    My.Matrix[1][1] = 1.0;
    My.Matrix[1][2] = 0.0;

    My.Matrix[2][0] = Math.sin(Cvt_Param_7.y_angle);
    My.Matrix[2][1] = 0.0;
    My.Matrix[2][2] = Math.cos(Cvt_Param_7.y_angle);

    // Mz矩阵
    var Mz = new NNMatrix(3, 3);

    Mz.Matrix[0][0] = Math.cos(Cvt_Param_7.z_angle);
    Mz.Matrix[0][1] = Math.sin(Cvt_Param_7.z_angle);
    Mz.Matrix[0][2] = 0.0;

    Mz.Matrix[1][0] = -Math.sin(Cvt_Param_7.z_angle);
    Mz.Matrix[1][1] = Math.cos(Cvt_Param_7.z_angle);
    Mz.Matrix[1][2] = 0.0;

    Mz.Matrix[2][0] = 0.0;
    Mz.Matrix[2][1] = 0.0;
    Mz.Matrix[2][2] = 1.0;

    // 计算M矩阵
    var M = new NNMatrix(3, 3);
    M = NNMatrix.Multiplication(Mz, My);
    M = NNMatrix.Multiplication(M, Mx);

    // 7参数矩阵变换
    tY = NNMatrix.Multiplication(Xi, K); // 缩放
    tY = NNMatrix.Multiplication(M, tY); // 旋转
    tY = NNMatrix.Add(tY, DX); // 平移

    // 返回
    X1 = tY.Matrix[0][0];
    Y1 = tY.Matrix[1][0];
    Z1 = tY.Matrix[2][0];

    xyzRet = { x: X1, y: Y1, z: Z1 };
    return xyzRet;
  };

  this.SevenParamTransReverse = function (param_7, x, y, z) {
    var xyzObj = {};
    // Xi矩阵
    var Xi = new NNMatrix(3, 1);
    Xi.Matrix[0][0] = x;
    Xi.Matrix[1][0] = y;
    Xi.Matrix[2][0] = z;
    // DX矩阵
    var DX = new NNMatrix(3, 1);
    DX.Matrix[0][0] = -param_7.x_off;
    DX.Matrix[1][0] = -param_7.y_off;
    DX.Matrix[2][0] = -param_7.z_off;
    // tY矩阵
    var tY = new NNMatrix(3, 1);
    // k值
    K = 1.0 / (1.0 + param_7.m);
    // k矩阵
    //let K = new NNMatrix(1, 1);
    //K.Matrix[0, 0] = 1.0 / (1.0 + param_7.m);
    // Mx矩阵
    var Mx = new NNMatrix(3, 3);
    Mx.Matrix[0][0] = 1.0;
    Mx.Matrix[0][1] = 0.0;
    Mx.Matrix[0][2] = 0.0;

    Mx.Matrix[1][0] = 0.0;
    Mx.Matrix[1][1] = Math.cos(-param_7.x_angle);
    Mx.Matrix[1][2] = Math.sin(-param_7.x_angle);

    Mx.Matrix[2][0] = 0.0;
    Mx.Matrix[2][1] = -Math.sin(-param_7.x_angle);
    Mx.Matrix[2][2] = Math.cos(-param_7.x_angle);

    // My矩阵
    var My = new NNMatrix(3, 3);
    My.Matrix[0][0] = Math.cos(-param_7.y_angle);
    My.Matrix[0][1] = 0.0;
    My.Matrix[0][2] = -Math.sin(-param_7.y_angle);

    My.Matrix[1][0] = 0.0;
    My.Matrix[1][1] = 1.0;
    My.Matrix[1][2] = 0.0;

    My.Matrix[2][0] = Math.sin(-param_7.y_angle);
    My.Matrix[2][1] = 0.0;
    My.Matrix[2][2] = Math.cos(-param_7.y_angle);

    // Mz矩阵
    var Mz = new NNMatrix(3, 3);
    Mz.Matrix[0][0] = Math.cos(-param_7.z_angle);
    Mz.Matrix[0][1] = Math.sin(-param_7.z_angle);
    Mz.Matrix[0][2] = 0.0;

    Mz.Matrix[1][0] = -Math.sin(-param_7.z_angle);
    Mz.Matrix[1][1] = Math.cos(-param_7.z_angle);
    Mz.Matrix[1][2] = 0.0;

    Mz.Matrix[2][0] = 0.0;
    Mz.Matrix[2][1] = 0.0;
    Mz.Matrix[2][2] = 1.0;

    // 计算M矩阵
    var M = new NNMatrix(3, 3);
    M = NNMatrix.Multiplication(Mz, My);
    M = NNMatrix.Multiplication(M, Mx);
    // 7参数矩阵变换
    tY = NNMatrix.Add(Xi, DX); //平移
    tY = NNMatrix.Multiplication(M, tY); //旋转
    tY = NNMatrix.MultiplicationValue(tY, K); //缩放
    // 返回
    x1 = tY.Matrix[0][0];
    y1 = tY.Matrix[1][0];
    z1 = tY.Matrix[2][0];

    xyzObj = { x: x1, y: y1, z: z1 };
    return xyzObj;
  };

  // 四参数转换
  // param_4 四参数结构体
  // x0,y0 待转换的平面直角坐标，单位：米
  // x，y转换后的平面直角坐标，单位：米
  // 返回值：操作是否成功，0-失败，1-成功
  this.FourParamTrans = function (param_4, x, y) {
    var xy = null;
    var x0 = 0,
        y0 = 0;
    var deltax = 0.0,
        deltay = 0.0,
        a = 0.0,
        b = 0.0;

    deltax = param_4.x_off;
    deltay = param_4.y_off;

    a = param_4.m * Math.cos(param_4.angle);
    b = param_4.m * Math.sin(param_4.angle);
    if (this.isZero(a) || this.isZero(b)) {
      xy = this.fixFourParamTrans(param_4, x, y);
    } else {
      //2016-02-01 字政专
      y0 = (y - deltay - (x - deltax) / a * b) / ((a * a + b * b) / a);
      x0 = (x - deltax + y0 * b) / a;
      //x0 = deltax + x * a - y * b;
      //y0 = deltay + y * a + x * b;

      if (this.m_rev == 0) {
        xy = { x: y0, y: x0 };
      } else {
        xy = { x: x0, y: y0 };
      }
    }
    return xy;
  };

  this.fixFourParamTrans = function (param_4, x0, y0) {
    var xy = null;
    var x = 0,
        y = 0;

    // 原点矩阵
    var X0 = new NNMatrix(2, 1);
    X0.Matrix[0][0] = param_4.x_off;
    X0.Matrix[1][0] = param_4.y_off;

    // 尺度差矩阵
    var ppm = new NNMatrix(1, 1);
    ppm.Matrix[0][0] = 1 + param_4.m;

    // 角度矩阵
    var ang_Cvt = param_4.angle * Math.PI / 180.0 / 3600.0;
    var ang_Matrix = new NNMatrix(2, 2);
    if (this.m_rev == 1) {
      ang_Matrix.Matrix[0][0] = Math.cos(ang_Cvt);
      ang_Matrix.Matrix[0][1] = Math.sin(ang_Cvt);

      ang_Matrix.Matrix[1][0] = -Math.sin(ang_Cvt);
      ang_Matrix.Matrix[1][1] = Math.cos(ang_Cvt);
    } else {
      ang_Matrix.Matrix[0][0] = Math.cos(ang_Cvt);
      ang_Matrix.Matrix[0][1] = -Math.sin(ang_Cvt);

      ang_Matrix.Matrix[1][0] = Math.sin(ang_Cvt);
      ang_Matrix.Matrix[1][1] = Math.cos(ang_Cvt);
    }

    // 入口矩阵
    var input_Matrix = new NNMatrix(2, 1);
    input_Matrix.Matrix[0][0] = x0;
    input_Matrix.Matrix[1][0] = y0;

    // 矩阵变换
    var out_Matrix = new NNMatrix(2, 1);
    input_Matrix = NNMatrix.Multiplication(ang_Matrix, input_Matrix);
    input_Matrix = NNMatrix.Multiplication(input_Matrix, ppm);
    out_Matrix = NNMatrix.Add(input_Matrix, X0);

    // 结果
    x = out_Matrix.Matrix[0][0];
    y = out_Matrix.Matrix[1][0];

    xy = { x: x, y: y };

    return xy;
  };

  // 四参数转换-针对类没有进行椭球转换时的粗略转换
  // param_4 四参数结构体
  // x0,y0 待转换的平面直角坐标，单位：米
  // x，y转换后的平面直角坐标，单位：米
  // 返回值：操作是否成功，0-失败，1-成功
  this.FourParamTransLYG = function (param_4, x0, y0) {
    var x = 0,
        y = 0;
    var deltax = 0.0,
        deltay = 0.0,
        a = 0.0,
        b = 0.0;

    deltax = param_4.x_off;
    deltay = param_4.y_off;

    a = param_4.m * Math.cos(param_4.angle);
    b = param_4.m * Math.sin(param_4.angle);

    x = deltax + x0 * a - y0 * b;
    y = deltay + y0 * a + x0 * b;

    var xy = null;
    if (this.m_rev == 0) {
      xy = { x: y, y: x };
    } else {
      xy = { x: x, y: y };
    }
    return xy;
  };

  this.FourParamTransReverse = function (param_4, x, y) {
    var pnt = null;
    var x0 = 0,
        y0 = 0;

    var deltax = 0.0,
        deltay = 0.0,
        a = 0.0,
        b = 0.0;

    deltax = param_4.x_off;
    deltay = param_4.y_off;

    a = param_4.m * Math.cos(param_4.angle);
    b = param_4.m * Math.sin(param_4.angle);

    if (this.isZero(a) || this.isZero(b)) {
      pnt = this.fixFourParamTransReverse(param_4, x, y);
    } else {
      x0 = ((x - deltax) * a + (y - deltay) * b) / (a * a + b * b);
      y0 = (y - deltay - x0 * b) / a;
      pnt = { x: x0, y: y0 };
    }

    return pnt;
  };

  this.fixFourParamTransReverse = function (param_4, x, y) {
    var pnt = {};
    // 原点矩阵
    var X0 = new NNMatrix(2, 1);
    X0.Matrix[0][0] = -param_4.x_off;
    X0.Matrix[1][0] = -param_4.y_off;

    // 尺度差矩阵
    var ppm = new NNMatrix(1, 1);
    ppm.Matrix[0][0] = 1 / (1 + param_4.m);

    // 角度矩阵
    var ang_Cvt = param_4.angle * Math.PI / 180.0 / 3600.0;
    var ang_Matrix = new NNMatrix(2, 2);

    ang_Matrix.Matrix[0][0] = Math.cos(ang_Cvt);
    ang_Matrix.Matrix[0][1] = Math.sin(ang_Cvt);
    ang_Matrix.Matrix[1][0] = -Math.sin(ang_Cvt);
    ang_Matrix.Matrix[1][1] = Math.cos(ang_Cvt);

    // 入口矩阵
    var input_Matrix = new NNMatrix(2, 1);
    input_Matrix.Matrix[0][0] = x;
    input_Matrix.Matrix[1][0] = y;

    // 矩阵变换
    var out_Matrix = new NNMatrix(2, 1);
    input_Matrix = NNMatrix.Add(input_Matrix, X0);
    input_Matrix = NNMatrix.Multiplication(input_Matrix, ppm);
    out_Matrix = NNMatrix.Multiplication(ang_Matrix, input_Matrix);

    // 结果
    x1 = out_Matrix.Matrix[0][0];
    y1 = out_Matrix.Matrix[1][0];

    pnt = { x: out_Matrix.Matrix[0][0], y: out_Matrix.Matrix[1][0] };

    return pnt;
  };

  this.FourParamTransReverseLYG = function (param_4, x0, y0) {
    var x = 0,
        y = 0;

    //x = param_4.x_off + x0 * param_4.m * Math.cos(param_4.angle) - y0 * param_4.m * Math.sin(param_4.angle);
    //y = param_4.y_off + y0 * param_4.m * Math.cos(param_4.angle) + x0 * param_4.m * Math.sin(param_4.angle);

    var deltax = 0.0,
        deltay = 0.0,
        a = 0.0,
        b = 0.0;

    deltax = param_4.x_off;
    deltay = param_4.y_off;

    a = param_4.m * Math.cos(param_4.angle);
    b = param_4.m * Math.sin(param_4.angle);

    //x0 = deltax + x*a - y*b;
    //y0 = deltay + y*a + x*b;

    //x = ((x0-deltax)*a + (y0-deltay)*b)/(a*a + b*b);
    //y = (y0 - deltay - x*b)/a;
    //2016-02-01 字政专
    y = (y0 - deltay - (x0 - deltax) / a * b) / ((a * a + b * b) / a);
    x = (x0 - deltax + y * b) / a;

    var xy = { x: x, y: y };
    return xy;
  };

  // 六参数转换
  // param_6 六参数结构体
  // x0 y0 待转换的平面坐标，单位：米
  // x y转换后的平面坐标，单位：米
  // 返回值：操作是否成功，0-失败，1-成功
  this.SixParamTrans = function (param_6, x0, y0) {
    var xy = void 0;

    var x = param_6.x0_local + (1 + param_6.m) * ((x0 - param_6.x0_gps) * Math.cos(param_6.angle) + (y0 - param_6.y0_gps) * Math.sin(param_6.angle));
    var y = param_6.y0_local + (1 + param_6.m) * ((y0 - param_6.y0_gps) * Math.cos(param_6.angle) - (x0 - param_6.x0_gps) * Math.sin(param_6.angle));

    xy = { x: x, y: y };
    return xy;
  };

  // 将经纬度坐标转换为空间直角坐标
  // B 纬度，单位，弧度
  // L经度，单位：弧度
  // H高程，单位：米
  // X,Y,Z,单位：米
  // 返回值：操作是否成功，0-失败，1-成功
  this.BLH2XYZ = function (ellipseType, B, L, H) {
    var xyzRet = null;
    var X1 = 0,
        Y1 = 0,
        Z1 = 0;
    // 根据椭球类型取相应的参数
    var a = 0.0,
        e2 = 0.0;
    switch (ellipseType) {
      // 北京54椭球
      case 1:
        a = this.m_bjEllipse.a;
        e2 = this.m_bjEllipse.e2;
        break;
      // 西安80椭球
      case 2:
        a = this.m_xaEllipse.a;
        e2 = this.m_xaEllipse.e2;
        break;
      // WGS-84椭球
      case 3:
        a = this.m_gpsEllipse.a;
        e2 = this.m_gpsEllipse.e2;
        break;
      default:
        break;
    }

    // 转换
    var N = a / Math.sqrt(1 - e2 * Math.sin(B) * Math.sin(B));
    var X = (N + H) * Math.cos(B) * Math.cos(L);
    var Y = (N + H) * Math.cos(B) * Math.sin(L);
    var Z = (N * (1 - e2) + H) * Math.sin(B);

    xyzRet = { x: X, y: Y, z: Z };
    return xyzRet;
  };

  // 空间直角坐标转换为经纬度
  // X,Y,Z,单位：米
  // B, 纬度，单位：弧度
  // L 经度，单位：弧度
  // 客户地图所采用的椭球类型，1为北京54椭球，2为西安80椭球
  // 返回值：操作是否成功，0-失败，1-成功
  this.XYZ2BL = function (ellipseType, X, Y, Z) {
    var xy = void 0;
    var B = void 0,
        L = void 0;

    // 根据椭球类型取相应的参数
    var a = 0.0,
        e2 = 0.0;
    switch (ellipseType) {
      // 北京54椭球
      case 1:
        a = this.m_bjEllipse.a;
        e2 = this.m_bjEllipse.e2;
        break;
      // 西安80椭球
      case 2:
        a = this.m_xaEllipse.a;
        e2 = this.m_xaEllipse.e2;
        break;
      // WGS-84椭球
      case 3:
        a = this.m_gpsEllipse.a;
        e2 = this.m_gpsEllipse.e2;
        break;
      default:
        break;
    }

    // 经度arctan(y/x)
    var fResult = Math.atan2(Y, X);
    var val = 0;
    var ang = fResult;
    while (true) {
      if (ang >= 0.0 && ang <= Math.PI) {
        val = ang;
        break;
      }

      if (ang < 0.0) {
        val += Math.PI;
        break;
      }

      if (ang > Math.PI) {
        val -= Math.PI;
        break;
      }
    }
    fResult = val;
    L = fResult;

    // 纬度 atan((z+E*N*sin(B)) / sqrt(x*x + y*y))
    var eta = 0.0,
        preLat = 0.0,
        lat = 0.0,
        fTmpL = 0.0,
        fTmpR = 0.0;
    do {
      preLat = lat;
      var E = e2; // 偏心率
      var N = a / Math.sqrt(1 - e2 * Math.sin(preLat) * Math.sin(preLat));
      fTmpL = Z + E * N * Math.sin(preLat);
      fTmpR = Math.sqrt(X * X + Y * Y);
      lat = Math.atan2(fTmpL, fTmpR);
      eta = Math.abs(lat - preLat);
    } while (eta > 0.000000001);
    ang = lat;
    while (true) {
      if (ang >= 0.0 && ang <= Math.PI) {
        val = ang;
        break;
      }

      if (ang < 0.0) {
        val += Math.PI;
        break;
      }

      if (ang > Math.PI) {
        val -= Math.PI;
        break;
      }
    }
    B = val;

    xy = { x: B, y: L };
    return xy;
  };

  // / <summary>
  // 逆向转变,将本地坐标转换为WGS84坐标
  // / </summary>
  // / <param name='x='本地坐标X</param>
  // / <param name='y='本地坐标Y</param>
  // / <param name='B='WGS84坐标 经度</param>
  // / <param name='L='纬度</param>
  // / <returns>是否成功</returns>
  this.CoorTransConverse = function (x, y) {
    var bl = void 0;

    var X = 0.0,
        Y = 0.0,
        Z = 0.0;
    var b = 0.0;

    try {
      // 偏移量
      X = x;
      Y = y;
      var xyCoor = null;
      var revBL = null;
      var xyz1 = null;
      var xyz2 = null;

      switch (this.m_transType) {
        case 9:
          {
            if (this.m_rev == 0) {
              X = y;
              Y = x;
            } else {
              X = x;
              Y = y;
            }
            xyCoor = this.FourParamTransReverseLYG(this.m_fourParam, X, Y);
            ////高斯逆向投影
            revBL = this.GaussProjInvCal(this.m_ellipseType, this.m_middleLine, xyCoor.x, xyCoor.y);
            // 经纬度转化为直角坐标
            //xyz1 = this.BLH2XYZ(this.m_ellipseType, revBL.x, revBL.y, 0);
            //xyz2 = this.SevenParamTransReverse(this.m_sevenParam, xyz1.x, xyz1.y, xyz1.z);
            //revBL = this.XYZ2BL((short)3, xyz2.x, xyz2.y, xyz2.z);
          }
          break;
        case 3:
          X = X - this.m_twoParam.y_off;
          Y = Y - this.m_twoParam.x_off;
          ////高斯逆向投影
          revBL = this.GaussProjInvCal(this.m_ellipseType, this.m_middleLine, X, Y);
          // 经纬度转化为直角坐标
          xyz1 = this.BLH2XYZ(this.m_ellipseType, revBL.x, revBL.y, 0);
          xyz2 = this.SevenParamTransReverse(this.m_sevenParam, xyz1.x, xyz1.y, xyz1.z);
          revBL = this.XYZ2BL(3, xyz2.x, xyz2.y, xyz2.z);
          break;
        case 5:
          {
            X = X - this.m_twoParam.y_off;
            Y = Y - this.m_twoParam.x_off;
            ////高斯逆向投影
            revBL = this.GaussProjInvCal(this.m_ellipseType, this.m_middleLine, X, Y);
          }
          break;
        case 21:
          {
            xyCoor = this.FourParamTransReverse(this.m_fourParam_reverse, X, Y);
            ////高斯逆向投影
            revBL = this.GaussProjInvCal(this.m_ellipseType, this.m_middleLine, xyCoor.x, xyCoor.y);
            // 经纬度转化为直角坐标
            xyz1 = this.BLH2XYZ(this.m_ellipseType, revBL.x, revBL.y, 0);
            xyz2 = this.SevenParamTransReverse(this.m_sevenParam_reverse, xyz1.x, xyz1.y, xyz1.z);
            revBL = this.XYZ2BL(3, xyz2.x, xyz2.y, xyz2.z);
          }
          break;
        default:
          {
            xyCoor = this.FourParamTransReverse(this.m_fourParam, X, Y);
            ////高斯逆向投影
            revBL = this.GaussProjInvCal(this.m_ellipseType, this.m_middleLine, xyCoor.x, xyCoor.y);
            // 经纬度转化为直角坐标
            xyz1 = this.BLH2XYZ(this.m_ellipseType, revBL.x, revBL.y, 0);
            xyz2 = this.SevenParamTransReverse(this.m_sevenParam, xyz1.x, xyz1.y, xyz1.z);
            revBL = this.XYZ2BL(3, xyz2.x, xyz2.y, xyz2.z);
          }
          break;
      }
      // 转换回来

      y = revBL.x * 180 / Math.PI;
      x = revBL.y * 180 / Math.PI;

      bl = { x: x, y: y };
      return bl;
    } catch (e) {
      console.error(e);
    }
    return null;
  };

  // 坐标转换，
  // B 纬度单位（度分秒 ddffmm如1203036.23）L经度，单位（度分秒 ddffmm）
  // x y为转换后的平面坐标，单位为 米
  // 返回值：操作是否成功，0-失败，1-成功
  this.CoorTrans = function (B, L, H) {
    var xySource = void 0;
    var x = void 0,
        y = void 0;

    var x0 = 0.0,
        y0 = 0.0;
    var X = 0.0,
        Y = 0.0,
        Z = 0.0,
        X1 = 0.0,
        Y1 = 0.0,
        Z1 = 0.0;
    var rev_L = 0.0,
        rev_B = 0.0;
    var b = 0.0,
        l = 0.0; // h=0.0;
    var X2 = 0.0,
        Y2 = 0.0,
        Z2 = 0.0;

    // 将度分秒转换为弧度
    if (this.m_transType < 6 || 9 == this.m_transType || 21 == this.m_transType) {
      b = this.DFMToRad(B, b);
      l = this.DFMToRad(L, l);
    } else {
      b = B;
      l = L;
    }

    // 根据转换类型进行分类处理
    // 1为四参数，2六参数，3七参数，4：七参数+四参数,5中央经线投影，二参数,6七参数+二参数反转
    // 椭球类型：1:北京54，2：西安80，3：WGS-84 椭球
    switch (this.m_transType) {
      case 1:
        // 高斯投影
        var xy0 = this.GaosPrj(1, this.m_middleLine, b, l);

        x0 = xy0.x;
        y0 = xy0.y;
        // 四参数坐标转换
        var xy = this.FourParamTrans(this.m_fourParam, x0, y0);

        x = xy.x;
        y = xy.y;
        break;
      case 2:
        // 高斯投影
        var xy01 = this.GaosPrj(3, this.m_middleLine, b, l);

        x0 = xy01.x;
        y0 = xy01.y;

        // 六参数坐标转换
        var xy1 = this.SixParamTrans(this.m_sixParam, x0, y0);

        x = xy1.x;
        y = xy1.y;
        break;
      case 3:
        var t_B = 0.0,
            t_L = 0.0;
        // 经纬度换算为空间直角坐标
        var xyz = this.BLH2XYZ(3, b, l, H);

        X = xyz.x;
        Y = xyz.y;
        Z = xyz.z;

        // 七参数坐标转换
        var xyz1 = this.SevenParamTrans_Multi(this.m_sevenParam, X, Y, Z);

        X1 = xyz1.x;
        Y1 = xyz1.y;
        Z1 = xyz1.z;

        // 空间直角坐标转换为经纬度
        var bl = this.XYZ2BL(this.m_ellipseType, X1, Y1, Z1);

        t_B = bl.x;
        t_L = bl.y;

        // 高斯投影
        var xy11 = this.GaosPrj(this.m_ellipseType, this.m_middleLine, t_B, t_L);
        x = xy11.x;
        y = xy11.y;

        x = x + this.m_twoParam.y_off;
        y = y + this.m_twoParam.x_off;
        break;
      case 4:
        t_B = 0.0;
        t_L = 0.0;
        // 经纬度换算为空间直角坐标
        var _xyz = this.BLH2XYZ(3, b, l, H);

        X = _xyz.x;
        Y = _xyz.y;
        Z = _xyz.z;

        // 七参数坐标转换
        var _xyz2 = this.SevenParamTrans_Multi(this.m_sevenParam, X, Y, Z);

        X1 = _xyz2.x;
        Y1 = _xyz2.y;
        Z1 = _xyz2.z;

        // 空间直角坐标转换为经纬度
        var _bl = this.XYZ2BL(this.m_ellipseType, X1, Y1, Z1);

        t_B = _bl.x;
        t_L = _bl.y;

        // 高斯投影
        var _xy = this.GaosPrj(this.m_ellipseType, this.m_middleLine, t_B, t_L);
        x = _xy.x;
        y = _xy.y;

        // 四参数坐标转换
        var _xy2 = this.FourParamTrans(this.m_fourParam, x, y);
        x = _xy2.x;
        y = _xy2.y;
        break;
      case 5:
        // 进行高斯投影
        var xy11111 = this.GaosPrj(3, this.m_middleLine, b, l);
        x = xy11111.x;
        y = xy11111.y;

        // 偏移量
        x = x + this.m_twoParam.y_off;
        y = y + this.m_twoParam.x_off;
        break;
      case 6:
        // 偏移量
        X = l;
        Y = b;
        X = X + this.m_twoParam.x_off;
        Y = Y + this.m_twoParam.y_off;
        // 高斯逆向投影
        var bl11 = this.GaussProjInvCal(this.m_ellipseType, this.m_middleLine, Y, X);
        rev_B = bl11.x;
        rev_L = bl11.y;

        x = this.RadToDFM(rev_B, x);
        y = this.RadToDFM(rev_L, y);

        // 经纬度转化为直角坐标
        X1 = Y1 = Z1 = 0.0;

        var xyz1111 = this.BLH2XYZ(1, rev_B, rev_L, 0);
        X1 = xyz1111.x;
        Y1 = xyz1111.y;
        Z1 = xyz1111.z;

        X2 = Y2 = Z2 = 0.0;

        var xyz2 = this.SevenParamTrans_Multi(this.m_sevenParam, X1, Y1, Z1);
        X2 = xyz2.x;
        Y2 = xyz2.y;
        Z2 = xyz2.z;

        var bl111 = this.XYZ2BL(3, X2, Y2, Z2);
        rev_B = bl111.x;
        rev_L = bl111.y;

        // 转换回来
        x = this.RadToDFM(rev_L, x);
        y = this.RadToDFM(rev_B, y);
        break;
      case 9:
        {
          // 高斯投影
          var xy90 = this.GaosPrj(1, this.m_middleLine, b, l);
          x0 = xy90.x;
          y0 = xy90.y;
          // 四参数坐标转换
          var xy9 = this.FourParamTransLYG(this.m_fourParam, x0, y0);
          x = xy9.x;
          y = xy9.y;
        }
        break;
      case 21:
        {
          t_B = 0.0;
          t_L = 0.0;
          // 经纬度换算为空间直角坐标
          var _xyz = this.BLH2XYZ(3, b, l, H);

          X = _xyz.x;
          Y = _xyz.y;
          Z = _xyz.z;

          // 七参数坐标转换
          var _xyz2 = this.SevenParamTrans_Multi(this.m_sevenParam, X, Y, Z);

          X1 = _xyz2.x;
          Y1 = _xyz2.y;
          Z1 = _xyz2.z;

          // 空间直角坐标转换为经纬度
          var _bl = this.XYZ2BL(this.m_ellipseType, X1, Y1, Z1);

          t_B = _bl.x;
          t_L = _bl.y;

          // 高斯投影
          var _xy = this.GaosPrj(this.m_ellipseType, this.m_middleLine, t_B, t_L);
          x = _xy.x;
          y = _xy.y;

          // 四参数坐标转换
          var _xy2 = this.FourParamTrans(this.m_fourParam, x, y);
          x = _xy2.x;
          y = _xy2.y;
        }
        break;
      default:
        break;
    }

    xySource = { x: x, y: y };
    return xySource;
  };

  // DDFFMM转换为小数格式
  this.DFMToRange = function (dfm, range) {
    var d = Math.floor(dfm / 10000);
    var f = Math.floor(dfm - d * 10000) / 100 / 60.0;
    var m = (dfm - d * 10000 - f * 6000) / 3600.0;

    range = d + f + m;

    return range;
  };

  // 小数格式转换为DDFFMM
  this.RangeToDFM = function (range, dfm) {
    var d = Math.floor(range);
    var f = Math.floor((range - d) * 60);
    var m = ((range - d) * 60 - f) * 60;
    dfm = d * 10000 + f * 100 + m;

    return dfm;
  };

  // WGS84经纬度转WGS84 web mercator投影
  this.LatLonToMeters = function (lon, lat) {
    // lon:经度
    // lat：纬度
    var originShift = 2 * Math.PI * 6378137 / 2.0;

    var mx = lon * originShift / 180.0;

    var my = Math.log(Math.tan((90 + lat) * Math.PI / 360.0)) / (Math.PI / 180.0);
    my = my * originShift / 180.0;

    return { x: mx, y: my };
  };

  // web mercator 转为 wgs84 经纬度
  this.inverseMercator = function (x, y) {
    var nt = void 0;

    var lon = x / 20037508.342787 * 180;
    var lat = y / 20037508.342787 * 180;

    lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lat * Math.PI / 180)) - Math.PI / 2);

    nt = { x: lon, y: lat };
    return nt;
  };
  /**
   * 度转度分秒
   * @return {number}
   */
  this.DuToDFM = function (du) {
    var fDu = void 0,
        fFen = void 0;
    var fMiao = void 0;
    var strD = void 0,
        strF = void 0,
        strM = void 0,
        strResult = void 0;

    // 度
    fDu = Math.floor(du);
    strD = '' + fDu;
    // 分
    fMiao = (du - fDu) * 60;
    fFen = Math.floor(fMiao);
    strF = '' + fFen;
    if (strF.length < 2) {
      strF = '0' + strF;
    }
    // 秒
    fMiao = (fMiao - fFen) * 60;
    strM = '' + fMiao;
    if (fMiao < 10) {
      strM = '0' + strM;
    }
    strResult = strD + strF + strM;
    return Number(strResult);
  };
  this.isZero = function (data) {
    return Math.abs(data - 0.0) < 0.000006;
  };
  this.loadParams();
}

// 矩阵操作
function NNMatrix(Mrow, Mcol) {
  this.row = Mrow;
  this.col = Mcol;
  this.Matrix = [];

  for (var i = 0; i < this.row; i++) {
    this.Matrix[i] = [];
    for (var j = 0; j < this.col; j++) {
      this.Matrix[i][j] = 0;
    }
  }
}
// 矩阵加法
NNMatrix.Add = function (m1, m2) {
  if (m1.row == m2.row && m1.col == m2.col) {
    for (var i = 0; i < m1.row; i++) {
      for (var j = 0; j < m2.col; j++) {
        m1.Matrix[i][j] += m2.Matrix[i][j];
      }
    }
  }
  return m1;
};
// 矩阵加常量
NNMatrix.AddValue = function (m1, m2) {
  for (var i = 0; i < m1.row; i++) {
    for (var j = 0; j < m1.col; j++) {
      m1.Matrix[i][j] += m2;
    }
  }
  return m1;
};
// 矩阵减法
NNMatrix.Subtract = function (m1, m2) {
  if (m1.row == m2.row && m1.col == m2.col) {
    for (var i = 0; i < m1.row; i++) {
      for (var j = 0; j < m2.col; j++) {
        m1.Matrix[i][j] -= m2.Matrix[i][j];
      }
    }
  }
  return m1;
};
// 矩阵乘法
NNMatrix.Multiplication = function (m1, m2) {
  var m3r = m1.row;
  var m3c = m2.col;
  var m3 = new NNMatrix(m3r, m3c);

  if (m1.col == m2.row) {
    var value = 0.0;
    for (var i = 0; i < m3r; i++) {
      for (var j = 0; j < m3c; j++) {
        value = 0.0;
        for (var ii = 0; ii < m1.col; ii++) {
          value += m1.Matrix[i][ii] * m2.Matrix[ii][j];
        }

        m3.Matrix[i][j] = value;
      }
    }
  }
  /*
     * else throw new Exception('矩阵的行/列数不匹配。');
     */
  return m3;
};
// 矩阵乘以常量
NNMatrix.MultiplicationValue = function (m1, m2) {
  for (var i = 0; i < m1.row; i++) {
    for (var j = 0; j < m1.col; j++) {
      m1.Matrix[i][j] *= m2;
    }
  }
  return m1;
};
// 矩阵转秩
NNMatrix.Transpos = function (srcm) {
  var tmpm = new NNMatrix(srcm.col, srcm.row);
  for (var i = 0; i < srcm.row; i++) {
    for (var j = 0; j < srcm.col; j++) {
      if (i != j) {
        tmpm.Matrix[j][i] = srcm.Matrix[i][j];
      } else {
        tmpm.Matrix[i][j] = srcm.Matrix[i][j];
      }
    }
  }
  return tmpm;
};
// 交换
NNMatrix.swaper = function (m1, m2) {
  var sw = void 0;
  sw = m1;
  m1 = m2;
  m2 = sw;
};

/**
 * 实矩阵求逆的全选主元高斯－约当法
 *
 */
NNMatrix.Invers = function (srcm) {
  var rhc = srcm.row;
  if (srcm.row == srcm.col) {
    var iss = [];
    var jss = [];
    var fdet = 1;
    var f = 1;
    // 消元
    for (var k = 0; k < rhc; k++) {
      var fmax = 0;
      for (var i = k; i < rhc; i++) {
        for (var j = k; j < rhc; j++) {
          f = Math.abs(srcm.Matrix[i][j]);
          if (f > fmax) {
            fmax = f;
            iss[k] = i;
            jss[k] = j;
          }
        }
      }

      if (iss[k] != k) {
        f = -f;
        for (var ii = 0; ii < rhc; ii++) {
          swaper(srcm.Matrix[k][ii], srcm.Matrix[iss[k]][ii]);
        }
      }

      if (jss[k] != k) {
        f = -f;
        for (var _ii = 0; _ii < rhc; _ii++) {
          swaper(srcm.Matrix[k][_ii], srcm.Matrix[jss[k]][_ii]);
        }
      }

      fdet *= srcm.Matrix[k][k];
      srcm.Matrix[k][k] = 1.0 / srcm.Matrix[k][k];
      for (var _j = 0; _j < rhc; _j++) {
        if (_j != k) {
          srcm.Matrix[k][_j] *= srcm.Matrix[k][k];
        }
      }

      for (var _i = 0; _i < rhc; _i++) {
        if (_i != k) {
          for (var _j2 = 0; _j2 < rhc; _j2++) {
            if (_j2 != k) {
              srcm.Matrix[_i][_j2] = srcm.Matrix[_i][_j2] - srcm.Matrix[_i][k] * srcm.Matrix[k][_j2];
            }
          }
        }
      }

      for (var _i2 = 0; _i2 < rhc; _i2++) {
        if (_i2 != k) {
          srcm.Matrix[_i2][k] *= -srcm.Matrix[k][k];
        }
      }
    }
    // 调整恢复行列次序
    for (var _k = rhc - 1; _k >= 0; _k--) {
      if (jss[_k] != _k) {
        for (var _ii2 = 0; _ii2 < rhc; _ii2++) {
          swaper(srcm.Matrix[_k][_ii2], srcm.Matrix[jss[_k]][_ii2]);
        }
      }
      if (iss[_k] != _k) {
        for (var _ii3 = 0; _ii3 < rhc; _ii3++) {
          swaper(srcm.Matrix[_k][_ii3], srcm.Matrix[iss[_k]][_ii3]);
        }
      }
    }
  }

  return srcm;
};
// 矩阵输出
NNMatrix.MatrixPrint = function () {
  var tmprst = void 0;
  tmprst = '\n';
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      tmprst += Matrix[i][j] + '\t';
    }
    tmprst += '\n';
  }
  return tmprst;
};
//# sourceMappingURL=../../maps/transform/transform.js.map


/***/ }),

/***/ "./node_modules/yc/lib/util/getRootPath.js":
/*!*************************************************!*\
  !*** ./node_modules/yc/lib/util/getRootPath.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRootPath;
/**
 * 获取网站根目录
 *
 * @returns {string} 根目录
 * @method getRootPath
 * @memberof module:base
 */
function getRootPath() {
  var fullPath = window.document.location.href;
  if (fullPath.lastIndexOf('/') === fullPath.length - 1) {
    fullPath = fullPath.substring(0, fullPath.length - 1);
  }
  // 由于使用了 router 的 hashHistory，导致 url 地址中可能出现 #
  if (fullPath.indexOf('#') !== -1) {
    fullPath = fullPath.substring(0, fullPath.indexOf('#'));
  }
  return fullPath;
}
//# sourceMappingURL=../../maps/util/getRootPath.js.map


/***/ }),

/***/ "./node_modules/yc/lib/util/getWordSize.js":
/*!*************************************************!*\
  !*** ./node_modules/yc/lib/util/getWordSize.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var id = 'i-am-a-text-container';
var defaultStyle = {
  position: 'absolute',
  visibility: 'hidden'
};
var isChanging = false;

function setStyle(el, style) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(style)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      el.style[key] = value;
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
}

function createDiv() {
  var div = document.createElement('div');
  div.id = id;
  div.style.position = 'absolute';
  div.style.top = '-200px';
  div.style.left = '-200px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  return div;
}

function getDiv() {
  var div = document.getElementById(id);
  if (!div) {
    div = createDiv();
  }
  return div;
}

/**
 * @param {string} text - 用于计算宽度的文字
 * @param {object} style - 样式文件
 */

exports.default = function (text, style) {
  var div = getDiv();
  if (style) {
    var newStyle = _extends({}, style, defaultStyle);
    setStyle(div, newStyle);
    isChanging = true;
  } else if (isChanging) {
    setStyle(div, defaultStyle);
    isChanging = false;
  }
  div.innerHTML = text;
  return { w: div.offsetWidth, h: div.offsetHeight };
};
//# sourceMappingURL=../../maps/util/getWordSize.js.map


/***/ }),

/***/ "./node_modules/yc/lib/util/index.js":
/*!*******************************************!*\
  !*** ./node_modules/yc/lib/util/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(/*! ./map.js */ "./node_modules/yc/lib/util/map.js");

var map = _interopRequireWildcard(_map);

var _getRootPath = __webpack_require__(/*! ./getRootPath */ "./node_modules/yc/lib/util/getRootPath.js");

var _getRootPath2 = _interopRequireDefault(_getRootPath);

var _getUUID = __webpack_require__(/*! ../base/getUUID.js */ "./node_modules/yc/lib/base/getUUID.js");

var _getUUID2 = _interopRequireDefault(_getUUID);

var _getWordSize = __webpack_require__(/*! ./getWordSize */ "./node_modules/yc/lib/util/getWordSize.js");

var _getWordSize2 = _interopRequireDefault(_getWordSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = { map: map, getRootPath: _getRootPath2.default, getUUID: _getUUID2.default, getWordSize: _getWordSize2.default };
// import treeUtil from './treeUtil.js';
//# sourceMappingURL=../../maps/util/index.js.map


/***/ }),

/***/ "./node_modules/yc/lib/util/map.js":
/*!*****************************************!*\
  !*** ./node_modules/yc/lib/util/map.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCenterFromPaths = getCenterFromPaths;
/**
 * 常用地图相关计算
 * @module util/map
 */

/**
 * 通过 paths 双数组，获取中点坐标
 *
 * @param {Array[]} paths - 路径组 [[[x, y], [x, y]]]
 *
 * @return {Object} point - 中心点 {x:x,y:y}
 */
function getCenterFromPaths(paths) {
  var x = 0;
  var y = 0;
  var index = 0;
  paths.forEach(function (path) {
    path.forEach(function (point) {
      x += point[0];
      y += point[1];
      index++;
    });
  });

  return { x: x / index, y: y / index };
}
//# sourceMappingURL=../../maps/util/map.js.map


/***/ }),

/***/ "./src/pages/bigscreen/screen4/cenSum/view-1/index.js":
/*!************************************************************!*\
  !*** ./src/pages/bigscreen/screen4/cenSum/view-1/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/pages/bigscreen/screen4/cenSum/view-1/view.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  View: _view__WEBPACK_IMPORTED_MODULE_0__["default"],
  models: []
});

/***/ }),

/***/ "./src/pages/bigscreen/screen4/cenSum/view-1/index.less":
/*!**************************************************************!*\
  !*** ./src/pages/bigscreen/screen4/cenSum/view-1/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"btn":"index__btn___1dWd6"};

/***/ }),

/***/ "./src/pages/bigscreen/screen4/cenSum/view-1/view.js":
/*!***********************************************************!*\
  !*** ./src/pages/bigscreen/screen4/cenSum/view-1/view.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CemSum; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yc */ "./node_modules/yc/lib/index.js");
/* harmony import */ var yc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/pages/bigscreen/screen4/cenSum/view-1/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable jsx-a11y/iframe-has-title */



class CemSum extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    this.changeBtn = e => {
      console.log(e);
    };

    this.projectMapConfig = yc__WEBPACK_IMPORTED_MODULE_1__["sysConfig"].getCfgByKey('cenSum');
    this.state = {
      btns: {}
    };
  }

  componentWillMount() {
    const censum = this.projectMapConfig;
    this.setState({
      btns: censum[0].url
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: '100%',
        height: '100%'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.projectMapConfig.map(x => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        onClick: e => this.changeBtn(e),
        value: true
      }, x.name);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: '100%',
        height: '100%'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      src: this.state.btns,
      width: "100%",
      height: "100%",
      frameborder: 0
    })));
  }

}

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