/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of, Subject } from 'rxjs';
import { Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
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
        NgxsJestHelper.mockedSelector = tslib_1.__spread(NgxsJestHelper.mockedSelector.filter((/**
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
export { NgxsJestHelper };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxsJestHelper.mockedSelector;
}
/** @type {?} */
export var mockSelect = NgxsJestHelper.mockSelect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC1oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neHMtbGFicy90ZXN0aW5nL2plc3QvIiwic291cmNlcyI6WyJqZXN0LWhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRDtJQUFBO0lBc0JBLENBQUM7Ozs7OztJQW5CVSx5QkFBVTs7Ozs7SUFBakIsVUFBcUIsVUFBNkI7O1lBQ3hDLEtBQUssR0FBVSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsa0JBQWtCOzs7O1lBQUMsVUFBQyxRQUFROztvQkFDOUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFsQixDQUFrQixFQUFDO2dCQUMzRSxJQUFJLEtBQUssRUFBRTtvQkFDUCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxFQUFDLENBQUM7U0FDTjs7WUFFSyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUs7UUFDaEMsY0FBYyxDQUFDLGNBQWMsb0JBQ3RCLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQXBCLENBQW9CLEVBQUM7WUFDcEUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7VUFDdEMsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFwQmMsNkJBQWMsR0FBd0MsRUFBRSxDQUFDO0lBcUI1RSxxQkFBQztDQUFBLEFBdEJELElBc0JDO1NBdEJZLGNBQWM7Ozs7OztJQUN2Qiw4QkFBd0U7OztBQXVCNUUsTUFBTSxLQUFPLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hzSmVzdEhlbHBlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtb2NrZWRTZWxlY3RvcjogeyBrZXk6IGFueTsgdmFsdWU6IFN1YmplY3Q8YW55PiB9W10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgbW9ja1NlbGVjdDxUPihzZWxlY3RvckZuOiAoc3RhdGU6IGFueSkgPT4gVCk6IFN1YmplY3Q8VD4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlOiBTdG9yZSA9IFRlc3RCZWQuZ2V0KFN0b3JlKTtcclxuICAgICAgICBpZiAoIWplc3QuaXNNb2NrRnVuY3Rpb24oc3RvcmUuc2VsZWN0KSkge1xyXG4gICAgICAgICAgICBqZXN0LnNweU9uKHN0b3JlLCAnc2VsZWN0JykubW9ja0ltcGxlbWVudGF0aW9uKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBOZ3hzSmVzdEhlbHBlci5tb2NrZWRTZWxlY3Rvci5maW5kKChzKSA9PiBzLmtleSA9PT0gc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBTdWJqZWN0PFQ+KCk7XHJcbiAgICAgICAgTmd4c0plc3RIZWxwZXIubW9ja2VkU2VsZWN0b3IgPSBbXHJcbiAgICAgICAgICAgIC4uLk5neHNKZXN0SGVscGVyLm1vY2tlZFNlbGVjdG9yLmZpbHRlcigocykgPT4gcy5rZXkgIT09IHNlbGVjdG9yRm4pLFxyXG4gICAgICAgICAgICB7IGtleTogc2VsZWN0b3JGbiwgdmFsdWU6IHN1YmplY3QgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb2NrU2VsZWN0ID0gTmd4c0plc3RIZWxwZXIubW9ja1NlbGVjdDtcclxuIl19