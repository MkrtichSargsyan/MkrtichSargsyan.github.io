webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideSrawer/SideDrawer.js":
/*!*********************************************!*\
  !*** ./components/SideSrawer/SideDrawer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SideDrawer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/SideDrawer.module.css */ \"./styles/SideDrawer.module.css\");\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/SideSrawer/SideDrawer.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar SideDrawer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SideDrawer, _Component);\n\n  var _super = _createSuper(SideDrawer);\n\n  function SideDrawer() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, SideDrawer);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      navigation_items: [{\n        icon: \"icons/home.png\",\n        title: \"Home\"\n      }, {\n        icon: \"icons/folder.png\",\n        title: \"My projects\"\n      }, {\n        icon: \"icons/user.png\",\n        title: \"About me\"\n      }, {\n        icon: \"icons/message.png\",\n        title: \"Contact\"\n      }],\n      social_itmes: [{\n        icon: \"fab fa-github fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-twitter\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-linkedin\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-gmail\",\n        link: \"Contact\"\n      }, {\n        icon: \"fas fa-envelope\",\n        link: \"Contact\"\n      }]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SideDrawer, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          navigation_items = _this$state.navigation_items,\n          social_itmes = _this$state.social_itmes;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.side_drawer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.logo,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"me.JPG\",\n            alt: \"me\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.my_name,\n              children: \"Mkrtich Sargsyan\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.position,\n              children: \"Full Stack Developer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navigation,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: navigation_items.map(function (item) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: \"#\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    src: item.icon,\n                    alt: \"\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 64,\n                    columnNumber: 19\n                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,\n                    children: item.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 65,\n                    columnNumber: 19\n                  }, _this2)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 17\n                }, _this2)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 15\n              }, _this2);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.social,\n          children: social_itmes.map(function (item) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                target: \"_blank\",\n                \"data-original-title\": \"Linkedin\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                  className: item.icon\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 17\n                }, _this2)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 15\n              }, _this2)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 13\n            }, _this2);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return SideDrawer;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlU3Jhd2VyL1NpZGVEcmF3ZXIuanM/OWQzMiJdLCJuYW1lcyI6WyJTaWRlRHJhd2VyIiwibmF2aWdhdGlvbl9pdGVtcyIsImljb24iLCJ0aXRsZSIsInNvY2lhbF9pdG1lcyIsImxpbmsiLCJzdGF0ZSIsInN0eWxlcyIsInNpZGVfZHJhd2VyIiwibG9nbyIsIm15X25hbWUiLCJwb3NpdGlvbiIsIm5hdmlnYXRpb24iLCJtYXAiLCJpdGVtIiwic29jaWFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ05DLHNCQUFnQixFQUFFLENBQ2hCO0FBQ0VDLFlBQUksRUFBRSxnQkFEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQURnQixFQUtoQjtBQUNFRCxZQUFJLEVBQUUsa0JBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FMZ0IsRUFTaEI7QUFDRUQsWUFBSSxFQUFFLGdCQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BVGdCLEVBYWhCO0FBQ0VELFlBQUksRUFBRSxtQkFEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQWJnQixDQURaO0FBbUJOQyxrQkFBWSxFQUFFLENBQ1o7QUFDRUYsWUFBSSxFQUFFLHFCQURSO0FBRUVHLFlBQUksRUFBRTtBQUZSLE9BRFksRUFLWjtBQUNFSCxZQUFJLEVBQUUsZ0JBRFI7QUFFRUcsWUFBSSxFQUFFO0FBRlIsT0FMWSxFQVNaO0FBQ0VILFlBQUksRUFBRSxpQkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQVRZLEVBYVo7QUFDRUgsWUFBSSxFQUFFLGNBRFI7QUFFRUcsWUFBSSxFQUFFO0FBRlIsT0FiWSxFQWlCWjtBQUNFSCxZQUFJLEVBQUUsaUJBRFI7QUFFRUcsWUFBSSxFQUFFO0FBRlIsT0FqQlk7QUFuQlIsSzs7Ozs7Ozs2QkEyQ0M7QUFBQTs7QUFBQSx3QkFDb0MsS0FBS0MsS0FEekM7QUFBQSxVQUNDTCxnQkFERCxlQUNDQSxnQkFERDtBQUFBLFVBQ21CRyxZQURuQixlQUNtQkEsWUFEbkI7QUFFUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUVHLG9FQUFNLENBQUNDLFdBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRCxvRUFBTSxDQUFDRSxJQUF2QjtBQUFBLGtDQUNFO0FBQUssZUFBRyxFQUFDLFFBQVQ7QUFBa0IsZUFBRyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBRUYsb0VBQU0sQ0FBQ0csT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFNLHVCQUFTLEVBQUVILG9FQUFNLENBQUNJLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFLLG1CQUFTLEVBQUVKLG9FQUFNLENBQUNLLFVBQXZCO0FBQUEsaUNBQ0U7QUFBQSxzQkFDR1gsZ0JBQWdCLENBQUNZLEdBQWpCLENBQXFCLFVBQUNDLElBQUQ7QUFBQSxrQ0FDcEI7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBLDBDQUNFO0FBQUssdUJBQUcsRUFBRUEsSUFBSSxDQUFDWixJQUFmO0FBQXFCLHVCQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFO0FBQU0sNkJBQVMsRUFBRUssb0VBQU0sQ0FBQ0osS0FBeEI7QUFBQSw4QkFBZ0NXLElBQUksQ0FBQ1g7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURvQjtBQUFBLGFBQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFvQkU7QUFBSSxtQkFBUyxFQUFFSSxvRUFBTSxDQUFDUSxNQUF0QjtBQUFBLG9CQUNHWCxZQUFZLENBQUNTLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLGdDQUNoQjtBQUFBLHFDQUNFO0FBQ0Usb0JBQUksRUFBQyxHQURQO0FBRUUsc0JBQU0sRUFBQyxRQUZUO0FBR0UsdUNBQW9CLFVBSHRCO0FBQUEsdUNBS0U7QUFBRywyQkFBUyxFQUFFQSxJQUFJLENBQUNaO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEZ0I7QUFBQSxXQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBb0NEOzs7O0VBbEZxQ2MsK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVTcmF3ZXIvU2lkZURyYXdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9TaWRlRHJhd2VyLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZURyYXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG5hdmlnYXRpb25faXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy9ob21lLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL2ZvbGRlci5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiTXkgcHJvamVjdHNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvdXNlci5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiQWJvdXQgbWVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvbWVzc2FnZS5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNvY2lhbF9pdG1lczogW1xuICAgICAge1xuICAgICAgICBpY29uOiBcImZhYiBmYS1naXRodWIgZmEtMnhcIixcbiAgICAgICAgbGluazogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImZhYiBmYS10d2l0dGVyXCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYWIgZmEtbGlua2VkaW5cIixcbiAgICAgICAgbGluazogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImZhYiBmYS1nbWFpbFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFzIGZhLWVudmVsb3BlXCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdmlnYXRpb25faXRlbXMsIHNvY2lhbF9pdG1lcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlX2RyYXdlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgPGltZyBzcmM9XCJtZS5KUEdcIiBhbHQ9XCJtZVwiIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5teV9uYW1lfT5Na3J0aWNoIFNhcmdzeWFuPC9oMT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvc2l0aW9ufT5GdWxsIFN0YWNrIERldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbn0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge25hdmlnYXRpb25faXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaWNvbn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxuICAgICAgICAgIHtzb2NpYWxfaXRtZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCJMaW5rZWRpblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SideSrawer/SideDrawer.js\n");

/***/ })

})