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

/***/ "./src/libs/parsleyjs/i18n/fr.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/fr.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('fr', {\n  dateiso: \"Cette valeur n'est pas une date valide (YYYY-MM-DD).\",\n  minwords: \"Cette valeur est trop courte. Elle doit contenir au moins %s mots.\",\n  maxwords: \"Cette valeur est trop longue. Elle doit contenir tout au plus %s mots.\",\n  words: \"Cette valeur est invalide. Elle doit contenir entre %s et %s mots.\",\n  gt: \"Cette valeur doit être plus grande.\",\n  gte: \"Cette valeur doit être plus grande ou égale.\",\n  lt: \"Cette valeur doit être plus petite.\",\n  lte: \"Cette valeur doit être plus petite ou égale.\",\n  notequalto: \"Cette valeur doit être différente.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/fr.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/fr.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});