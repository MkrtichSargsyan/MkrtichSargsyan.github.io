webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main_content/Main.js":
/*!*****************************************!*\
  !*** ./components/main_content/Main.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _main_content_Showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../main_content/Showcase */ \"./components/main_content/Showcase.js\");\n/* harmony import */ var _main_content_MyProjects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../main_content/MyProjects */ \"./components/main_content/MyProjects.js\");\n/* harmony import */ var _main_content_AboutMe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main_content/AboutMe */ \"./components/main_content/AboutMe.js\");\n/* harmony import */ var _main_content_Contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../main_content/Contact */ \"./components/main_content/Contact.js\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styles/Main.module.css */ \"./styles/Main.module.css\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Footer */ \"./components/main_content/Footer.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/main_content/Main.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar Main = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Main, _Component);\n\n  var _super = _createSuper(Main);\n\n  function Main() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Main);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      width: _this.props.width\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Main, [{\n    key: \"checkSize\",\n    value: function checkSize() {\n      this.setState({\n        width: this.props.width\n      });\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      if (this.props.width != prevProps.width) {\n        this.checkSize();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var width = this.state.width;\n      var active = this.props.active;\n      var style = '';\n\n      if (width == 'desktop') {\n        style = active ? 'ml' : 'none';\n      }\n\n      console.log(style);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: style == 'ml' ? _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.ml : _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.none,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_content_Showcase__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_content_MyProjects__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_content_AboutMe__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_content_Contact__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Footer__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluX2NvbnRlbnQvTWFpbi5qcz80Nzk0Il0sIm5hbWVzIjpbIk1haW4iLCJ3aWR0aCIsInByb3BzIiwic2V0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJjaGVja1NpemUiLCJzdGF0ZSIsImFjdGl2ZSIsInN0eWxlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIm1sIiwibm9uZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7OztnTkFFYjtBQUNKQyxXQUFLLEVBQUUsTUFBS0MsS0FBTCxDQUFXRDtBQURkLEs7Ozs7Ozs7Z0NBS0s7QUFDVCxXQUFLRSxRQUFMLENBQWM7QUFDWkYsYUFBSyxFQUFDLEtBQUtDLEtBQUwsQ0FBV0Q7QUFETCxPQUFkO0FBR0Q7Ozt1Q0FFa0JHLFMsRUFBV0MsUyxFQUFVO0FBRXBDLFVBQUcsS0FBS0gsS0FBTCxDQUFXRCxLQUFYLElBQW9CRyxTQUFTLENBQUNILEtBQWpDLEVBQXVDO0FBQ3JDLGFBQUtLLFNBQUw7QUFDRDtBQUNKOzs7NkJBRVE7QUFBQSxVQUNBTCxLQURBLEdBQ1MsS0FBS00sS0FEZCxDQUNBTixLQURBO0FBQUEsVUFFQU8sTUFGQSxHQUVVLEtBQUtOLEtBRmYsQ0FFQU0sTUFGQTtBQUlQLFVBQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLFVBQUlSLEtBQUssSUFBSSxTQUFiLEVBQXVCO0FBQ3JCUSxhQUFLLEdBQUdELE1BQU0sR0FBRyxJQUFILEdBQVUsTUFBeEI7QUFDRDs7QUFFREUsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSwwQkFDRTtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUEsS0FBSyxJQUFFLElBQVAsR0FBY0csK0RBQU0sQ0FBQ0MsRUFBckIsR0FBMEJELCtEQUFNLENBQUNFLElBQWpEO0FBQUEsa0NBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBV0Q7Ozs7RUExQytCQywrQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFpbl9jb250ZW50L01haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2hvd2Nhc2UgZnJvbSBcIi4uL21haW5fY29udGVudC9TaG93Y2FzZVwiO1xuaW1wb3J0IE15UHJvamVjdHMgZnJvbSBcIi4uL21haW5fY29udGVudC9NeVByb2plY3RzXCI7XG5pbXBvcnQgQWJvdXRNZSBmcm9tIFwiLi4vbWFpbl9jb250ZW50L0Fib3V0TWVcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9tYWluX2NvbnRlbnQvQ29udGFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvTWFpbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZT17XG4gICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGhcbiAgfVxuXG5cbiAgY2hlY2tTaXplKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWR0aDp0aGlzLnByb3BzLndpZHRoXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSl7XG4gXG4gICAgICBpZih0aGlzLnByb3BzLndpZHRoICE9IHByZXZQcm9wcy53aWR0aCl7XG4gICAgICAgIHRoaXMuY2hlY2tTaXplKClcbiAgICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHthY3RpdmV9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHN0eWxlID0gJydcblxuICAgIGlmICh3aWR0aCA9PSAnZGVza3RvcCcpe1xuICAgICAgc3R5bGUgPSBhY3RpdmUgPyAnbWwnIDogJ25vbmUnXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc3R5bGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlPT0nbWwnID8gc3R5bGVzLm1sIDogc3R5bGVzLm5vbmV9PlxuICAgICAgICAgIDxTaG93Y2FzZSAvPlxuICAgICAgICAgIDxNeVByb2plY3RzIC8+XG4gICAgICAgICAgPEFib3V0TWUgLz5cbiAgICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main_content/Main.js\n");

/***/ })

})