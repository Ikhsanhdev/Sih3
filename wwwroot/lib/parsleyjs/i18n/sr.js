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

/***/ "./src/libs/parsleyjs/i18n/sr.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/sr.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('sr', {\n  defaultMessage: \"Uneta vrednost nije validna.\",\n  type: {\n    email: \"Unesite pravilnu email adresu.\",\n    url: \"Unesite pravilnu url adresu.\",\n    number: \"Unesite numeričku vrednost.\",\n    integer: \"Unesite ceo broj bez decimala.\",\n    digits: \"Unesite samo brojeve.\",\n    alphanum: \"Unesite samo alfanumeričke znake (slova i brojeve).\"\n  },\n  notblank: \"Ovo polje ne sme biti prazno.\",\n  required: \"Ovo polje je obavezno.\",\n  pattern: \"Uneta vrednost nije validna.\",\n  min: \"Vrednost mora biti veća ili jednaka %s.\",\n  max: \"Vrednost mora biti manja ili jednaka %s.\",\n  range: \"Vrednost mora biti između %s i %s.\",\n  minlength: \"Unos je prekratak. Mora imati najmanje %s znakova.\",\n  maxlength: \"Unos je predug. Može imati najviše %s znakova.\",\n  length: \"Dužina unosa je pogrešna. Broj znakova mora biti između %s i %s.\",\n  mincheck: \"Morate izabrati minimalno %s opcija.\",\n  maxcheck: \"Možete izabrati najviše %s opcija.\",\n  check: \"Broj izabranih opcija mora biti između %s i %s.\",\n  equalto: \"Unos mora biti jednak.\"\n});\nParsley.setLocale('sr');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/sr.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/sr.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});