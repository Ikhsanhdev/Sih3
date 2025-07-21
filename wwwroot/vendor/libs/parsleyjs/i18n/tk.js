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

/***/ "./src/libs/parsleyjs/i18n/tk.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/tk.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('tk', {\n  defaultMessage: \"Bu maglumat nädogry.\",\n  type: {\n    email: \"Dogry e-poçta adresi ýazmaly.\",\n    url: \"Dogry web sahypa salgysy ýazmaly.\",\n    number: \"Dogry san ýazmaly.\",\n    integer: \"Dogry bitin san ýazmaly.\",\n    digits: \"San ýazmaly.\",\n    alphanum: \"San ýa-da harp ýazmaly.\"\n  },\n  notblank: \"Bu ýeri boş goýmaly däl.\",\n  required: \"Bu ýeri doldurmak hökmany.\",\n  pattern: \"Bu maglumat nädogry.\",\n  min: \"Iň azyndan %s ýa-da ondan uly bolmaly.\",\n  max: \"Iň köp %s ýa-da ondan kiçi bolmaly.\",\n  range: \"Bu ýer %s we %s aralygynda san bolmaly.\",\n  minlength: \"Bu ýeriň uzynlygy iň azyndan %s harp ýa-da ondan köp bolmaly.\",\n  maxlength: \"Bu ýeriň uzynlygy iň köp %s harp ýa-da ondan az bolmaly.\",\n  length: \"Bu ýeriň uzynlygy %s we %s harp aralygynda bolmaly.\",\n  mincheck: \"Iň azyndan %s sanysyny saýlamaly.\",\n  maxcheck: \"Iň köp %s sanysyny saýlamaly.\",\n  check: \"Iň az %s, iň köp %s sanysyny saýlamaly.\",\n  equalto: \"Bu maglumat deň bolmaly.\"\n});\nParsley.setLocale('tk');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/tk.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/tk.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});