webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SideSrawer/SideDrawer.js":
/*!*********************************************!*\
  !*** ./components/SideSrawer/SideDrawer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SideDrawer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/SideDrawer.module.css */ \"./styles/SideDrawer.module.css\");\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/SideSrawer/SideDrawer.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar SideDrawer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(SideDrawer, _Component);\n\n  var _super = _createSuper(SideDrawer);\n\n  function SideDrawer() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, SideDrawer);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      navigation_items: [{\n        icon: \"icons/home.png\",\n        title: \"Home\"\n      }, {\n        icon: \"icons/folder.png\",\n        title: \"My projects\"\n      }, {\n        icon: \"icons/user.png\",\n        title: \"About me\"\n      }, {\n        icon: \"icons/message.png\",\n        title: \"Contact\"\n      }],\n      social_itmes: [{\n        icon: \"fa-github\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-twitter\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-linkedin\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-gmail\",\n        link: \"Contact\"\n      }, {\n        icon: \"fa envelope\",\n        link: \"Contact\"\n      }]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SideDrawer, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          navigation_items = _this$state.navigation_items,\n          social_itmes = _this$state.social_itmes;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.side_drawer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.logo,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"me.JPG\",\n            alt: \"me\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n              className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.my_name,\n              children: \"Mkrtich Sargsyan\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.position,\n              children: \"Full Stack Developer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navigation,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: navigation_items.map(function (item) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: \"#\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    src: item.icon,\n                    alt: \"\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 64,\n                    columnNumber: 19\n                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,\n                    children: item.title\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 65,\n                    columnNumber: 19\n                  }, _this2)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 63,\n                  columnNumber: 17\n                }, _this2)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 15\n              }, _this2);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.social,\n          children: social_itmes.map(function (item) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                \"data-toggle\": \"tooltip\",\n                href: \"https://www.linkedin.com/in/raymondoluochke/\",\n                target: \"_blank\",\n                title: \"\",\n                \"data-original-title\": \"Linkedin\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                  \"class\": \"fab fa-linkedin\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 17\n                }, _this2)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 15\n              }, _this2)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 13\n            }, _this2);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return SideDrawer;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlU3Jhd2VyL1NpZGVEcmF3ZXIuanM/OWQzMiJdLCJuYW1lcyI6WyJTaWRlRHJhd2VyIiwibmF2aWdhdGlvbl9pdGVtcyIsImljb24iLCJ0aXRsZSIsInNvY2lhbF9pdG1lcyIsImxpbmsiLCJzdGF0ZSIsInN0eWxlcyIsInNpZGVfZHJhd2VyIiwibG9nbyIsIm15X25hbWUiLCJwb3NpdGlvbiIsIm5hdmlnYXRpb24iLCJtYXAiLCJpdGVtIiwic29jaWFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ05DLHNCQUFnQixFQUFFLENBQ2hCO0FBQ0VDLFlBQUksRUFBRSxnQkFEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQURnQixFQUtoQjtBQUNFRCxZQUFJLEVBQUUsa0JBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FMZ0IsRUFTaEI7QUFDRUQsWUFBSSxFQUFFLGdCQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BVGdCLEVBYWhCO0FBQ0VELFlBQUksRUFBRSxtQkFEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQWJnQixDQURaO0FBbUJOQyxrQkFBWSxFQUFFLENBQ1o7QUFDRUYsWUFBSSxFQUFFLFdBRFI7QUFFRUcsWUFBSSxFQUFFO0FBRlIsT0FEWSxFQUtaO0FBQ0VILFlBQUksRUFBRSxnQkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQUxZLEVBU1o7QUFDRUgsWUFBSSxFQUFFLGlCQURSO0FBRUVHLFlBQUksRUFBRTtBQUZSLE9BVFksRUFhWjtBQUNFSCxZQUFJLEVBQUUsY0FEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQWJZLEVBaUJaO0FBQ0VILFlBQUksRUFBRSxhQURSO0FBRUVHLFlBQUksRUFBRTtBQUZSLE9BakJZO0FBbkJSLEs7Ozs7Ozs7NkJBMkNDO0FBQUE7O0FBQUEsd0JBQ29DLEtBQUtDLEtBRHpDO0FBQUEsVUFDQ0wsZ0JBREQsZUFDQ0EsZ0JBREQ7QUFBQSxVQUNtQkcsWUFEbkIsZUFDbUJBLFlBRG5CO0FBRVAsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFRyxvRUFBTSxDQUFDQyxXQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsSUFBdkI7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsRUFBQyxRQUFUO0FBQWtCLGVBQUcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUVGLG9FQUFNLENBQUNHLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTSx1QkFBUyxFQUFFSCxvRUFBTSxDQUFDSSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBUUU7QUFBSyxtQkFBUyxFQUFFSixvRUFBTSxDQUFDSyxVQUF2QjtBQUFBLGlDQUNFO0FBQUEsc0JBQ0dYLGdCQUFnQixDQUFDWSxHQUFqQixDQUFxQixVQUFDQyxJQUFEO0FBQUEsa0NBQ3BCO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBQSwwQ0FDRTtBQUFLLHVCQUFHLEVBQUVBLElBQUksQ0FBQ1osSUFBZjtBQUFxQix1QkFBRyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFFRTtBQUFNLDZCQUFTLEVBQUVLLG9FQUFNLENBQUNKLEtBQXhCO0FBQUEsOEJBQWdDVyxJQUFJLENBQUNYO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEb0I7QUFBQSxhQUFyQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLGVBb0JFO0FBQUksbUJBQVMsRUFBRUksb0VBQU0sQ0FBQ1EsTUFBdEI7QUFBQSxvQkFDR1gsWUFBWSxDQUFDUyxHQUFiLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxnQ0FDaEI7QUFBQSxxQ0FDRTtBQUNFLCtCQUFZLFNBRGQ7QUFFRSxvQkFBSSxFQUFDLDhDQUZQO0FBR0Usc0JBQU0sRUFBQyxRQUhUO0FBSUUscUJBQUssRUFBQyxFQUpSO0FBS0UsdUNBQW9CLFVBTHRCO0FBQUEsdUNBT0U7QUFBRywyQkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEZ0I7QUFBQSxXQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBc0NEOzs7O0VBcEZxQ0UsK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVTcmF3ZXIvU2lkZURyYXdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9TaWRlRHJhd2VyLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZURyYXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG5hdmlnYXRpb25faXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy9ob21lLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL2ZvbGRlci5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiTXkgcHJvamVjdHNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvdXNlci5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiQWJvdXQgbWVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvbWVzc2FnZS5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNvY2lhbF9pdG1lczogW1xuICAgICAge1xuICAgICAgICBpY29uOiBcImZhLWdpdGh1YlwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFiIGZhLXR3aXR0ZXJcIixcbiAgICAgICAgbGluazogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImZhYiBmYS1saW5rZWRpblwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFiIGZhLWdtYWlsXCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYSBlbnZlbG9wZVwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZpZ2F0aW9uX2l0ZW1zLCBzb2NpYWxfaXRtZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZV9kcmF3ZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgIDxpbWcgc3JjPVwibWUuSlBHXCIgYWx0PVwibWVcIiAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubXlfbmFtZX0+TWtydGljaCBTYXJnc3lhbjwvaDE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb3NpdGlvbn0+RnVsbCBTdGFjayBEZXZlbG9wZXI8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtuYXZpZ2F0aW9uX2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmljb259IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfT5cbiAgICAgICAgICB7c29jaWFsX2l0bWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yYXltb25kb2x1b2Noa2UvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiTGlua2VkaW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SideSrawer/SideDrawer.js\n");

/***/ })

})