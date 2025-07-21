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

/***/ "./src/libs/parsleyjs/i18n/es.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/es.js ***!
  \***************************************/
/***/ (() => {

eval("// ParsleyConfig definition if not already set\n// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('es', {\n  defaultMessage: \"Este valor parece ser inválido.\",\n  type: {\n    email: \"Este valor debe ser un correo válido.\",\n    url: \"Este valor debe ser una URL válida.\",\n    number: \"Este valor debe ser un número válido.\",\n    integer: \"Este valor debe ser un número válido.\",\n    digits: \"Este valor debe ser un dígito válido.\",\n    alphanum: \"Este valor debe ser alfanumérico.\"\n  },\n  notblank: \"Este valor no debe estar en blanco.\",\n  required: \"Este valor es requerido.\",\n  pattern: \"Este valor es incorrecto.\",\n  min: \"Este valor no debe ser menor que %s.\",\n  max: \"Este valor no debe ser mayor que %s.\",\n  range: \"Este valor debe estar entre %s y %s.\",\n  minlength: \"Este valor es muy corto. La longitud mínima es de %s caracteres.\",\n  maxlength: \"Este valor es muy largo. La longitud máxima es de %s caracteres.\",\n  length: \"La longitud de este valor debe estar entre %s y %s caracteres.\",\n  mincheck: \"Debe seleccionar al menos %s opciones.\",\n  maxcheck: \"Debe seleccionar %s opciones o menos.\",\n  check: \"Debe seleccionar entre %s y %s opciones.\",\n  equalto: \"Este valor debe ser idéntico.\"\n});\nParsley.setLocale('es');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/es.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/es.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});