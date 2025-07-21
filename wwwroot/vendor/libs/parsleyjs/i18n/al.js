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

/***/ "./src/libs/parsleyjs/i18n/al.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/al.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n\nParsley.addMessages('al', {\n  defaultMessage: \"Kjo vlerë është invalide.\",\n  type: {\n    email: \"Kjo vlerë duhet të ketë formë valide të një email adrese.\",\n    url: \"Kjo vlerë duhet të ketë formë valide të një URL-je.\",\n    number: \"Kjo vlerë duhet të jetë numërike.\",\n    integer: \"Kjo vlerë duhet të jetë numër i plotë.\",\n    digits: \"Kjo vlerë duhet të jetë shifër.\",\n    alphanum: \"Kjo vlerë duhet të jetë alfanumerike.\"\n  },\n  notblank: \"Kjo vlerë nuk duhet të jetë e zbrazët.\",\n  required: \"Kjo vlerë kërkohet domosdosmërisht.\",\n  pattern: \"Kjo vlerë është invalide.\",\n  min: \"Kjo vlerë duhet të jetë më e madhe ose e barabartë me %s.\",\n  max: \"Kjo vlerë duhet të jetë më e vogël ose e barabartë me %s.\",\n  range: \"Kjo vlerë duhet të jetë në mes të %s dhe %s.\",\n  minlength: \"Kjo vlerë është shum e shkurtë. Ajo duhet të ketë %s apo më shum shkronja.\",\n  maxlength: \"Kjo vlerë është shum e gjatë. Ajo duhet të ketë %s apo më pak shkronja\",\n  length: \"Gjatësia e kësaj vlere është invalide. Ajo duhet të jetë në mes të %s dhe %s shkronjash.\",\n  mincheck: \"Ju duhet të zgjedhni së paku %s zgjedhje.\",\n  maxcheck: \"Ju duhet të zgjedhni %s ose më pak zgjedhje.\",\n  check: \"Ju duhet të zgjedhni në mes të %s dhe %s zgjedhjeve.\",\n  equalto: \"Kjo vlerë duhet të jetë e njejtë.\"\n});\nParsley.setLocale('al');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/al.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/al.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});