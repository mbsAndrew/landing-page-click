/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".row {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: row;\\n}\\n.row_start {\\n  align-items: flex-start;\\n}\\n.row_justify-between {\\n  justify-content: space-between;\\n}\\n.row .col_center {\\n  align-self: center;\\n}\\n.row .col_half {\\n  width: 50%;\\n}\\n.row .col_4 {\\n  width: 33%;\\n}\\n.row .col_3 {\\n  width: 25%;\\n}\\n@media screen and (max-width: 768px) {\\n  .row .col_mobile_12 {\\n    width: 100%;\\n  }\\n  .row .col_mobile_half {\\n    width: 50%;\\n  }\\n  .row .col_mobile_4 {\\n    width: 33%;\\n  }\\n  .row .col_mobile_3 {\\n    width: 25%;\\n  }\\n  .row .col_mobile_center {\\n    align-self: center;\\n  }\\n}\\n.row_wrap {\\n  flex-wrap: wrap;\\n}\\n.row_stack {\\n  flex-direction: column;\\n}\\n.row_center {\\n  align-items: center;\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: center;\\n  position: sticky;\\n  background: #fff;\\n  height: 50px;\\n  z-index: 20;\\n  padding: 0 10px;\\n}\\n.nav__logo {\\n  order: 0;\\n  flex: 1;\\n}\\n.nav__toggle__label {\\n  order: 2;\\n  display: none;\\n}\\n.nav__toggle__icon {\\n  background: #333;\\n  display: block;\\n  height: 4px;\\n  position: relative;\\n  transition: all 0.2s ease-out;\\n  width: 18px;\\n}\\n.nav__toggle__icon:before {\\n  content: \\\"\\\";\\n  background: #333;\\n  display: block;\\n  top: 10px;\\n  height: 4px;\\n  height: 100%;\\n  position: absolute;\\n  transition: all 0.2s ease-out;\\n  width: 100%;\\n}\\n.nav__toggle__icon::after {\\n  content: \\\"\\\";\\n  background: #333;\\n  display: block;\\n  bottom: 10px;\\n  height: 4px;\\n  position: absolute;\\n  transition: all 0.2s ease-out;\\n  width: 100%;\\n}\\n.nav__toggle__checkbox {\\n  display: none;\\n}\\n@media screen and (max-width: 768px) {\\n  .nav__toggle__label {\\n    display: block;\\n  }\\n  .nav__toggle__checkbox {\\n    display: none;\\n  }\\n  .nav__toggle__checkbox ~ .nav__list {\\n    position: fixed;\\n    left: 110vw;\\n    top: 50px;\\n    flex-direction: column;\\n    width: 100vw;\\n    padding: 10px 0;\\n    background: #fff;\\n    transition: all 0.3 ease-in-out;\\n  }\\n  .nav__toggle__checkbox:checked ~ .nav__list {\\n    left: 0;\\n  }\\n}\\n.nav__list {\\n  margin: 0;\\n  order: 1;\\n  flex: 5;\\n  display: flex;\\n  align-items: center;\\n}\\n.nav__list__item {\\n  display: block;\\n  flex: 1;\\n  text-align: center;\\n  border-bottom: 2px solid transparent;\\n  transition: border ease-in-out 0.2s;\\n}\\n.nav__list__item:hover {\\n  border-bottom: 2px solid #9C69E2;\\n}\\n.nav__list__item_last {\\n  text-align: right;\\n  flex: 5;\\n}\\n.nav__list__item a {\\n  padding: 15px;\\n}\\n\\n.card_round {\\n  border-radius: 50px;\\n}\\n.card__feature {\\n  background: rgba(240, 99, 184, 0.15);\\n  padding: 0 25px;\\n}\\n.card__feature__img {\\n  max-width: 75%;\\n  text-align: center;\\n}\\n.card__testimonial {\\n  background: #9c69e2;\\n  overflow: hidden;\\n  padding-top: 25px;\\n  padding-bottom: 25px;\\n}\\n.card__testimonial__title, .card__testimonial__body {\\n  padding-left: 75px;\\n}\\n.card__testimonial__title {\\n  color: #fff;\\n  padding: 75px;\\n}\\n.card__testimonial__body {\\n  display: flex;\\n  position: relative;\\n  margin-bottom: 75px;\\n}\\n.card__testimonial__body::after {\\n  content: \\\"\\\";\\n  background: linear-gradient(rgba(156, 105, 226, 0.15), rgba(156, 105, 226, 0.5));\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n}\\n.card__testimonial__footer {\\n  padding: 0 75px 50px;\\n}\\n.card__slide {\\n  background: #ffffff;\\n  border-radius: 20px;\\n  max-width: 645px;\\n  width: 645px;\\n  height: 190px;\\n  padding: 60px;\\n  margin: 0 10px;\\n  box-shadow: 0px 12px 0px -1px #8e54de;\\n  display: flex;\\n}\\n.card__slide__image {\\n  flex: 2;\\n}\\n.card__slide__image img {\\n  width: 90px;\\n  height: 90px;\\n  margin-right: 10px;\\n}\\n.card__slide__info {\\n  flex: 10;\\n}\\n.card__info__name {\\n  font-weight: 800;\\n  margin: 0;\\n}\\n.card__info__tagline {\\n  color: #9C69E2;\\n  margin: 0 0 20px;\\n  font-weight: 500;\\n}\\n\\n.section__top {\\n  position: relative;\\n  margin-bottom: 100px;\\n}\\n.section__top__img {\\n  width: 60%;\\n  top: 15%;\\n  position: absolute;\\n  right: 0;\\n  z-index: -1;\\n}\\n.section__top h1, .section__top p, .section__top button {\\n  margin: 25px 0px 25px;\\n}\\n\\n.features {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n.features__header_center, .features__description_center {\\n  text-align: center;\\n}\\n.features__card {\\n  width: 45%;\\n  height: 358px;\\n  padding: 25px;\\n  position: relative;\\n  display: flex;\\n}\\n.features__card__background {\\n  position: absolute;\\n  right: 0;\\n  z-index: -1;\\n  height: max-content;\\n}\\n.features__card__img {\\n  text-align: center;\\n  margin-right: 15px;\\n}\\n.features__card__img, .features__card__content {\\n  align-self: center;\\n}\\n@media screen and (max-width: 768px) {\\n  .features__card {\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n  }\\n  .features__card__content {\\n    width: 100%;\\n  }\\n}\\n@media screen and (max-width: 1024px) {\\n  .features {\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n  .features__card {\\n    width: 90%;\\n  }\\n}\\n\\n.footer {\\n  font-size: 16px;\\n  padding-top: 75px;\\n  position: relative;\\n}\\n.footer::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 100vw;\\n  left: 0;\\n  height: 2px;\\n  top: 0;\\n  background: rgba(156, 105, 226, 0.2);\\n}\\n.footer__list__title {\\n  margin-bottom: 25px;\\n}\\n.footer__list__item {\\n  padding: 10px 0px;\\n}\\n.footer__row_top {\\n  padding-bottom: 100px;\\n}\\n.footer__social_circle {\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 50%;\\n  background: rgba(33, 35, 83, 0.1);\\n  margin: 0 7px;\\n  transition: all ease-in-out 0.2s;\\n  cursor: pointer;\\n}\\n.footer__social_circle:hover {\\n  background: rgba(33, 35, 83, 0.4);\\n}\\n\\n.button {\\n  border-radius: 50px;\\n  height: 60px;\\n  text-align: center;\\n  line-height: 160%;\\n  outline: 0;\\n  border: 0;\\n  cursor: pointer;\\n  transition: opacity ease-in-out 0.2s;\\n}\\n.button_small {\\n  width: 170px;\\n}\\n.button_large {\\n  width: 210px;\\n}\\n.button_large_arrow {\\n  position: relative;\\n}\\n.button_background_white {\\n  background: #fff;\\n  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);\\n}\\n.button_background_white:hover {\\n  box-shadow: 0px 8px 10px rgba(75, 93, 104, 0.1);\\n}\\n.button_background_primary, .button_background_secondary {\\n  color: #fff;\\n}\\n.button_background_primary:hover, .button_background_secondary:hover {\\n  opacity: 0.8;\\n}\\n.button_background_primary {\\n  background: #9C69E2;\\n}\\n.button_background_secondary {\\n  background: #F063B8;\\n}\\n\\n.arrow {\\n  display: inline;\\n  position: relative;\\n  transition: margin-left ease-in-out 0.2s;\\n  margin-left: 0;\\n}\\n.arrow:hover {\\n  margin-left: 10px;\\n}\\n.arrow_white::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  padding: 5px;\\n  /* Arrow size */\\n  top: 0px;\\n  left: 10px;\\n  box-shadow: 1px -1px 0 1px #fff inset;\\n  -webkit-box-shadow: 2px -2px #fff inset;\\n  border: solid transparent;\\n  transition: 0.2s;\\n  transform: rotate(225deg);\\n}\\n.arrow_white::after {\\n  content: \\\"\\\";\\n  height: 2px;\\n  width: 15px;\\n  position: absolute;\\n  top: 7px;\\n  left: 7px;\\n  background: #fff;\\n}\\n.arrow_white_left {\\n  margin-right: 16.5px;\\n}\\n.arrow_white_left::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  padding: 5px;\\n  /* Arrow size */\\n  top: 0px;\\n  left: 10px;\\n  box-shadow: 1px -1px 0 1px #fff inset;\\n  -webkit-box-shadow: 2px -2px #fff inset;\\n  border: solid transparent;\\n  transition: 0.2s;\\n  transform: rotate(225deg);\\n  transform: rotate(45deg);\\n  left: -24px;\\n}\\n.arrow_white_left::after {\\n  content: \\\"\\\";\\n  height: 2px;\\n  width: 22px;\\n  position: absolute;\\n  top: 7px;\\n  left: 7px;\\n  background: #fff;\\n  left: -20px;\\n}\\n.arrow_primary::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  padding: 5px;\\n  /* Arrow size */\\n  top: 0px;\\n  left: 10px;\\n  box-shadow: 1px -1px 0 1px #9C69E2 inset;\\n  -webkit-box-shadow: 2px -2px #9C69E2 inset;\\n  border: solid transparent;\\n  transition: 0.2s;\\n  transform: rotate(225deg);\\n}\\n.arrow_primary::after {\\n  content: \\\"\\\";\\n  height: 2px;\\n  width: 15px;\\n  position: absolute;\\n  top: 7px;\\n  left: 7px;\\n  background: #9C69E2;\\n}\\n\\n.slide-selector {\\n  display: flex;\\n  align-items: center;\\n}\\n.slide-selector__item {\\n  border-radius: 50%;\\n  width: 5px;\\n  margin-right: 5px;\\n  height: 5px;\\n  background: #fff;\\n  cursor: pointer;\\n}\\n.slide-selector__item_active, .slide-selector__item:hover {\\n  height: 10px;\\n  width: 10px;\\n  background: #F063B8;\\n}\\n\\n.container {\\n  width: 1140px;\\n  margin: 0 auto;\\n}\\n@media screen and (max-width: 1024px) {\\n  .container {\\n    width: 100%;\\n  }\\n}\\n\\nbody {\\n  font-family: Helvetica, sans-serif;\\n  color: #4B5D68;\\n  font-size: 18px;\\n}\\n\\n.img {\\n  max-width: 100%;\\n}\\n.img__logo {\\n  padding-right: 1rem;\\n}\\n\\n.section_margin_bottom {\\n  margin-bottom: 75px;\\n}\\n\\nul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n  display: block;\\n}\\n\\nh1, h2, h3 {\\n  color: #212353;\\n  line-height: 130%;\\n  margin: 0;\\n}\\n\\np {\\n  line-height: 160%;\\n  font-family: \\\"Avenir Next LT Pro\\\", sans-serif;\\n}\\n\\nh1 {\\n  font-size: 80px;\\n  line-height: 110%;\\n}\\n\\nh2 {\\n  font-size: 40px;\\n}\\n\\nh3 {\\n  font-size: 24px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Landing-Page/./src/css/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Landing-Page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://Landing-Page/./src/css/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Landing-Page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("\r\n\n\n//# sourceURL=webpack://Landing-Page/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
eval("__webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\r\n__webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n\n//# sourceURL=webpack://Landing-Page/./src/js/app.js?");
})();

/******/ })()
;