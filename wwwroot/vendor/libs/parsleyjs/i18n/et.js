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

/***/ "./src/libs/parsleyjs/i18n/et.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/et.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('et', {\n  defaultMessage: \"See väärtus ei sobi.\",\n  type: {\n    email: \"See väärtus peab olema kehtiv email.\",\n    url: \"See väärtus peab olema kehtiv link.\",\n    number: \"See väärtus peab olema number.\",\n    integer: \"See väärtus peab olema täisarv.\",\n    digits: \"See väärtus peab olema number.\",\n    alphanum: \"See väärtus peab olema täht või number.\"\n  },\n  notblank: \"See väärtus ei tohi olla tühi.\",\n  required: \"See väärtus on nõutud.\",\n  pattern: \"See väärtus ei sobi.\",\n  min: \"See väärtus peab olema suurem või võrdne %s.\",\n  max: \"See väärtus peab olema väiksem või võrdne %s.\",\n  range: \"See väärtus peab olema %s ja %s vahel.\",\n  minlength: \"See väärtus on liiga lühike. Peab olema vähemalt %s tähte.\",\n  maxlength: \"See väärtus ei tohi olla rohkem kui %s tähte.\",\n  length: \"See väärtuse pikkus ei sobi. Peab olema vahemikus %s - %s.\",\n  mincheck: \"Pead valima vähemalt %s valikut.\",\n  maxcheck: \"Maksimaalselt %s valikut.\",\n  check: \"Valik peab olema vahemikus %s ja %s .\",\n  equalto: \"See väärtus peab olema sama.\"\n});\nParsley.setLocale('et');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/et.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/et.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});