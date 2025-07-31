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

/***/ "./src/libs/parsleyjs/i18n/el.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/el.js ***!
  \***************************************/
/***/ (() => {

eval("// Validation errors messages for Parsley\n// Load this after Parsley\n\nParsley.addMessages('el', {\n  defaultMessage: \"Η τιμή φαίνεται να είναι μη έγκυρη.\",\n  type: {\n    email: \"Η τιμή πρέπει να είναι ένα έγκυρο email.\",\n    url: \"Η τιμή πρέπει να είναι ένα έγκυρο url.\",\n    number: \"Η τιμή πρέπει να είναι ένας έγκυρος αριθμός.\",\n    integer: \"Η τιμή πρέπει να είναι ένας έγκυρος ακέραιος.\",\n    digits: \"Η τιμή πρέπει να είναι ψηφία.\",\n    alphanum: \"Η τιμή πρέπει να είναι αλφαριθμητικό.\"\n  },\n  notblank: \"Η τιμή δεν πρέπει να είναι κενή.\",\n  required: \"Απαιτούμενο πεδίο\",\n  pattern: \"Η τιμή φαίνεται να είναι μη έγκυρη.\",\n  min: \"Η τιμή πρέπει να είναι μεγαλύτερη ή ίση με %s.\",\n  max: \"Η τιμή πρέπει να είναι μικρότερη ή ίση με %s.\",\n  range: \"Η τιμή πρέπει να είναι μεταξύ %s και %s.\",\n  minlength: \"Το κείμενο είναι πολύ μικρό. Πρέπει να είναι %s ή και περισσότεροι χαρακτήρες.\",\n  maxlength: \"Η κείμενο είναι πολύ μεγάλο. Πρέπει να είναι %s ή και λιγότεροι χαρακτήρες.\",\n  length: \"Το μήκος του κειμένου είναι μη έγκυρο. Πρέπει να είναι μεταξύ %s και %s χαρακτήρων.\",\n  mincheck: \"Πρέπει να επιλέξετε τουλάχιστον %s επιλογές.\",\n  maxcheck: \"Πρέπει να επιλέξετε %s ή λιγότερες επιλογές.\",\n  check: \"Πρέπει να επιλέξετε μεταξύ %s και %s επίλογων.\",\n  equalto: \"Η τιμή πρέπει να είναι η ίδια.\"\n});\nParsley.setLocale('el');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/el.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/el.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});