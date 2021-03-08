require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

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
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_wxUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/wxUtils */ "./src/util/wxUtils.ts");
/* harmony import */ var _components_CustomAd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CustomAd */ "./src/components/CustomAd/index.tsx");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/util/constants */ "./src/util/constants.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var rewardList = [{
  id: 1,
  name: '哈哈',
  balance: 1.23
}, {
  id: 2,
  name: '哈哈2',
  balance: 123
}, {
  id: 3,
  name: '哈哈3',
  balance: 12.35
}];
var adv = {
  status: true,
  data: [{
    id: 1,
    image: 'https://alaolu.cn/content/templates/meta/Static/images/logo.png',
    name: '哈哈'
  }, {
    id: 2,
    image: 'https://alaolu.cn/content/templates/meta/Static/images/logo.png',
    name: '哈哈'
  }, {
    id: 3,
    image: 'https://alaolu.cn/content/templates/meta/Static/images/logo.png',
    name: '哈哈'
  }, {
    id: 4,
    image: 'https://alaolu.cn/content/templates/meta/Static/images/logo.png',
    name: '哈哈'
  }, {
    id: 5,
    image: 'https://alaolu.cn/content/templates/meta/Static/images/logo.png',
    name: '哈哈'
  }, {
    id: 6,
    image: 'https://alaolu.cn/content/templates/meta/Static/images/logo.png',
    name: '哈哈'
  }, {
    id: 7,
    image: 'https://alaolu.cn/content/templates/meta/Static/images/logo.png',
    name: '哈哈'
  }]
};
var setting = {
  gonggao: {
    status: true,
    info: '我是公告内容我是公告内容我是公告内容我是公告内容我是公告内容我是公告内容我是公告内容我是公告内容我是公告内容我是公告内容我是公告内容'
  }
};
var gonggao = false;
var qiandao = false;
var rewardedVideoAd;
var interstitialAd;
var timer;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _siteConfig$ads;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_util_constants__WEBPACK_IMPORTED_MODULE_6__["defaultUserInfo"]),
      _useState2 = _slicedToArray(_useState, 2),
      userInfo = _useState2[0],
      setUserInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_util_constants__WEBPACK_IMPORTED_MODULE_6__["defaultSiteConfig"]),
      _useState4 = _slicedToArray(_useState3, 2),
      siteConfig = _useState4[0],
      setSiteConfig = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      guize = _useState6[0],
      setGuize = _useState6[1];

  var interstitialAdCreate = function interstitialAdCreate(adUnitId) {
    if (!interstitialAd) {
      interstitialAd = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["createInterstitialAd"])({
        adUnitId: adUnitId
      });
      interstitialAd.onLoad(function (e) {
        console.log("onLoad", e);
      });
      interstitialAd.onClose(function (e) {
        console.log("onClose", e);
      });
      interstitialAd.onError(function (e) {
        console.log("onError", e);
      });
    }
  };

  var interstitialAdShow = function interstitialAdShow() {
    if (interstitialAd) {
      interstitialAd.show().then(function (e) {
        console.log("show", e);
      });
    }
  };

  var rewardedVideoAdCreate = function rewardedVideoAdCreate(adUnitId) {
    if (!rewardedVideoAd) {
      rewardedVideoAd = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["createRewardedVideoAd"])({
        adUnitId: adUnitId
      });
      rewardedVideoAd.onLoad(function (e) {
        console.log("onLoad", e);
      });
      rewardedVideoAd.onClose(function (e) {
        console.log("onClose", e);
      });
      rewardedVideoAd.onError(function (e) {
        console.log("onError", e);
      });
    }
  };

  var rewardedVideoAdShow = function rewardedVideoAdShow() {
    console.log("rewardedVideoAd", rewardedVideoAd);

    if (rewardedVideoAd) {
      rewardedVideoAd.show().catch(function () {
        rewardedVideoAd.load().then(function () {
          return rewardedVideoAd.show();
        }).catch(function (err) {
          console.log('激励视频 广告显示失败', err);
        });
      });
    }
  };

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])("onLoad", function () {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showLoading"])({
      title: '数据初始化中...'
    }).then();
    Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_4__["siteInfo"])(function (data) {
      var _data$ads, _data$ads2;

      setSiteConfig(data);

      if ((_data$ads = data.ads) !== null && _data$ads !== void 0 && _data$ads.index.interstitialAdId) {
        interstitialAdCreate(data.ads.index.interstitialAdId);
      }

      if ((_data$ads2 = data.ads) !== null && _data$ads2 !== void 0 && _data$ads2.index.rewardedVideoAdId) {
        rewardedVideoAdCreate(data.ads.index.rewardedVideoAdId);
      }
    });
    Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_4__["userLogin"])(function (data) {
      setUserInfo(data.userInfo);
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["hideLoading"])().then();
    });
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onShow', function () {
    timer = setTimeout(function () {
      interstitialAdShow();
    }, 15e3);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "w"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "uinfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["OpenData"], {
    lang: "zh_CN",
    type: "userAvatarUrl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "detail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "simple"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "nickname"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["OpenData"], {
    lang: "zh_CN",
    type: "userNickName"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "level"
  }, "\u5DF2\u95EF\u5173\uFF1A ", userInfo.level, " \u9053"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wwenti",
    onClick: function onClick() {
      return Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
        url: '/pages/help/index'
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, "\u5E2E\u52A9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "rule",
    onClick: function onClick() {
      return setGuize(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "\u89C4\u5219")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "broadbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "broadcast"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "icon",
    src: "/images/icon/gg.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "itemlist"
  }, rewardList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "item",
      key: item.id,
      __key: item.id
    }, "\u606D\u559C ", item.name, " \u6210\u529F\u5151\u6362 ", item.balance, " \u5143\u7EA2\u5305");
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "ranking"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    className: "ranking-icon",
    src: "/images/icon/index/rank.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "ranking-text",
    onClick: function onClick() {
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
        url: "/pages/rank/index"
      }).then();
    }
  }, "\u6392\u884C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menus"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu menu-power"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-text menu-power-title"
  }, "\u95EF\u5173\u4F53\u529B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-text menu-power-num"
  }, userInfo.point)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-btn menu-btn-power"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-btn-text"
  }, "\u514D\u8D39\u9886\u53D6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-redbag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/images/icon/index/redbagindex.png"
  })))), siteConfig.status === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu menu-money"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-text menu-money-title"
  }, "\u7EA2\u5305\u4F59\u989D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-text menu-money-num"
  }, userInfo.balance)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-btn menu-btn-money"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-btn-money menu-btn-text"
  }, "\u5151\u6362")))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wchuangguan",
    onClick: function onClick() {
      clearTimeout(timer);
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
        url: '/pages/game/index'
      }).then();
    }
  }, "\u5F00\u59CB\u731C\u6210\u8BED"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_CustomAd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    adIds: (_siteConfig$ads = siteConfig.ads) === null || _siteConfig$ads === void 0 ? void 0 : _siteConfig$ads.index
  }), adv.status && adv.data.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, adv.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["ScrollView"], {
    scrollX: true,
    className: "apps"
  }, adv.data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "app",
      key: item.id,
      __key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      className: "app-icon",
      src: item.image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "app-title"
    }, item.name));
  })) : null) : null), guize ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wclose",
    onClick: function onClick() {
      return setGuize(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wguize"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wboxtitle"
  }, "\u89C4\u5219"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wcon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, "1.\u6210\u8BED\u7B54\u9898\u6BCF\u7B54\u4E00\u9898\uFF0C\u6D88\u8017", siteConfig.config.levelPoint, "\u4F53\u529B\uFF0C\u83B7\u53D6\u4F53\u529B\u53EF\u5230\u514D\u8D39\u4F53\u529B\u83B7\u53D6\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], null, "2.\u7B54\u9898\u968F\u673A\u5173\u5361\u53EF\u83B7\u5F97\u7EA2\u5305\u5956\u52B1\uFF0C\u7EA2\u5305\u53EF\u5151\u6362\u7269\u54C1\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wbtn",
    onClick: function onClick() {
      return setGuize(false);
    }
  }, "\u6211\u77E5\u9053\u4E86"))) : null, qiandao ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wbtn"
  }, "\u8FD4\u56DE\u7B54\u9898")) : null, setting.gonggao.status && gonggao ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wclose"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wguize"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wboxtitle"
  }, "\u516C\u544A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wcon"
  }, setting.gonggao.info), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wbtn"
  }, "\u6211\u77E5\u9053\u4E86"))) : null);
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/index/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\IdeaProjects\xiaochengxu\chengyu\src\pages\index\index.entry.js */"./src/pages/index/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors","remax-styles"]]]);