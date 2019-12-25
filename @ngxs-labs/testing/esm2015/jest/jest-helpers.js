/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of, Subject } from 'rxjs';
import { Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
export class NgxsJestHelper {
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
export const mockSelect = NgxsJestHelper.mockSelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC1oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMtbGFicy90ZXN0aW5nL2plc3QvIiwic291cmNlcyI6WyJqZXN0LWhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFHdkIsTUFBTSxDQUFDLFVBQVUsQ0FBSSxVQUE2Qjs7Y0FDeEMsS0FBSyxHQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxrQkFBa0I7Ozs7WUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFOztzQkFDbEQsS0FBSyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSTs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUM7Z0JBQzNFLElBQUksS0FBSyxFQUFFO29CQUNQLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFLEVBQUUsQ0FBQztZQUNoQixDQUFDLEVBQUMsQ0FBQztTQUNOOztjQUVLLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBSztRQUNoQyxjQUFjLENBQUMsY0FBYyxHQUFHO1lBQzVCLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssVUFBVSxFQUFDO1lBQ3BFLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1NBQ3RDLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOztBQXBCYyw2QkFBYyxHQUF3QyxFQUFFLENBQUM7Ozs7OztJQUF4RSw4QkFBd0U7OztBQXVCNUUsTUFBTSxPQUFPLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hzSmVzdEhlbHBlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtb2NrZWRTZWxlY3RvcjogeyBrZXk6IGFueTsgdmFsdWU6IFN1YmplY3Q8YW55PiB9W10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgbW9ja1NlbGVjdDxUPihzZWxlY3RvckZuOiAoc3RhdGU6IGFueSkgPT4gVCk6IFN1YmplY3Q8VD4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlOiBTdG9yZSA9IFRlc3RCZWQuZ2V0KFN0b3JlKTtcclxuICAgICAgICBpZiAoIWplc3QuaXNNb2NrRnVuY3Rpb24oc3RvcmUuc2VsZWN0KSkge1xyXG4gICAgICAgICAgICBqZXN0LnNweU9uKHN0b3JlLCAnc2VsZWN0JykubW9ja0ltcGxlbWVudGF0aW9uKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBOZ3hzSmVzdEhlbHBlci5tb2NrZWRTZWxlY3Rvci5maW5kKChzKSA9PiBzLmtleSA9PT0gc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PFQ+KCk7XHJcbiAgICAgICAgTmd4c0plc3RIZWxwZXIubW9ja2VkU2VsZWN0b3IgPSBbXHJcbiAgICAgICAgICAgIC4uLk5neHNKZXN0SGVscGVyLm1vY2tlZFNlbGVjdG9yLmZpbHRlcigocykgPT4gcy5rZXkgIT09IHNlbGVjdG9yRm4pLFxyXG4gICAgICAgICAgICB7IGtleTogc2VsZWN0b3JGbiwgdmFsdWU6IHN1YmplY3QgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb2NrU2VsZWN0ID0gTmd4c0plc3RIZWxwZXIubW9ja1NlbGVjdDtcclxuIl19