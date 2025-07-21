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

/***/ "./src/libs/parsleyjs/i18n/sl.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/sl.js ***!
  \***************************************/
/***/ (() => {

eval("// This is included with the Parsley library itself,\n// thus there is no use in adding it to your project.\n\nParsley.addMessages('sl', {\n  defaultMessage: \"Podatek ne ustreza vpisnim kriterijem.\",\n  type: {\n    email: \"Vpišite pravilen email.\",\n    url: \"Vpišite pravilen url naslov.\",\n    number: \"Vpišite številko.\",\n    integer: \"Vpišite celo število brez decimalnih mest.\",\n    digits: \"Vpišite samo cifre.\",\n    alphanum: \"Vpišite samo alfanumerične znake (cifre in črke).\"\n  },\n  notblank: \"To polje ne sme biti prazno.\",\n  required: \"To polje je obvezno.\",\n  pattern: \"Podatek ne ustreza vpisnim kriterijem.\",\n  min: \"Vrednost mora biti višja ali enaka kot %s.\",\n  max: \"Vrednost mora biti nižja ali enaka kot  %s.\",\n  range: \"Vrednost mora biti med %s in %s.\",\n  minlength: \"Vpis je prekratek. Mora imeti najmanj %s znakov.\",\n  maxlength: \"Vpis je predolg. Lahko ima največ %s znakov.\",\n  length: \"Število vpisanih znakov je napačno. Število znakov je lahko samo med %s in %s.\",\n  mincheck: \"Izbrati morate vsaj %s možnosti.\",\n  maxcheck: \"Izberete lahko največ %s možnosti.\",\n  check: \"Število izbranih možnosti je lahko samo med %s in %s.\",\n  equalto: \"Vnos mora biti enak.\"\n});\nParsley.setLocale('sl');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/sl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/sl.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});