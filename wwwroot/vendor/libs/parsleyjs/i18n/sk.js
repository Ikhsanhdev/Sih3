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

/***/ "./src/libs/parsleyjs/i18n/sk.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/sk.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('sk', {\n  defaultMessage: \"Prosím zadajte správnu hodnotu.\",\n  type: {\n    email: \"Prosím zadajte správnu emailovú adresu.\",\n    url: \"Prosím zadajte platnú URL adresu.\",\n    number: \"Toto pole môže obsahovať len čísla.\",\n    integer: \"Toto pole môže obsahovať len celé čísla.\",\n    digits: \"Toto pole môže obsahovať len kladné celé čísla.\",\n    alphanum: \"Toto pole môže obsahovať len alfanumerické znaky.\"\n  },\n  notblank: \"Toto pole nesmie byť prázdne.\",\n  required: \"Toto pole je povinné.\",\n  pattern: \"Toto pole je neplatné.\",\n  min: \"Prosím zadajte hodnotu väčšiu alebo rovnú %s.\",\n  max: \"Prosím zadajte hodnotu menšiu alebo rovnú %s.\",\n  range: \"Prosím zadajte hodnotu v rozmedzí %s a %s\",\n  minlength: \"Prosím zadajte hodnotu dlhšiu ako %s znakov.\",\n  maxlength: \"Prosím zadajte hodnotu kratšiu ako %s znakov.\",\n  length: \"Prosím zadajte hodnotu medzi %s a %s znakov.\",\n  mincheck: \"Je nutné vybrať minimálne %s možností.\",\n  maxcheck: \"Je nutné vybrať maximálne %s možností.\",\n  check: \"Je nutné vybrať od %s do %s možností.\",\n  equalto: \"Prosím zadajte rovnakú hodnotu.\"\n});\nParsley.setLocale('sk');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/sk.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/sk.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});