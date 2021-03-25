import { NgModule } from '@angular/core';
import { GentlemanStateService } from './services/public-api';
import * as i0 from "@angular/core";
var GentlemanStateManagerModule = /** @class */ (function () {
    function GentlemanStateManagerModule() {
    }
    GentlemanStateManagerModule.forRoot = function (sourceOfTruthKeys) {
        return {
            ngModule: GentlemanStateManagerModule,
            providers: [GentlemanStateService, { provide: 'sourceOfTruthKeys', useValue: sourceOfTruthKeys }]
        };
    };
    GentlemanStateManagerModule.ɵmod = i0.ɵɵdefineNgModule({ type: GentlemanStateManagerModule });
    GentlemanStateManagerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GentlemanStateManagerModule_Factory(t) { return new (t || GentlemanStateManagerModule)(); }, imports: [[]] });
    return GentlemanStateManagerModule;
}());
export { GentlemanStateManagerModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GentlemanStateManagerModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [],
                exports: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXItbGliLyIsInNvdXJjZXMiOlsibGliL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHNUQ7SUFBQTtLQVlDO0lBTlEsbUNBQU8sR0FBZCxVQUFlLGlCQUEwQztRQUN2RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztTQUNoRyxDQUFDO0lBQ0osQ0FBQzttRUFOVSwyQkFBMkI7eUlBQTNCLDJCQUEyQixrQkFIN0IsRUFBRTtzQ0FQYjtDQWlCQyxBQVpELElBWUM7U0FQWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUx2QyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U291cmNlT2ZUcnV0aEluaXRpYXRlfSBmcm9tICcuL21vZGVscy9zb3VyY2Utb2YtdHJ1dGgnO1xuaW1wb3J0IHtHZW50bGVtYW5TdGF0ZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvcHVibGljLWFwaSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlTWFuYWdlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KHNvdXJjZU9mVHJ1dGhLZXlzOiBTb3VyY2VPZlRydXRoSW5pdGlhdGVbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R2VudGxlbWFuU3RhdGVNYW5hZ2VyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHZW50bGVtYW5TdGF0ZU1hbmFnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtHZW50bGVtYW5TdGF0ZVNlcnZpY2UsIHtwcm92aWRlOiAnc291cmNlT2ZUcnV0aEtleXMnLCB1c2VWYWx1ZTogc291cmNlT2ZUcnV0aEtleXN9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==