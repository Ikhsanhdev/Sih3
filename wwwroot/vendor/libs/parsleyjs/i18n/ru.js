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

/***/ "./src/libs/parsleyjs/i18n/ru.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/ru.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('ru', {\n  defaultMessage: \"Некорректное значение.\",\n  type: {\n    email: \"Введите адрес электронной почты.\",\n    url: \"Введите URL адрес.\",\n    number: \"Введите число.\",\n    integer: \"Введите целое число.\",\n    digits: \"Введите только цифры.\",\n    alphanum: \"Введите буквенно-цифровое значение.\"\n  },\n  notblank: \"Это поле должно быть заполнено.\",\n  required: \"Обязательное поле.\",\n  pattern: \"Это значение некорректно.\",\n  min: \"Это значение должно быть не менее чем %s.\",\n  max: \"Это значение должно быть не более чем %s.\",\n  range: \"Это значение должно быть от %s до %s.\",\n  minlength: \"Это значение должно содержать не менее %s символов.\",\n  maxlength: \"Это значение должно содержать не более %s символов.\",\n  length: \"Это значение должно содержать от %s до %s символов.\",\n  mincheck: \"Выберите не менее %s значений.\",\n  maxcheck: \"Выберите не более %s значений.\",\n  check: \"Выберите от %s до %s значений.\",\n  equalto: \"Это значение должно совпадать.\"\n});\nParsley.setLocale('ru');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/ru.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/ru.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});