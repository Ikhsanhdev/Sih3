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

/***/ "./src/libs/parsleyjs/i18n/ar.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/ar.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('ar', {\n  defaultMessage: \"تأكد من صحة القيمة المدخل\",\n  type: {\n    email: \"تأكد من إدخال بريد الكتروني صحيح\",\n    url: \"تأكد من إدخال رابط صحيح\",\n    number: \"تأكد من إدخال رقم\",\n    integer: \"تأكد من إدخال عدد صحيح بدون كسور\",\n    digits: \"تأكد من إدخال رقم\",\n    alphanum: \"تأكد من إدخال حروف وأرقام فقط\"\n  },\n  notblank: \"تأكد من تعبئة الحقل\",\n  required: \"هذا الحقل مطلوب\",\n  pattern: \"القيمة المدخلة غير صحيحة\",\n  min: \"القيمة المدخلة يجب أن تكون أكبر من %s.\",\n  max: \"القيمة المدخلة يجب أن تكون أصغر من %s.\",\n  range: \"القيمة المدخلة يجب أن تكون بين %s و %s.\",\n  minlength: \"القيمة المدخلة قصيرة جداً . تأكد من إدخال %s حرف أو أكثر\",\n  maxlength: \"القيمة المدخلة طويلة . تأكد من إدخال %s حرف أو أقل\",\n  length: \"القيمة المدخلة غير صحيحة. تأكد من إدخال بين  %s و %s خانة\",\n  mincheck: \"يجب اختيار %s خيار على الأقل.\",\n  maxcheck: \"يجب اختيار%s خيار أو أقل\",\n  check: \"يجب اختيار بين %s و %s خيار.\",\n  equalto: \"تأكد من تطابق القيمتين المدخلة.\"\n});\nParsley.setLocale('ar');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/ar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/ar.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});