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

/***/ "./components/SideSrawer/SideDrawer.js":
/*!*********************************************!*\
  !*** ./components/SideSrawer/SideDrawer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SideDrawer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/SideDrawer.module.css */ \"./styles/SideDrawer.module.css\");\n/* harmony import */ var _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/SideSrawer/SideDrawer.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass SideDrawer extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      active: true,\n      navigation_items: [{\n        icon: \"icons/home.png\",\n        title: \"Home\"\n      }, {\n        icon: \"icons/folder.png\",\n        title: \"My projects\"\n      }, {\n        icon: \"icons/user.png\",\n        title: \"About me\"\n      }, {\n        icon: \"icons/message.png\",\n        title: \"Contact\"\n      }],\n      social_itmes: [{\n        icon: \"fab fa-github fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-twitter fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fab fa-linkedin fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fas fa-envelope fa-2x\",\n        link: \"Contact\"\n      }, {\n        icon: \"fas fa-file fa-2x\",\n        link: \"Contact\"\n      }]\n    });\n  }\n\n  render() {\n    const {\n      navigation_items,\n      social_itmes\n    } = this.state;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: this.props.active ? _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.side_drawer_open : _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.side_drawer_close,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.toggler,\n        onClick: this.props.toggleSidebar,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          class: \"fas fa-bars fa-2x\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"me.JPG\",\n          alt: \"me\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.my_name,\n            children: \"Mkrtich Sargsyan\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.position,\n            children: \"Full Stack Developer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navigation,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          children: navigation_items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              href: \"#\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                src: item.icon,\n                alt: \"\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n                children: item.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 73,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 15\n          }, this))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: _styles_SideDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.social,\n        children: social_itmes.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"#\",\n            target: \"_blank\",\n            \"data-original-title\": \"Linkedin\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n              className: item.icon\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVTcmF3ZXIvU2lkZURyYXdlci5qcz85ZDMyIl0sIm5hbWVzIjpbIlNpZGVEcmF3ZXIiLCJDb21wb25lbnQiLCJhY3RpdmUiLCJuYXZpZ2F0aW9uX2l0ZW1zIiwiaWNvbiIsInRpdGxlIiwic29jaWFsX2l0bWVzIiwibGluayIsInJlbmRlciIsInN0YXRlIiwicHJvcHMiLCJzdHlsZXMiLCJzaWRlX2RyYXdlcl9vcGVuIiwic2lkZV9kcmF3ZXJfY2xvc2UiLCJ0b2dnbGVyIiwidG9nZ2xlU2lkZWJhciIsImxvZ28iLCJteV9uYW1lIiwicG9zaXRpb24iLCJuYXZpZ2F0aW9uIiwibWFwIiwiaXRlbSIsInNvY2lhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUN4QztBQUNOQyxZQUFNLEVBQUUsSUFERjtBQUVOQyxzQkFBZ0IsRUFBRSxDQUNoQjtBQUNFQyxZQUFJLEVBQUUsZ0JBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FEZ0IsRUFLaEI7QUFDRUQsWUFBSSxFQUFFLGtCQURSO0FBRUVDLGFBQUssRUFBRTtBQUZULE9BTGdCLEVBU2hCO0FBQ0VELFlBQUksRUFBRSxnQkFEUjtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQVRnQixFQWFoQjtBQUNFRCxZQUFJLEVBQUUsbUJBRFI7QUFFRUMsYUFBSyxFQUFFO0FBRlQsT0FiZ0IsQ0FGWjtBQW9CTkMsa0JBQVksRUFBRSxDQUNaO0FBQ0VGLFlBQUksRUFBRSxxQkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQURZLEVBS1o7QUFDRUgsWUFBSSxFQUFFLHNCQURSO0FBRUVHLFlBQUksRUFBRTtBQUZSLE9BTFksRUFTWjtBQUNFSCxZQUFJLEVBQUUsdUJBRFI7QUFFRUcsWUFBSSxFQUFFO0FBRlIsT0FUWSxFQWFaO0FBQ0VILFlBQUksRUFBRSx1QkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQWJZLEVBaUJaO0FBQ0VILFlBQUksRUFBRSxtQkFEUjtBQUVFRyxZQUFJLEVBQUU7QUFGUixPQWpCWTtBQXBCUixLQUR3QztBQUFBOztBQTZDaERDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUwsc0JBQUY7QUFBb0JHO0FBQXBCLFFBQXFDLEtBQUtHLEtBQWhEO0FBQ0Esd0JBQ0U7QUFDRSxlQUFTLEVBQ1AsS0FBS0MsS0FBTCxDQUFXUixNQUFYLEdBQW9CUyxvRUFBTSxDQUFDQyxnQkFBM0IsR0FBOENELG9FQUFNLENBQUNFLGlCQUZ6RDtBQUFBLDhCQUtFO0FBQUssaUJBQVMsRUFBRUYsb0VBQU0sQ0FBQ0csT0FBdkI7QUFBZ0MsZUFBTyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ssYUFBcEQ7QUFBQSwrQkFDRTtBQUFHLGVBQUssRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFRRTtBQUFLLGlCQUFTLEVBQUVKLG9FQUFNLENBQUNLLElBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsUUFBVDtBQUFrQixhQUFHLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFTCxvRUFBTSxDQUFDTSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU0scUJBQVMsRUFBRU4sb0VBQU0sQ0FBQ08sUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBZUU7QUFBSyxpQkFBUyxFQUFFUCxvRUFBTSxDQUFDUSxVQUF2QjtBQUFBLCtCQUNFO0FBQUEsb0JBQ0doQixnQkFBZ0IsQ0FBQ2lCLEdBQWpCLENBQXNCQyxJQUFELGlCQUNwQjtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQUEsc0NBQ0U7QUFBSyxtQkFBRyxFQUFFQSxJQUFJLENBQUNqQixJQUFmO0FBQXFCLG1CQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQU0seUJBQVMsRUFBRU8sb0VBQU0sQ0FBQ04sS0FBeEI7QUFBQSwwQkFBZ0NnQixJQUFJLENBQUNoQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGLGVBMkJFO0FBQUksaUJBQVMsRUFBRU0sb0VBQU0sQ0FBQ1csTUFBdEI7QUFBQSxrQkFDR2hCLFlBQVksQ0FBQ2MsR0FBYixDQUFrQkMsSUFBRCxpQkFDaEI7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFZLGtCQUFNLEVBQUMsUUFBbkI7QUFBNEIsbUNBQW9CLFVBQWhEO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFFQSxJQUFJLENBQUNqQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBdUNEOztBQXRGK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVTcmF3ZXIvU2lkZURyYXdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9TaWRlRHJhd2VyLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZURyYXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uX2l0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGljb246IFwiaWNvbnMvaG9tZS5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJpY29ucy9mb2xkZXIucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIk15IHByb2plY3RzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL3VzZXIucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIkFib3V0IG1lXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImljb25zL21lc3NhZ2UucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzb2NpYWxfaXRtZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYWIgZmEtZ2l0aHViIGZhLTJ4XCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYWIgZmEtdHdpdHRlciBmYS0yeFwiLFxuICAgICAgICBsaW5rOiBcIkNvbnRhY3RcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb246IFwiZmFiIGZhLWxpbmtlZGluIGZhLTJ4XCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbjogXCJmYXMgZmEtZW52ZWxvcGUgZmEtMnhcIixcbiAgICAgICAgbGluazogXCJDb250YWN0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpY29uOiBcImZhcyBmYS1maWxlIGZhLTJ4XCIsXG4gICAgICAgIGxpbms6IFwiQ29udGFjdFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdmlnYXRpb25faXRlbXMsIHNvY2lhbF9pdG1lcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlID8gc3R5bGVzLnNpZGVfZHJhd2VyX29wZW4gOiBzdHlsZXMuc2lkZV9kcmF3ZXJfY2xvc2VcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZXJ9IG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlU2lkZWJhcn0+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFycyBmYS0yeFwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgPGltZyBzcmM9XCJtZS5KUEdcIiBhbHQ9XCJtZVwiIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5teV9uYW1lfT5Na3J0aWNoIFNhcmdzeWFuPC9oMT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnBvc2l0aW9ufT5GdWxsIFN0YWNrIERldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbn0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge25hdmlnYXRpb25faXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaWNvbn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxuICAgICAgICAgIHtzb2NpYWxfaXRtZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkxpbmtlZGluXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SideSrawer/SideDrawer.js\n");

