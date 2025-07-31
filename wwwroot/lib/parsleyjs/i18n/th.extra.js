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

/***/ "./src/libs/parsleyjs/i18n/th.extra.js":
/*!*********************************************!*\
  !*** ./src/libs/parsleyjs/i18n/th.extra.js ***!
  \*********************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('th', {\n  dateiso: \"วันที่ต้องมีรูปแบบเป็น YYYY-MM-DD\",\n  date: \"วันที่ไม่ถูกต้องตามรูปแบบ %s\",\n  datebeforenow: \"วันที่ต้องมีรูปแบบเป็น %s และเป็นวันที่ก่อนวันปัจจุบัน\",\n  dateafternow: \"วันที่ต้องมีรูปแบบเป็น %s และเป็นวันที่หลังวันปัจจุบัน\",\n  minwords: \"กรุณากรอกอย่างน้อย %s คำ\",\n  maxwords: \"กรอกได้ไม่เกิน %s คำ\",\n  words: \"จำนวนคำต้องอยู่ระหว่าง %s ถึง %s คำ\",\n  gt: \"กรุณากรอกค่าที่มากกว่า %s\",\n  gte: \"กรุณากรอกค่าที่มากกว่าหรือเท่ากับ %s\",\n  lt: \"กรุณากรอกค่าที่น้อยกว่า %s\",\n  lte: \"กรุณากรอกค่าที่น้อยกว่าหรือเท่ากับ %s\",\n  notequalto: \"ค่าที่กรอกต้องเหมือนกับ %s\"\n});\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/th.extra.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/th.extra.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});