/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/_citations.js":
/*!*********************************!*\
  !*** ./assets/js/_citations.js ***!
  \*********************************/
/*! exports provided: Citations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Citations", function() { return Citations; });
var Citations = {
  HTML: function HTML(data, theme) {
    var start = data[theme]["start"][Math.floor(Math.random() * Object.keys(data[theme]["start"]).length) + 1];
    var middle = data[theme]["middle"][Math.floor(Math.random() * Object.keys(data[theme]["middle"]).length) + 1];
    var end = data[theme]["end"][Math.floor(Math.random() * Object.keys(data[theme]["end"]).length) + 1];
    return '<li class="list-group-item">' + start + ' ' + middle + ' ' + end + '</li>';
  }
};

/***/ }),

/***/ "./assets/js/_generator.js":
/*!*********************************!*\
  !*** ./assets/js/_generator.js ***!
  \*********************************/
/*! exports provided: Generator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generator", function() { return Generator; });
/* harmony import */ var _citations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_citations */ "./assets/js/_citations.js");

var Generator = {
  data: {
    citations: [],
    values: {}
  },
  init: function init() {
    $.getJSON("assets/js/data/citations.json", function (data) {
      Generator.data.values = data;
    });
  },
  generate: function generate(nb, theme) {
    this.release();

    for (var i = 0; i < nb; i++) {
      Generator.data.citations.push(_citations__WEBPACK_IMPORTED_MODULE_0__["Citations"].HTML(Generator.data.values, theme));
    }

    this.render();
    this.clear();
  },
  render: function render() {
    this.data.citations.forEach(function (citation) {
      $(".citations").append(citation);
    });
  },
  clear: function clear() {
    this.data.citations = [];
  },
  release: function release() {
    $(".citations").html('');
  }
};

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_generator */ "./assets/js/_generator.js");

$(document).ready(function () {
  _generator__WEBPACK_IMPORTED_MODULE_0__["Generator"].init();
});
$(".runCitations").click(function () {
  _generator__WEBPACK_IMPORTED_MODULE_0__["Generator"].generate($(".nbCitations").val(), $(".theme").val());
});
$(".release").click(function () {
  _generator__WEBPACK_IMPORTED_MODULE_0__["Generator"].release();
});

/***/ }),

/***/ "./assets/sass/app.sass":
/*!******************************!*\
  !*** ./assets/sass/app.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./assets/js/app.js ./assets/sass/app.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\_OPENCLASSROOMS\generateur-citations\assets\js\app.js */"./assets/js/app.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\_OPENCLASSROOMS\generateur-citations\assets\sass\app.sass */"./assets/sass/app.sass");


/***/ })

/******/ });