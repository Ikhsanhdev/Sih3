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

/***/ "./src/libs/parsleyjs/i18n/ca.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/ca.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('ca', {\n  defaultMessage: \"Aquest valor sembla ser invàlid.\",\n  type: {\n    email: \"Aquest valor ha de ser una adreça de correu electrònic vàlida.\",\n    url: \"Aquest valor ha de ser una URL vàlida.\",\n    number: \"Aquest valor ha de ser un nombre vàlid.\",\n    integer: \"Aquest valor ha de ser un nombre enter vàlid.\",\n    digits: \"Aquest valor només pot contenir dígits.\",\n    alphanum: \"Aquest valor ha de ser alfanumèric.\"\n  },\n  notblank: \"Aquest valor no pot ser buit.\",\n  required: \"Aquest valor és obligatori.\",\n  pattern: \"Aquest valor és incorrecte.\",\n  min: \"Aquest valor no pot ser menor que %s.\",\n  max: \"Aquest valor no pot ser major que %s.\",\n  range: \"Aquest valor ha d'estar entre %s i %s.\",\n  minlength: \"Aquest valor és massa curt. La longitud mínima és de %s caràcters.\",\n  maxlength: \"Aquest valor és massa llarg. La longitud màxima és de %s caràcters.\",\n  length: \"La longitud d'aquest valor ha de ser d'entre %s i %s caràcters.\",\n  mincheck: \"Has de marcar un mínim de %s opcions.\",\n  maxcheck: \"Has de marcar un màxim de %s opcions.\",\n  check: \"Has de marcar entre %s i %s opcions.\",\n  equalto: \"Aquest valor ha de ser el mateix.\"\n});\nParsley.setLocale('ca');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/ca.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/ca.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});