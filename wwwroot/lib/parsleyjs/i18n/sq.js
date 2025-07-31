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

/***/ "./src/libs/parsleyjs/i18n/sq.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/sq.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('sq', {\n  defaultMessage: \"Kjo vlere eshte e pasakte.\",\n  type: {\n    email: \"Duhet te jete nje email i vlefshem.\",\n    url: \"Duhet te jete nje URL e vlefshme.\",\n    number: \"Duhet te jete numer.\",\n    integer: \"Kjo vlere duhet te jete integer.\",\n    digits: \"Kjo vlere duhet te permbaje digit.\",\n    alphanum: \"Kjo vlere duhet te permbaje vetel alphanumeric.\"\n  },\n  notblank: \"Nuk mund te lihet bosh.\",\n  required: \"Eshte e detyrueshme.\",\n  pattern: \"Kjo vlere eshte e pasakte.\",\n  min: \"Duhet te jete me e madhe ose baraz me %s.\",\n  max: \"Duhet te jete me e vogel ose baraz me %s.\",\n  range: \"Duhet te jete midis %s dhe %s.\",\n  minlength: \"Kjo vlere eshte shume e shkurter. Ajo duhet te permbaje min %s karaktere.\",\n  maxlength: \"Kjo vlere eshte shume e gjate. Ajo duhet te permbaje max %s karaktere.\",\n  length: \"Gjatesia e kesaj vlere eshte e pasakte. Ajo duhet te jete midis %s dhe %s karakteresh.\",\n  mincheck: \"Ju duhet te zgjidhni te pakten %s vlere.\",\n  maxcheck: \"Ju duhet te zgjidhni max %s vlera.\",\n  check: \"Ju mund te zgjidhni midis %s dhe %s vlerash.\",\n  equalto: \"Kjo vlere duhet te jete e njejte.\"\n});\nParsley.setLocale('sq');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/sq.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/sq.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});