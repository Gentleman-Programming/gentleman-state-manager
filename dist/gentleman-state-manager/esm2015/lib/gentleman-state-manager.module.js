import { NgModule } from '@angular/core';
import { GentlemanStateService } from './services/public-api';
import * as i0 from "@angular/core";
export class GentlemanStateManagerModule {
    static forRoot(sourceOfTruthKeys) {
        return {
            ngModule: GentlemanStateManagerModule,
            providers: [GentlemanStateService, { provide: 'sourceOfTruthKeys', useValue: sourceOfTruthKeys }]
        };
    }
}
GentlemanStateManagerModule.ɵfac = function GentlemanStateManagerModule_Factory(t) { return new (t || GentlemanStateManagerModule)(); };
GentlemanStateManagerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GentlemanStateManagerModule });
GentlemanStateManagerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GentlemanStateManagerModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [],
                exports: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXIvc3JjL2xpYi9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBUTVELE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBMEM7UUFDdkQsT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDLENBQUM7U0FDaEcsQ0FBQztJQUNKLENBQUM7O3NHQU5VLDJCQUEyQjs2RUFBM0IsMkJBQTJCO2lGQUg3QixFQUFFO3VGQUdBLDJCQUEyQjtjQUx2QyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTb3VyY2VPZlRydXRoSW5pdGlhdGV9IGZyb20gJy4vbW9kZWxzL3NvdXJjZS1vZi10cnV0aCc7XHJcbmltcG9ydCB7R2VudGxlbWFuU3RhdGVTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3B1YmxpYy1hcGknO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXSxcclxuICBpbXBvcnRzOiBbXSxcclxuICBleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VudGxlbWFuU3RhdGVNYW5hZ2VyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChzb3VyY2VPZlRydXRoS2V5czogU291cmNlT2ZUcnV0aEluaXRpYXRlW10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEdlbnRsZW1hblN0YXRlTWFuYWdlck1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEdlbnRsZW1hblN0YXRlTWFuYWdlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbR2VudGxlbWFuU3RhdGVTZXJ2aWNlLCB7cHJvdmlkZTogJ3NvdXJjZU9mVHJ1dGhLZXlzJywgdXNlVmFsdWU6IHNvdXJjZU9mVHJ1dGhLZXlzfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==