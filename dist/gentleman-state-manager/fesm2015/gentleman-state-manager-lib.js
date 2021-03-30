import { __decorate, __param } from 'tslib';
import { Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule } from '@angular/core';
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

var GentlemanStateService_1;
let GentlemanStateService = GentlemanStateService_1 = class GentlemanStateService {
    constructor(sourceOfTruthKeys) {
        this.observerArray = [];
        sourceOfTruthKeys.forEach(k => {
            const { key, state, stateProperties } = k;
            this.createObservable(key, state, stateProperties);
        });
    }
    /**
     * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
     * @param observableArrayItem - ObserverArrayItem | undefined
     * @return ObserverArrayItem
     */
    static checkIfFound(observableArrayItem) {
        const condition = () => {
            return { met: !!observableArrayItem, value: observableArrayItem };
        };
        return checkIfConditionMet(() => condition(), 'Observable item not found ! check if the key is correct and exists');
    }
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    createObservable(key, state, stateProperties) {
        const observable = new GentlemanStateObject(state, stateProperties);
        this.observerArray.push({ key, observable });
    }
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return ObserverArrayItem
     */
    getObservable(key) {
        const observableArrayItem = GentlemanStateService_1.checkIfFound(this.observerArray.find(obs => obs.key === key));
        return observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable;
    }
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @param data - the data to be emitted inside the selected observable
     * @return void
     */
    emitValue(key, data) {
        const observableArrayItem = GentlemanStateService_1.checkIfFound(this.observerArray.find(obs => obs.key === key));
        observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable.setObservableValues(data);
    }
    /**
     * @desc it destroys an object from the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @return void
     */
    destroyObservable(key) {
        const selectedObservable = GentlemanStateService_1.checkIfFound(this.observerArray.find(obs => obs.key === key));
        selectedObservable === null || selectedObservable === void 0 ? void 0 : selectedObservable.observable.unsubscribe();
        this.observerArray = this.observerArray.filter(obs => obs.key !== key);
    }
};
GentlemanStateService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: ['sourceOfTruthKeys',] }] }
];
GentlemanStateService.ɵprov = ɵɵdefineInjectable({ factory: function GentlemanStateService_Factory() { return new GentlemanStateService(ɵɵinject("sourceOfTruthKeys")); }, token: GentlemanStateService, providedIn: "root" });
GentlemanStateService = GentlemanStateService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject('sourceOfTruthKeys'))
], GentlemanStateService);

var GentlemanStateManagerModule_1;
let GentlemanStateManagerModule = GentlemanStateManagerModule_1 = class GentlemanStateManagerModule {
    static forRoot(sourceOfTruthKeys) {
        return {
            ngModule: GentlemanStateManagerModule_1,
            providers: [GentlemanStateService, { provide: 'sourceOfTruthKeys', useValue: sourceOfTruthKeys }]
        };
    }
};
GentlemanStateManagerModule = GentlemanStateManagerModule_1 = __decorate([
    NgModule({
        declarations: [],
        imports: [],
        exports: []
    })
], GentlemanStateManagerModule);

/*
 * Public API Surface of gentleman-state-manager
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GentlemanStateManagerModule, GentlemanStateObject, GentlemanStateService };
//# sourceMappingURL=gentleman-state-manager-lib.js.map
