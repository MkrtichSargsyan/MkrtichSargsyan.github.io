module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Showcase.js":
/*!********************************!*\
  !*** ./components/Showcase.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/Showcase.js\";\n\n\n\nfunction Showcase() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-2000281906\",\n    children: [\"ddddddfasfhfudisgrhui\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"2000281906\",\n      children: \".jsx-2000281906{background-image:url(bg.jpg);-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21rcnRpY2gvRGVza3RvcC9taWNyb3ZlcnNlL3BvcnRmb2xpby9jb21wb25lbnRzL1Nob3djYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1rQixBQUVxQyw2QkFDakIsdUVBQ2IiLCJmaWxlIjoiL2hvbWUvbWtydGljaC9EZXNrdG9wL21pY3JvdmVyc2UvcG9ydGZvbGlvL2NvbXBvbmVudHMvU2hvd2Nhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFNob3djYXNlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBkZGRkZGRmYXNmaGZ1ZGlzZ3JodWlcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoYmcuanBnKTtcbiAgICAgICAgZmxleC1ncm93OjE7XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd2Nhc2VcbiJdfQ== */\\n/*@ sourceURL=/home/mkrtich/Desktop/microverse/portfolio/components/Showcase.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Showcase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nob3djYXNlLmpzPzFjNDEiXSwibmFtZXMiOlsiU2hvd2Nhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUVjQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2hvd2Nhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFNob3djYXNlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBkZGRkZGRmYXNmaGZ1ZGlzZ3JodWlcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoYmcuanBnKTtcbiAgICAgICAgZmxleC1ncm93OjE7XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd2Nhc2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Showcase.js\n");

/***/ }),

/***/ "./components/SideSrawer/SideDrawer.js":
/*!*********************************************!*\
  !*** ./components/SideSrawer/SideDrawer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SideDrawer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/SideDrawer.module.css */ \"./styles/SideDrawer.module.css\");\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/SideSrawer/SideDrawer.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass SideDrawer extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      navigation_items: [{\n        icon: \"icons/home.png\",\n        title: \"Home\"\n      }, {\n        icon: \"icons/folder.png\",\n        title: \"My projects\"\n      }, {\n        icon: \"icons/user.png\",\n        title: \"About me\"\n      }, {\n        icon: \"icons/message.png\",\n        title: \"Contact\"\n      }]\n    });\n  }\n\n  render() {\n    const {\n      navigation_items\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.side_drawer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"me.JPG\",\n          alt: \"me\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.my_name,\n            children: \"Mkrtich Sargsyan\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.position,\n            children: \"Full Stack Developer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navigation,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          children: navigation_items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: item.icon,\n                alt: \"\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n                children: item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, this))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,\n        children: \"social links\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVTcmF3ZXIvU2lkZURyYXdlci5qcz85ZDMyIl0sIm5hbWVzIjpbIlNpZGVEcmF3ZXIiLCJDb21wb25lbnQiLCJuYXZpZ2F0aW9uX2l0ZW1zIiwiaWNvbiIsInRpdGxlIiwicmVuZGVyIiwic3RhdGUiLCJzdHlsZXMiLCJzaWRlX2RyYXdlciIsImxvZ28iLCJteV9uYW1lIiwicG9zaXRpb24iLCJuYXZpZ2F0aW9uIiwibWFwIiwiaXRlbSIsInNvY2lhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUN4QztBQUNOQyxzQkFBZ0IsRUFBRSxDQUNoQjtBQUNFQyxZQUFJLEVBQUUsZ0JBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FEZ0IsRUFLaEI7QUFDRUQsWUFBSSxFQUFFLGtCQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BTGdCLEVBU2hCO0FBQ0VELFlBQUksRUFBRSxnQkFEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQVRnQixFQWFoQjtBQUNFRCxZQUFJLEVBQUUsbUJBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FiZ0I7QUFEWixLQUR3QztBQUFBOztBQXNCaERDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUg7QUFBRixRQUF1QixLQUFLSSxLQUFsQztBQUNBLHdCQUNFO0FBQUssZUFBUyxFQUFFQyxvRUFBTSxDQUFDQyxXQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUQsb0VBQU0sQ0FBQ0UsSUFBdkI7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxRQUFUO0FBQWtCLGFBQUcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUVGLG9FQUFNLENBQUNHLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBTSxxQkFBUyxFQUFFSCxvRUFBTSxDQUFDSSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFLLGlCQUFTLEVBQUVKLG9FQUFNLENBQUNLLFVBQXZCO0FBQUEsK0JBQ0U7QUFBQSxvQkFDR1YsZ0JBQWdCLENBQUNXLEdBQWpCLENBQXNCQyxJQUFELGlCQUNwQjtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQUEsc0NBQ0U7QUFBSyxtQkFBRyxFQUFFQSxJQUFJLENBQUNYLElBQWY7QUFBcUIsbUJBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBTSx5QkFBUyxFQUFFSSxvRUFBTSxDQUFDSCxLQUF4QjtBQUFBLDBCQUFnQ1UsSUFBSSxDQUFDVjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBb0JFO0FBQUssaUJBQVMsRUFBRUcsb0VBQU0sQ0FBQ1EsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUEwQkQ7O0FBbEQrQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZVNyYXdlci9TaWRlRHJhd2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1NpZGVEcmF3ZXIubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRHJhd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbmF2aWdhdGlvbl9pdGVtczogW1xuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL2hvbWUucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvZm9sZGVyLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJNeSBwcm9qZWN0c1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy91c2VyLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJBYm91dCBtZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy9tZXNzYWdlLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2aWdhdGlvbl9pdGVtcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlX2RyYXdlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgPGltZyBzcmM9XCJtZS5KUEdcIiBhbHQ9XCJtZVwiIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5teV9uYW1lfT5Na3J0aWNoIFNhcmdzeWFuPC9oMT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvc2l0aW9ufT5GdWxsIFN0YWNrIERldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbn0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge25hdmlnYXRpb25faXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaWNvbn0gYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxuICAgICAgICAgIHNvY2lhbCBsaW5rc1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SideSrawer/SideDrawer.js\n");

