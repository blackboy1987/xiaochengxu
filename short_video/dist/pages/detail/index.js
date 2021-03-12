require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/detail/index"],{

/***/ "./src/components/MyVideo/index.js":
/*!*****************************************!*\
  !*** ./src/components/MyVideo/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('my-video-index-981d9e0'));

/***/ }),

/***/ "./src/pages/detail/index.css":
/*!************************************!*\
  !*** ./src/pages/detail/index.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/index.entry.js":
/*!*****************************************!*\
  !*** ./src/pages/detail/index.entry.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/detail/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/detail/index'));

/***/ }),

/***/ "./src/pages/detail/index.tsx":
/*!************************************!*\
  !*** ./src/pages/detail/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _components_MyVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MyVideo */ "./src/components/MyVideo/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/pages/detail/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_wxUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/util/wxUtils */ "./src/util/wxUtils.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // @ts-ignore

 // @ts-ignore




var showMoreDetails = false;
var channelImgUrl = "http://static01.baomihua.com/img/userchannel/defaultx.jpg";
var channelName = "热播综艺咖";
var percent = 250 / 300 * 100 * 18 / 5;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function (e) {
    Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_5__["post"])('short_video/detail', e, function (data) {
      setData(data);
      Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_5__["post"])('short_video/getrecommend', e, function (data) {
        setList(data.retStr);
      });
    });
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onUnload', function () {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["switchTab"])({
      url: '/pages/index/index'
    }).then();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    id: "page-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_MyVideo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    poster: (data.video_img || '').replace('x', '640_360'),
    src: 'https://' + data.alipalyurl,
    controls: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], {
    className: "scroll_wrap",
    scrollIntoView: "toView_3",
    scrollWithAnimation: true,
    scrollY: true,
    style: {
      top: 460
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "video_infos_wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "video_title"
  }, data === null || data === void 0 ? void 0 : data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "video_user"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "video_user_info",
    "data-channelid": data === null || data === void 0 ? void 0 : data.appId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    mode: "aspectFit",
    src: data === null || data === void 0 ? void 0 : data.channelImgUrl
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("text", null, data === null || data === void 0 ? void 0 : data.channelName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "share_btn",
    openType: "share"
  }, "\u5206\u4EAB", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQUJCRjM5MTMzNDQxMUU5OENCNUQ2QkI1MkI3NzYxOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQUJCRjM5MjMzNDQxMUU5OENCNUQ2QkI1MkI3NzYxOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBQkJGMzhGMzM0NDExRTk4Q0I1RDZCQjUyQjc3NjE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBBQkJGMzkwMzM0NDExRTk4Q0I1RDZCQjUyQjc3NjE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TRM28gAAAc5JREFUeNq8lrtLA0EQxu8uMUQbBdEgiI9UamFhEcVXxFZiYWclKgSttBBSChb+BYKFj0qsxcbmFEHBFKJYiJBKI8RCLUR8xEPWb3GVY9j1HgsO/AiZ2dvvbmZ3dg1DYoyxCjAIVsEV+7ZncALmQRIY2oZJTDANPpm3nYMWHbE4yLPglg38tXgg6kpdGMsGEeOsMH1L+hVMKOozC54Uk+fALvHZvlKLQQuSCatFrEcSm3MtMIfEarz0LDAh8SfE23ZKYu0iVgWiJNbhJcjfUpWHG9CsiN2BWlAAy6AIIuBDxB7Ai2ma0pQ6IRZICaTBFLhXjCmCURChgnZAsR3QBx59jr8GjW7B8QBiZ2A45LZp/alhJX5ffW7bLpAHsRDNjNe2yUJh3xQrldoxGCJi3aBXMnYd1IN9l68BZNzdZs0jJWOSRmCJtkhtRMybI/4jelIs/iGYlvguwKXE74jFRa1s0r4KK4nPp8bTeah5Ar7TThEXYrdgBjggBfiyLos69msIbtE9mQIZnl5F3x3QPFHaDElKvY4yO6TYZqhrCR6KgdOAYnt8RetcRyzFsSazJVWJwt6DeM23QcHVOzfAgfg/afyHiXrXib396/8SYAAWBfRkEUPiqgAAAABJRU5ErkJggg=="
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("view", {
    id: "recommend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "flow-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Ad"], {
    unitId: "adunit-d6fb6396a875309c"
  })), list.map(function (video, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "flow-link",
      key: index,
      __key: index
    }, (index + 1) % 9 == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Ad"], {
      unitId: "adunit-606e0961f30e013c"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "flow-linka",
      onClick: function onClick() {
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
          url: '/pages/detail/index?id=' + video.videoid
        }).then();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      id: "pic"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      id: "img",
      mode: "widthFix",
      src: video.videoimgurl
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: "video-time"
    }, video.time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: "info-title"
    }, video.videoname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      className: "info-count"
    }, video.channelName || ''))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "play-fixed-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/images/index-fixed-icon.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "percent left",
    style: {
      transform: "rotate(".concat(percent, "deg)")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "percent right wth0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "num"
  }, "50")));
});

/***/ }),

/***/ 2:
/*!***********************************************!*\
  !*** multi ./src/pages/detail/index.entry.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/blackoy/Desktop/xiaochengxu21/short_video/src/pages/detail/index.entry.js */"./src/pages/detail/index.entry.js");


/***/ })

},[[2,"runtime","remax-vendors"]]]);