require('./../../runtime.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/MyVideo/index"],{

/***/ "./src/components/MyVideo/index.entry.js":
/*!***********************************************!*\
  !*** ./src/components/MyVideo/index.entry.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./index.wxss */ "./src/components/MyVideo/index.wxss");

Component({
  properties: {
    autoplay: {
      type: Boolean,
      value: true
    },
    controls: {
      type: Boolean,
      value: true
    },
    danmuBtn: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 0
    },
    enableDanmu: {
      type: Boolean,
      value: true
    },
    src: {
      type: String,
      value: ''
    },
    poster: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    bindEnd: function bindEnd(e) {
      this.triggerEvent('bindEnd', e.detail);
    },
    bindPlay: function bindPlay(e) {
      this.triggerEvent('bindPlay', e.detail);
    },
    bindTimeUpdate: function bindTimeUpdate(e) {
      this.triggerEvent('bindTimeUpdate', e.detail);
    }
  }
});

/***/ }),

/***/ "./src/components/MyVideo/index.wxss":
/*!*******************************************!*\
  !*** ./src/components/MyVideo/index.wxss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/MyVideo/index.entry.js","runtime"]]]);