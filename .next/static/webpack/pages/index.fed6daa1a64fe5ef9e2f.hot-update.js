webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideSrawer/SideDrawer.js":
/*!*********************************************!*\
  !*** ./components/SideSrawer/SideDrawer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SideDrawer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/SideDrawer.module.css */ \"./styles/SideDrawer.module.css\");\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/SideSrawer/SideDrawer.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar SideDrawer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SideDrawer, _Component);\n\n  var _super = _createSuper(SideDrawer);\n\n  function SideDrawer() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, SideDrawer);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      active: true,\n      navigation_items: [{\n        icon: \"icons/home.png\",\n        title: \"Home\"\n      }, {\n        icon: \"icons/folder.png\",\n        title: \"My projects\"\n      }, {\n        icon: \"icons/user.png\",\n        title: \"About me\"\n      }, {\n        icon: \"icons/message.png\",\n        title: \"Contact\"\n      }],\n      social_items: [{\n        icon: \"fab fa-github fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-twitter fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-linkedin fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fas fa-envelope fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fas fa-file fa-2x\",\n        link: \"Contact\"\n      }]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SideDrawer, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          navigation_items = _this$state.navigation_items,\n          social_items = _this$state.social_items;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n        className: this.props.active ? _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.side_drawer_open : _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.side_drawer_close,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.toggler,\n          onClick: this.props.toggleSidebar,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: \"fas fa-bars fa-2x\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.logo,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"me.JPG\",\n            alt: \"me\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.my_name,\n              children: \"Mkrtich Sargsyan\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.position,\n              children: \"Full Stack Developer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.navigation,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: navigation_items.map(function (item) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_scroll__WEBPACK_IMPORTED_MODULE_9__[\"Link\"], {\n                  activeClass: \"active\",\n                  to: \"\",\n                  spy: true,\n                  smooth: true,\n                  offset: -70,\n                  duration: 500,\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                    href: \"#\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      src: item.icon,\n                      alt: \"\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 82,\n                      columnNumber: 21\n                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                      className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,\n                      children: item.title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 21\n                    }, _this2)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 81,\n                    columnNumber: 19\n                  }, _this2)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 17\n                }, _this2)\n              }, item.title, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 15\n              }, _this2);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.social,\n          children: social_items.map(function (item, i) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"#\",\n                target: \"_blank\",\n                \"data-original-title\": \"Linkedin\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                  className: item.icon\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 94,\n                  columnNumber: 17\n                }, _this2)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 15\n              }, _this2)\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 13\n            }, _this2);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return SideDrawer;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlU3Jhd2VyL1NpZGVEcmF3ZXIuanM/OWQzMiJdLCJuYW1lcyI6WyJTaWRlRHJhd2VyIiwiYWN0aXZlIiwibmF2aWdhdGlvbl9pdGVtcyIsImljb24iLCJ0aXRsZSIsInNvY2lhbF9pdGVtcyIsImxpbmsiLCJzdGF0ZSIsInByb3BzIiwic3R5bGVzIiwic2lkZV9kcmF3ZXJfb3BlbiIsInNpZGVfZHJhd2VyX2Nsb3NlIiwidG9nZ2xlciIsInRvZ2dsZVNpZGViYXIiLCJsb2dvIiwibXlfbmFtZSIsInBvc2l0aW9uIiwibmF2aWdhdGlvbiIsIm1hcCIsIml0ZW0iLCJzb2NpYWwiLCJpIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDWDtBQUNOQyxZQUFNLEVBQUUsSUFERjtBQUVOQyxzQkFBZ0IsRUFBRSxDQUNoQjtBQUNFQyxZQUFJLEVBQUUsZ0JBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FEZ0IsRUFLaEI7QUFDRUQsWUFBSSxFQUFFLGtCQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BTGdCLEVBU2hCO0FBQ0VELFlBQUksRUFBRSxnQkFEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQVRnQixFQWFoQjtBQUNFRCxZQUFJLEVBQUUsbUJBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FiZ0IsQ0FGWjtBQW9CTkMsa0JBQVksRUFBRSxDQUNaO0FBQ0VGLFlBQUksRUFBRSxxQkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQURZLEVBS1o7QUFDRUgsWUFBSSxFQUFFLHNCQURSO0FBRUVHLFlBQUksRUFBRTtBQUZSLE9BTFksRUFTWjtBQUNFSCxZQUFJLEVBQUUsdUJBRFI7QUFFRUcsWUFBSSxFQUFFO0FBRlIsT0FUWSxFQWFaO0FBQ0VILFlBQUksRUFBRSx1QkFEUjtB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QUE7QUFBQTtBQUFBO0FBQUEsZ0JBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBZ0REOzs7O0VBL0ZxQ0MsK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVTcmF3ZXIvU2lkZURyYXdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvU2lkZURyYXdlci5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVEcmF3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgbmF2aWdhdGlvbl9pdGVtczogW1xuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL2hvbWUucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvZm9sZGVyLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJNeSBwcm9qZWN0c1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy91c2VyLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJBYm91dCBtZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy9tZXNzYWdlLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc29jaWFsX2l0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFiIGZhLWdpdGh1YiBmYS0yeFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFiIGZhLXR3aXR0ZXIgZmEtMnhcIixcbiAgICAgICAgbGluazogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImZhYiBmYS1saW5rZWRpbiBmYS0yeFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFzIGZhLWVudmVsb3BlIGZhLTJ4XCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYXMgZmEtZmlsZSBmYS0yeFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZpZ2F0aW9uX2l0ZW1zLCBzb2NpYWxfaXRlbXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhc2lkZVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlID8gc3R5bGVzLnNpZGVfZHJhd2VyX29wZW4gOiBzdHlsZXMuc2lkZV9kcmF3ZXJfY2xvc2VcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZXJ9IG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlU2lkZWJhcn0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnMgZmEtMnhcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgIDxpbWcgc3JjPVwibWUuSlBHXCIgYWx0PVwibWVcIiAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubXlfbmFtZX0+TWtydGljaCBTYXJnc3lhbjwvaDE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb3NpdGlvbn0+RnVsbCBTdGFjayBEZXZlbG9wZXI8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtuYXZpZ2F0aW9uX2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLnRpdGxlfT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgdG89XCJcIlxuICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmljb259IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxuICAgICAgICAgIHtzb2NpYWxfaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiTGlua2VkaW5cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9hc2lkZT5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SideSrawer/SideDrawer.js\n");

/***/ })

})