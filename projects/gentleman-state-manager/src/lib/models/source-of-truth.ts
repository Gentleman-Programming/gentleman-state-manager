import { ObserverArrayItem } from './observer-array';
import { StateProperties } from './state';

export type SourceOfTruth = ObserverArrayItem<any>[];

export interface SourceOfTruthInitiate {
  key: string;
  state: any;
  stateProperties: StateProperties;
}
