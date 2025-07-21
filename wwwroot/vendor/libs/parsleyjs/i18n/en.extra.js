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

/***/ "./src/libs/parsleyjs/i18n/en.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/en.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('en', {\n  dateiso: \"This value should be a valid date (YYYY-MM-DD).\",\n  date: \"It must be a valid date with format %s\",\n  datebeforenow: \"Date must be valid with format %s and be before now\",\n  dateafternow: \"Date must be valid with format %s and be after now\",\n  minwords: \"This value is too short. It should have %s words or more.\",\n  maxwords: \"This value is too long. It should have %s words or fewer.\",\n  words: \"This value length is invalid. It should be between %s and %s words long.\",\n  gt: \"This value should be greater than %s.\",\n  gte: \"This value should be greater or equal to %s.\",\n  lt: \"This value should be less than %s.\",\n  lte: \"This value should be less or equal to %s.\",\n  notequalto: \"This value should be different from %s.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/en.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/en.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});