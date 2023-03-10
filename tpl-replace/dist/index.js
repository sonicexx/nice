/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tpl */ \"./index.tpl\");\n/* harmony import */ var _index_tpl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_tpl__WEBPACK_IMPORTED_MODULE_0__);\n// 导入模板\r\n\r\n\r\n//执行模板\r\nconsole.log(_index_tpl__WEBPACK_IMPORTED_MODULE_0___default()());\r\n/**\r\n * 执行返回\r\n * <div class=\"tpl1 {{ className }}\" style=\"display: {{ style }};\">\r\n      <div class=\"title\">{{ title }}</div>\r\n      <img src=\"{{ url }}\" />\r\n  </div> \r\n*/\r\n\r\nfunction tplReplace(tpl, tplObj) {\r\n  return tpl().replace(/\\{\\{(.*?)\\}\\}/g, (node, key) => {\r\n    console.log(node); //返回：{{ className }}、{{ style }}、{{ title }}、{{ url }}\r\n    console.log(key); //返回： className、style、title、url\r\n\r\n    return tplObj[key.trim()]; //返回 tplObj 中对应 key 的值：注意 key 可能存在空格\r\n  });\r\n}\r\n\r\n// 准备替换的模型\r\nconst { className, display, title, url } = {\r\n  className: 'active',\r\n  display: false,\r\n  title: 'nice',\r\n  url: 'http://B-612.com',\r\n};\r\n\r\n// 执行 tplReplace 方法\r\nconst replacedTpl = tplReplace((_index_tpl__WEBPACK_IMPORTED_MODULE_0___default()), {\r\n  className,\r\n  style: display ? 'block' : 'none',\r\n  title,\r\n  url,\r\n});\r\n\r\nconsole.log(replacedTpl);\r\n\n\n//# sourceURL=webpack://tpl-replace/./index.js?");

/***/ }),

/***/ "./index.tpl":
/*!*******************!*\
  !*** ./index.tpl ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = function(obj) {\nobj || (obj = {});\nvar __t, __p = '';\nwith (obj) {\n__p += '<div class=\"tpl1 {{ className }}\" style=\"display: {{ style }};\">\\r\\n  <div class=\"title\">{{ title }}</div>\\r\\n  <img src=\"{{ url }}\" />\\r\\n</div>\\r\\n';\n\n}\nreturn __p\n}\n\n//# sourceURL=webpack://tpl-replace/./index.tpl?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;