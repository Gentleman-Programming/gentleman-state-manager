import { GentlemanStateObject } from './gentleman-state-object';

export interface ObserverArrayItem<T> {
  key: string;
  observable: GentlemanStateObject<T>;
}
