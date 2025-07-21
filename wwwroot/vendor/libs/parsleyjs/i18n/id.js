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

/***/ "./src/libs/parsleyjs/i18n/id.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/id.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('id', {\n  defaultMessage: \"tidak valid\",\n  type: {\n    email: \"email tidak valid\",\n    url: \"url tidak valid\",\n    number: \"nomor tidak valid\",\n    integer: \"integer tidak valid\",\n    digits: \"harus berupa digit\",\n    alphanum: \"harus berupa alphanumeric\"\n  },\n  notblank: \"tidak boleh kosong\",\n  required: \"tidak boleh kosong\",\n  pattern: \"tidak valid\",\n  min: \"harus lebih besar atau sama dengan %s.\",\n  max: \"harus lebih kecil atau sama dengan %s.\",\n  range: \"harus dalam rentang %s dan %s.\",\n  minlength: \"terlalu pendek, minimal %s karakter atau lebih.\",\n  maxlength: \"terlalu panjang, maksimal %s karakter atau kurang.\",\n  length: \"panjang karakter harus dalam rentang %s dan %s\",\n  mincheck: \"pilih minimal %s pilihan\",\n  maxcheck: \"pilih maksimal %s pilihan\",\n  check: \"pilih antar %s dan %s pilihan\",\n  equalto: \"harus sama\"\n});\nParsley.setLocale('id');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/id.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/id.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});