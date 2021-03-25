import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StateProperties, TypeWithKey} from './public-api';
import {checkIfConditionMet} from '../utils/public-api';

export class GentlemanStateObject<T extends TypeWithKey<any>> {
  private state: T;
  private stateProperties: StateProperties = {};
  readonly observableSubject: BehaviorSubject<T>;

  constructor(state: T, stateProperties: StateProperties) {
    this.state = state;
    this.stateProperties = stateProperties;
    this.observableSubject = new BehaviorSubject(state);
  }

  /**
   * @desc returns the observable that contains the state for async operations - it listens for changes
   * @return Observable
   */
  getObservable(): Observable<T> {
    return this.observableSubject.asObservable();
  }

  /**
   * @desc returns the state properties object
   * @return StateProperties
   */
  getStateProperties(): StateProperties {
    return this.stateProperties;
  }

  /**
   * @desc unsubscribes from the observable
   * @return void
   */
  unsubscribe(): void {
    this.observableSubject.unsubscribe();
  }

  /**
   * @desc returns the value of the state at the time of the call
   * @return any
   */
  getStateSnapshot(): T {
    return { ...this.state };
  }

  /**
   * @desc returns the value of a property of the state at the time of the call
   * @param property - the name of the requested property
   * @return any
   */
  getPropertyFromState(property: string): any {
    return this.state[property];
  }

  /**
   * @desc returns the value of a property of the state for async operations - it listens for changes
   * @param property - the name of the requested property
   * @return Observable
   */
  getPropertyFromObservable(property: string): Observable<any> {
    return this.getObservable().pipe(map(s => this.checkIfPropertyExists(s, property)));
  }

  /**
   * @desc sets the value for a certain property inside the state, triggers an async event
   * @param value - the value for the requested property
   * @param property - the name of the requested property
   * @param emit - if true it will trigger an async event
   * @return void
   */
  setObservableValues(value: T, property: string | null = null, emit = true): void {
    this.setStateValues(value, property);
    if (emit) {
      this.observableSubject.next(this.state);
    }
  }

  /**
   * @desc sets the value for a certain property inside the state, doesn't triggers an async event
   * @param value - the value for the requested property
   * @param property - the name of the requested property, if no property it will try to patch the values into the state
   * @return void
   */
  setStateValues(value: T, property: string | null): void {
    if (property && this.checkIfPropertyExists(this.state, property)) {
      (this.state as TypeWithKey<any>)[property] = value;
    } else {
      this.state = {
        ...this.state,
        ...value
      };
    }
  }

  /**
   * @desc resets the state
   * @return void
   */
  resetState(): void {
    (this.state as TypeWithKey<any>) = {};
  }

  /**
   * @desc checks if the selected property exists inside the state
   * @param state: the state of the observable, the object that represents what the observable is going to contain
   * @param property - the selected property
   * @return any
   */
  private checkIfPropertyExists(state: T, property: string): any {
    const condition = () => {
      const propertyValue = state[property];
      return propertyValue || propertyValue === null;
    };
    return checkIfConditionMet(() => condition(), 'Selected property not found ! check if the key is correct and exists');
  }
}