/***/ }),

/***/ "./components/main_content/AboutMe.js":
/*!********************************************!*\
  !*** ./components/main_content/AboutMe.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AboutMe; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/AboutMe.js\";\n\nfunction AboutMe() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"About me\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0TWUuanM/MmJmNSJdLCJuYW1lcyI6WyJBYm91dE1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5fY29udGVudC9BYm91dE1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dE1lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBBYm91dCBtZVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main_content/AboutMe.js\n");

/***/ }),

/***/ "./components/main_content/Contact.js":
/*!********************************************!*\
  !*** ./components/main_content/Contact.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contact; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/Contact.js\";\n\nfunction Contact() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Contact\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3QuanM/MWJkZSJdLCJuYW1lcyI6WyJDb250YWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQyxzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5fY29udGVudC9Db250YWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBDb250YWN0XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main_content/Contact.js\n");

/***/ }),

/***/ "./components/main_content/Main.js":
/*!*****************************************!*\
  !*** ./components/main_content/Main.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_content_Showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main_content/Showcase */ \"./components/main_content/Showcase.js\");\n/* harmony import */ var _main_content_MyProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main_content/MyProjects */ \"./components/main_content/MyProjects.js\");\n/* harmony import */ var _main_content_AboutMe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main_content/AboutMe */ \"./components/main_content/AboutMe.js\");\n/* harmony import */ var _main_content_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main_content/Contact */ \"./components/main_content/Contact.js\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Main.module.css */ \"./styles/Main.module.css\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/main_content/Main.js\";\n\n\n\n\n\n\nfunction Main(props) {\n  console.log(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: props.active ? _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.ml : _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mr,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_content_Showcase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_content_MyProjects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_content_AboutMe__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_content_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW5fY29udGVudC9NYWluLmpzPzQ3OTQiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZSIsInN0eWxlcyIsIm1sIiwibXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFQSxLQUFLLENBQUNHLE1BQU4sR0FBZUMsOERBQU0sQ0FBQ0MsRUFBdEIsR0FBMkJELDhEQUFNLENBQUNFLEVBQWxEO0FBQUEsNEJBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5fY29udGVudC9NYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNob3djYXNlIGZyb20gXCIuLi9tYWluX2NvbnRlbnQvU2hvd2Nhc2VcIjtcbmltcG9ydCBNeVByb2plY3RzIGZyb20gXCIuLi9tYWluX2NvbnRlbnQvTXlQcm9qZWN0c1wiO1xuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4uL21haW5fY29udGVudC9BYm91dE1lXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vbWFpbl9jb250ZW50L0NvbnRhY3RcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL01haW4ubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuYWN0aXZlID8gc3R5bGVzLm1sIDogc3R5bGVzLm1yfT5cbiAgICAgIDxTaG93Y2FzZSAvPlxuICAgICAgPE15UHJvamVjdHMgLz5cbiAgICAgIDxBYm91dE1lIC8+XG4gICAgICA8Q29udGFjdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main_content/Main.js\n");

