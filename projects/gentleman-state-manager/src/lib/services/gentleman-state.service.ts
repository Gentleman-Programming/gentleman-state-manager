import { Inject, Injectable } from "@angular/core";
import { GentlemanStateObject, StateProperties } from "../models/public-api";
import { SourceOfTruth, SourceOfTruthInitiate } from "../models/source-of-truth";
import { checkIfConditionMet } from "../utils/public-api";

@Injectable({
  providedIn: "root",
})
export class GentlemanStateService {
  private observerArray: SourceOfTruth = new Map();

  constructor(@Inject("sourceOfTruthKeys") sourceOfTruthKeys: SourceOfTruthInitiate[]) {
    sourceOfTruthKeys.forEach((k) => {
      const { state, stateProperties } = k;
      this.createObservable(k.key, state, stateProperties);
    });
  }

  /**
   * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
   * @param gentlemanObject - GentlemanStateObject | undefined
   * @return GentlemanStateObject
   */
  private static checkIfFound(gentlemanObject: GentlemanStateObject | undefined): GentlemanStateObject {
    const condition = () => {
      return { met: !!gentlemanObject, value: gentlemanObject };
    };
    return checkIfConditionMet(() => condition(), "Observable item not found ! check if the key is correct and exists");
  }

  /**
   * @desc it creates and observable and adds it to the observable array.
   * @param key - the key to be used to represent the observable item inside the array
   * @param state - the state of the observable, the object that represents what the observable is going to contain
   * @param stateProperties - the properties of the state
   * @return void
   */
  createObservable(key: string, state: any, stateProperties: StateProperties): void {
    const found = this.observerArray.has(key);
    if (found) {
      console.log(`the key : ${key}, already exists as an entity so it will be ignored`);
    } else {
      const gentlemanObject = new GentlemanStateObject(state, stateProperties);
      this.observerArray.set(key, gentlemanObject);
    }
  }

  /**
   * @desc it returns the selected observable using the provided key.
   * @param key - the key to be used to represent the observable item inside the array
   * @return GentlemanStateObject
   */
  getEntity(key: string): GentlemanStateObject {
    const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.get(key));
    return observableArrayItem;
  }

  /**
   * @desc it emits a new value into the selected observable using the provided key.
   * @param key - the key to be used to represent the observable item inside the array
   * @param data - the data to be emitted inside the selected observable
   * @return void
   */
  emitValue(key: string, data: any): void {
    const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.get(key));
    observableArrayItem.setObservableValues(data);
  }

  /**
   * @desc it destroys an object from the observable array.
   * @param key - the key to be used to represent the observable item inside the array
   * @return void
   */
  destroyObservable(key: string): void {
    const selectedObservable = GentlemanStateService.checkIfFound(this.observerArray.get(key));
    selectedObservable.unsubscribe();
    this.observerArray.delete(key);
  }
}
