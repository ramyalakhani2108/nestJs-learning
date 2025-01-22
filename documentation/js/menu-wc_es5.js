'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">nestJs-learn-1 documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' : 'data-bs-target="#xs-controllers-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' : 'id="xs-controllers-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' : 'data-bs-target="#xs-injectables-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"' : 'id="xs-injectables-links-module-AppModule-dc634db5f58ee46be44650b26e1738af5dd1abf7dd7fb2a3e5a3d4e631dbbbc37681e2ec2e2fa9cc33842cf278bc5ece59e3e0e713da2aa9df57d624e253a760"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' : 'id="xs-controllers-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"' : 'id="xs-injectables-links-module-AuthModule-5d1fd19e40ddb68d08edfb1e27df1088ed68f709d6121bfdd490cd8687116e4495fb2f168fc8cbe52089aefe4f70373c213020402032ab132ca8051d80c46d0e"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MetaOptionsModule.html\" data-type=\"entity-link\" >MetaOptionsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' : 'id="xs-controllers-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/MetaOptionsController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MetaOptionsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"' : 'id="xs-injectables-links-module-MetaOptionsModule-fb8d5ac6441b0d286e0d893fb236316495031c3989ca6e42c46b2c15aeacdebe86385bda75c108b0fe3591dc8e44b76d123988404ad8c0c0c9348d7484cd8691"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/MetaOptionsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MetaOptionsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PostsModule.html\" data-type=\"entity-link\" >PostsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' : 'id="xs-controllers-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/PostsController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PostsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"' : 'id="xs-injectables-links-module-PostsModule-d23450eac01a3506c414c8b5b53387e24274bdab02210f25b4f2311bd0f3ba99da11bd1376786db5b4b224d052321d63c56678dda2d97b4ef6f57ce9494eccc0"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/PostsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PostsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TagsModule.html\" data-type=\"entity-link\" >TagsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-TagsModule-e6c63a998aea2ea170a147b5a91447cd69f224c4063dcf89b28555591f4f7451fbe08b1da80bbe8db14328265f0ce2e0e07abf8b65ea387e6db67e3798bd5333"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-e6c63a998aea2ea170a147b5a91447cd69f224c4063dcf89b28555591f4f7451fbe08b1da80bbe8db14328265f0ce2e0e07abf8b65ea387e6db67e3798bd5333"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-TagsModule-e6c63a998aea2ea170a147b5a91447cd69f224c4063dcf89b28555591f4f7451fbe08b1da80bbe8db14328265f0ce2e0e07abf8b65ea387e6db67e3798bd5333"' : 'id="xs-controllers-links-module-TagsModule-e6c63a998aea2ea170a147b5a91447cd69f224c4063dcf89b28555591f4f7451fbe08b1da80bbe8db14328265f0ce2e0e07abf8b65ea387e6db67e3798bd5333"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/TagsController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TagsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' : 'id="xs-controllers-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"' : 'id="xs-injectables-links-module-UsersModule-dc2485f48b84d1cc0224cc71666bab0e107a234d6040425f3aa7b69701dca755c0180d0b8af24ef68f2e540e5e2b855fb6d6b81708c9b19e6e5e9d454fd83b74"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#entities-links"' : 'data-bs-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/MetaOption.html\" data-type=\"entity-link\" >MetaOption</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Post.html\" data-type=\"entity-link\" >Post</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Tag.html\" data-type=\"entity-link\" >Tag</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/User.html\" data-type=\"entity-link\" >User</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePostDto.html\" data-type=\"entity-link\" >CreatePostDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreatePostMetaOptionsDto.html\" data-type=\"entity-link\" >CreatePostMetaOptionsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateTagsDto.html\" data-type=\"entity-link\" >CreateTagsDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GetUsersParamDto.html\" data-type=\"entity-link\" >GetUsersParamDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PatchPostDto.html\" data-type=\"entity-link\" >PatchPostDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/PatchUserDto.html\" data-type=\"entity-link\" >PatchUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TagsService.html\" data-type=\"entity-link\" >TagsService</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));