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

/***/ "./src/libs/parsleyjs/i18n/hr.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/hr.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('hr', {\n  defaultMessage: \"Neispravan unos.\",\n  type: {\n    email: \"Ovo polje treba sadržavati ispravnu email adresu.\",\n    url: \"Ovo polje treba sadržavati ispravni url.\",\n    number: \"Ovo polje treba sadržavati ispravno upisan broj.\",\n    integer: \"Ovo polje treba sadržavati ispravno upisan cijeli broj.\",\n    digits: \"Ovo polje treba sadržavati znamenke.\",\n    alphanum: \"Ovo polje treba sadržavati brojke ili slova.\"\n  },\n  notblank: \"Ovo polje ne smije biti prazno.\",\n  required: \"Ovo polje je obavezno.\",\n  pattern: \"Neispravan unos.\",\n  min: \"Vrijednost treba biti jednaka ili veća od %s.\",\n  max: \"Vrijednost treba biti jednaka ili manja od %s.\",\n  range: \"Vrijednost treba biti između %s i %s.\",\n  minlength: \"Unos je prekratak. Treba sadržavati %s ili više znakova.\",\n  maxlength: \"Unos je predugačak. Treba sadržavati %s ili manje znakova.\",\n  length: \"Neispravna duljina unosa. Treba sadržavati između %s i %s znakova.\",\n  mincheck: \"Treba odabrati najmanje %s izbora.\",\n  maxcheck: \"Treba odabrati %s ili manje izbora.\",\n  check: \"Treba odabrati između %s i %s izbora.\",\n  equalto: \"Ova vrijednost treba biti ista.\"\n});\nParsley.setLocale('hr');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/hr.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/hr.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});