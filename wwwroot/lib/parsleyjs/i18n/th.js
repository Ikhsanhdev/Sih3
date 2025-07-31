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

/***/ "./src/libs/parsleyjs/i18n/th.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/th.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('th', {\n  defaultMessage: \"ค่านี้ดูเหมือนว่าจะไม่ถูกต้อง\",\n  type: {\n    email: \"กรุณากรอกอีเมลให้ถูกต้อง\",\n    url: \"กรุณากรอก url ให้ถูกต้อง\",\n    number: \"กรุณากรอกตัวเลข\",\n    integer: \"กรุณากรอกจำนวนเต็ม\",\n    digits: \"กรุณากรอกเลขทศนิยม\",\n    alphanum: \"กรุณากรอกตัวอักษรและตัวเลข\"\n  },\n  notblank: \"ห้ามเป็นค่าว่าง\",\n  required: \"จำเป็นต้องกรอก\",\n  pattern: \"รูปแบบไม่ถูกต้อง\",\n  min: \"ต้องมากกว่าหรือเท่ากับ %s\",\n  max: \"ต้องน้อยกว่าหรือเท่ากับ %s\",\n  range: \"ต้องอยู่ระหว่าง %s และ %s\",\n  minlength: \"กรุณากรอกอย่างน้อย %s ตัวอักษร\",\n  maxlength: \"กรอกได้ไม่เกิน %s ตัวอักษร\",\n  length: \"ความยาวตัวอักษรต้องอยู่ระหว่าง %s ถึง %s ตัวอักษร\",\n  mincheck: \"กรุณาเลือกอย่างน้อย %s ตัวเลือก\",\n  maxcheck: \"เลือกได้ไม่เกิน %s ตัวเลือก\",\n  check: \"กรุณาเลือกระหว่าง %s และ %s ตัวเลือก\",\n  equalto: \"ค่าที่กรอกไม่เหมืิอนกัน\",\n  euvatin: \"หมายเลขประจำตัวผู้เสียภาษีไม่ถูกต้อง\"\n});\nParsley.setLocale('th');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/th.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/th.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});