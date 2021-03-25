import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { GentlemanStateService } from './services/public-api';
var GentlemanStateManagerModule = /** @class */ (function () {
    function GentlemanStateManagerModule() {
    }
    GentlemanStateManagerModule_1 = GentlemanStateManagerModule;
    GentlemanStateManagerModule.forRoot = function (sourceOfTruthKeys) {
        return {
            ngModule: GentlemanStateManagerModule_1,
            providers: [GentlemanStateService, { provide: 'sourceOfTruthKeys', useValue: sourceOfTruthKeys }]
        };
    };
    var GentlemanStateManagerModule_1;
    GentlemanStateManagerModule = GentlemanStateManagerModule_1 = __decorate([
        NgModule({
            declarations: [],
            imports: [],
            exports: []
        })
    ], GentlemanStateManagerModule);
    return GentlemanStateManagerModule;
}());
export { GentlemanStateManagerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXItbGliLyIsInNvdXJjZXMiOlsibGliL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFRNUQ7SUFBQTtJQU9BLENBQUM7b0NBUFksMkJBQTJCO0lBQy9CLG1DQUFPLEdBQWQsVUFBZSxpQkFBMEM7UUFDdkQsT0FBTztZQUNMLFFBQVEsRUFBRSw2QkFBMkI7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDLENBQUM7U0FDaEcsQ0FBQztJQUNKLENBQUM7O0lBTlUsMkJBQTJCO1FBTHZDLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO09BQ1csMkJBQTJCLENBT3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U291cmNlT2ZUcnV0aEluaXRpYXRlfSBmcm9tICcuL21vZGVscy9zb3VyY2Utb2YtdHJ1dGgnO1xuaW1wb3J0IHtHZW50bGVtYW5TdGF0ZVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvcHVibGljLWFwaSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlTWFuYWdlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KHNvdXJjZU9mVHJ1dGhLZXlzOiBTb3VyY2VPZlRydXRoSW5pdGlhdGVbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8R2VudGxlbWFuU3RhdGVNYW5hZ2VyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHZW50bGVtYW5TdGF0ZU1hbmFnZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtHZW50bGVtYW5TdGF0ZVNlcnZpY2UsIHtwcm92aWRlOiAnc291cmNlT2ZUcnV0aEtleXMnLCB1c2VWYWx1ZTogc291cmNlT2ZUcnV0aEtleXN9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==