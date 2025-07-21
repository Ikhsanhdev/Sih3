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

/***/ "./src/libs/parsleyjs/i18n/el.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/el.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('el', {\n  dateiso: \"Η τιμή πρέπει να είναι μια έγκυρη ημερομηνία (YYYY-MM-DD).\",\n  minwords: \"Το κείμενο είναι πολύ μικρό. Πρέπει να έχει %s ή και περισσότερες λέξεις.\",\n  maxwords: \"Το κείμενο είναι πολύ μεγάλο. Πρέπει να έχει %s ή και λιγότερες λέξεις.\",\n  words: \"Το μήκος του κειμένου είναι μη έγκυρο. Πρέπει να είναι μεταξύ %s και %s λεξεων.\",\n  gt: \"Η τιμή πρέπει να είναι μεγαλύτερη.\",\n  gte: \"Η τιμή πρέπει να είναι μεγαλύτερη ή ίση.\",\n  lt: \"Η τιμή πρέπει να είναι μικρότερη.\",\n  lte: \"Η τιμή πρέπει να είναι μικρότερη ή ίση.\",\n  notequalto: \"Η τιμή πρέπει να είναι διαφορετική.\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/el.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/el.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});