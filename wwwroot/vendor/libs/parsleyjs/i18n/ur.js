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

/***/ "./src/libs/parsleyjs/i18n/ur.js":
/*!***************************************!*\
  !*** ./src/libs/parsleyjs/i18n/ur.js ***!
  \***************************************/
/***/ (() => {

eval("// This is included with the Parsley library itself,\n// thus there is no use in adding it to your project.\n\nParsley.addMessages('ur', {\n  defaultMessage: \"شائد یہ قیمت غلط ہے۔\",\n  type: {\n    email: \"یہ قیمت ایک درست ای میل ہونی چاہیے۔\",\n    url: \"یہ قیمت ایک درست یو آر ایل ہونا چاہیے۔ \",\n    number: \"یہ قیمت ایک درست نمبر ہونا چاہیے۔\",\n    integer: \"یہ قیمت ایک عدد صحیح ہونا چاہیے۔\",\n    digits: \"یہ قیمت اعداد ہونے چاہیے۔\",\n    alphanum: \"یہ قیمت حرفی ہندسی میں سے ہونا چاہیے۔\"\n  },\n  notblank: \"یہ قیمت خالی نہیں ہونی چاہیے۔\",\n  required: \"یہ قیمت ضروری ہے۔ \",\n  pattern: \"شائد یہ قیمت غلط ہے۔\",\n  min: \"یہ قیمت %s سے بڑی یا اسکے برابر ہونی چاہیے۔\",\n  max: \"یہ قیمت %sسے چھوٹی یا اسکے برابر ہونی چاہیے۔\",\n  range: \"یہ قیمت %sاور %s کے درمیان ہونی چاہیے۔\",\n  minlength: \"یہ قیمت بہت کم احراف پر مشتمل ہے۔ یہ %sاحراف یا اس سے زیادہ ہونے چاہیے۔\",\n  maxlength: \"یہ قیمت بہت زیادہ احراف پر مشتمل ہے۔ یہ %sاحراف یا اس سے کم ہونے چاہیے۔\",\n  length: \"اس قیت کا طول غلط ہے۔ یہ %s اور %s احراف پر مشتمل ہونی چاہیے۔\",\n  mincheck: \"آپکو کم سے کم %s قیمتوں کا انتخاب کرنا ہوگا۔\",\n  maxcheck: \"آپکو %s یا اس سے کم قیمتوں کا انتخاب کرنا ہوگا۔\",\n  check: \"آپکو %s اور %s کے درمیان کسی قیمت کا انتخاب کرنا ہوگا۔\",\n  equalto: \"یہ قیت جیسی ہے ویسی ہی رہنی چاہیے۔ \"\n});\nParsley.setLocale('ur');\n\n//# sourceURL=webpack://Vuexy/./src/libs/parsleyjs/i18n/ur.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/libs/parsleyjs/i18n/ur.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});