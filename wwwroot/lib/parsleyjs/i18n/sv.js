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

/***/ "./src/libs/parsleyjs/i18n/sv.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/sv.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('sv', {\n  defaultMessage: \"Ogiltigt värde.\",\n  type: {\n    email: \"Ange en giltig e-postadress.\",\n    url: \"Ange en giltig URL.\",\n    number: \"Ange ett giltigt nummer.\",\n    integer: \"Ange ett heltal.\",\n    digits: \"Ange endast siffror.\",\n    alphanum: \"Ange endast bokstäver och siffror.\"\n  },\n  notblank: \"Värdet får inte vara tomt.\",\n  required: \"Måste fyllas i.\",\n  pattern: \"Värdet är ej giltigt.\",\n  min: \"Värdet måste vara större än eller lika med %s.\",\n  max: \"Värdet måste vara mindre än eller lika med %s.\",\n  range: \"Värdet måste vara mellan %s och %s.\",\n  minlength: \"Värdet måste vara minst %s tecken.\",\n  maxlength: \"Värdet får maximalt innehålla %s tecken.\",\n  length: \"Värdet måste vara mellan %s och %s tecken.\",\n  mincheck: \"Minst %s val måste göras.\",\n  maxcheck: \"Maximalt %s val får göras.\",\n  check: \"Mellan %s och %s val måste göras.\",\n  equalto: \"Värdena måste vara lika.\"\n});\nParsley.setLocale('sv');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/sv.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/sv.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});