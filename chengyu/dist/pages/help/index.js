require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/help/index"],{

/***/ "./src/pages/help/index.css":
/*!**********************************!*\
  !*** ./src/pages/help/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/help/index.entry.js":
/*!***************************************!*\
  !*** ./src/pages/help/index.entry.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/help/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/help/index'));

/***/ }),

/***/ "./src/pages/help/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/help/index.tsx ***!
  \**********************************/
/*! exports provided: Help, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Help", function() { return Help; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/pages/help/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CustomAd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CustomAd */ "./src/components/CustomAd/index.tsx");

 // @ts-ignore




var wwenti = [{
  id: 1,
  name: '问题1',
  miaoshu: '问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述'
}, {
  id: 2,
  name: '问题2',
  miaoshu: '问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述'
}, {
  id: 3,
  name: '问题3',
  miaoshu: '问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述问题1描述'
}];
var windex = 1;
var siteConfig = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["getStorageSync"])("siteInfo");
var Help = function Help() {
  var _siteConfig$ads;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "wlist"
  }, wwenti.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "wlistitem",
      key: index,
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('wtitle', windex === index ? 'wtitleactive' : ''),
      "data-index": "{{index}}"
    }, item.name), windex === index ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "wmiaoshu"
    }, item.miaoshu) : null);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "wbtn"
  }, "\u8FD4\u56DE\u95EF\u5173")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "wad"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_CustomAd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    adIds: (_siteConfig$ads = siteConfig.ads) === null || _siteConfig$ads === void 0 ? void 0 : _siteConfig$ads.help
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Help);

/***/ }),

/***/ 7:
/*!*********************************************!*\
  !*** multi ./src/pages/help/index.entry.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\IdeaProjects\xiaochengxu\chengyu\src\pages\help\index.entry.js */"./src/pages/help/index.entry.js");


/***/ })

},[[7,"runtime","remax-vendors","remax-styles"]]]);