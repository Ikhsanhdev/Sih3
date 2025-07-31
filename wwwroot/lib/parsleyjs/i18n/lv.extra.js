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

/***/ "./src/libs/parsleyjs/i18n/lv.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/lv.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('lv', {\n  dateiso: \"Šai vērtībai jābūt korekti noformētam datumam (YYYY-MM-DD).\",\n  minwords: \"Šī vērtība ir par īsu. Tai jābūt vismaz %s vārdus garai.\",\n  maxwords: \"Šī vērtība ir par garu. Tai jābūt %s vārdus garai vai īsākai.\",\n  words: \"Šīs vērtības garums ir nederīgs. Tai jābūt no %s līdz %s vārdus garai.\",\n  gt: \"Šai vērtībai jābūt lielākai.\",\n  gte: \"Šai vērtībai jābūt lielākai vai vienādai.\",\n  lt: \"Šai vērtībai jābūt mazākai.\",\n  lte: \"Šai vērtībai jābūt mazākai vai vienādai.\",\n  notequalto: \"Šai vērtībai jābūt atšķirīgai.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/lv.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/lv.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});