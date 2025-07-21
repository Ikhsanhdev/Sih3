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

/***/ "./src/libs/parsleyjs/i18n/uk.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/uk.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('uk', {\n  defaultMessage: \"Некоректне значення.\",\n  type: {\n    email: \"Введіть адресу електронної пошти.\",\n    url: \"Введіть URL-адресу.\",\n    number: \"Введіть число.\",\n    integer: \"Введіть ціле число.\",\n    digits: \"Введіть тільки цифри.\",\n    alphanum: \"Введіть буквено-цифрове значення.\"\n  },\n  notblank: \"Це поле повинно бути заповнено.\",\n  required: \"Обов'язкове поле\",\n  pattern: \"Це значення некоректно.\",\n  min: \"Це значення повинно бути не менше ніж %s.\",\n  max: \"Це значення повинно бути не більше ніж %s.\",\n  range: \"Це значення повинно бути від %s до %s.\",\n  minlength: \"Це значення повинно містити не менше ніж %s символів.\",\n  maxlength: \"Це значення повинно містити не більше ніж %s символів.\",\n  length: \"Це значення повинно містити від %s до %s символів.\",\n  mincheck: \"Виберіть не менше %s значень.\",\n  maxcheck: \"Виберіть не більше %s значень.\",\n  check: \"Виберіть від %s до %s значень.\",\n  equalto: \"Це значення повинно збігатися.\"\n});\nParsley.setLocale('uk');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/uk.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/uk.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});