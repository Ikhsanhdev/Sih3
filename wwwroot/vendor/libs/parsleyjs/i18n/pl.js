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

/***/ "./src/libs/parsleyjs/i18n/pl.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/pl.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('pl', {\n  defaultMessage: \"Wartość wygląda na nieprawidłową\",\n  type: {\n    email: \"Wpisz poprawny adres e-mail.\",\n    url: \"Wpisz poprawny adres URL.\",\n    number: \"Wpisz poprawną liczbę.\",\n    integer: \"Dozwolone są jedynie liczby całkowite.\",\n    digits: \"Dozwolone są jedynie cyfry.\",\n    alphanum: \"Dozwolone są jedynie znaki alfanumeryczne.\"\n  },\n  notblank: \"Pole nie może być puste.\",\n  required: \"Pole jest wymagane.\",\n  pattern: \"Pole zawiera nieprawidłową wartość.\",\n  min: \"Wartość nie może być mniejsza od %s.\",\n  max: \"Wartość nie może być większa od %s.\",\n  range: \"Wartość powinna zawierać się pomiędzy %s a %s.\",\n  minlength: \"Minimalna ilość znaków wynosi %s.\",\n  maxlength: \"Maksymalna ilość znaków wynosi %s.\",\n  length: \"Ilość znaków wynosi od %s do %s.\",\n  mincheck: \"Wybierz minimalnie %s opcji.\",\n  maxcheck: \"Wybierz maksymalnie %s opcji.\",\n  check: \"Wybierz od %s do %s opcji.\",\n  equalto: \"Wartości nie są identyczne.\"\n});\nParsley.setLocale('pl');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/pl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/pl.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});