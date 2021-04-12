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
GentlemanStateManagerModule.ɵmod = i0.ɵɵdefineNgModule({ type: GentlemanStateManagerModule });
GentlemanStateManagerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GentlemanStateManagerModule_Factory(t) { return new (t || GentlemanStateManagerModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GentlemanStateManagerModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [],
                exports: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXItbGliLyIsInNvdXJjZXMiOlsibGliL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFRNUQsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUEwQztRQUN2RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztTQUNoRyxDQUFDO0lBQ0osQ0FBQzs7K0RBTlUsMkJBQTJCO3FJQUEzQiwyQkFBMkIsa0JBSDdCLEVBQUU7a0RBR0EsMkJBQTJCO2NBTHZDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEVBQUU7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NvdXJjZU9mVHJ1dGhJbml0aWF0ZX0gZnJvbSAnLi9tb2RlbHMvc291cmNlLW9mLXRydXRoJztcclxuaW1wb3J0IHtHZW50bGVtYW5TdGF0ZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvcHVibGljLWFwaSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZU1hbmFnZXJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KHNvdXJjZU9mVHJ1dGhLZXlzOiBTb3VyY2VPZlRydXRoSW5pdGlhdGVbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R2VudGxlbWFuU3RhdGVNYW5hZ2VyTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogR2VudGxlbWFuU3RhdGVNYW5hZ2VyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtHZW50bGVtYW5TdGF0ZVNlcnZpY2UsIHtwcm92aWRlOiAnc291cmNlT2ZUcnV0aEtleXMnLCB1c2VWYWx1ZTogc291cmNlT2ZUcnV0aEtleXN9XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19