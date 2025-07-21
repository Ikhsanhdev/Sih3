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

/***/ "./src/libs/parsleyjs/i18n/lt.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/lt.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('lt', {\n  defaultMessage: \"Šis įrašas neteisingas.\",\n  type: {\n    email: \"Šis įrašas nėra teisingas el. paštas.\",\n    url: \"Šis įrašas nėra teisingas url.\",\n    number: \"Šis įrašas nėra skaičius.\",\n    integer: \"Šis įrašas nėra sveikasis skaičius.\",\n    digits: \"Šis įrašas turi būti skaičius.\",\n    alphanum: \"Šis įrašas turi būti iš skaičių ir raidžių.\"\n  },\n  notblank: \"Šis įrašas negali būti tuščias.\",\n  required: \"Šis įrašas yra privalomas\",\n  pattern: \"Šis įrašas neteisingas.\",\n  min: \"Ši vertė turi būti didesnė arba lygi %s.\",\n  max: \"Ši vertė turi būti mažesnė arba lygi %s.\",\n  range: \"Ši vertė turi būti tarp %s ir %s.\",\n  minlength: \"Šis įrašas per trumpas. Jis turi turėti %s simbolius arba daugiau.\",\n  maxlength: \"Šis įrašas per ilgas. Jis turi turėti %s simbolius arba mažiau.\",\n  length: \"Šio įrašo ilgis neteisingas. Jis turėtų būti tarp %s ir %s simbolių.\",\n  mincheck: \"Jūs turite pasirinkti bent %s pasirinkimus.\",\n  maxcheck: \"Jūs turite pasirinkti ne daugiau %s pasirinkimų.\",\n  check: \"Jūs turite pasirinkti tarp %s ir %s pasirinkimų.\",\n  equalto: \"Ši reikšmė turėtų būti vienoda.\"\n});\nParsley.setLocale('lt');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/lt.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/lt.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});