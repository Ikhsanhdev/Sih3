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

/***/ "./src/libs/parsleyjs/i18n/tr.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/tr.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('tr', {\n  defaultMessage: \"Girdiğiniz değer geçerli değil.\",\n  type: {\n    email: \"Geçerli bir e-mail adresi yazmanız gerekiyor.\",\n    url: \"Geçerli bir bağlantı adresi yazmanız gerekiyor.\",\n    number: \"Geçerli bir sayı yazmanız gerekiyor.\",\n    integer: \"Geçerli bir tamsayı yazmanız gerekiyor.\",\n    digits: \"Geçerli bir rakam yazmanız gerekiyor.\",\n    alphanum: \"Geçerli bir alfanümerik değer yazmanız gerekiyor.\"\n  },\n  notblank: \"Bu alan boş bırakılamaz.\",\n  required: \"Bu alan boş bırakılamaz.\",\n  pattern: \"Girdiğiniz değer geçerli değil.\",\n  min: \"Bu alan %s değerinden büyük ya da bu değere eşit olmalı.\",\n  max: \"Bu alan %s değerinden küçük ya da bu değere eşit olmalı.\",\n  range: \"Bu alan %s ve %s değerleri arasında olmalı.\",\n  minlength: \"Bu alanın uzunluğu %s karakter veya daha fazla olmalı.\",\n  maxlength: \"Bu alanın uzunluğu %s karakter veya daha az olmalı.\",\n  length: \"Bu alanın uzunluğu %s ve %s karakter arasında olmalı.\",\n  mincheck: \"En az %s adet seçim yapmalısınız.\",\n  maxcheck: \"En fazla %s seçim yapabilirsiniz.\",\n  check: \"Bu alan için en az %s, en fazla %s seçim yapmalısınız.\",\n  equalto: \"Bu alanın değeri aynı olmalı.\"\n});\nParsley.setLocale('tr');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/tr.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/tr.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});