require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/jinbi/index"],{

/***/ "./src/pages/jinbi/index.css":
/*!***********************************!*\
  !*** ./src/pages/jinbi/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/jinbi/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/jinbi/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/jinbi/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/jinbi/index'));

/***/ }),

/***/ "./src/pages/jinbi/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/jinbi/index.tsx ***!
  \***********************************/
/*! exports provided: JinBi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JinBi", function() { return JinBi; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/pages/jinbi/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CustomAd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CustomAd */ "./src/components/CustomAd/index.tsx");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/util/constants */ "./src/util/constants.ts");
/* harmony import */ var _util_wxUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/util/wxUtils */ "./src/util/wxUtils.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var rewardedVideoAd;
var interstitialAd;
var timer;
var wuser = [{
  headimgurl: ''
}, {
  headimgurl: ''
}];
var wList = [{}, {}, {}];
var JinBi = function JinBi() {
  var _siteConfig$ads, _siteConfig$ads2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])('rewardedVideoAdInterval') || 0),
      _useState2 = _slicedToArray(_useState, 2),
      time = _useState2[0],
      setTime = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_util_constants__WEBPACK_IMPORTED_MODULE_5__["defaultUserInfo"]),
      _useState4 = _slicedToArray(_useState3, 2),
      userInfo = _useState4[0],
      setUserInfo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_util_constants__WEBPACK_IMPORTED_MODULE_5__["defaultSiteConfig"]),
      _useState6 = _slicedToArray(_useState5, 2),
      siteConfig = _useState6[0],
      setSiteConfig = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      rewardedVideoAdLoading = _useState8[0],
      setRewardedVideoAdLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showVideoAdButton = _useState10[0],
      setShowVideoAdButton = _useState10[1];

  var reward = function reward(type) {
    Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["post"])("reward", {
      type: type
    }, function (data) {
      Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["getUserInfo"])(function (data) {
        return setUserInfo(data);
      });
    });
  };
  /**
   * 插屏广告的显示
   */


  var interstitialAdShow = function interstitialAdShow() {
    if (interstitialAd) {
      interstitialAd.show().then(function (e) {
        console.log("show", e);
      });
    }
  };
  /**
   * 激励视频广告的显示
   */


  var rewardedVideoAdShow = function rewardedVideoAdShow() {
    var dayRewardedVideoAdCount = siteConfig.config.dayRewardedVideoAdCount || 5;
    var reviewRewardedVideoAdCount = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])('reviewRewardedVideoAdCount') || 0;

    if (dayRewardedVideoAdCount <= reviewRewardedVideoAdCount) {
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showToast"])({
        icon: 'none',
        title: '哎呀，客官，今日广告以为您全部播放完毕，请明日再来吧！！！'
      }).then();
      setShowVideoAdButton(false);
      return;
    }

    if (rewardedVideoAdLoading) {
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showToast"])({
        icon: 'none',
        title: '客官莫要着急，视频广告正在来的路上！！！'
      }).then();
    }

    setRewardedVideoAdLoading(true);

    if (rewardedVideoAd) {
      Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["rewardedVideoAdShow1"])(rewardedVideoAd);
    }
  };

  var flushTime = function flushTime(newTime) {
    var timer = setTimeout(function () {
      setTime(newTime - 1);
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["setStorageSync"])('rewardedVideoAdInterval', newTime - 1);

      if (newTime <= 0) {
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["setStorageSync"])('rewardedVideoAdInterval', 0);
        clearTimeout(timer);
      } else {
        flushTime(newTime - 1);
      }
    }, 1e3);
  };

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onLoad', function () {
    var newTimer = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])('rewardedVideoAdInterval') || 0;
    flushTime(newTimer); // 用户信息

    Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["getUserInfo"])(function (data) {
      return setUserInfo(data);
    });
    Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["siteInfo"])(function (data) {
      var _data$ads, _data$ads2;

      setSiteConfig(data);
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["setStorageSync"])('rewardedVideoAdInterval', data.config.rewardedVideoAdInterval || 0);
      setTime(Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])('rewardedVideoAdInterval') || 0);

      if ((_data$ads = data.ads) !== null && _data$ads !== void 0 && _data$ads.index.interstitialAdId && !interstitialAd) {
        interstitialAd = Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["interstitialAdCreate1"])(data.ads.index.interstitialAdId, {});
      }

      if ((_data$ads2 = data.ads) !== null && _data$ads2 !== void 0 && _data$ads2.index.rewardedVideoAdId && !rewardedVideoAd) {
        rewardedVideoAd = Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["rewardedVideoAdCreate1"])(data.ads.index.rewardedVideoAdId, {
          onClose: function onClose(_ref) {
            var isEnded = _ref.isEnded;

            if (isEnded) {
              reward('reviewRewardedVideoAd');
              Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["setStorageSync"])('rewardedVideoAdInterval', siteConfig.config.rewardedVideoAdInterval || 300);
            } else {
              Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showToast"])({
                icon: 'none',
                title: '哎呀，客官您浪费了一次获取奖励的机会，可惜了！！！'
              }).then();
            }

            setRewardedVideoAdLoading(false);
          },
          onError: function onError(e) {
            Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showToast"])({
              icon: 'none',
              title: '广告再来的路上被打劫了，客官稍后再来吧！！！'
            }).then();
            setRewardedVideoAdLoading(false);
          }
        });
      }
    });
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onShow', function () {
    timer = setTimeout(function () {
      interstitialAdShow();
    }, 15e3);
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onHide', function () {
    console.log("onHide");
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user"
  }, userInfo.avatarUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "user-avatar",
    src: userInfo.avatarUrl
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user-avatar1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["OpenData"], {
    lang: "zh_CN",
    type: "userAvatarUrl"
  })), userInfo.nickName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user-nickname"
  }, userInfo.nickName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user-nickname"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["OpenData"], {
    lang: "zh_CN",
    type: "userNickName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "user-power"
  }, "\u4F53\u529B\uFF1A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null, userInfo.point))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "jinbi-box"
  }, showVideoAdButton && time <= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "wshiping",
    disabled: time > 0,
    onClick: rewardedVideoAdShow
  }, " \u89C2\u770B\u89C6\u9891\u6BCF\u6B21\u5956\u52B1 ", siteConfig.config.perVideoGold, " \u4F53\u529B") : null, time > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wshiping"
  }, "\u89C6\u9891\u6B63\u5728\u8D76\u6765\u7684\u8DEF\u4E0A\uFF1A", time, "\u79D2") : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "qiandao",
    onClick: function onClick() {
      return reward("sign");
    }
  }, "\u7B7E\u5230\u9886\u53D6", siteConfig.config.signPoint, "\u4F53\u529B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "wyaoqing w_button",
    openType: "share"
  }, " ", siteConfig.config.inviteButtonText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wuser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wusertitle"
  }, siteConfig.config.inviteText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "w365-list"
  }, wuser.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, wuser.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "wlistitem",
      key: index,
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: "wavatar",
      src: item.headimgurl
    }));
  })) : null, wList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "wlistitem",
      key: index,
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: "img",
      src: "/images/icon/invite/fans.png"
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wlistitem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "img",
    src: "/images/icon/invite/more.png"
  })))))), (_siteConfig$ads = siteConfig.ads) !== null && _siteConfig$ads !== void 0 && _siteConfig$ads.jinbi ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wad"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_CustomAd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    adIds: (_siteConfig$ads2 = siteConfig.ads) === null || _siteConfig$ads2 === void 0 ? void 0 : _siteConfig$ads2.jinbi
  })) : null);
};
/* harmony default export */ __webpack_exports__["default"] = (JinBi);

/***/ }),

/***/ 3:
/*!**********************************************!*\
  !*** multi ./src/pages/jinbi/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\IdeaProjects\xiaochengxu\chengyu\src\pages\jinbi\index.entry.js */"./src/pages/jinbi/index.entry.js");


/***/ })

},[[3,"runtime","remax-vendors","remax-styles"]]]);