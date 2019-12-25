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
class NgxsTestComponent {
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
}
NgxsTestComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: ''
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxsTestModule {
    /**
     * @param {?} app
     * @return {?}
     */
    static ngDoBootstrap(app) {
        app.bootstrap(NgxsTestComponent);
    }
}
NgxsTestModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule],
                declarations: [NgxsTestComponent],
                entryComponents: [NgxsTestComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxsTestBed {
    /**
     * @param {?} options
     * @return {?}
     */
    static configureTestingStates(options) {
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
                const { defaults, name } = stateClass['NGXS_OPTIONS_META'];
                /** @type {?} */
                const store = TestBed.get(Store);
                return {
                    getState: jest.fn().mockImplementation((/**
                     * @return {?}
                     */
                    () => defaults)),
                    setState: jest.fn().mockImplementation((/**
                     * @param {?} val
                     * @return {?}
                     */
                    (val) => {
                        store.reset({ [name]: val });
                    })),
                    patchState: jest.fn().mockImplementation((/**
                     * @param {?} val
                     * @return {?}
                     */
                    (val) => {
                        store.reset({ [name]: Object.assign({}, defaults, val) });
                    })),
                    dispatch: jest.fn().mockImplementation((/**
                     * @return {?}
                     */
                    () => of()))
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
                (state) => {
                    return mocksTest[state.name];
                }))));
            }
            /** @type {?} */
            const stateContextFactory = TestBed.get(NGXS_STATE_CONTEXT_FACTORY);
            /** @type {?} */
            const mocks = states.reduce((/**
             * @param {?} acc
             * @param {?} state
             * @return {?}
             */
            (acc, state) => (Object.assign({}, acc, { [state['NGXS_OPTIONS_META'].name]: createMockStateContext(state) }))), {});
            jest.spyOn(stateContextFactory, 'createStateContext').mockImplementation(mockCreateStateContext(mocks));
            return mocks;
        }
        this.resetTestBed();
        if (options.before) {
            options.before();
        }
        TestBed.configureTestingModule({
            imports: [
                NgxsTestModule,
                NgxsModule.forRoot(options.states || [], options.ngxsOptions || {}),
                ...(options.imports || [])
            ],
            providers: [
                ...(options.providers || [])
            ]
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
                const store = TestBed.get(Store);
                return store.snapshot.bind(store);
            },
            /**
             * @return {?}
             */
            get dispatch() {
                /** @type {?} */
                const store = TestBed.get(Store);
                return store.dispatch.bind(store);
            },
            /**
             * @return {?}
             */
            get selectSnapshot() {
                /** @type {?} */
                const store = TestBed.get(Store);
                return store.selectSnapshot.bind(store);
            },
            /**
             * @return {?}
             */
            get select() {
                /** @type {?} */
                const store = TestBed.get(Store);
                return store.select.bind(store);
            },
            /**
             * @return {?}
             */
            get selectOnce() {
                /** @type {?} */
                const store = TestBed.get(Store);
                return store.selectOnce.bind(store);
            },
            /**
             * @return {?}
             */
            get reset() {
                /** @type {?} */
                const store = TestBed.get(Store);
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
    }
    /**
     * @private
     * @return {?}
     */
    static ngxsBootstrap() {
        NgxsTestBed.createRootNode();
        NgxsTestModule.ngDoBootstrap(TestBed.get(ApplicationRef));
    }
    /**
     * @private
     * @return {?}
     */
    static resetTestBed() {
        TestBed.resetTestEnvironment();
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }
    /**
     * @private
     * @param {?=} selector
     * @return {?}
     */
    static createRootNode(selector = 'app-root') {
        /** @type {?} */
        const document = TestBed.get(DOCUMENT);
        /** @type {?} */
        const adapter = new ɵBrowserDomAdapter();
        /** @type {?} */
        const root = adapter.firstChild(adapter.content(adapter.createTemplate(`<${selector}></${selector}>`)));
        /** @type {?} */
        const oldRoots = adapter.querySelectorAll(document, selector);
        oldRoots.forEach((/**
         * @param {?} oldRoot
         * @return {?}
         */
        (oldRoot) => adapter.remove(oldRoot)));
        adapter.appendChild(document.body, root);
    }
}

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
