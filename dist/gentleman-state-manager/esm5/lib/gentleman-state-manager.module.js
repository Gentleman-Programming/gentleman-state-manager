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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXItbGliLyIsInNvdXJjZXMiOlsibGliL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHNUQ7SUFBQTtLQVlDO0lBTlEsbUNBQU8sR0FBZCxVQUFlLGlCQUEwQztRQUN2RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztTQUNoRyxDQUFDO0lBQ0osQ0FBQzttRUFOVSwyQkFBMkI7eUlBQTNCLDJCQUEyQixrQkFIN0IsRUFBRTtzQ0FQYjtDQWlCQyxBQVpELElBWUM7U0FQWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUx2QyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTb3VyY2VPZlRydXRoSW5pdGlhdGV9IGZyb20gJy4vbW9kZWxzL3NvdXJjZS1vZi10cnV0aCc7XHJcbmltcG9ydCB7R2VudGxlbWFuU3RhdGVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3B1YmxpYy1hcGknO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbXSxcclxuICBleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VudGxlbWFuU3RhdGVNYW5hZ2VyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChzb3VyY2VPZlRydXRoS2V5czogU291cmNlT2ZUcnV0aEluaXRpYXRlW10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdlbnRsZW1hblN0YXRlTWFuYWdlck1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEdlbnRsZW1hblN0YXRlTWFuYWdlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbR2VudGxlbWFuU3RhdGVTZXJ2aWNlLCB7cHJvdmlkZTogJ3NvdXJjZU9mVHJ1dGhLZXlzJywgdXNlVmFsdWU6IHNvdXJjZU9mVHJ1dGhLZXlzfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==