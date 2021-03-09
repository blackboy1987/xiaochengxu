require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/components/NativeAd/index.js":
/*!******************************************!*\
  !*** ./src/components/NativeAd/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('native-ad-index-10fe8cc'));

/***/ }),

/***/ "./src/components/OtherModal/index.css":
/*!*********************************************!*\
  !*** ./src/components/OtherModal/index.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/OtherModal/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/OtherModal/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/components/OtherModal/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);

 // @ts-ignore



var status = 'right';
var addmoney = 0.12;
var addcardnum = 3;
var user = {
  money: 12.3,
  balance: 3.8
};
var check_code = '12345';
var banner = true;

var OtherModal = function OtherModal(_ref) {
  var visible = _ref.visible;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('dialog-mask', visible ? 'mask-show' : 'mask-hide')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('other-modal', 'dialog-p', visible ? 'dialog-con-show' : 'dialog-con-hide')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('header', status)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    mode: "widthFix",
    src: "/images/modal_".concat(status, ".png")
  })), status === 'empty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u65E0\u6CD5\u7B54\u9898\uFF0C\u7B54\u9898\u5361\u4E0D\u8DB3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "desc"
  }, "\u6BCF\u6B21\u7B54\u9898\u9700\u6D88\u8017", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "hl"
  }, "1\u5F20\u7B54\u9898\u5361")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "free-btn"
  }, "\u514D\u8D39\u9886\u53D6\u7B54\u9898\u5361")) : null, status === 'right' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u606D\u559C\u83B7\u5F97", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "hl"
  }, addmoney), "\u5143\u7EA2\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "desc"
  }, "\u91D1\u989D\u5DF2\u6DFB\u52A0\u5230\u60A8\u7684\u4F59\u989D\u4E2D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "free-btn"
  }, "\u7EE7\u7EED\u7B54\u9898\u8D5A\u7EA2\u5305")) : null, status === 'card' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u606D\u559C\u83B7\u5F97", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "hl"
  }, addcardnum, "\u5F20\u7B54\u9898\u5361")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "free-btn"
  }, "\u786E\u5B9A")) : null, status === 'error' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u5F88\u9057\u61BE\uFF0C\u56DE\u7B54\u9519\u8BEF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "free-btn"
  }, "\u7EE7\u7EED\u7B54\u9898\u8D5A\u7EA2\u5305")) : null, status === 'cashout' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u4F59\u989D\u6EE1", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "hl"
  }, "20\u5143"), "\u5C31\u53EF\u63D0\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "desc hl"
  }, "\u5F53\u524D\u4F59\u989D", user.money, "\u8FD8\u5DEE", user.balance, "\u5143\u63D0\u73B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    bindtap: "hideOtherModal",
    className: "free-btn"
  }, "\u7EE7\u7EED\u7B54\u9898\u8D5A\u7EA2\u5305")) : null, status === 'cashout_yes' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u606D\u559C\u4F60,\u6210\u529F\u63D0\u73B020\u5143"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "desc hl"
  }, "\u8BF7\u8054\u7CFB\u5BA2\u670D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "desc hl"
  }, "\u63D0\u4F9B\u6838\u9500\u7801\u9886\u53D6: ", check_code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "free-btn"
  }, "\u786E\u5B9A")) : null, status === 'get' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u65E0\u6CD5\u9886\u53D6\u7B54\u9898\u5361"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "desc hl"
  }, "\u8BD5\u73A9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "hl"
  }, "20\u79D2"), "\u4EE5\u4E0A\u624D\u80FD\u83B7\u5F97\u7B54\u9898\u5361"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "free-btn"
  }, "\u7EE7\u7EED\u8BD5\u73A9\u5C0F\u7A0B\u5E8F")) : null), banner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Ad"], {
    unitId: "{{banner}}"
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "close-btn-img",
    src: "/images/modal_close.png"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherModal);

/***/ }),

