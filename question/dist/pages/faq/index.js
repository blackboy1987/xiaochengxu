require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/faq/index"],{

/***/ "./src/pages/faq/index.css":
/*!*********************************!*\
  !*** ./src/pages/faq/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/faq/index.entry.js":
/*!**************************************!*\
  !*** ./src/pages/faq/index.entry.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/faq/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/faq/index'));

/***/ }),

/***/ "./src/pages/faq/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/faq/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/pages/faq/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var maskData = [{
  "id": "1",
  "title": "1、这个小程序怎么玩？",
  "litpic": "",
  "content": "根据题目，选择正确答案，即可得到奖励~",
  "sortrank": "1",
  "create_time": "1609480641",
  "uniacid": "8"
}, {
  "id": "2",
  "title": "2、为什么提示答题卡不足？",
  "litpic": null,
  "content": "每次答题需要消耗答题卡1张，答题卡可进入领取答题卡页面，完成相应的任务，即可得到~",
  "sortrank": "2",
  "create_time": "1609479029",
  "uniacid": "8"
}, {
  "id": "3",
  "title": "3、答对题目的奖励是什么？",
  "litpic": "",
  "content": "随机奖励红包，可提现~",
  "sortrank": "3",
  "create_time": "1609480772",
  "uniacid": "8"
}, {
  "id": "4",
  "title": "4、提现后，什么时候到账？",
  "litpic": "",
  "content": "发起提现后24小时内到账，若未到账请联系客服~",
  "sortrank": "4",
  "create_time": "1609480610",
  "uniacid": "8"
}, {
  "id": "5",
  "title": "5、这个小程序收费吗？",
  "litpic": null,
  "content": "不收费，这是一款免费的小程序，供您休闲娱乐，益智消遣~",
  "sortrank": "5",
  "create_time": "1609479029",
  "uniacid": "8"
}, {
  "id": "6",
  "title": "6、客服怎么联系？",
  "litpic": "",
  "content": "请加客服微信【usopking】，或通过提现页面，进入客服会话~",
  "sortrank": "6",
  "create_time": "1609480751",
  "uniacid": "8"
}];
var sysinfo = {
  sys_ad_videob_id: '1234'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      showIndex = _useState2[0],
      setShowIndex = _useState2[1];

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function () {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["setNavigationBarTitle"])({
      title: '规则说明'
    }).then();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "help"
  }, maskData.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "help_item",
      key: item.id,
      __key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "title",
      onClick: function onClick() {
        return setShowIndex(index + 1);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "title_1"
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "title_2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: "/images/".concat(showIndex == index + 1 ? 'icon_down' : 'icon_right', ".png")
    }))), showIndex === index + 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "detail"
    }, item.content, item.litpic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      mode: "widthFix",
      src: "{{item.litpic}}"
    }) : null) : null);
  })), sysinfo.sys_ad_videob_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      margin: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Ad"], {
    adTheme: "white",
    adType: "video",
    unitId: "{{sysinfo.sys_ad_videob_id}}"
  })) : null);
});

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./src/pages/faq/index.entry.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/blackoy/Desktop/xiaochengxu21/question/src/pages/faq/index.entry.js */"./src/pages/faq/index.entry.js");


/***/ })

},[[3,"runtime","remax-vendors"]]]);