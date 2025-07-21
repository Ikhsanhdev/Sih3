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

/***/ "./src/libs/parsleyjs/i18n/da.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/da.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('da', {\n  defaultMessage: \"Indtast venligst en korrekt værdi.\",\n  type: {\n    email: \"Indtast venligst en korrekt emailadresse.\",\n    url: \"Indtast venligst en korrekt internetadresse.\",\n    number: \"Indtast venligst et tal.\",\n    integer: \"Indtast venligst et heltal.\",\n    digits: \"Dette felt må kun bestå af tal.\",\n    alphanum: \"Dette felt skal indeholde både tal og bogstaver.\"\n  },\n  notblank: \"Dette felt må ikke være tomt.\",\n  required: \"Dette felt er påkrævet.\",\n  pattern: \"Ugyldig indtastning.\",\n  min: \"Dette felt skal indeholde et tal som er større end eller lig med %s.\",\n  max: \"Dette felt skal indeholde et tal som er mindre end eller lig med %s.\",\n  range: \"Dette felt skal indeholde et tal mellem %s og %s.\",\n  minlength: \"Indtast venligst mindst %s tegn.\",\n  maxlength: \"Dette felt kan højst indeholde %s tegn.\",\n  length: \"Længden af denne værdi er ikke korrekt. Værdien skal være mellem %s og %s tegn lang.\",\n  mincheck: \"Vælg mindst %s muligheder.\",\n  maxcheck: \"Vælg op til %s muligheder.\",\n  check: \"Vælg mellem %s og %s muligheder.\",\n  equalto: \"De to felter er ikke ens.\"\n});\nParsley.setLocale('da');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/da.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/da.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});