/***/ "./src/components/RedPackageModal/index.css":
/*!**************************************************!*\
  !*** ./src/components/RedPackageModal/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/RedPackageModal/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/RedPackageModal/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/components/RedPackageModal/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);

 // @ts-ignore



var rpStatus = 0;
var time = 3;
var index_total_money = 1888;
var addmoney = 3.5;

var RedPackageModal = function RedPackageModal(_ref) {
  var visible = _ref.visible;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('dialog-mask', visible ? 'mask-show' : 'mask-hide')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('redpacket-modal', rpStatus === 0 ? 'close' : 'open', 'dialog-p', visible ? 'dialog-con-show' : 'dialog-con-hide')
  }, rpStatus === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "default-m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u606D\u559C\u60A8\u83B7\u5F97"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "timer"
  }, time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "open-btn"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "desc"
  }, "\u74DC\u5206\u5956\u6C60", index_total_money || '20000', "\u5143")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "open-m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title"
  }, "\u606D\u559C\u60A8\u83B7\u5F97\u73B0\u91D1\u7EA2\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "account"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", {
    className: "number"
  }, addmoney), "\u5143"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "account-desc"
  }, "\u91D1\u989D\u5DF2\u6DFB\u52A0\u5230\u60A8\u7684\u4F59\u989D\u4E2D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "share-btn"
  }, "\u7EE7\u7EED\u7B54\u9898\u8D5A\u7EA2\u5305")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "close-btn-img",
    src: "/images/modal_close.png"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RedPackageModal);

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/index/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/index/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_OtherModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/OtherModal */ "./src/components/OtherModal/index.tsx");
/* harmony import */ var _components_RedPackageModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/RedPackageModal */ "./src/components/RedPackageModal/index.tsx");
/* harmony import */ var _components_NativeAd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/NativeAd */ "./src/components/NativeAd/index.js");





 // @ts-ignore


