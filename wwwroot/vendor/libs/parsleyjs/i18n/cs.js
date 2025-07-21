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

/***/ "./src/libs/parsleyjs/i18n/cs.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/cs.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('cs', {\n  defaultMessage: \"Tato položka je neplatná.\",\n  type: {\n    email: \"Tato položka musí být e-mailová adresa.\",\n    url: \"Tato položka musí být platná URL adresa.\",\n    number: \"Tato položka musí být číslo.\",\n    integer: \"Tato položka musí být celé číslo.\",\n    digits: \"Tato položka musí být kladné celé číslo.\",\n    alphanum: \"Tato položka musí být alfanumerická.\"\n  },\n  notblank: \"Tato položka nesmí být prázdná.\",\n  required: \"Tato položka je povinná.\",\n  pattern: \"Tato položka je neplatná.\",\n  min: \"Tato položka musí být větší nebo rovna %s.\",\n  max: \"Tato položka musí být menší nebo rovna %s.\",\n  range: \"Tato položka musí být v rozsahu od %s do %s.\",\n  minlength: \"Tato položka musí mít nejméně %s znaků.\",\n  maxlength: \"Tato položka musí mít nejvíce %s znaků.\",\n  length: \"Tato položka musí mít délku od %s do %s znaků.\",\n  mincheck: \"Je nutné vybrat alespoň %s možností.\",\n  maxcheck: \"Je nutné vybrat nejvýše %s možností.\",\n  check: \"Je nutné vybrat od %s do %s možností.\",\n  equalto: \"Tato položka musí být stejná.\"\n});\nParsley.setLocale('cs');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/cs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/cs.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});