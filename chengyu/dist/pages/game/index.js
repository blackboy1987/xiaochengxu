require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/game/index"],{

/***/ "./src/pages/game/index.css":
/*!**********************************!*\
  !*** ./src/pages/game/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/game/index.entry.js":
/*!***************************************!*\
  !*** ./src/pages/game/index.entry.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/game/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/game/index'));

/***/ }),

/***/ "./src/pages/game/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/game/index.tsx ***!
  \**********************************/
/*! exports provided: Game, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/pages/game/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CustomAd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CustomAd */ "./src/components/CustomAd/index.tsx");
/* harmony import */ var _util_wxUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/util/wxUtils */ "./src/util/wxUtils.ts");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/util/constants */ "./src/util/constants.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// @ts-ignore






var siteConfig = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])("siteInfo");
var adv = {
  status: true,
  data: []
};
var whongbao = {
  openStatus: true,
  balance: 2.2
};
var Game = function Game() {
  var _siteConfig$ads;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      wtanchuguanka = _useState2[0],
      setWtanchuguanka = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      wtanchuhongbao = _useState4[0],
      setWtanchuhongbao = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_util_constants__WEBPACK_IMPORTED_MODULE_7__["defaultUserInfo"]),
      _useState6 = _slicedToArray(_useState5, 2),
      userInfo = _useState6[0],
      setUserInfo = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      redPackageConfig = _useState8[0],
      setRedPackageConfig = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      openStatus = _useState10[0],
      setOpenStatus = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState12 = _slicedToArray(_useState11, 2),
      balance = _useState12[0],
      setBalance = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    level: 0,
    answers: [],
    words: [],
    position: 0
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      idiom = _useState14[0],
      setIdiom = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState16 = _slicedToArray(_useState15, 2),
      text = _useState16[0],
      setText = _useState16[1];

  var get = function get(level) {
    Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["post"])("chengyu/get", {
      level: level ? level : ''
    }, function (data) {
      setText('');
      setIdiom(data);
    });
  };

  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])("onLoad", function () {
    get();
    Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["getUserInfo"])(function (data) {
      setUserInfo(data);
    });
    var newRedPackage = {};
    var redPackage = siteConfig.config.redPackage || '';
    var redPackageStr = redPackage.split(";");

    for (var i = 0; i < redPackageStr.length; i++) {
      var redPackageStrs = redPackageStr[i].split("_");

      if (redPackageStrs.length == 2) {
        var min = redPackageStrs[1];
        var max = redPackageStrs[1];
        newRedPackage["".concat(redPackageStrs[0])] = {
          min: parseFloat(min),
          max: parseFloat(max)
        };
      } else if (redPackageStrs.length == 3) {
        var _min = redPackageStrs[1];
        var _max = redPackageStrs[2];
        newRedPackage["".concat(redPackageStrs[0])] = {
          min: parseFloat(_min),
          max: parseFloat(_max)
        };
      }
    }

    setRedPackageConfig(newRedPackage);
  });

  var judge = function judge(result) {
    setText(result);
    /**
     * 1. 判断金币够不够，不够提示体力不足，够进入第2步
     * 2. 判断回答正不正确。
     */

    if (userInfo.point >= siteConfig.config.levelPoint) {
      var memo = '';
      var type = 0;
      var continuousCount = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])('continuous') || 0;

      if (result === idiom.words[idiom.position]) {
        // 回答正确。写入连对数据
        memo = '回答正确';
        type = 1;
        continuousCount += 1; // 这里需要判断是弹出提示框还是红包框

        var level = idiom.level;
        console.log(redPackageConfig, redPackageConfig["".concat(level)], level);

        if (redPackageConfig) {
          var redPackage = redPackageConfig["".concat(level)];

          if (redPackage) {
            setWtanchuhongbao(true);
            setWtanchuguanka(false);
            Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
              Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["post"])("chengyu/redPackage", {
                level: level
              }, function (data) {
                if (data.code === 0) {
                  // 红包开启成功
                  setBalance(data.data);
                } else {
                  // 红包开启失败
                  setBalance(0);
                }
              });
            });
          } else {
            setWtanchuhongbao(false);
            setWtanchuguanka(true);
          }
        } else {
          setWtanchuhongbao(false);
          setWtanchuguanka(true);
        }
      } else {
        // 回答错误，清空连队数据
        memo = '回答错误';
        continuousCount = 0;
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showToast"])({
          title: '回答错误',
          image: '/images/icon/sad.png'
        }).then();
      }

      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["setStorageSync"])('continuousCount', continuousCount); // 扣减积分

      Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["post"])("chengyu/discount", {
        level: idiom.level,
        memo: memo,
        type: type
      }, function (data) {
        // 不管回答正确还是错误，直接跳转到下一关
        Object(_util_wxUtils__WEBPACK_IMPORTED_MODULE_6__["getUserInfo"])(function (data) {
          return setUserInfo(data);
        }); // 下一关

        get();
      });
    } else {
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showModal"])({
        title: "温馨提示",
        content: "您的体力已经不足，点击按钮获取更多体力",
        confirmText: "去获取",
        confirmColor: "#fd5757"
      }).then(function (res) {
        console.log("res", res);

        if (res.confirm) {
          Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
            url: "/pages/jinbi/index"
          }).then();
        }
      });
    }
  };
  /**
   * 回答正确进入下一关
   */


  var next = function next() {
    setWtanchuguanka(false);
  };
  /**
   * 分享
   */


  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onShareAppMessage', function () {
    return {
      title: '[微信红包] 答题兑现金，分分钟变土豪',
      path: "/pages/index/index?parentId=" + userInfo.id,
      imageUrl: 'tu'
    };
  });

  var openRedPackage = function openRedPackage() {
    setOpenStatus(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "game"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
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
  }, "\u7EA2\u5305\u4F59\u989D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("view", {
    className: "menu-text menu-money-num"
  }, userInfo.balance)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-btn menu-btn-money"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "menu-btn-money menu-btn-text"
  }, "\u5151\u6362")))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wchengyu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "title"
  }, "\u7B2C ", idiom.level, " \u5173"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "chenyubox"
  }, (idiom.words || []).map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "wchengyuitem",
      key: index,
      __key: index
    }, index === idiom.position ? '?' : item);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wxuanxiang"
  }, (idiom.answers || []).map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('wopt', text === item ? 'werr' : ''),
      key: index,
      onClick: function onClick() {
        judge(item);
      },
      __key: index
    }, item);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wshare"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "wbangzhu",
    openType: "share"
  }, "\u6C42\u52A9\u597D\u53CB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "wad"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_CustomAd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    adIds: (_siteConfig$ads = siteConfig.ads) === null || _siteConfig$ads === void 0 ? void 0 : _siteConfig$ads.game
  }))), wtanchuguanka ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wbox",
    style: {
      zIndex: 1000
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wsuccess"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wsuccessbtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverImage"], {
    className: "img",
    src: "/images/icon/detail/correct.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wtitle"
  }, "\u606D\u559C\u95EF\u5173\u6210\u529F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wcon"
  }, "\u8FDE\u7EED\u7B54\u9898\u6709\u673A\u4F1A\u83B7\u5F97\u7EA2\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    onClick: function onClick() {
      return next();
    },
    className: "wbtn"
  }, "\u8FDB\u5165\u4E0B\u4E00\u5173")), adv.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "links"
  }, adv.data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
      key: item.appid,
      __key: item.appid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverImage"], {
      className: "avatar",
      src: item.image
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
      className: "name"
    }, item.name));
  })) : null) : null, wtanchuhongbao ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wbox",
    style: {
      zIndex: 10000
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "whongbao"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverImage"], {
    className: "wbgimg",
    src: "/images/icon/redbag.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wtitle"
  }, "\u606D\u559C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wcon"
  }, "\u60A8\u83B7\u5F97\u4E00\u4E2A\u73B0\u91D1\u7EA2\u5305"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wopenhongbao"
  }, openStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, balance > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wshowhongbao"
  }, balance, " \u5143") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wshowhongbao"
  }, "\u7EA2\u5305\u5DF2\u74DC\u5206\u5B8C\u6BD5")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverImage"], {
    onClick: function onClick() {
      openRedPackage();
    },
    className: "whongbaoimg",
    src: "/images/icon/open.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wmiaoshu"
  }, "\u8BE5\u7EA2\u5305\u4EC5\u53EF\u7528\u4E8E\u5151\u6362\u5546\u54C1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverView"], {
    className: "wclose",
    onClick: function onClick() {
      return setWtanchuhongbao(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_2__["CoverImage"], {
    className: "wcloseimg",
    src: "/images/icon/detail/poster/close.png"
  }))) : null);
};
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ 2:
/*!*********************************************!*\
  !*** multi ./src/pages/game/index.entry.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\IdeaProjects\xiaochengxu\chengyu\src\pages\game\index.entry.js */"./src/pages/game/index.entry.js");


/***/ })

},[[2,"runtime","remax-vendors","remax-styles"]]]);