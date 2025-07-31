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

/***/ "./src/libs/parsleyjs/i18n/it.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/it.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('it', {\n  dateiso: \"Inserire una data valida (AAAA-MM-GG).\",\n  date: \"Deve essere una data valida nel formato %s\",\n  datebeforenow: \"La data deve essere valida nel formato %s e precedere la data attuale\",\n  dateafternow: \"La data deve essere valida nel formato %s e posteriore alla data attuale\",\n  minwords: \"Questo valore deve avere almeno %s parole.\",\n  maxwords: \"Questo valore deve avere meno di %s parole.\",\n  words: \"Questo valore deve avere tra %s e %s parole.\",\n  gt: \"Questo valore deve essere maggiore di %s.\",\n  gte: \"Questo valore deve essere maggiore o uguale a %s.\",\n  lt: \"Questo valore deve essere minore di %s.\",\n  lte: \"Questo valore deve essere minore o uguale a %s.\",\n  notequalto: \"Questo valore deve essere differente da %s.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/it.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/it.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});