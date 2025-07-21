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

/***/ "./src/libs/parsleyjs/i18n/sl.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/sl.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('sl', {\n  dateiso: \"Vnesite datum v ISO obliki (YYYY-MM-DD).\",\n  minwords: \"Vpis je prekratek. Vpisati morate najmnaj %s besed.\",\n  maxwords: \"Vpis je predolg. Vpišete lahko največ %s besed.\",\n  words: \"Dolžina vpisa je napačna. Dolžina je lahko samo med %s in %s besed.\",\n  gt: \"Vpisani podatek mora biti večji.\",\n  gte: \"Vpisani podatek mora biti enak ali večji.\",\n  lt: \"Vpisani podatek mora biti manjši.\",\n  lte: \"Vpisani podatek mora biti enak ali manjši.\",\n  notequalto: \"Vpisana vrednost mora biti drugačna.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/sl.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/sl.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});