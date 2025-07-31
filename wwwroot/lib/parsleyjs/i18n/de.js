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

/***/ "./src/libs/parsleyjs/i18n/de.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/de.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('de', {\n  defaultMessage: \"Die Eingabe scheint nicht korrekt zu sein.\",\n  type: {\n    email: \"Die Eingabe muss eine gültige E-Mail-Adresse sein.\",\n    url: \"Die Eingabe muss eine gültige URL sein.\",\n    number: \"Die Eingabe muss eine Zahl sein.\",\n    integer: \"Die Eingabe muss eine Zahl sein.\",\n    digits: \"Die Eingabe darf nur Ziffern enthalten.\",\n    alphanum: \"Die Eingabe muss alphanumerisch sein.\"\n  },\n  notblank: \"Die Eingabe darf nicht leer sein.\",\n  required: \"Dies ist ein Pflichtfeld.\",\n  pattern: \"Die Eingabe scheint ungültig zu sein.\",\n  min: \"Die Eingabe muss größer oder gleich %s sein.\",\n  max: \"Die Eingabe muss kleiner oder gleich %s sein.\",\n  range: \"Die Eingabe muss zwischen %s und %s liegen.\",\n  minlength: \"Die Eingabe ist zu kurz. Es müssen mindestens %s Zeichen eingegeben werden.\",\n  maxlength: \"Die Eingabe ist zu lang. Es dürfen höchstens %s Zeichen eingegeben werden.\",\n  length: \"Die Länge der Eingabe ist ungültig. Es müssen zwischen %s und %s Zeichen eingegeben werden.\",\n  mincheck: \"Wählen Sie mindestens %s Angaben aus.\",\n  maxcheck: \"Wählen Sie maximal %s Angaben aus.\",\n  check: \"Wählen Sie zwischen %s und %s Angaben.\",\n  equalto: \"Dieses Feld muss dem anderen entsprechen.\"\n});\nParsley.setLocale('de');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/de.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/de.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});