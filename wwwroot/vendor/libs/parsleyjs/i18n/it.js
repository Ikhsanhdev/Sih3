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

/***/ "./src/libs/parsleyjs/i18n/it.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/it.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('it', {\n  defaultMessage: \"Questo valore sembra essere non valido.\",\n  type: {\n    email: \"Questo valore deve essere un indirizzo email valido.\",\n    url: \"Questo valore deve essere un URL valido.\",\n    number: \"Questo valore deve essere un numero valido.\",\n    integer: \"Questo valore deve essere un numero valido.\",\n    digits: \"Questo valore deve essere di tipo numerico.\",\n    alphanum: \"Questo valore deve essere di tipo alfanumerico.\"\n  },\n  notblank: \"Questo valore non deve essere vuoto.\",\n  required: \"Questo valore è richiesto.\",\n  pattern: \"Questo valore non è corretto.\",\n  min: \"Questo valore deve essere maggiore di %s.\",\n  max: \"Questo valore deve essere minore di %s.\",\n  range: \"Questo valore deve essere compreso tra %s e %s.\",\n  minlength: \"Questo valore è troppo corto. La lunghezza minima è di %s caratteri.\",\n  maxlength: \"Questo valore è troppo lungo. La lunghezza massima è di %s caratteri.\",\n  length: \"La lunghezza di questo valore deve essere compresa fra %s e %s caratteri.\",\n  mincheck: \"Devi scegliere almeno %s opzioni.\",\n  maxcheck: \"Devi scegliere al più %s opzioni.\",\n  check: \"Devi scegliere tra %s e %s opzioni.\",\n  equalto: \"Questo valore deve essere identico.\",\n  euvatin: \"Non è un codice IVA valido\"\n});\nParsley.setLocale('it');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/it.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/it.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});