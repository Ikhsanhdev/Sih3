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

/***/ "./src/libs/parsleyjs/i18n/lv.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/lv.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('lv', {\n  defaultMessage: \"Šis ieraksts veikts nekorekti.\",\n  type: {\n    email: \"Šeit jāieraksta derīgs e-pasts.\",\n    url: \"Šeit jāieraksta korekts url.\",\n    number: \"Šeit jāieraksta derīgs skaitlis.\",\n    integer: \"Šeit jāieraksta vesels skaitlis.\",\n    digits: \"Šeit jāieraksta cipari.\",\n    alphanum: \"Šeit derīgi tikai alfabēta burti vai cipari.\"\n  },\n  notblank: \"Šis ieraksts nedrīkst būt tukšs.\",\n  required: \"Šis ieraksts ir obligāti jāaizpilda.\",\n  pattern: \"Šis ieraksts aizpildīts nekorekti.\",\n  min: \"Šai vērtībai jābūt lielākai vai vienādai ar %s.\",\n  max: \"Šai vērtībai jābūt mazākai vai vienādai ar %s.\",\n  range: \"Šai vērtībai jābūt starp %s un %s.\",\n  minlength: \"Vērtībai jābūt vismaz %s simbolu garai.\",\n  maxlength: \"Vērtībai jābūt %s simbolus garai vai īsākai.\",\n  length: \"Šīs vērtības garums ir neatbilstošs. Tai jābūt %s līdz %s simbolus garai.\",\n  mincheck: \"Jāizvēlas vismaz %s varianti.\",\n  maxcheck: \"Jāizvēlas %s varianti vai mazāk.\",\n  check: \"Jāizvēlas no %s līdz %s variantiem.\",\n  equalto: \"Šai vērtībai jāsakrīt.\"\n});\nParsley.setLocale('lv');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/lv.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/lv.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});