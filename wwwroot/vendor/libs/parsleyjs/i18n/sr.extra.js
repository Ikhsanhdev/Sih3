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

/***/ "./src/libs/parsleyjs/i18n/sr.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/sr.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Extra validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('sr', {\n  dateiso: \"Unesite validan datum u formatu YYYY-MM-DD.\",\n  minwords: \"Potrebno je da unesete %s ili više reči.\",\n  maxwords: \"Moguće je uneti maksimalno %s reči.\",\n  words: \"Potrebno je da unesete između %s i %s reči.\",\n  gt: \"Ova vrednost mora da bude veća.\",\n  gte: \"Ova vrednost mora da bude veća ili jednaka.\",\n  lt: \"Ova vrednost mora da bude manja.\",\n  lte: \"Ova vrednost mora da bude manja ili jednaka.\",\n  notequalto: \"Sadržaj ovog polja mora biti različit.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/sr.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/sr.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});