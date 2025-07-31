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

/***/ "./src/libs/parsleyjs/i18n/en.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/en.js ***!
  \***************************************/
/***/ (() => {

eval("// This is included with the Parsley library itself,\n// thus there is no use in adding it to your project.\n\nParsley.addMessages('en', {\n  defaultMessage: \"This value seems to be invalid.\",\n  type: {\n    email: \"This value should be a valid email.\",\n    url: \"This value should be a valid url.\",\n    number: \"This value should be a valid number.\",\n    integer: \"This value should be a valid integer.\",\n    digits: \"This value should be digits.\",\n    alphanum: \"This value should be alphanumeric.\"\n  },\n  notblank: \"This value should not be blank.\",\n  required: \"This value is required.\",\n  pattern: \"This value seems to be invalid.\",\n  min: \"This value should be greater than or equal to %s.\",\n  max: \"This value should be lower than or equal to %s.\",\n  range: \"This value should be between %s and %s.\",\n  minlength: \"This value is too short. It should have %s characters or more.\",\n  maxlength: \"This value is too long. It should have %s characters or fewer.\",\n  length: \"This value length is invalid. It should be between %s and %s characters long.\",\n  mincheck: \"You must select at least %s choices.\",\n  maxcheck: \"You must select %s choices or fewer.\",\n  check: \"You must select between %s and %s choices.\",\n  equalto: \"This value should be the same.\",\n  euvatin: \"It's not a valid VAT Identification Number.\"\n});\nParsley.setLocale('en');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/en.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/en.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});