/***/ }),

/***/ "./components/main_content/MyProjects.js":
/*!***********************************************!*\
  !*** ./components/main_content/MyProjects.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyProjects; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/main_content/MyProjects.js\";\n\nfunction MyProjects() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    children: \"My projects\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW5fY29udGVudC9NeVByb2plY3RzLmpzPzM3NmQiXSwibmFtZXMiOlsiTXlQcm9qZWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFDbkMsc0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYWluX2NvbnRlbnQvTXlQcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIE15IHByb2plY3RzXG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main_content/MyProjects.js\n");

/***/ }),

/***/ "./components/main_content/Showcase.js":
/*!*********************************************!*\
  !*** ./components/main_content/Showcase.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Showcase_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Showcase.module.css */ \"./styles/Showcase.module.css\");\n/* harmony import */ var _styles_Showcase_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Showcase_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/components/main_content/Showcase.js\";\n\n\n\nfunction Showcase() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _styles_Showcase_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.showcase,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Showcase_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), \"Hello. My name is \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"Mkrtich\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 25\n    }, this), \"Full Stack Web Developer\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"based in Armenia,Erevan\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      children: \"Hire Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Showcase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW5fY29udGVudC9TaG93Y2FzZS5qcz82NWRmIl0sIm5hbWVzIjpbIlNob3djYXNlIiwic3R5bGVzIiwic2hvd2Nhc2UiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixzQkFDRTtBQUFTLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsUUFBM0I7QUFBQSw0QkFFRTtBQUFLLGVBQVMsRUFBRUQsa0VBQU0sQ0FBQ0U7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLHFDQUtvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxwQiwyQ0FRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztBQUVjSCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFpbl9jb250ZW50L1Nob3djYXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvU2hvd2Nhc2UubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gU2hvd2Nhc2UoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2hvd2Nhc2V9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgSGVsbG8uIE15IG5hbWUgaXMgPHNwYW4+TWtydGljaDwvc3Bhbj5cbiAgICAgIEZ1bGwgU3RhY2sgV2ViIERldmVsb3BlclxuXG4gICAgICA8cD5iYXNlZCBpbiBBcm1lbmlhLEVyZXZhbjwvcD5cbiAgICAgIDxidXR0b24+SGlyZSBNZTwvYnV0dG9uPlxuXG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3djYXNlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main_content/Showcase.js\n");

