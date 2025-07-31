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

/***/ "./src/libs/parsleyjs/i18n/zh_cn.js":
/*!******************************************!*\
  !*** ./src/libs/parsleyjs/i18n/zh_cn.js ***!
  \******************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('zh-cn', {\n  defaultMessage: \"不正确的值\",\n  type: {\n    email: \"请输入一个有效的电子邮箱地址\",\n    url: \"请输入一个有效的链接\",\n    number: \"请输入正确的数字\",\n    integer: \"请输入正确的整数\",\n    digits: \"请输入正确的号码\",\n    alphanum: \"请输入字母或数字\"\n  },\n  notblank: \"请输入值\",\n  required: \"必填项\",\n  pattern: \"格式不正确\",\n  min: \"输入值请大于或等于 %s\",\n  max: \"输入值请小于或等于 %s\",\n  range: \"输入值应该在 %s 到 %s 之间\",\n  minlength: \"请输入至少 %s 个字符\",\n  maxlength: \"请输入至多 %s 个字符\",\n  length: \"字符长度应该在 %s 到 %s 之间\",\n  mincheck: \"请至少选择 %s 个选项\",\n  maxcheck: \"请选择不超过 %s 个选项\",\n  check: \"请选择 %s 到 %s 个选项\",\n  equalto: \"输入值不同\"\n});\nParsley.setLocale('zh-cn');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/zh_cn.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/zh_cn.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});