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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXItbGliLyIsInNvdXJjZXMiOlsibGliL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7QUFRNUQsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUEwQztRQUN2RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztTQUNoRyxDQUFDO0lBQ0osQ0FBQzs7K0RBTlUsMkJBQTJCO3FJQUEzQiwyQkFBMkIsa0JBSDdCLEVBQUU7a0RBR0EsMkJBQTJCO2NBTHZDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEVBQUU7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTb3VyY2VPZlRydXRoSW5pdGlhdGV9IGZyb20gJy4vbW9kZWxzL3NvdXJjZS1vZi10cnV0aCc7XG5pbXBvcnQge0dlbnRsZW1hblN0YXRlU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9wdWJsaWMtYXBpJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgR2VudGxlbWFuU3RhdGVNYW5hZ2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qoc291cmNlT2ZUcnV0aEtleXM6IFNvdXJjZU9mVHJ1dGhJbml0aWF0ZVtdKTogTW9kdWxlV2l0aFByb3ZpZGVyczxHZW50bGVtYW5TdGF0ZU1hbmFnZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdlbnRsZW1hblN0YXRlTWFuYWdlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0dlbnRsZW1hblN0YXRlU2VydmljZSwge3Byb3ZpZGU6ICdzb3VyY2VPZlRydXRoS2V5cycsIHVzZVZhbHVlOiBzb3VyY2VPZlRydXRoS2V5c31dXG4gICAgfTtcbiAgfVxufVxuIl19