/***/ }),

/***/ "./layouts/MainLayout.js":
/*!*******************************!*\
  !*** ./layouts/MainLayout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainLayout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_main_content_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main_content/Main */ \"./components/main_content/Main.js\");\n/* harmony import */ var _components_SideSrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideSrawer/SideDrawer */ \"./components/SideSrawer/SideDrawer.js\");\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/layouts/MainLayout.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import React from \"react\";\n// import Main from \"../components/main_content/Main\";\n// import SideDrawer from \"../components/SideSrawer/SideDrawer\";\n// function MainLayout() {\n//   return (\n//     <div>\n//       <SideDrawer />\n//       <Main />\n//     </div>\n//   );\n// }\n// export default MainLayout;\n\n\n\nclass MainLayout extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      active: true\n    });\n\n    _defineProperty(this, \"toggleSidebar\", e => {\n      e.preventDefault();\n      this.setState({\n        active: !this.state.active\n      });\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SideSrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        active: this.state.active,\n        toggleSidebar: this.toggleSidebar\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_main_content_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        active: this.state.active\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXRzL01haW5MYXlvdXQuanM/ZGNjZCJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwiQ29tcG9uZW50IiwiYWN0aXZlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJzdGF0ZSIsInJlbmRlciIsInRvZ2dsZVNpZGViYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFBQTtBQUFBOztBQUFBLG1DQUUxQztBQUNKQyxZQUFNLEVBQUU7QUFESixLQUYwQzs7QUFBQSwyQ0FNL0JDLENBQUQsSUFBTztBQUNyQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQ1pILGNBQU0sRUFBRSxDQUFDLEtBQUtJLEtBQUwsQ0FBV0o7QUFEUixPQUFkO0FBR0QsS0FYK0M7QUFBQTs7QUFhaERLLFFBQU0sR0FBRztBQUNQLHdCQUNFO0FBQUEsOEJBQ0UscUVBQUMseUVBQUQ7QUFBWSxjQUFNLEVBQUUsS0FBS0QsS0FBTCxDQUFXSixNQUEvQjtBQUF1QyxxQkFBYSxFQUFFLEtBQUtNO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHFFQUFEO0FBQU0sY0FBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0o7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBTUQ7O0FBcEIrQyIsImZpbGUiOiIuL2xheW91dHMvTWFpbkxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL21haW5fY29udGVudC9NYWluXCI7XG4vLyBpbXBvcnQgU2lkZURyYXdlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlU3Jhd2VyL1NpZGVEcmF3ZXJcIjtcblxuLy8gZnVuY3Rpb24gTWFpbkxheW91dCgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPFNpZGVEcmF3ZXIgLz5cbi8vICAgICAgIDxNYWluIC8+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7XG5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbl9jb250ZW50L01haW5cIjtcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGVTcmF3ZXIvU2lkZURyYXdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZT17XG4gICAgYWN0aXZlOiB0cnVlLFxuICB9XG5cbiAgdG9nZ2xlU2lkZWJhciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZURyYXdlciBhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfSB0b2dnbGVTaWRlYmFyPXt0aGlzLnRvZ2dsZVNpZGViYXJ9Lz5cbiAgICAgICAgPE1haW4gYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layouts/MainLayout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/MainLayout */ \"./layouts/MainLayout.js\");\n\n\nvar _jsxFileName = \"/home/mkrtich/Desktop/microverse/portfolio/pages/index.js\";\n\n\n\n\nconst index = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n      children: \"Mkrtich Sargsyan\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxLQUFLLEdBQUcsbUJBQ1o7QUFBQSwwQkFDRSxxRUFBQyxnREFBRDtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUEsZ0JBREY7O0FBU2VBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vbGF5b3V0cy9NYWluTGF5b3V0XCI7XG5cblxuY29uc3QgaW5kZXggPSAoKSA9PiAoXG4gIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+TWtydGljaCBTYXJnc3lhbjwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxNYWluTGF5b3V0IC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Main.module.css":
