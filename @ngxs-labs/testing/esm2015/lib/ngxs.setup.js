/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NgxsTestBed {
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
        const adapter = new BrowserDomAdapter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4cy5zZXR1cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3hzLWxhYnMvdGVzdGluZy8iLCJzb3VyY2VzIjpbImxpYi9uZ3hzLnNldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsY0FBYyxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQWlCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxpQkFBaUIsRUFBNkIsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2SCxPQUFPLEVBQUUsVUFBVSxFQUFnQixLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHMUIsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBQ2IsTUFBTSxDQUFDLHNCQUFzQixDQUFDLE9BQTJCOzs7OztRQUM1RCxTQUFTLGdCQUFnQixDQUFDLE1BQXVCOzs7Ozs7WUFDN0MsU0FBUyxzQkFBc0IsQ0FBSSxVQUF5QjtzQkFDbEQsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixDQUFDOztzQkFDcEQsS0FBSyxHQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUV2QyxPQUFPO29CQUNILFFBQVEsRUFBRSxJQUFJLENBQUMsRUFB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T0FBTyxDQUFDLG1CQUFtQixDQUFDLDJCQUEyQixFQUFFLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxVQUFVOztjQUN6QyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7O2NBQ2hDLE9BQU8sR0FBZSxJQUFJLGlCQUFpQixFQUFFOztjQUU3QyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxRQUFRLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDOztjQUVqRyxRQUFRLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDN0QsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO1FBRXZELE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRlc3RCZWQsIFRlc3RCZWRTdGF0aWMgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IMm1QnJvd3NlckRvbUFkYXB0ZXIgYXMgQnJvd3NlckRvbUFkYXB0ZXIsIMm1RG9tQWRhcHRlciBhcyBEb21BZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSwgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3RpbmcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvdGVzdGluZyc7XHJcbmltcG9ydCB7IE5neHNNb2R1bGUsIFN0YXRlQ29udGV4dCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ3hzVGVzdE1vZHVsZSB9IGZyb20gJy4vaGVscGVycy9uZ3hzLXRlc3QubW9kdWxlJztcclxuaW1wb3J0IHtcclxuICAgIERpc3BhdGNoRm4sXHJcbiAgICBOZ3hzT3B0aW9uc1Rlc3RpbmcsXHJcbiAgICBOZ3hzVGVzdGluZyxcclxuICAgIFJlc2V0Rm4sXHJcbiAgICBTZWxlY3RGbixcclxuICAgIFNlbGVjdFNuYXBzaG90Rm4sXHJcbiAgICBTbmFwc2hvdEZuLFxyXG4gICAgU3RhdGVDb250ZXh0TWFwXHJcbn0gZnJvbSAnLi9zeW1ib2wnO1xyXG5pbXBvcnQgeyBOR1hTX1NUQVRFX0NPTlRFWFRfRkFDVE9SWSB9IGZyb20gJ0BuZ3hzL3N0b3JlL2ludGVybmFscyc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hcHBlZFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUvc3JjL2ludGVybmFsL2ludGVybmFscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmd4c1Rlc3RCZWQge1xyXG4gICAgcHVibGljIHN0YXRpYyBjb25maWd1cmVUZXN0aW5nU3RhdGVzKG9wdGlvbnM6IE5neHNPcHRpb25zVGVzdGluZyk6IE5neHNUZXN0aW5nIHtcclxuICAgICAgICBmdW5jdGlvbiBnZXRTdGF0ZUN0eE1vY2tzKHN0YXRlczogVHlwZTx1bmtub3duPltdKTogU3RhdGVDb250ZXh0TWFwIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlTW9ja1N0YXRlQ29udGV4dDxUPihzdGF0ZUNsYXNzOiBUeXBlPHVua25vd24+KTogU3RhdGVDb250ZXh0PFQ+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGVmYXVsdHMsIG5hbWUgfSA9IHN0YXRlQ2xhc3NbJ05HWFNfT1BUSU9OU19NRVRBJ107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZTogU3RvcmUgPSBUZXN0QmVkLmdldChTdG9yZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRTdGF0ZTogamVzdC5mbigpLm1vY2tJbXBsZW1lbnRhdGlvbigoKSA9PiBkZWZhdWx0cyksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGU6IGplc3QuZm4oKS5tb2NrSW1wbGVtZW50YXRpb24oKHZhbDogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5yZXNldCh7IFtuYW1lXTogdmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGNoU3RhdGU6IGplc3QuZm4oKS5tb2NrSW1wbGVtZW50YXRpb24oKHZhbDogUGFydGlhbDxUPikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5yZXNldCh7IFtuYW1lXTogeyAuLi5kZWZhdWx0cywgLi4udmFsIH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g6IGplc3QuZm4oKS5tb2NrSW1wbGVtZW50YXRpb24oKCkgPT4gb2YoKSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vY2tDcmVhdGVTdGF0ZUNvbnRleHQobW9ja3NUZXN0OiB7XHJcbiAgICAgICAgICAgICAgICBba2V5OiBzdHJpbmddOiBTdGF0ZUNvbnRleHQ8dW5rbm93bj47XHJcbiAgICAgICAgICAgIH0pOiAoYXJnOiB1bmtub3duKSA9PiBhbnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoc3RhdGU6IE1hcHBlZFN0b3JlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vY2tzVGVzdFtzdGF0ZS5uYW1lXTtcclxuICAgICAgICAgICAgICAgIH0pIGFzIChhcmc6IHVua25vd24pID0+IGFueTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVDb250ZXh0RmFjdG9yeSA9IFRlc3RCZWQuZ2V0KE5HWFNfU1RBVEVfQ09OVEVYVF9GQUNUT1JZKTtcclxuICAgICAgICAgICAgY29uc3QgbW9ja3M6IHsgW2tleTogc3RyaW5nXTogU3RhdGVDb250ZXh0PHVua25vd24+IH0gPSBzdGF0ZXMucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgKGFjYywgc3RhdGUpID0+ICh7IC4uLmFjYywgW3N0YXRlWydOR1hTX09QVElPTlNfTUVUQSddLm5hbWVdOiBjcmVhdGVNb2NrU3RhdGVDb250ZXh0KHN0YXRlKSB9KSxcclxuICAgICAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBqZXN0LnNweU9uKHN0YXRlQ29udGV4dEZhY3RvcnksICdjcmVhdGVTdGF0ZUNvbnRleHQnKS5tb2NrSW1wbGVtZW50YXRpb24obW9ja0NyZWF0ZVN0YXRlQ29udGV4dChtb2NrcykpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1vY2tzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXNldFRlc3RCZWQoKTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYmVmb3JlKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xyXG4gICAgICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgICAgICBOZ3hzVGVzdE1vZHVsZSxcclxuICAgICAgICAgICAgICAgIE5neHNNb2R1bGUuZm9yUm9vdChvcHRpb25zLnN0YXRlcyB8fCBbXSwgb3B0aW9ucy5uZ3hzT3B0aW9ucyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucy5pbXBvcnRzIHx8IFtdKVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLnByb3ZpZGVycyB8fCBbXSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLmNvbXBpbGVDb21wb25lbnRzKCk7XHJcblxyXG4gICAgICAgIE5neHNUZXN0QmVkLm5neHNCb290c3RyYXAoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ2V0IHN0b3JlKCk6IFN0b3JlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXN0QmVkLmdldChTdG9yZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBzbmFwc2hvdCgpOiBTbmFwc2hvdEZuIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlOiBTdG9yZSA9IFRlc3RCZWQuZ2V0KFN0b3JlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5zbmFwc2hvdC5iaW5kKHN0b3JlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IGRpc3BhdGNoKCk6IERpc3BhdGNoRm4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gVGVzdEJlZC5nZXQoU3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoLmJpbmQoc3RvcmUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgc2VsZWN0U25hcHNob3QoKTogU2VsZWN0U25hcHNob3RGbiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZTogU3RvcmUgPSBUZXN0QmVkLmdldChTdG9yZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuc2VsZWN0U25hcHNob3QuYmluZChzdG9yZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBzZWxlY3QoKTogU2VsZWN0Rm4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gVGVzdEJlZC5nZXQoU3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLnNlbGVjdC5iaW5kKHN0b3JlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IHNlbGVjdE9uY2UoKTogU2VsZWN0Rm4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmU6IFN0b3JlID0gVGVzdEJlZC5nZXQoU3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLnNlbGVjdE9uY2UuYmluZChzdG9yZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCByZXNldCgpOiBSZXNldEZuIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlOiBTdG9yZSA9IFRlc3RCZWQuZ2V0KFN0b3JlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5yZXNldC5iaW5kKHN0b3JlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IGdldFRlc3RCZWQoKTogVGVzdEJlZFN0YXRpYyB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGVzdEJlZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IGdldFN0YXRlQ29udGV4dE1vY2tzKCk6IFN0YXRlQ29udGV4dE1hcCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGVDdHhNb2NrcyhvcHRpb25zLnN0YXRlcyB8fCBbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG5neHNCb290c3RyYXAoKTogdm9pZCB7XHJcbiAgICAgICAgTmd4c1Rlc3RCZWQuY3JlYXRlUm9vdE5vZGUoKTtcclxuICAgICAgICBOZ3hzVGVzdE1vZHVsZS5uZ0RvQm9vdHN0cmFwKFRlc3RCZWQuZ2V0KEFwcGxpY2F0aW9uUmVmKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVzZXRUZXN0QmVkKCk6IHZvaWQge1xyXG4gICAgICAgIFRlc3RCZWQucmVzZXRUZXN0RW52aXJvbm1lbnQoKTtcclxuICAgICAgICBUZXN0QmVkLmluaXRUZXN0RW52aXJvbm1lbnQoQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSb290Tm9kZShzZWxlY3RvciA9ICdhcHAtcm9vdCcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkb2N1bWVudCA9IFRlc3RCZWQuZ2V0KERPQ1VNRU5UKTtcclxuICAgICAgICBjb25zdCBhZGFwdGVyOiBEb21BZGFwdGVyID0gbmV3IEJyb3dzZXJEb21BZGFwdGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvb3QgPSBhZGFwdGVyLmZpcnN0Q2hpbGQoYWRhcHRlci5jb250ZW50KGFkYXB0ZXIuY3JlYXRlVGVtcGxhdGUoYDwke3NlbGVjdG9yfT48LyR7c2VsZWN0b3J9PmApKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9sZFJvb3RzID0gYWRhcHRlci5xdWVyeVNlbGVjdG9yQWxsKGRvY3VtZW50LCBzZWxlY3Rvcik7XHJcbiAgICAgICAgb2xkUm9vdHMuZm9yRWFjaCgob2xkUm9vdCkgPT4gYWRhcHRlci5yZW1vdmUob2xkUm9vdCkpO1xyXG5cclxuICAgICAgICBhZGFwdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHJvb3QpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==