/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { ɵBrowserDomAdapter as BrowserDomAdapter } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { NgxsTestModule } from './helpers/ngxs-test.module';
import { NGXS_STATE_CONTEXT_FACTORY } from '@ngxs/store/internals';
import { of } from 'rxjs';
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
                        store.reset((_a = {}, _a[name] = tslib_1.__assign({}, defaults, val), _a));
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
                return (tslib_1.__assign({}, acc, (_a = {}, _a[state['NGXS_OPTIONS_META'].name] = createMockStateContext(state), _a)));
            }), {});
            jest.spyOn(stateContextFactory, 'createStateContext').mockImplementation(mockCreateStateContext(mocks));
            return mocks;
        }
        this.resetTestBed();
        if (options.before) {
            options.before();
        }
        TestBed.configureTestingModule({
            imports: tslib_1.__spread([
                NgxsTestModule,
                NgxsModule.forRoot(options.states || [], options.ngxsOptions || {})
            ], (options.imports || [])),
            providers: tslib_1.__spread((options.providers || []))
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
        var adapter = new BrowserDomAdapter();
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
export { NgxsTestBed };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4cy5zZXR1cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzLWxhYnMvdGVzdGluZy8iLCJzb3VyY2VzIjpbImxpYi9uZ3hzLnNldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sbUJBQW1CLENBQUM7QUFFM0IsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFpQixNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLElBQUksaUJBQWlCLEVBQTZCLE1BQU0sMkJBQTJCLENBQUM7QUFDL0csT0FBTyxFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkgsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVc1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzFCO0lBQUE7SUFtSEEsQ0FBQzs7Ozs7SUFsSGlCLGtDQUFzQjs7OztJQUFwQyxVQUFxQyxPQUEyQjs7Ozs7UUFDNUQsU0FBUyxnQkFBZ0IsQ0FBQyxNQUF1Qjs7Ozs7O1lBQzdDLFNBQVMsc0JBQXNCLENBQUksVUFBeUI7Z0JBQ2xELElBQUEsb0NBQW9ELEVBQWxELHNCQUFRLEVBQUUsY0FBd0M7O29CQUNwRCxLQUFLLEdBQVUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBRXZDLE9BQU87b0JBQ0gsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0I7OztvQkFBQyxjQUFNLE9BQUEsUUFBUSxFQUFSLENBQVEsRUFBQztvQkFDdEQsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0I7Ozs7b0JBQUMsVUFBQyxHQUFNOzt3QkFDMUMsS0FBSyxDQUFDLEtBQUssV0FBRyxHQUFDLElBQUksSUFBRyxHQUFHLE1BQUcsQ0FBQztvQkFDakMsQ0FBQyxFQUFDO29CQUNGLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQWtCOzs7O29CQUFDLFVBQUMsR0FBZTs7d0JBQ3JELEtBQUssQ0FBQyxLQUFLLFdBQUcsR0FBQyxJQUFJLHlCQUFRLFFBQVEsRUFBSyxHQUFHLENBQUUsTUFBRyxDQUFDO29CQUNyRCxDQUFDLEVBQUM7b0JBQ0YsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBa0I7OztvQkFBQyxjQUFNLE9BQUEsRUFBRSxFQUFFLEVBQUosQ0FBSSxFQUFDO2lCQUNyRCxDQUFDO1lBQ04sQ0FBQzs7Ozs7WUFFRCxTQUFTLHNCQUFzQixDQUFDLFNBRS9CO2dCQUNHLE9BQU8sbUJBQUE7Ozs7Z0JBQUMsVUFBQyxLQUFrQjtvQkFDdkIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLEVBQUMsRUFBeUIsQ0FBQztZQUNoQyxDQUFDOztnQkFFSyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDOztnQkFDN0QsS0FBSyxHQUE2QyxNQUFNLENBQUMsTUFBTTs7Ozs7WUFDakUsVUFBQyxHQUFHLEVBQUUsS0FBSzs7Z0JBQUssT0FBQSxzQkFBTSxHQUFHLGVBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxJQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxPQUFHO1lBQTlFLENBQThFLEdBQzlGLEVBQUUsQ0FDTDtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRXhHLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQjtRQUVELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUMzQixPQUFPO2dCQUNILGNBQWM7Z0JBQ2QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztlQUNoRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQzdCO1lBQ0QsU0FBUyxtQkFDRixDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQy9CO1NBQ0osQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFdkIsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTVCLE9BQU87Ozs7WUFDSCxJQUFJLEtBQUs7Z0JBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7Ozs7WUFDRCxJQUFJLFFBQVE7O29CQUNGLEtBQUssR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDdkMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxDQUFDOzs7O1lBQ0QsSUFBSSxRQUFROztvQkFDRixLQUFLLEdBQVUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsQ0FBQzs7OztZQUNELElBQUksY0FBYzs7b0JBQ1IsS0FBSyxHQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN2QyxPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLENBQUM7Ozs7WUFDRCxJQUFJLE1BQU07O29CQUNBLEtBQUssR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxDQUFDOzs7O1lBQ0QsSUFBSSxVQUFVOztvQkFDSixLQUFLLEdBQVUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQzs7OztZQUNELElBQUksS0FBSzs7b0JBQ0MsS0FBSyxHQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN2QyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLENBQUM7Ozs7WUFDRCxJQUFJLFVBQVU7Z0JBQ1YsT0FBTyxPQUFPLENBQUM7WUFDbkIsQ0FBQzs7OztZQUNELElBQUksb0JBQW9CO2dCQUNwQixPQUFPLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbEQsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDOzs7OztJQUVjLHlCQUFhOzs7O0lBQTVCO1FBQ0ksV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdCLGNBQWMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRWMsd0JBQVk7Ozs7SUFBM0I7UUFDSSxPQUFPLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsbUJBQW1CLENBQUMsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7Ozs7OztJQUVjLDBCQUFjOzs7OztJQUE3QixVQUE4QixRQUFxQjtRQUFyQix5QkFBQSxFQUFBLHFCQUFxQjs7WUFDekMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDOztZQUNoQyxPQUFPLEdBQWUsSUFBSSxpQkFBaUIsRUFBRTs7WUFFN0MsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE1BQUksUUFBUSxXQUFNLFFBQVEsTUFBRyxDQUFDLENBQUMsQ0FBQzs7WUFFakcsUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQzdELFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7UUFFdkQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFuSEQsSUFtSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlc3RCZWQsIFRlc3RCZWRTdGF0aWMgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IMm1QnJvd3NlckRvbUFkYXB0ZXIgYXMgQnJvd3NlckRvbUFkYXB0ZXIsIMm1RG9tQWRhcHRlciBhcyBEb21BZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSwgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3RpbmcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvdGVzdGluZyc7XHJcbmltcG9ydCB7IE5neHNNb2R1bGUsIFN0YXRlQ29udGV4dCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3hzVGVzdE1vZHVsZSB9IGZyb20gJy4vaGVscGVycy9uZ3hzLXRlc3QubW9kdWxlJztcclxuaW1wb3J0IHtcclxuICAgIERpc3BhdGNoRm4sXHJcbiAgICBOZ3hzT3B0aW9uc1Rlc3RpbmcsXHJcbiAgICBOZ3hzVGVzdGluZyxcclxuICAgIFJlc2V0Rm4sXHJcbiAgICBTZWxlY3RGbixcclxuICAgIFNlbGVjdFNuYXBzaG90Rm4sXHJcbiAgICBTbmFwc2hvdEZuLFxyXG4gICAgU3RhdGVDb250ZXh0TWFwXHJcbn0gZnJvbSAnLi9zeW1ib2wnO1xyXG5pbXBvcnQgeyBOR1hTX1NUQVRFX0NPTlRFWFRfRkFDVE9SWSB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hcHBlZFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUvc3JjL2ludGVybmFsL2ludGVybmFscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmd4c1Rlc3RCZWQge1xyXG4gICAgcHVibGljIHN0YXRpYyBjb25maWd1cmVUZXN0aW5nU3RhdGVzKG9wdGlvbnM6IE5neHNPcHRpb25zVGVzdGluZyk6IE5neHNUZXN0aW5nIHtcclxuICAgICAgICBmdW5jdGlvbiBnZXRTdGF0ZUN0eE1vY2tzKHN0YXRlczogVHlwZTx1bmtub3duPltdKTogU3RhdGVDb250ZXh0TWFwIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTW9ja1N0YXRlQ29udGV4dDxUPihzdGF0ZUNsYXNzOiBUeXBlPHVua25vd24+KTogU3RhdGVDb250ZXh0PFQ+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGVmYXVsdHMsIG5hbWUgfSA9IHN0YXRlQ2xhc3NbJ05HWFNfT1BUSU9OU19NRVRBJ107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZTogU3RvcmUgPSBUZXN0QmVkLmdldChTdG9yZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRTdGF0ZTogamVzdC5mbigpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBkZWZhdWx0cyksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGU6IGplc3QuZm4oKS5tb2NrSW1wbGVtZW50YXRpb24oKHZhbDogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5yZXNldCh7IFtuYW1lXTogdmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGNoU3RhdGU6IGplc3QuZm4oKS5tb2NrSW1wbGVtZW50YXRpb24oKHZhbDogUGFydGlhbDxUPikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5yZXNldCh7IFtuYW1lXTogeyAuLi5kZWZhdWx0cywgLi4udmFsIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gb2YoKSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vY2tDcmVhdGVTdGF0ZUNvbnRleHQobW9ja3NUZXN0OiB7XHJcbiAgICAgICAgICAgICAgICBba2V5OiBzdHJpbmddOiBTdGF0ZUNvbnRleHQ8dW5rbm93bj47XHJcbiAgICAgICAgICAgIH0pOiAoYXJnOiB1bmtub3duKSA9PiBhbnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoc3RhdGU6IE1hcHBlZFN0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vY2tzVGVzdFtzdGF0ZS5uYW1lXTtcclxuICAgICAgICAgICAgICAgIH0pIGFzIChhcmc6IHVua25vd24pID0+IGFueTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVDb250ZXh0RmFjdG9yeSA9IFRlc3RCZWQuZ2V0KE5HWFNfU1RBVEVfQ09OVEVYVF9GQUNUT1JZKTtcclxuICAgICAgICAgICAgY29uc3QgbW9ja3M6IHsgW2tleTogc3RyaW5nXTogU3RhdGVDb250ZXh0PHVua25vd24+IH0gPSBzdGF0ZXMucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgKGFjYywgc3RhdGUpID0+ICh7IC4uLmFjYywgW3N0YXRlWydOR1hTX09QVElPTlNfTUVUQSddLm5hbWVdOiBjcmVhdGVNb2NrU3RhdGVDb250ZXh0KHN0YXRlKSB9KSxcclxuICAgICAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBqZXN0LnNweU9uKHN0YXRlQ29udGV4dEZhY3RvcnksICdjcmVhdGVTdGF0ZUNvbnRleHQnKS5tb2NrSW1wbGVtZW50YXRpb24obW9ja0NyZWF0ZVN0YXRlQ29udGV4dChtb2NrcykpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1vY2tzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXNldFRlc3RCZWQoKTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYmVmb3JlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xyXG4gICAgICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgICAgICBOZ3hzVGVzdE1vZHVsZSxcclxuICAgICAgICAgICAgICAgIE5neHNNb2R1bGUuZm9yUm9vdChvcHRpb25zLnN0YXRlcyB8fCBbXSwgb3B0aW9ucy5uZ3hzT3B0aW9ucyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5pbXBvcnRzIHx8IFtdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLnByb3ZpZGVycyB8fCBbXSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKCk7XHJcblxyXG4gICAgICAgIE5neHNUZXN0QmVkLm5neHNCb290c3RyYXAoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0IHN0b3JlKCk6IFN0b3JlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXN0QmVkLmdldChTdG9yZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBzbmFwc2hvdCgpOiBTbmFwc2hvdEZuIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlOiBTdG9yZSA9IFRlc3RCZWQuZ2V0KFN0b3JlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5zbmFwc2hvdC5iaW5kKHN0b3JlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IGRpc3BhdGNoKCk6IERpc3BhdGNoRm4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gVGVzdEJlZC5nZXQoU3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoLmJpbmQoc3RvcmUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgc2VsZWN0U25hcHNob3QoKTogU2VsZWN0U25hcHNob3RGbiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZTogU3RvcmUgPSBUZXN0QmVkLmdldChTdG9yZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuc2VsZWN0U25hcHNob3QuYmluZChzdG9yZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBzZWxlY3QoKTogU2VsZWN0Rm4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gVGVzdEJlZC5nZXQoU3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLnNlbGVjdC5iaW5kKHN0b3JlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IHNlbGVjdE9uY2UoKTogU2VsZWN0Rm4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gVGVzdEJlZC5nZXQoU3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLnNlbGVjdE9uY2UuYmluZChzdG9yZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCByZXNldCgpOiBSZXNldEZuIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlOiBTdG9yZSA9IFRlc3RCZWQuZ2V0KFN0b3JlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5yZXNldC5iaW5kKHN0b3JlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IGdldFRlc3RCZWQoKTogVGVzdEJlZFN0YXRpYyB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGVzdEJlZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IGdldFN0YXRlQ29udGV4dE1vY2tzKCk6IFN0YXRlQ29udGV4dE1hcCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGVDdHhNb2NrcyhvcHRpb25zLnN0YXRlcyB8fCBbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG5neHNCb290c3RyYXAoKTogdm9pZCB7XHJcbiAgICAgICAgTmd4c1Rlc3RCZWQuY3JlYXRlUm9vdE5vZGUoKTtcclxuICAgICAgICBOZ3hzVGVzdE1vZHVsZS5uZ0RvQm9vdHN0cmFwKFRlc3RCZWQuZ2V0KEFwcGxpY2F0aW9uUmVmKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVzZXRUZXN0QmVkKCk6IHZvaWQge1xyXG4gICAgICAgIFRlc3RCZWQucmVzZXRUZXN0RW52aXJvbm1lbnQoKTtcclxuICAgICAgICBUZXN0QmVkLmluaXRUZXN0RW52aXJvbm1lbnQoQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSb290Tm9kZShzZWxlY3RvciA9ICdhcHAtcm9vdCcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkb2N1bWVudCA9IFRlc3RCZWQuZ2V0KERPQ1VNRU5UKTtcclxuICAgICAgICBjb25zdCBhZGFwdGVyOiBEb21BZGFwdGVyID0gbmV3IEJyb3dzZXJEb21BZGFwdGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvb3QgPSBhZGFwdGVyLmZpcnN0Q2hpbGQoYWRhcHRlci5jb250ZW50KGFkYXB0ZXIuY3JlYXRlVGVtcGxhdGUoYDwke3NlbGVjdG9yfT48LyR7c2VsZWN0b3J9PmApKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9sZFJvb3RzID0gYWRhcHRlci5xdWVyeVNlbGVjdG9yQWxsKGRvY3VtZW50LCBzZWxlY3Rvcik7XHJcbiAgICAgICAgb2xkUm9vdHMuZm9yRWFjaCgob2xkUm9vdCkgPT4gYWRhcHRlci5yZW1vdmUob2xkUm9vdCkpO1xyXG5cclxuICAgICAgICBhZGFwdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHJvb3QpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==