/*!********************************!*\
  !*** ./styles/Main.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"ml\": \"Main_ml__3np6s\",\n\t\"mr\": \"Main_mr__16kLV\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTWFpbi5tb2R1bGUuY3NzPzI5ODAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9NYWluLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtbFwiOiBcIk1haW5fbWxfXzNucDZzXCIsXG5cdFwibXJcIjogXCJNYWluX21yX18xNmtMVlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Main.module.css\n");

/***/ }),

/***/ "./styles/Showcase.module.css":
/*!************************************!*\
  !*** ./styles/Showcase.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"showcase\": \"Showcase_showcase__4lT7S\",\n\t\"container\": \"Showcase_container__2wqbP\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2hvd2Nhc2UubW9kdWxlLmNzcz9lYjIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvU2hvd2Nhc2UubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNob3djYXNlXCI6IFwiU2hvd2Nhc2Vfc2hvd2Nhc2VfXzRsVDdTXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiU2hvd2Nhc2VfY29udGFpbmVyX18yd3FiUFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Showcase.module.css\n");

/***/ }),

/***/ "./styles/SideDrawer.module.css":
/*!**************************************!*\
  !*** ./styles/SideDrawer.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"side_drawer_open\": \"SideDrawer_side_drawer_open__1Y5al\",\n\t\"side_drawer_close\": \"SideDrawer_side_drawer_close__1MMwN\",\n\t\"toggler\": \"SideDrawer_toggler__1GTCj\",\n\t\"logo\": \"SideDrawer_logo__19s2M\",\n\t\"my_name\": \"SideDrawer_my_name__9Phma\",\n\t\"position\": \"SideDrawer_position__2TnyF\",\n\t\"navigation\": \"SideDrawer_navigation__2Y0XU\",\n\t\"title\": \"SideDrawer_title__3h-z4\",\n\t\"social\": \"SideDrawer_social__2C6gj\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2lkZURyYXdlci5tb2R1bGUuY3NzPzNjM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL1NpZGVEcmF3ZXIubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNpZGVfZHJhd2VyX29wZW5cIjogXCJTaWRlRHJhd2VyX3NpZGVfZHJhd2VyX29wZW5fXzFZNWFsXCIsXG5cdFwic2lkZV9kcmF3ZXJfY2xvc2VcIjogXCJTaWRlRHJhd2VyX3NpZGVfZHJhd2VyX2Nsb3NlX18xTU13TlwiLFxuXHRcInRvZ2dsZXJcIjogXCJTaWRlRHJhd2VyX3RvZ2dsZXJfXzFHVENqXCIsXG5cdFwibG9nb1wiOiBcIlNpZGVEcmF3ZXJfbG9nb19fMTlzMk1cIixcblx0XCJteV9uYW1lXCI6IFwiU2lkZURyYXdlcl9teV9uYW1lX185UGhtYVwiLFxuXHRcInBvc2l0aW9uXCI6IFwiU2lkZURyYXdlcl9wb3NpdGlvbl9fMlRueUZcIixcblx0XCJuYXZpZ2F0aW9uXCI6IFwiU2lkZURyYXdlcl9uYXZpZ2F0aW9uX18yWTBYVVwiLFxuXHRcInRpdGxlXCI6IFwiU2lkZURyYXdlcl90aXRsZV9fM2gtejRcIixcblx0XCJzb2NpYWxcIjogXCJTaWRlRHJhd2VyX3NvY2lhbF9fMkM2Z2pcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/SideDrawer.module.css\n");

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

/***/ })

/******/ });