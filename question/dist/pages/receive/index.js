require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/receive/index"],{

/***/ "./src/pages/receive/index.css":
/*!*************************************!*\
  !*** ./src/pages/receive/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/receive/index.entry.js":
/*!******************************************!*\
  !*** ./src/pages/receive/index.entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/receive/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/receive/index'));

/***/ }),

/***/ "./src/pages/receive/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/receive/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/pages/receive/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);




var user = {
  answernum: 444,
  sign_total: 12,
  friend_num: 33,
  totalrightnum: 234,
  ad_video_num: 3
};
var sysinfo = {
  sys_inviterid_card: 3,
  sys_ad_video_id: '1234',
  sys_ad_video_watchnum: 5,
  sys_ad_gezi_id: '1234'
};
var btn = {
  make_video_btn_time: 12,
  make_video_btn: true
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      height: 20
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "cashout_maina"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "h2"
  }, user.answernum), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "h3"
  }, "\u6211\u7684\u7B54\u9898\u5361\uFF08\u5F20\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "cont clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "p"
  }, "\u7B7E\u5230\uFF1A", user.sign_total)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "p"
  }, "\u9080\u8BF7\uFF1A", user.friend_num)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "p"
  }, "\u7B54\u5BF9\uFF1A", user.totalrightnum)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "get_answer_main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "h2"
  }, "\u6BCF\u65E5\u4EFB\u52A1(\u9886\u7B54\u9898\u5361)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "box clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/images/icon_haoyou.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "h3"
  }, "\u9080\u8BF7\u597D\u53CB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "p"
  }, "\u65B0\u7528\u6237\u5956\u52B1+", sysinfo.sys_inviterid_card, "\u5F20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn",
    openType: "share"
  }, "\u9080\u8BF7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "box clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/Images/icon_sign.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "h3"
  }, "\u6BCF\u65E5\u7B7E\u5230"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "p"
  }, "\u5956\u52B1\u7B54\u9898\u5361")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn"
  }, "\u7B7E\u5230")), sysinfo.sys_ad_video_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "box clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/Images/icon_shipin.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "h3"
  }, "\u89C2\u770B\u89C6\u9891"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "p"
  }, "\u968F\u673A\u5956\u52B11~5\u5F20")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    bindtap: "make_videoad",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('btn', user.ad_video_num >= sysinfo.sys_ad_video_watchnum ? 'disabled' : ''),
    disabled: user.ad_video_num >= sysinfo.sys_ad_video_watchnum,
    "wx:if": "{{!btn.make_video_btn}}"
  }, "\u89C2\u770B(", user.ad_video_num, "/", sysinfo.sys_ad_video_watchnum, ")"), btn.make_video_btn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn disabled",
    disabled: true
  }, btn.make_video_btn_time, "s") : null) : null, sysinfo.sys_ad_gezi_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Ad"], {
    adType: "grid",
    unitId: sysinfo.sys_ad_gezi_id
  })) : null));
});

/***/ }),

/***/ 4:
/*!************************************************!*\
  !*** multi ./src/pages/receive/index.entry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\IdeaProjects\xiaochengxu\question\src\pages\receive\index.entry.js */"./src/pages/receive/index.entry.js");


/***/ })

},[[4,"runtime","remax-vendors"]]]);