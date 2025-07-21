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

/***/ "./src/libs/parsleyjs/i18n/pt-pt.js":
/*!******************************************!*\
  !*** ./src/libs/parsleyjs/i18n/pt-pt.js ***!
  \******************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('pt-pt', {\n  defaultMessage: \"Este valor parece ser inválido.\",\n  type: {\n    email: \"Este campo deve ser um email válido.\",\n    url: \"Este campo deve ser um URL válido.\",\n    number: \"Este campo deve ser um número válido.\",\n    integer: \"Este campo deve ser um número inteiro válido.\",\n    digits: \"Este campo deve conter apenas dígitos.\",\n    alphanum: \"Este campo deve ser alfanumérico.\"\n  },\n  notblank: \"Este campo não pode ficar vazio.\",\n  required: \"Este campo é obrigatório.\",\n  pattern: \"Este campo parece estar inválido.\",\n  min: \"Este valor deve ser maior ou igual a %s.\",\n  max: \"Este valor deve ser menor ou igual a %s.\",\n  range: \"Este valor deve estar entre %s e %s.\",\n  minlength: \"Este campo é pequeno demais. Deve ter %s caracteres ou mais.\",\n  maxlength: \"Este campo é grande demais. Deve ter %s caracteres ou menos.\",\n  length: \"O tamanho deste campo é inválido. Ele deveria ter entre %s e %s caracteres.\",\n  mincheck: \"Escolha pelo menos %s opções.\",\n  maxcheck: \"Escolha %s opções ou mais\",\n  check: \"Escolha entre %s e %s opções.\",\n  equalto: \"Este valor deveria ser igual.\"\n});\nParsley.setLocale('pt-pt');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/pt-pt.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/pt-pt.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});