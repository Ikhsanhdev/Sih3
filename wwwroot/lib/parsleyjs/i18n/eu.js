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

/***/ "./src/libs/parsleyjs/i18n/eu.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/eu.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('eu', {\n  defaultMessage: \"Balio hau baliogabekoa dirudi.\",\n  type: {\n    email: \"Balio honek posta balioduna izan behar da.\",\n    url: \"Balio honek URL balioduna izan behar da.\",\n    number: \"Balio honek zenbaki balioduna izan behar da.\",\n    integer: \"Balio honek zenbaki balioduna izan behar da.\",\n    digits: \"Balio honek digitu balioduna izan behar da.\",\n    alphanum: \"Balio honek alfanumerikoa izan behar da.\"\n  },\n  notblank: \"Balio honek ezin da hutsik egon.\",\n  required: \"Balio hau nahitaezkoa da.\",\n  pattern: \"Balio hau ez da zuzena.\",\n  min: \"Balio honek %s baino baxuagoa ezin da izan.\",\n  max: \"Balio honek %s baino altuagoa ezin da izan.\",\n  range: \"Balio honek %s eta %s artean egon behar da.\",\n  minlength: \"Balio hau oso motza da. Gutxienezko luzera %s karakteretakoa da.\",\n  maxlength: \"Balio hau oso luzea da. Gehienezko luzera %s karakteretakoa da.\",\n  length: \"Balio honen luzera %s eta %s karaketere artean egon behar da.\",\n  mincheck: \"%s aukera hautatu behar dituzu gutxienez.\",\n  maxcheck: \"%s aukera edo gutxiago hautatu behar dituzu.\",\n  check: \"%s eta %s aukeren artean hautatu behar duzu.\",\n  equalto: \"Balio honek berbera izan behar da.\"\n});\nParsley.setLocale('eu');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/eu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/eu.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});