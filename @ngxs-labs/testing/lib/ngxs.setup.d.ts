import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { NgxsOptionsTesting, NgxsTesting } from './symbol';
export declare class NgxsTestBed {
    static configureTestingStates(options: NgxsOptionsTesting): NgxsTesting;
    private static ngxsBootstrap;
    private static resetTestBed;
    private static createRootNode;
}
