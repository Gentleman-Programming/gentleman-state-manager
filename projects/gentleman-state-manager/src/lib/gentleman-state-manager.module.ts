import {ModuleWithProviders, NgModule} from '@angular/core';
import {SourceOfTruthInitiate} from './models/source-of-truth';
import {GentlemanStateService} from './services/public-api';


@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class GentlemanStateManagerModule {
  static forRoot(sourceOfTruthKeys: SourceOfTruthInitiate[]): ModuleWithProviders<GentlemanStateManagerModule> {
    return {
      ngModule: GentlemanStateManagerModule,
      providers: [GentlemanStateService, {provide: 'sourceOfTruthKeys', useValue: sourceOfTruthKeys}]
    };
  }
}
