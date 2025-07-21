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

/***/ "./src/libs/parsleyjs/i18n/lt.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/lt.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('lt', {\n  dateiso: \"Šis įrašas turi būti teisingo formato data (YYYY-MM-DD).\",\n  minwords: \"Šis įrašas turi turėti ne mažiau kaip %s žodžių.\",\n  maxwords: \"Šis įrašas turi turėti ne daugiau kaip %s žodžių.\",\n  words: \"Šis įrašas turi turėti nuo %s iki %s žodžių.\",\n  gt: \"Ši vertė turi būti didesnė.\",\n  gte: \"Ši vertė turi būti didesnė arba lygi.\",\n  lt: \"Ši vertė turi būti mažesnė.\",\n  lte: \"Ši vertė turi būti mažesnė arba lygi.\",\n  notequalto: \"Ši vertė turi būti skirtinga.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/lt.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/lt.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});