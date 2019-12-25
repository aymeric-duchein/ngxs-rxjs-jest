import { __assign, __spread } from 'tslib';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { Component, NgModule, ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { BrowserModule, ɵBrowserDomAdapter } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { NGXS_STATE_CONTEXT_FACTORY } from '@ngxs/store/internals';
import { of } from 'rxjs';

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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    imports: [BrowserModule],
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
                var store = TestBed.get(Store);
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
                        store.reset((_a = {}, _a[name] = val, _a));
                    })),
                    patchState: jest.fn().mockImplementation((/**
                     * @param {?} val
                     * @return {?}
                     */
                    function (val) {
                        var _a;
                        store.reset((_a = {}, _a[name] = __assign({}, defaults, val), _a));
                    })),
                    dispatch: jest.fn().mockImplementation((/**
                     * @return {?}
                     */
                    function () { return of(); }))
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
            var stateContextFactory = TestBed.get(NGXS_STATE_CONTEXT_FACTORY);
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
        TestBed.configureTestingModule({
            imports: __spread([
                NgxsTestModule,
                NgxsModule.forRoot(options.states || [], options.ngxsOptions || {})
            ], (options.imports || [])),
            providers: __spread((options.providers || []))
        }).compileComponents();
        NgxsTestBed.ngxsBootstrap();
        return {
            /**
             * @return {?}
             */
            get store() {
                return TestBed.get(Store);
            },
            /**
             * @return {?}
             */
            get snapshot() {
                /** @type {?} */
                var store = TestBed.get(Store);
                return store.snapshot.bind(store);
            },
            /**
             * @return {?}
             */
            get dispatch() {
                /** @type {?} */
                var store = TestBed.get(Store);
                return store.dispatch.bind(store);
            },
            /**
             * @return {?}
             */
            get selectSnapshot() {
                /** @type {?} */
                var store = TestBed.get(Store);
                return store.selectSnapshot.bind(store);
            },
            /**
             * @return {?}
             */
            get select() {
                /** @type {?} */
                var store = TestBed.get(Store);
                return store.select.bind(store);
            },
            /**
             * @return {?}
             */
            get selectOnce() {
                /** @type {?} */
                var store = TestBed.get(Store);
                return store.selectOnce.bind(store);
            },
            /**
             * @return {?}
             */
            get reset() {
                /** @type {?} */
                var store = TestBed.get(Store);
                return store.reset.bind(store);
            },
            /**
             * @return {?}
             */
            get getTestBed() {
                return TestBed;
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
        NgxsTestModule.ngDoBootstrap(TestBed.get(ApplicationRef));
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
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
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
        var document = TestBed.get(DOCUMENT);
        /** @type {?} */
        var adapter = new ɵBrowserDomAdapter();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxsTestBed };
//# sourceMappingURL=ngxs-labs-testing.js.map
