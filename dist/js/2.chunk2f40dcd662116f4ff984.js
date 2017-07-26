webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {// 加载模块css
	__webpack_require__(14)
	// 加载模板
	var html = __webpack_require__(16)

	/* eslint-disable no-undef */
	module.exports = function () {
	  var $dialog = $(html).clone()
	  $dialog.find('.close').on('click', function () {
	    $dialog.fadeOut(function () {
	      $(this).remove()
	    })
	  })
	  $('body').append($dialog)
	  $dialog.fadeIn()
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(15, function() {
				var newContent = __webpack_require__(15);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".v-dialog{\n  position: fixed;\n  display: none;\n  left: 0;top:0;right:0;bottom:0;\n  background-color: rgba(0,0,0,.5);\n}\n.v-dialog .close{\n  position: absolute;\n  top:20px;\n  right: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 40px;\n  font-size: 40px;\n  color:#666;\n  background-color: rgba(255,255,255,.8);\n  cursor: pointer;\n}\n.v-dialog .img{\n  position: absolute;\n  margin:auto;\n  top:0;right: 0;bottom:0;left: 0;\n  max-width: 90%;\n  max-height: 90%;\n}\n", ""]);

	// exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"v-dialog\">\n  <span class=\"close\">&times;</span>\n  <img class=\"img\" src=\"" + __webpack_require__(17) + "\" />\n</div>\n";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/asset/c2a0fbb427ef4b2c33a0965be4d52214.png";

/***/ })
]);