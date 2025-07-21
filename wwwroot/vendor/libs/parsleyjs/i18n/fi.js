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

/***/ "./src/libs/parsleyjs/i18n/fi.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/fi.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('fi', {\n  defaultMessage: \"Sy&ouml;tetty arvo on virheellinen.\",\n  type: {\n    email: \"S&auml;hk&ouml;postiosoite on virheellinen.\",\n    url: \"Url-osoite on virheellinen.\",\n    number: \"Sy&ouml;t&auml; numero.\",\n    integer: \"Sy&ouml;t&auml; kokonaisluku.\",\n    digits: \"Sy&ouml;t&auml; ainoastaan numeroita.\",\n    alphanum: \"Sy&ouml;t&auml; ainoastaan kirjaimia tai numeroita.\"\n  },\n  notblank: \"T&auml;m&auml; kentt&auml;&auml; ei voi j&auml;tt&auml;&auml; tyhj&auml;ksi.\",\n  required: \"T&auml;m&auml; kentt&auml; on pakollinen.\",\n  pattern: \"Sy&ouml;tetty arvo on virheellinen.\",\n  min: \"Sy&ouml;t&auml; arvo joka on yht&auml; suuri tai suurempi kuin %s.\",\n  max: \"Sy&ouml;t&auml; arvo joka on pienempi tai yht&auml; suuri kuin %s.\",\n  range: \"Sy&ouml;t&auml; arvo v&auml;lilt&auml;: %s-%s.\",\n  minlength: \"Sy&ouml;tetyn arvon t&auml;ytyy olla v&auml;hint&auml;&auml;n %s merkki&auml; pitk&auml;.\",\n  maxlength: \"Sy&ouml;tetty arvo saa olla enint&auml;&auml;n %s merkki&auml; pitk&auml;.\",\n  length: \"Sy&ouml;tetyn arvon t&auml;ytyy olla v&auml;hint&auml;&auml;n %s ja enint&auml;&auml;n %s merkki&auml; pitk&auml;.\",\n  mincheck: \"Valitse v&auml;hint&auml;&auml;n %s vaihtoehtoa.\",\n  maxcheck: \"Valitse enint&auml;&auml;n %s vaihtoehtoa.\",\n  check: \"Valitse %s-%s vaihtoehtoa.\",\n  equalto: \"Salasanat eiv&auml;t t&auml;sm&auml;&auml;.\"\n});\nParsley.setLocale('fi');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/fi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/fi.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});