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

/***/ "./src/libs/parsleyjs/i18n/ro.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/ro.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('ro', {\n  defaultMessage: \"Acest câmp nu este completat corect.\",\n  type: {\n    email: \"Trebuie să scrii un email valid.\",\n    url: \"Trebuie să scrii un link valid\",\n    number: \"Trebuie să scrii un număr valid\",\n    integer: \"Trebuie să scrii un număr întreg valid\",\n    digits: \"Trebuie să conțină doar cifre.\",\n    alphanum: \"Trebuie să conțină doar cifre sau litere.\"\n  },\n  notblank: \"Acest câmp nu poate fi lăsat gol.\",\n  required: \"Acest câmp trebuie să fie completat.\",\n  pattern: \"Acest câmp nu este completat corect.\",\n  min: \"Trebuie să fie ceva mai mare sau egal cu %s.\",\n  max: \"Trebuie să fie ceva mai mic sau egal cu %s.\",\n  range: \"Valoarea trebuie să fie între %s și %s.\",\n  minlength: \"Trebuie să scrii cel puțin %s caractere.\",\n  maxlength: \"Trebuie să scrii cel mult %s caractere.\",\n  length: \"Trebuie să scrii cel puțin %s și %s cel mult %s caractere.\",\n  mincheck: \"Trebuie să alegi cel puțin %s opțiuni.\",\n  maxcheck: \"Poți alege maxim %s opțiuni.\",\n  check: \"Trebuie să alegi între %s sau %s.\",\n  equalto: \"Trebuie să fie la fel.\"\n});\nParsley.setLocale('ro');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/ro.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/ro.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});