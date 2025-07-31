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

/***/ "./src/libs/parsleyjs/i18n/no.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/no.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('no', {\n  defaultMessage: \"Verdien er ugyldig.\",\n  type: {\n    email: \"Verdien må være en gyldig e-postadresse.\",\n    url: \"Verdien må være en gyldig url.\",\n    number: \"Verdien må være et gyldig tall.\",\n    integer: \"Verdien må være et gyldig heltall.\",\n    digits: \"Verdien må være et siffer.\",\n    alphanum: \"Verdien må være alfanumerisk\"\n  },\n  notblank: \"Verdien kan ikke være blank.\",\n  required: \"Verdien er obligatorisk.\",\n  pattern: \"Verdien er ugyldig.\",\n  min: \"Verdien må være større eller lik %s.\",\n  max: \"Verdien må være mindre eller lik %s.\",\n  range: \"Verdien må være mellom %s and %s.\",\n  minlength: \"Verdien er for kort. Den må bestå av minst %s tegn.\",\n  maxlength: \"Verdien er for lang. Den kan bestå av maksimalt %s tegn.\",\n  length: \"Verdien har ugyldig lengde. Den må være mellom %s og %s tegn lang.\",\n  mincheck: \"Du må velge minst %s alternativer.\",\n  maxcheck: \"Du må velge %s eller færre alternativer.\",\n  check: \"Du må velge mellom %s og %s alternativer.\",\n  equalto: \"Verdien må være lik.\"\n});\nParsley.setLocale('no');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/no.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/no.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});