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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<h1>Virtual List</h1>";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n"

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const htmlTemplate = __webpack_require__(0);
const styles = __webpack_require__(1);
const template = document.createElement("template");
template.innerHTML = `${htmlTemplate}<style>${styles}</style>`;
class VirtualListComponent extends HTMLElement {
    constructor(_scroller, _source, _document = document, _window = window) {
        super();
        this._scroller = _scroller;
        this._source = _source;
        this._document = _document;
        this._window = _window;
        this.anchorItem = {
            index: 0,
            offset: 0
        };
        this._firstAttachedItem = 0;
        this._lastAttachedItem = 0;
        this._anchorScrollTop = 0;
        this._tombstoneSize = 0;
        this._tombstoneWidth = 0;
        this._tombstones = [];
        this._loadedItems = 0;
        this._requestInProgress = false;
        this._scrollRunwayEnd = 0;
        this._items = [];
        this._onScroll = this._onScroll.bind(this);
        this._onResize = this._onResize.bind(this);
    }
    fetch(count) {
    }
    createToombstone() {
    }
    render(item, div) {
    }
    _onScroll() {
    }
    _onResize() {
        var tombstone = this._source.createTombstone();
        tombstone.style.position = 'absolute';
        this._scroller.appendChild(tombstone);
        tombstone.classList.remove('invisible');
        this._tombstoneSize = tombstone.offsetHeight;
        this._tombstoneWidth = tombstone.offsetWidth;
        this._scroller.removeChild(tombstone);
        for (var i = 0; i < this._items.length; i++) {
            this._items[i].height = this._items[i].width = 0;
        }
        this._onScroll();
    }
    static get observedAttributes() {
        return [];
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(document.importNode(template.content, true));
        this._bind();
        this._setEventListeners();
    }
    _bind() {
        return __awaiter(this, void 0, void 0, function* () {
            this._scrollRunway = this._document.createElement('div');
            this._scrollRunway = document.createElement('div');
            this._scrollRunway.textContent = ' ';
            this._scrollRunwayEnd = 0;
            this._scrollRunway.style.position = 'absolute';
            this._scrollRunway.style.height = '1px';
            this._scrollRunway.style.width = '1px';
            this._scrollRunway.style.transition = 'transform 0.2s';
            this._scroller.appendChild(this._scrollRunway);
            this._onResize();
        });
    }
    _setEventListeners() {
        this._scroller.addEventListener('scroll', this._onScroll);
        this._window.addEventListener('resize', this._onResize);
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            default:
                break;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["VirtualListComponent"] = VirtualListComponent;

customElements.define(`ce-virtual-list`, VirtualListComponent);


/***/ })
/******/ ]);
//# sourceMappingURL=virtual-list.js.map