/***/ }),

/***/ "./layouts/MainLayout.js":
/*!*******************************!*\
  !*** ./layouts/MainLayout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SideSrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideSrawer/SideDrawer */ \"./components/SideSrawer/SideDrawer.js\");\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/layouts/MainLayout.js\";\n\n\n\n\nfunction MainLayout(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-1618948204\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SideSrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1618948204\",\n      children: \".jsx-1618948204{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21rcnRpY2gvRGVza3RvcC9taWNyb3ZlcnNlL3BvcnRmb2xpby9sYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWtCLEFBRXNCLDBFQUNmIiwiZmlsZSI6Ii9ob21lL21rcnRpY2gvRGVza3RvcC9taWNyb3ZlcnNlL3BvcnRmb2xpby9sYXlvdXRzL01haW5MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2lkZURyYXdlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlU3Jhd2VyL1NpZGVEcmF3ZXJcIjtcblxuZnVuY3Rpb24gTWFpbkxheW91dChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2lkZURyYXdlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0O1xuIl19 */\\n/*@ sourceURL=/home/mkrtich/Desktop/microverse/portfolio/layouts/MainLayout.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXRzL01haW5MYXlvdXQuanM/ZGNjZCJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3pCLHNCQUNFO0FBQUE7QUFBQSw0QkFDRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0EsS0FBSyxDQUFDQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRWNGLHlFQUFmIiwiZmlsZSI6Ii4vbGF5b3V0cy9NYWluTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNpZGVEcmF3ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZVNyYXdlci9TaWRlRHJhd2VyXCI7XG5cbmZ1bmN0aW9uIE1haW5MYXlvdXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNpZGVEcmF3ZXIgLz5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layouts/MainLayout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/MainLayout */ \"./layouts/MainLayout.js\");\n/* harmony import */ var _components_Showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Showcase */ \"./components/Showcase.js\");\n/* harmony import */ var _styles_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/MainLayout.module.css */ \"./styles/MainLayout.module.css\");\n/* harmony import */ var _styles_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_MainLayout_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/pages/index.js\";\n\n\n\n\n\n\n\nconst index = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: \"Mkrtich Sargsyan\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Showcase__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3571604287\",\n        children: \"sdfsd\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        id: \"3571604287\",\n        children: \".jsx-3571604287{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21rcnRpY2gvRGVza3RvcC9taWNyb3ZlcnNlL3BvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQm9CLEFBRXdCLDBFQUNTLDhFQUN4QiIsImZpbGUiOiIvaG9tZS9ta3J0aWNoL0Rlc2t0b3AvbWljcm92ZXJzZS9wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vbGF5b3V0cy9NYWluTGF5b3V0XCI7XG5pbXBvcnQgU2hvd2Nhc2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hvd2Nhc2VcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01haW5MYXlvdXQubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Na3J0aWNoIFNhcmdzeWFuPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPE1haW5MYXlvdXQ+XG4gICAgICA8U2hvd2Nhc2U+XG4gICAgICAgIDxkaXY+c2Rmc2Q8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1Nob3djYXNlPlxuICAgIDwvTWFpbkxheW91dD5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\\n/*@ sourceURL=/home/mkrtich/Desktop/microverse/portfolio/pages/index.js */\"\n      }, void 0, false, void 0, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLG1CQUNaO0FBQUEsMEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLDJEQUFEO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBLGdCQURGOztBQWtCZUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9sYXlvdXRzL01haW5MYXlvdXRcIjtcbmltcG9ydCBTaG93Y2FzZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG93Y2FzZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTWFpbkxheW91dC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4gKFxuICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPk1rcnRpY2ggU2FyZ3N5YW48L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8TWFpbkxheW91dD5cbiAgICAgIDxTaG93Y2FzZT5cbiAgICAgICAgPGRpdj5zZGZzZDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvU2hvd2Nhc2U+XG4gICAgPC9NYWluTGF5b3V0PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/MainLayout.module.css":
