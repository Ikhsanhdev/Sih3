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

/***/ "./src/libs/parsleyjs/i18n/hu.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/hu.js ***!
  \***************************************/
/***/ (() => {

eval("// This is included with the Parsley library itself,\n// thus there is no use in adding it to your project.\n\nParsley.addMessages('hu', {\n  defaultMessage: \"Érvénytelen mező.\",\n  type: {\n    email: \"Érvénytelen email cím.\",\n    url: \"Érvénytelen URL cím.\",\n    number: \"Érvénytelen szám.\",\n    integer: \"Érvénytelen egész szám.\",\n    digits: \"Érvénytelen szám.\",\n    alphanum: \"Érvénytelen alfanumerikus érték.\"\n  },\n  notblank: \"Ez a mező nem maradhat üresen.\",\n  required: \"A mező kitöltése kötelező.\",\n  pattern: \"Érvénytelen érték.\",\n  min: \"A mező értéke nagyobb vagy egyenlő kell legyen mint %s.\",\n  max: \"A mező értéke kisebb vagy egyenlő kell legyen mint %s.\",\n  range: \"A mező értéke %s és %s közé kell essen.\",\n  minlength: \"Legalább %s karakter megadása szükséges.\",\n  maxlength: \"Legfeljebb %s karakter megadása engedélyezett.\",\n  length: \"Nem megfelelő karakterszám. Minimum %s, maximum %s karakter adható meg.\",\n  mincheck: \"Legalább %s értéket kell kiválasztani.\",\n  maxcheck: \"Maximum %s értéket lehet kiválasztani.\",\n  check: \"Legalább %s, legfeljebb %s értéket kell kiválasztani.\",\n  equalto: \"A mező értéke nem egyező.\"\n});\nParsley.setLocale('hu');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/hu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/hu.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});