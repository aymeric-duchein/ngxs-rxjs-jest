(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/es6/reflect'), require('core-js/es7/reflect'), require('zone.js/dist/zone'), require('@angular/core'), require('@angular/core/testing'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/platform-browser-dynamic/testing'), require('@ngxs/store'), require('@ngxs/store/internals'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@ngxs-labs/testing', ['exports', 'core-js/es6/reflect', 'core-js/es7/reflect', 'zone.js/dist/zone', '@angular/core', '@angular/core/testing', '@angular/common', '@angular/platform-browser', '@angular/platform-browser-dynamic/testing', '@ngxs/store', '@ngxs/store/internals', 'rxjs'], factory) :
    (global = global || self, factory((global['ngxs-labs'] = global['ngxs-labs'] || {}, global['ngxs-labs'].testing = {}), null, null, null, global.ng.core, global.ng.core.testing, global.ng.common, global.ng.platformBrowser, global.ng.platformBrowserDynamic.testing, global['ngxs-store'], global.internals, global.rxjs));
}(this, function (exports, reflect, reflect$1, zone, core, testing, common, platformBrowser, testing$1, store, internals, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxsTestComponent = /** @class */ (function () {
        function NgxsTestComponent() {
        }
        /**
         * @return {?}
         */
        NgxsTestComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        NgxsTestComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () { };
        NgxsTestComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-root',
                        template: ''
                    }] }
        ];
        return NgxsTestComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxsTestModule = /** @class */ (function () {
        function NgxsTestModule() {
        }
        /**
         * @param {?} app
         * @return {?}
         */
        NgxsTestModule.ngDoBootstrap = /**
         * @param {?} app
         * @return {?}
         */
        function (app) {
            app.bootstrap(NgxsTestComponent);
        };
        NgxsTestModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [platformBrowser.BrowserModule],
                        declarations: [NgxsTestComponent],
                        entryComponents: [NgxsTestComponent]
                    },] }
        ];
        return NgxsTestModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxsTestBed = /** @class */ (function () {
        function NgxsTestBed() {
        }
        /**
         * @param {?} options
         * @return {?}
         */
        NgxsTestBed.configureTestingStates = /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            /**
             * @param {?} states
             * @return {?}
             */
            function getStateCtxMocks(states) {
                /**
                 * @template T
                 * @param {?} stateClass
                 * @return {?}
                 */
                function createMockStateContext(stateClass) {
                    var _a = stateClass['NGXS_OPTIONS_META'], defaults = _a.defaults, name = _a.name;
                    /** @type {?} */
                    var store$1 = testing.TestBed.get(store.Store);
                    return {
                        getState: jest.fn().mockImplementation((/**
                         * @return {?}
                         */
                        function () { return defaults; })),
                        setState: jest.fn().mockImplementation((/**
                         * @param {?} val
                         * @return {?}
                         */
                        function (val) {
                            var _a;
                            store$1.reset((_a = {}, _a[name] = val, _a));
                        })),
                        patchState: jest.fn().mockImplementation((/**
                         * @param {?} val
                         * @return {?}
                         */
                        function (val) {
                            var _a;
                            store$1.reset((_a = {}, _a[name] = __assign({}, defaults, val), _a));
                        })),
                        dispatch: jest.fn().mockImplementation((/**
                         * @return {?}
                         */
                        function () { return rxjs.of(); }))
                    };
                }
                /**
                 * @param {?} mocksTest
                 * @return {?}
                 */
                function mockCreateStateContext(mocksTest) {
                    return (/** @type {?} */ (((/**
                     * @param {?} state
                     * @return {?}
                     */
                    function (state) {
                        return mocksTest[state.name];
                    }))));
                }
                /** @type {?} */
                var stateContextFactory = testing.TestBed.get(internals.NGXS_STATE_CONTEXT_FACTORY);
                /** @type {?} */
                var mocks = states.reduce((/**
                 * @param {?} acc
                 * @param {?} state
                 * @return {?}
                 */
                function (acc, state) {
                    var _a;
                    return (__assign({}, acc, (_a = {}, _a[state['NGXS_OPTIONS_META'].name] = createMockStateContext(state), _a)));
                }), {});
                jest.spyOn(stateContextFactory, 'createStateContext').mockImplementation(mockCreateStateContext(mocks));
                return mocks;
            }
            this.resetTestBed();
            if (options.before) {
                options.before();
            }
            testing.TestBed.configureTestingModule({
                imports: __spread([
                    NgxsTestModule,
                    store.NgxsModule.forRoot(options.states || [], options.ngxsOptions || {})
                ], (options.imports || [])),
                providers: __spread((options.providers || []))
            }).compileComponents();
            NgxsTestBed.ngxsBootstrap();
            return {
                /**
                 * @return {?}
                 */
                get store() {
                    return testing.TestBed.get(store.Store);
                },
                /**
                 * @return {?}
                 */
                get snapshot() {
                    /** @type {?} */
                    var store$1 = testing.TestBed.get(store.Store);
                    return store$1.snapshot.bind(store$1);
                },
                /**
                 * @return {?}
                 */
                get dispatch() {
                    /** @type {?} */
                    var store$1 = testing.TestBed.get(store.Store);
                    return store$1.dispatch.bind(store$1);
                },
                /**
                 * @return {?}
                 */
                get selectSnapshot() {
                    /** @type {?} */
                    var store$1 = testing.TestBed.get(store.Store);
                    return store$1.selectSnapshot.bind(store$1);
                },
                /**
                 * @return {?}
                 */
                get select() {
                    /** @type {?} */
                    var store$1 = testing.TestBed.get(store.Store);
                    return store$1.select.bind(store$1);
                },
                /**
                 * @return {?}
                 */
                get selectOnce() {
                    /** @type {?} */
                    var store$1 = testing.TestBed.get(store.Store);
                    return store$1.selectOnce.bind(store$1);
                },
                /**
                 * @return {?}
                 */
                get reset() {
                    /** @type {?} */
                    var store$1 = testing.TestBed.get(store.Store);
                    return store$1.reset.bind(store$1);
                },
                /**
                 * @return {?}
                 */
                get getTestBed() {
                    return testing.TestBed;
                },
                /**
                 * @return {?}
                 */
                get getStateContextMocks() {
                    return getStateCtxMocks(options.states || []);
                }
            };
        };
        /**
         * @private
         * @return {?}
         */
        NgxsTestBed.ngxsBootstrap = /**
         * @private
         * @return {?}
         */
        function () {
            NgxsTestBed.createRootNode();
            NgxsTestModule.ngDoBootstrap(testing.TestBed.get(core.ApplicationRef));
        };
        /**
         * @private
         * @return {?}
         */
        NgxsTestBed.resetTestBed = /**
         * @private
         * @return {?}
         */
        function () {
            testing.TestBed.resetTestEnvironment();
            testing.TestBed.initTestEnvironment(testing$1.BrowserDynamicTestingModule, testing$1.platformBrowserDynamicTesting());
        };
        /**
         * @private
         * @param {?=} selector
         * @return {?}
         */
        NgxsTestBed.createRootNode = /**
         * @private
         * @param {?=} selector
         * @return {?}
         */
        function (selector) {
            if (selector === void 0) { selector = 'app-root'; }
            /** @type {?} */
            var document = testing.TestBed.get(common.DOCUMENT);
            /** @type {?} */
            var adapter = new platformBrowser.ɵBrowserDomAdapter();
            /** @type {?} */
            var root = adapter.firstChild(adapter.content(adapter.createTemplate("<" + selector + "></" + selector + ">")));
            /** @type {?} */
            var oldRoots = adapter.querySelectorAll(document, selector);
            oldRoots.forEach((/**
             * @param {?} oldRoot
             * @return {?}
             */
            function (oldRoot) { return adapter.remove(oldRoot); }));
            adapter.appendChild(document.body, root);
        };
        return NgxsTestBed;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NgxsOptionsTesting() { }
    if (false) {
        /** @type {?|undefined} */
        NgxsOptionsTesting.prototype.states;
        /** @type {?|undefined} */
        NgxsOptionsTesting.prototype.ngxsOptions;
        /** @type {?|undefined} */
        NgxsOptionsTesting.prototype.imports;
        /** @type {?|undefined} */
        NgxsOptionsTesting.prototype.before;
        /** @type {?|undefined} */
        NgxsOptionsTesting.prototype.providers;
    }
    /**
     * @record
     */
    function StateContextMap() { }
    /**
     * @record
     */
    function NgxsTesting() { }
    if (false) {
        /** @type {?} */
        NgxsTesting.prototype.store;
        /** @type {?} */
        NgxsTesting.prototype.getTestBed;
        /** @type {?} */
        NgxsTesting.prototype.snapshot;
        /** @type {?} */
        NgxsTesting.prototype.dispatch;
        /** @type {?} */
        NgxsTesting.prototype.selectSnapshot;
        /** @type {?} */
        NgxsTesting.prototype.select;
        /** @type {?} */
        NgxsTesting.prototype.selectOnce;
        /** @type {?} */
        NgxsTesting.prototype.reset;
        /** @type {?} */
        NgxsTesting.prototype.getStateContextMocks;
    }

    exports.NgxsTestBed = NgxsTestBed;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngxs-labs-testing.umd.js.map
