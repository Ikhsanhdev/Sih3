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

/***/ "./src/libs/parsleyjs/i18n/fa.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/fa.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('fa', {\n  defaultMessage: \"این مقدار صحیح نمی باشد\",\n  type: {\n    email: \"این مقدار باید یک ایمیل معتبر باشد\",\n    url: \"این مقدار باید یک آدرس معتبر باشد\",\n    number: \"این مقدار باید یک عدد معتبر باشد\",\n    integer: \"این مقدار باید یک عدد صحیح معتبر باشد\",\n    digits: \"این مقدار باید یک عدد باشد\",\n    alphanum: \"این مقدار باید حروف الفبا باشد\"\n  },\n  notblank: \"این مقدار نباید خالی باشد\",\n  required: \"این مقدار باید وارد شود\",\n  pattern: \"این مقدار به نظر می رسد نامعتبر است\",\n  min: \"این مقدیر باید بزرگتر با مساوی %s باشد\",\n  max: \"این مقدار باید کمتر و یا مساوی %s باشد\",\n  range: \"این مقدار باید بین %s و %s باشد\",\n  minlength: \"این مقدار بیش از حد کوتاه است. باید %s کاراکتر یا بیشتر باشد.\",\n  maxlength: \"این مقدار بیش از حد طولانی است. باید %s کاراکتر یا کمتر باشد.\",\n  length: \"این مقدار نامعتبر است و باید بین %s و %s باشد\",\n  mincheck: \"شما حداقل باید %s گزینه را انتخاب کنید.\",\n  maxcheck: \"شما حداکثر می‌توانید %s انتخاب داشته باشید.\",\n  check: \"باید بین %s و %s مورد انتخاب کنید\",\n  equalto: \"این مقدار باید یکسان باشد\"\n});\nParsley.setLocale('fa');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/fa.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/fa.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});