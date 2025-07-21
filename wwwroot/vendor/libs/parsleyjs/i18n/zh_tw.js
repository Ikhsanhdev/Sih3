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

/***/ "./src/libs/parsleyjs/i18n/zh_tw.js":
/*!******************************************!*\
  !*** ./src/libs/parsleyjs/i18n/zh_tw.js ***!
  \******************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('zh-tw', {\n  defaultMessage: \"這個值似乎是無效的。\",\n  type: {\n    email: \"請輸入一個正確的電子郵件地址。\",\n    url: \"請輸入一個有效的網址。\",\n    number: \"請輸入一個數字。\",\n    integer: \"請輸入一個整數。\",\n    digits: \"這個欄位只接受數字。\",\n    alphanum: \"這個欄位只接受英文字母或是數字。\"\n  },\n  notblank: \"這個欄位不能為空白。\",\n  required: \"這個欄位必須填寫。\",\n  pattern: \"這個值似乎是無效的。\",\n  min: \"輸入的值應該大於或等於 %s\",\n  max: \"輸入的值應該小於或等於 %s\",\n  range: \"輸入的值應該在 %s 和 %s 之間。\",\n  minlength: \"輸入的值至少要有 %s 個字元。\",\n  maxlength: \"輸入的值最多可以有 %s 個字元。\",\n  length: \"字元長度應該在 %s 和 %s 之間。\",\n  mincheck: \"你至少要選擇 %s 個項目。\",\n  maxcheck: \"你最多可選擇 %s 個項目。\",\n  check: \"你必須選擇 %s 到 %s 個項目。\",\n  equalto: \"輸入值不同。\"\n});\nParsley.setLocale('zh-tw');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/zh_tw.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/zh_tw.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});