import { __spread } from 'tslib';
import { of, Subject } from 'rxjs';
import { Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxsJestHelper = /** @class */ (function () {
    function NgxsJestHelper() {
    }
    /**
     * @template T
     * @param {?} selectorFn
     * @return {?}
     */
    NgxsJestHelper.mockSelect = /**
     * @template T
     * @param {?} selectorFn
     * @return {?}
     */
    function (selectorFn) {
        /** @type {?} */
        var store = TestBed.get(Store);
        if (!jest.isMockFunction(store.select)) {
            jest.spyOn(store, 'select').mockImplementation((/**
             * @param {?} selector
             * @return {?}
             */
            function (selector) {
                /** @type {?} */
                var match = NgxsJestHelper.mockedSelector.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) { return s.key === selector; }));
                if (match) {
                    return match.value;
                }
                return of();
            }));
        }
        /** @type {?} */
        var subject = new Subject();
        NgxsJestHelper.mockedSelector = __spread(NgxsJestHelper.mockedSelector.filter((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.key !== selectorFn; })), [
            { key: selectorFn, value: subject }
        ]);
        return subject;
    };
    NgxsJestHelper.mockedSelector = [];
    return NgxsJestHelper;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsJestHelper.mockedSelector;
}
/** @type {?} */
var mockSelect = NgxsJestHelper.mockSelect;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxsJestHelper, mockSelect };
//# sourceMappingURL=ngxs-labs-testing-jest.js.map
