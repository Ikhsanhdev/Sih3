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

/***/ "./src/libs/parsleyjs/i18n/bg.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/bg.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('bg', {\n  defaultMessage: \"Невалидна стойност.\",\n  type: {\n    email: \"Невалиден имейл адрес.\",\n    url: \"Невалиден URL адрес.\",\n    number: \"Невалиден номер.\",\n    integer: \"Невалиден номер.\",\n    digits: \"Невалидни цифри.\",\n    alphanum: \"Стойността трябва да садържа само букви или цифри.\"\n  },\n  notblank: \"Полето е задължително.\",\n  required: \"Полето е задължително.\",\n  pattern: \"Невалидна стойност.\",\n  min: \"Стойността трябва да бъде по-голяма или равна на %s.\",\n  max: \"Стойността трябва да бъде по-малка или равна на %s.\",\n  range: \"Стойността трябва да бъде между %s и %s.\",\n  minlength: \"Стойността е прекалено кратка. Мин. дължина: %s символа.\",\n  maxlength: \"Стойността е прекалено дълга. Макс. дължина: %s символа.\",\n  length: \"Дължината на стойността трябва да бъде между %s и %s символа.\",\n  mincheck: \"Трябва да изберете поне %s стойности.\",\n  maxcheck: \"Трябва да изберете най-много %s стойности.\",\n  check: \"Трябва да изберете между %s и %s стойности.\",\n  equalto: \"Стойността трябва да съвпада.\"\n});\nParsley.setLocale('bg');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/bg.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/bg.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});