/*!**************************************!*\
  !*** ./styles/MainLayout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"black\": \"MainLayout_black__2mvZB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTWFpbkxheW91dC5tb2R1bGUuY3NzPzA4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvTWFpbkxheW91dC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmxhY2tcIjogXCJNYWluTGF5b3V0X2JsYWNrX18ybXZaQlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/MainLayout.module.css\n");

/***/ }),

/***/ "./styles/SideDrawer.module.css":
/*!**************************************!*\
  !*** ./styles/SideDrawer.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"side_drawer\": \"SideDrawer_side_drawer__2guhi\",\n\t\"logo\": \"SideDrawer_logo__19s2M\",\n\t\"my_name\": \"SideDrawer_my_name__9Phma\",\n\t\"position\": \"SideDrawer_position__2TnyF\",\n\t\"navigation\": \"SideDrawer_navigation__2Y0XU\",\n\t\"title\": \"SideDrawer_title__3h-z4\",\n\t\"social\": \"SideDrawer_social__2C6gj\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2lkZURyYXdlci5tb2R1bGUuY3NzPzNjM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvU2lkZURyYXdlci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lkZV9kcmF3ZXJcIjogXCJTaWRlRHJhd2VyX3NpZGVfZHJhd2VyX18yZ3VoaVwiLFxuXHRcImxvZ29cIjogXCJTaWRlRHJhd2VyX2xvZ29fXzE5czJNXCIsXG5cdFwibXlfbmFtZVwiOiBcIlNpZGVEcmF3ZXJfbXlfbmFtZV9fOVBobWFcIixcblx0XCJwb3NpdGlvblwiOiBcIlNpZGVEcmF3ZXJfcG9zaXRpb25fXzJUbnlGXCIsXG5cdFwibmF2aWdhdGlvblwiOiBcIlNpZGVEcmF3ZXJfbmF2aWdhdGlvbl9fMlkwWFVcIixcblx0XCJ0aXRsZVwiOiBcIlNpZGVEcmF3ZXJfdGl0bGVfXzNoLXo0XCIsXG5cdFwic29jaWFsXCI6IFwiU2lkZURyYXdlcl9zb2NpYWxfXzJDNmdqXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/SideDrawer.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });