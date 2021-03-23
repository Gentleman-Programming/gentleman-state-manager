import {Inject, Injectable} from '@angular/core';
import {GentlemanStateObject, ObserverArrayItem, StateProperties} from '../models/public-api';
import {SourceOfTruth, SourceOfTruthInitiate} from '../models/source-of-truth';
import {checkIfConditionMet} from '../utils/public-api';

@Injectable({
  providedIn: 'root'
})
export class GentlemanStateService {
  private observerArray: SourceOfTruth = [];

  constructor(@Inject('sourceOfTruthKeys') sourceOfTruthKeys: SourceOfTruthInitiate[]) {
    sourceOfTruthKeys.forEach(k => {
      const {key, state, stateProperties} = k;
      this.createObservable(key, state, stateProperties);
    });
  }

  /**
   * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
   * @param observableArrayItem: ObserverArrayItem | undefined
   * @return ObserverArrayItem
   */
  static checkIfFound(observableArrayItem: ObserverArrayItem<any> | undefined): ObserverArrayItem<any> {
    const condition = () => {
      return observableArrayItem;
    };
    return checkIfConditionMet(() => condition(), 'Observable item not found ! check if the key is correct and exists');
  }

  /**
   * @desc it creates and observable and adds it to the observable array.
   * @param key: the key to be used to represent the observable item inside the array
   * @param state: the state of the observable, the object that represents what the observable is going to contain
   * @return void
   */
  createObservable(key: string, state: any, stateProperties: StateProperties): void {
    const observable = new GentlemanStateObject(state, stateProperties);
    this.observerArray.push({key, observable});
  }

  /**
   * @desc it returns the selected observable using the provided key.
   * @param key: the key to be used to represent the observable item inside the array
   * @return ObserverArrayItem
   */
  getObservable(key: string): GentlemanStateObject<any> {
    const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find(obs => obs.key === key));
    return observableArrayItem?.observable;
  }

  /**
   * @desc it emits a new value into the selected observable using the provided key.
   * @param key: the key to be used to represent the observable item inside the array
   * @param data: the data to be emitted inside the selected observable
   * @return void
   */
  emitValue(key: string, data: any): void {
    const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find(obs => obs.key === key));
    observableArrayItem?.observable.setObservableValues(data);
  }

  /**
   * @desc it destroys an object from the observable array.
   * @param key: the key to be used to represent the observable item inside the array
   * @return void
   */
  destroyObservable(key: string): void {
    const selectedObservable = GentlemanStateService.checkIfFound(this.observerArray.find(obs => obs.key === key));
    selectedObservable?.observable.unsubscribe();
    this.observerArray = this.observerArray.filter(obs => obs.key !== key);
  }
}
