import { Subject } from 'rxjs';
export declare class NgxsJestHelper {
    private static mockedSelector;
    static mockSelect<T>(selectorFn: (state: any) => T): Subject<T>;
}
export declare const mockSelect: typeof NgxsJestHelper.mockSelect;
