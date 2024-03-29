import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @desc checks if the condition is met and returns its value
 * @param condition - the condition to check
 * @param errorMessage - the error message to be shown if the condition is not met
 * @return any
 */
function checkIfConditionMet(condition, errorMessage) {
    const conditionMet = condition();
    if (!conditionMet.met) {
        console.error(errorMessage);
        throw Error(errorMessage);
    }
    return conditionMet.value;
}

class GentlemanStateObject {
    constructor(state, stateProperties) {
        this.stateProperties = {};
        this.state = state;
        this.stateProperties = stateProperties;
        this.observableSubject = new BehaviorSubject(state);
    }
    /**
     * @desc returns the observable that contains the state for async operations - it listens for changes
     * @return Observable
     */
    getObservable() {
        return this.observableSubject.asObservable();
    }
    /**
     * @desc returns the state properties object
     * @return StateProperties
     */
    getStateProperties() {
        return this.stateProperties;
    }
    /**
     * @desc unsubscribes from the observable
     * @return void
     */
    unsubscribe() {
        this.observableSubject.unsubscribe();
    }
    /**
     * @desc returns the value of the state at the time of the call
     * @return any
     */
    getStateSnapshot() {
        return Object.assign({}, this.state);
    }
    /**
     * @desc returns the value of a property of the state at the time of the call
     * @param property - the name of the requested property
     * @return any
     */
    getPropertyFromState(property) {
        return this.state[property];
    }
    /**
     * @desc returns the value of a property of the state for async operations - it listens for changes
     * @param property - the name of the requested property
     * @return Observable
     */
    getPropertyFromObservable(property) {
        return this.getObservable().pipe(map((s) => this.checkIfPropertyExists(s, property)));
    }
    /**
     * @desc sets the value for a certain property inside the state, triggers an async event
     * @param value - the value for the requested property
     * @param property - the name of the requested property
     * @param emit - if true it will trigger an async event
     * @return void
     */
    setObservableValues(value, property = null, emit = true) {
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
    setStateValues(value, property) {
        if (property && this.checkIfPropertyExists(this.state, property) !== undefined) {
            this.state[property] = value;
        }
        else {
            this.state = Object.assign(Object.assign({}, this.state), value);
        }
    }
    /**
     * @desc resets the state
     * @return void
     */
    resetState() {
        this.state = {};
    }
    /**
     * @desc checks if the selected property exists inside the state
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param property - the selected property
     * @return any
     */
    checkIfPropertyExists(state, property) {
        const condition = () => {
            return { met: state.hasOwnProperty(property), value: state[property] };
        };
        return checkIfConditionMet(() => condition(), 'Selected property not found ! check if the key is correct and exists');
    }
}

class GentlemanStateService {
    constructor(sourceOfTruthKeys) {
        this.observerArray = new Map();
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
    static checkIfFound(gentlemanObject) {
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
    createObservable(key, state, stateProperties) {
        const found = this.observerArray.has(key);
        if (found) {
            console.log(`the key : ${key}, already exists as an entity so it will be ignored`);
        }
        else {
            const gentlemanObject = new GentlemanStateObject(state, stateProperties);
            this.observerArray.set(key, gentlemanObject);
        }
    }
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return GentlemanStateObject
     */
    getEntity(key) {
        const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.get(key));
        return observableArrayItem;
    }
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @param data - the data to be emitted inside the selected observable
     * @return void
     */
    emitValue(key, data) {
        const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.get(key));
        observableArrayItem.setObservableValues(data);
    }
    /**
     * @desc it destroys an object from the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @return void
     */
    destroyObservable(key) {
        const selectedObservable = GentlemanStateService.checkIfFound(this.observerArray.get(key));
        selectedObservable.unsubscribe();
        this.observerArray.delete(key);
    }
}
GentlemanStateService.ɵfac = function GentlemanStateService_Factory(t) { return new (t || GentlemanStateService)(i0.ɵɵinject("sourceOfTruthKeys")); };
GentlemanStateService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GentlemanStateService, factory: GentlemanStateService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GentlemanStateService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["sourceOfTruthKeys"]
            }] }]; }, null); })();

class GentlemanStateManagerModule {
    static forRoot(sourceOfTruthKeys) {
        return {
            ngModule: GentlemanStateManagerModule,
            providers: [GentlemanStateService, { provide: 'sourceOfTruthKeys', useValue: sourceOfTruthKeys }]
        };
    }
}
GentlemanStateManagerModule.ɵfac = function GentlemanStateManagerModule_Factory(t) { return new (t || GentlemanStateManagerModule)(); };
GentlemanStateManagerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GentlemanStateManagerModule });
GentlemanStateManagerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GentlemanStateManagerModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [],
                exports: []
            }]
    }], null, null); })();

/*
 * Public API Surface of gentleman-state-manager
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GentlemanStateManagerModule, GentlemanStateObject, GentlemanStateService };
//# sourceMappingURL=gentleman-state-manager-lib.js.map
