import { BehaviorSubject, Observable } from 'rxjs';
import { StateProperties, TypeWithKey } from './public-api';
export declare class GentlemanStateObject<T extends TypeWithKey<any>> {
    private state;
    private stateProperties;
    readonly observableSubject: BehaviorSubject<T>;
    constructor(state: T, stateProperties: StateProperties);
    /**
     * @desc returns the observable that contains the state for async operations - it listens for changes
     * @return Observable
     */
    getObservable(): Observable<T>;
    /**
     * @desc returns the state properties object
     * @return StateProperties
     */
    getStateProperties(): StateProperties;
    /**
     * @desc unsubscribes from the observable
     * @return void
     */
    unsubscribe(): void;
    /**
     * @desc returns the value of the state at the time of the call
     * @return any
     */
    getStateSnapshot(): T;
    /**
     * @desc returns the value of a property of the state at the time of the call
     * @param property - the name of the requested property
     * @return any
     */
    getPropertyFromState(property: string): any;
    /**
     * @desc returns the value of a property of the state for async operations - it listens for changes
     * @param property - the name of the requested property
     * @return Observable
     */
    getPropertyFromObservable(property: string): Observable<any>;
    /**
     * @desc sets the value for a certain property inside the state, triggers an async event
     * @param value - the value for the requested property
     * @param property - the name of the requested property
     * @param emit - if true it will trigger an async event
     * @return void
     */
    setObservableValues(value: T, property?: string | null, emit?: boolean): void;
    /**
     * @desc sets the value for a certain property inside the state, doesn't triggers an async event
     * @param value - the value for the requested property
     * @param property - the name of the requested property, if no property it will try to patch the values into the state
     * @return void
     */
    setStateValues(value: T, property: string | null): void;
    /**
     * @desc resets the state
     * @return void
     */
    resetState(): void;
    /**
     * @desc checks if the selected property exists inside the state
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param property - the selected property
     * @return any
     */
    private checkIfPropertyExists;
}
