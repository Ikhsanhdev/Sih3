/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/libs/parsleyjs/i18n/ru.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/ru.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('ru', {\n  dateiso: \"Это значение должно быть корректной датой (ГГГГ-ММ-ДД).\",\n  minwords: \"Это значение должно содержать не менее %s слов.\",\n  maxwords: \"Это значение должно содержать не более %s слов.\",\n  words: \"Это значение должно содержать от %s до %s слов.\",\n  gt: \"Это значение должно быть больше.\",\n  gte: \"Это значение должно быть больше или равно.\",\n  lt: \"Это значение должно быть меньше.\",\n  lte: \"Это значение должно быть меньше или равно.\",\n  notequalto: \"Это значение должно отличаться.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/ru.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/ru.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});