import { of, Subject } from 'rxjs';
import { Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxsJestHelper {
    /**
     * @template T
     * @param {?} selectorFn
     * @return {?}
     */
    static mockSelect(selectorFn) {
        /** @type {?} */
        const store = TestBed.get(Store);
        if (!jest.isMockFunction(store.select)) {
            jest.spyOn(store, 'select').mockImplementation((/**
             * @param {?} selector
             * @return {?}
             */
            (selector) => {
                /** @type {?} */
                const match = NgxsJestHelper.mockedSelector.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                (s) => s.key === selector));
                if (match) {
                    return match.value;
                }
                return of();
            }));
        }
        /** @type {?} */
        const subject = new Subject();
        NgxsJestHelper.mockedSelector = [
            ...NgxsJestHelper.mockedSelector.filter((/**
             * @param {?} s
             * @return {?}
             */
            (s) => s.key !== selectorFn)),
            { key: selectorFn, value: subject }
        ];
        return subject;
    }
}
NgxsJestHelper.mockedSelector = [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsJestHelper.mockedSelector;
}
/** @type {?} */
const mockSelect = NgxsJestHelper.mockSelect;

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
