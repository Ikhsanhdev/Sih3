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

/***/ "./src/libs/parsleyjs/i18n/fr.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/fr.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('fr', {\n  defaultMessage: \"Cette valeur semble non valide.\",\n  type: {\n    email: \"Cette valeur n'est pas une adresse email valide.\",\n    url: \"Cette valeur n'est pas une URL valide.\",\n    number: \"Cette valeur doit être un nombre.\",\n    integer: \"Cette valeur doit être un entier.\",\n    digits: \"Cette valeur doit être numérique.\",\n    alphanum: \"Cette valeur doit être alphanumérique.\"\n  },\n  notblank: \"Cette valeur ne peut pas être vide.\",\n  required: \"Ce champ est requis.\",\n  pattern: \"Cette valeur semble non valide.\",\n  min: \"Cette valeur ne doit pas être inférieure à %s.\",\n  max: \"Cette valeur ne doit pas excéder %s.\",\n  range: \"Cette valeur doit être comprise entre %s et %s.\",\n  minlength: \"Cette chaîne est trop courte. Elle doit avoir au minimum %s caractères.\",\n  maxlength: \"Cette chaîne est trop longue. Elle doit avoir au maximum %s caractères.\",\n  length: \"Cette valeur doit contenir entre %s et %s caractères.\",\n  mincheck: \"Vous devez sélectionner au moins %s choix.\",\n  maxcheck: \"Vous devez sélectionner %s choix maximum.\",\n  check: \"Vous devez sélectionner entre %s et %s choix.\",\n  equalto: \"Cette valeur devrait être identique.\"\n});\nParsley.setLocale('fr');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/fr.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/fr.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});