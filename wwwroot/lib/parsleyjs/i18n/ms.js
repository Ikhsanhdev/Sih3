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

/***/ "./src/libs/parsleyjs/i18n/ms.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/ms.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('ms', {\n  defaultMessage: \"Nilai tidak sah.\",\n  type: {\n    email: \"Nilai mestilah dalam format emel yang sah.\",\n    url: \"Nilai mestilah dalam bentuk url yang sah.\",\n    number: \"Hanya nombor dibenarkan.\",\n    integer: \"Hanya integer dibenarkan.\",\n    digits: \"Hanya angka dibenarkan.\",\n    alphanum: \"Hanya alfanumerik dibenarkan.\"\n  },\n  notblank: \"Nilai ini tidak boleh kosong.\",\n  required: \"Nilai ini wajib diisi.\",\n  pattern: \"Bentuk nilai ini tidak sah.\",\n  min: \"Nilai perlu lebih besar atau sama dengan %s.\",\n  max: \"Nilai perlu lebih kecil atau sama dengan %s.\",\n  range: \"Nilai perlu berada antara %s hingga %s.\",\n  minlength: \"Nilai terlalu pendek. Ianya perlu sekurang-kurangnya %s huruf.\",\n  maxlength: \"Nilai terlalu panjang. Ianya tidak boleh melebihi %s huruf.\",\n  length: \"Panjang nilai tidak sah. Panjangnya perlu diantara %s hingga %s huruf.\",\n  mincheck: \"Anda mesti memilih sekurang-kurangnya %s pilihan.\",\n  maxcheck: \"Anda tidak boleh memilih lebih daripada %s pilihan.\",\n  check: \"Anda mesti memilih diantara %s hingga %s pilihan.\",\n  equalto: \"Nilai dimasukkan hendaklah sama.\"\n});\nParsley.setLocale('ms');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/ms.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/ms.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});