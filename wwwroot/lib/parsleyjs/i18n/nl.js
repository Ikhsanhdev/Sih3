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

/***/ "./src/libs/parsleyjs/i18n/nl.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/nl.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('nl', {\n  defaultMessage: \"Deze waarde lijkt onjuist.\",\n  type: {\n    email: \"Dit lijkt geen geldig e-mail adres te zijn.\",\n    url: \"Dit lijkt geen geldige URL te zijn.\",\n    number: \"Deze waarde moet een nummer zijn.\",\n    integer: \"Deze waarde moet een nummer zijn.\",\n    digits: \"Deze waarde moet numeriek zijn.\",\n    alphanum: \"Deze waarde moet alfanumeriek zijn.\"\n  },\n  notblank: \"Deze waarde mag niet leeg zijn.\",\n  required: \"Dit veld is verplicht.\",\n  pattern: \"Deze waarde lijkt onjuist te zijn.\",\n  min: \"Deze waarde mag niet lager zijn dan %s.\",\n  max: \"Deze waarde mag niet groter zijn dan %s.\",\n  range: \"Deze waarde moet tussen %s en %s liggen.\",\n  minlength: \"Deze tekst is te kort. Deze moet uit minimaal %s karakters bestaan.\",\n  maxlength: \"Deze waarde is te lang. Deze mag maximaal %s karakters lang zijn.\",\n  length: \"Deze waarde moet tussen %s en %s karakters lang zijn.\",\n  equalto: \"Deze waardes moeten identiek zijn.\"\n});\nParsley.setLocale('nl');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/nl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/nl.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});