var sysinfo = {
  sys_is_xcxlist: 2,
  sys_is_cashout: 2,
  sys_ad_videob_id: '1234',
  sys_rightlist: true,
  sys_is_ranklist: true,
  sys_ad_banner_id: '124'
};
var xcxlist = [{
  singleList: [{
    appid: 'appid',
    path: 'path',
    litpic: 'litpic',
    title: 'title'
  }]
}];
var notice = {
  text: '版本已升级，包含全新题库，有任何问题请联系客服',
  marqueeDistance: 0
};
var user = {
  money: 1.3,
  uname: 'abc',
  answernum: 3,
  totalrightnum: 12
};
var index_total = {
  money: 12345,
  redbag: 38545
};
var question_time = 12;
var question = {
  "title": "世界上大约有多少种语言?",
  "image": null,
  "answers": [{
    "t": "1",
    "answer": "近3000种",
    "istrue": "1"
  }, {
    "t": "2",
    "answer": "近2000种",
    "istrue": "2"
  }]
};
var showAd = 'c3';
var rankList = [{
  "id": "338",
  "title": "葡萄籽",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019032009105747041.jpg",
  "rightnum": "1024",
  "money": "100",
  "uniacid": "8"
}, {
  "id": "295",
  "title": "张学友",
  "litpic": "https://pic.qqtn.com/up/2019-4/2019040208030018512.jpg",
  "rightnum": "978",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "153",
  "title": "啪啪1314520",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019032009105628370.jpg",
  "rightnum": "542",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "185",
  "title": "奋斗一生",
  "litpic": "https://ntx.qqtn.com/up/2019-07-08/5d22fec02b4ac8.84132687.jpg",
  "rightnum": "859",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "100",
  "title": "安晓逸丶",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019031417572618630.jpg",
  "rightnum": "415",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "167",
  "title": "阿帅",
  "litpic": "https://ntx.qqtn.com/up/2019-07-08/5d2300ad1ae2b7.23981690.jpg",
  "rightnum": "556",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "305",
  "title": "不良人",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019031108004880099.jpg",
  "rightnum": "988",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "220",
  "title": "快快快快",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019031808022275204.jpg",
  "rightnum": "895",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "301",
  "title": "PLA壮爷",
  "litpic": "https://ntx.qqtn.com/up/2019-07-08/5d23005d088118.25882801.jpg",
  "rightnum": "984",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "70",
  "title": "太太奶奶",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019032208012814149.jpg",
  "rightnum": "364",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "76",
  "title": "小粉狐",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019032609102228272.jpg",
  "rightnum": "368",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "145",
  "title": "情场",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019032108000416945.jpg",
  "rightnum": "534",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "205",
  "title": "李萌萌",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019031808110668186.jpg",
  "rightnum": "879",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "13",
  "title": "J0Ker",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019031908191769268.jpg",
  "rightnum": "311",
  "money": "20",
  "uniacid": "8"
}, {
  "id": "193",
  "title": "杨辰逸",
  "litpic": "https://pic.qqtn.com/up/2019-3/2019032908334770310.jpg",
  "rightnum": "866",
  "money": "20",
  "uniacid": "8"
}];
var sys_rightlist = [10, 30, 60, 100, 180, 300];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, sysinfo.sys_is_xcxlist ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Swiper"], {
    autoplay: true,
    circular: true,
    className: "index_swiper"
  }, xcxlist.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["SwiperItem"], {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
      className: "more_app"
    }, item.singleList.map(function (item1) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
        className: "box",
        key: item1.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: item1.litpic
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
        className: "p"
      }, item1.title));
    })));
  })) : null, notice.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "index_notice clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/images/icon_notice.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "marquee_box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "marquee_text",
    style: {
      transform: "translateX(-".concat(notice.marqueeDistance, "px)")
    }
  }, notice.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    onClick: function onClick() {
      return Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
        url: '/pages/faq/index'
      }).then();
    },
    className: "btn"
  }, "\u89C4\u5219\u8BF4\u660E")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "index-header clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "user-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["OpenData"], {
    type: "userAvatarUrl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["OpenData"], {
    type: "userNickName"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "account clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/images/icon_hongbao.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "amount"
  }, user.money), sysinfo.sys_is_cashout == 1 ? '元' : '个', sysinfo.sys_is_cashout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "cashbox"
  }, user.uname ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "cashbtn"
  }, "\u63D0\u73B0") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "cashbtn",
    openType: "getUserInfo"
  }, "\u63D0\u73B0")) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "index-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "left side-bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "right side-bar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "answer-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "index_bg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    mode: "widthFix",
    src: "/images/rp_card_bg.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", {
    className: "card-desc"
  }, "\u53C2\u4E0E\u7B54\u9898 \u7B54\u5BF9\u9886", sysinfo.sys_is_cashout == 1 ? '红包' : '金币'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "jackpot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "account"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "number"
  }, index_total.money), sysinfo.sys_is_cashout == 1 ? '元' : '个'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
    className: "count"
  }, "\u5269\u4F59", index_total.redbag, "\u4E2A\u7EA2\u5305")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "timer"
  }, question_time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "problem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "tit"
  }, question.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "list"
  }, question.answers.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "item",
      key: index,
      __key: index
    }, item.answer);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "foot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "icon_card",
    src: "/images/ancard.png"
  }), "\u7B54\u9898\u5361\uFF1A", user.answernum, " \u5F20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "text2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
    className: "btn"
  }, "\u9886\u53D6\u7B54\u9898\u5361"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      margin: '10 30 0 30'
    }
  }, showAd === 'c3' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_NativeAd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    unitId: "adunit-921e9b557628182f"
  }) : null, showAd === 'b' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Ad"], {
    unitId: "adunit-6aa72d94fb93b0a1"
  }) : null, sysinfo.sys_ad_videob_id && showAd == 'v' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Ad"], {
    adTheme: "white",
    adType: "video",
    unitId: sysinfo.sys_ad_videob_id
  }) : null), sysinfo.sys_rightlist ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "index-redpacket"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "rp-header"
  }, "\u7D2F\u8BA1\u7B54\u5BF9\u9898\u76EE\uFF1A", user.totalrightnum, "\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["ScrollView"], {
    scrollX: true,
    className: "rp-content",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "list"
  }, sys_rightlist.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "rp-item",
      key: index,
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "s-rp-con"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('status', user.totalrightnum >= item ? 'active' : '')
    }, "\u9886"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "desc"
    }, "\u7D2F\u8BA1\u7B54\u5BF9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "desc"
    }, item, "\u9898\u53EF\u5F00")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('btn', user.totalrightnum >= item ? 'active' : '')
    }, user.totalrightnum >= item ? '拆红包' : '再答' + (item - user.totalrightnum) + '题'));
  })))) : null, sysinfo.sys_is_ranklist ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "index-rank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "rank-header"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "list"
  }, rankList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "item bt1",
      key: item.id,
      __key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "left"
    }, index + 1 > 0 && index + 1 <= 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('dt-icons', "icon-".concat(index + 1))
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, index + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      className: "avatar",
      src: item.litpic
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "user"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "nickName"
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "desc"
    }, "\u7D2F\u8BA1\u7B54\u5BF9", item.rightnum, "\u9898")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "amount"
    }, item.money, sysinfo.sys_is_cashout == 1 ? '元' : '个')));
  }))) : null, sysinfo.sys_ad_banner_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      margin: '20 20 30 20'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Ad"], {
    unitId: sysinfo.sys_ad_banner_id
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_OtherModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    visible: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_RedPackageModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    visible: false
  }));
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/index/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/blackoy/Desktop/xiaochengxu21/question/src/pages/index/index.entry.js */"./src/pages/index/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors"]]]);