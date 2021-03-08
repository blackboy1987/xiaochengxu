require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/more/index"],{

/***/ "./src/pages/more/index.css":
/*!**********************************!*\
  !*** ./src/pages/more/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/more/index.entry.js":
/*!***************************************!*\
  !*** ./src/pages/more/index.entry.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/more/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/more/index'));

/***/ }),

/***/ "./src/pages/more/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/more/index.tsx ***!
  \**********************************/
/*! exports provided: More, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "More", function() { return More; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/more/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CustomAd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CustomAd */ "./src/components/CustomAd/index.tsx");

 // @ts-ignore



var setting = {
  pg_video_unit_id: '12345'
};
var wmore = [{
  id: 1,
  image: 'https://dfzximg01.dftoutiao.com/news/20210303/20210303161540_32496107705c4ab09eca58e11b73bf1c_0.jpeg',
  description: '1342134阿斯顿发',
  name: '大法师'
}, {
  id: 1,
  image: 'https://dfzximg01.dftoutiao.com/news/20210303/20210303161540_32496107705c4ab09eca58e11b73bf1c_0.jpeg',
  description: '1342134阿斯顿发',
  name: '大法师'
}, {
  id: 1,
  image: 'https://dfzximg01.dftoutiao.com/news/20210303/20210303161540_32496107705c4ab09eca58e11b73bf1c_0.jpeg',
  description: '1342134阿斯顿发',
  name: '大法师'
}, {
  id: 1,
  image: 'https://dfzximg01.dftoutiao.com/news/20210303/20210303161540_32496107705c4ab09eca58e11b73bf1c_0.jpeg',
  description: '1342134阿斯顿发',
  name: '大法师'
}];
var siteConfig = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["getStorageSync"])("siteInfo");
var More = function More() {
  var _siteConfig$ads, _siteConfig$ads2;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (_siteConfig$ads = siteConfig.ads) !== null && _siteConfig$ads !== void 0 && _siteConfig$ads.more ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "wad"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_CustomAd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    adIds: (_siteConfig$ads2 = siteConfig.ads) === null || _siteConfig$ads2 === void 0 ? void 0 : _siteConfig$ads2.more
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "wmore"
  }, wmore.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "wmoreitem",
      key: index,
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: "img",
      src: item.image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "wcon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "wtitle"
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "wmiaoshu"
    }, item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "wbtm"
    }, "\u53BB\u770B\u770B"));
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (More);

/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./src/pages/more/index.entry.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\IdeaProjects\xiaochengxu\chengyu\src\pages\more\index.entry.js */"./src/pages/more/index.entry.js");


/***/ })

},[[4,"runtime","remax-vendors","remax-styles"]]]);