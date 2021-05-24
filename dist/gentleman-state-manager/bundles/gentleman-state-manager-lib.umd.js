(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('gentleman-state-manager-lib', ['exports', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['gentleman-state-manager-lib'] = {}, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i0, rxjs, operators) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /**
     * @desc checks if the condition is met and returns its value
     * @param condition - the condition to check
     * @param errorMessage - the error message to be shown if the condition is not met
     * @return any
     */
    function checkIfConditionMet(condition, errorMessage) {
        var conditionMet = condition();
        if (!conditionMet.met) {
            console.error(errorMessage);
            throw Error(errorMessage);
        }
        return conditionMet.value;
    }

    var GentlemanStateObject = /** @class */ (function () {
        function GentlemanStateObject(state, stateProperties) {
            this.stateProperties = {};
            this.state = state;
            this.stateProperties = stateProperties;
            this.observableSubject = new rxjs.BehaviorSubject(state);
        }
        /**
         * @desc returns the observable that contains the state for async operations - it listens for changes
         * @return Observable
         */
        GentlemanStateObject.prototype.getObservable = function () {
            return this.observableSubject.asObservable();
        };
        /**
         * @desc returns the state properties object
         * @return StateProperties
         */
        GentlemanStateObject.prototype.getStateProperties = function () {
            return this.stateProperties;
        };
        /**
         * @desc unsubscribes from the observable
         * @return void
         */
        GentlemanStateObject.prototype.unsubscribe = function () {
            this.observableSubject.unsubscribe();
        };
        /**
         * @desc returns the value of the state at the time of the call
         * @return any
         */
        GentlemanStateObject.prototype.getStateSnapshot = function () {
            return Object.assign({}, this.state);
        };
        /**
         * @desc returns the value of a property of the state at the time of the call
         * @param property - the name of the requested property
         * @return any
         */
        GentlemanStateObject.prototype.getPropertyFromState = function (property) {
            return this.state[property];
        };
        /**
         * @desc returns the value of a property of the state for async operations - it listens for changes
         * @param property - the name of the requested property
         * @return Observable
         */
        GentlemanStateObject.prototype.getPropertyFromObservable = function (property) {
            var _this = this;
            return this.getObservable().pipe(operators.map(function (s) { return _this.checkIfPropertyExists(s, property); }));
        };
        /**
         * @desc sets the value for a certain property inside the state, triggers an async event
         * @param value - the value for the requested property
         * @param property - the name of the requested property
         * @param emit - if true it will trigger an async event
         * @return void
         */
        GentlemanStateObject.prototype.setObservableValues = function (value, property, emit) {
            if (property === void 0) { property = null; }
            if (emit === void 0) { emit = true; }
            this.setStateValues(value, property);
            if (emit) {
                this.observableSubject.next(this.state);
            }
        };
        /**
         * @desc sets the value for a certain property inside the state, doesn't triggers an async event
         * @param value - the value for the requested property
         * @param property - the name of the requested property, if no property it will try to patch the values into the state
         * @return void
         */
        GentlemanStateObject.prototype.setStateValues = function (value, property) {
            if (property && this.checkIfPropertyExists(this.state, property) !== undefined) {
                this.state[property] = value;
            }
            else {
                this.state = Object.assign(Object.assign({}, this.state), value);
            }
        };
        /**
         * @desc resets the state
         * @return void
         */
        GentlemanStateObject.prototype.resetState = function () {
            this.state = {};
        };
        /**
         * @desc checks if the selected property exists inside the state
         * @param state - the state of the observable, the object that represents what the observable is going to contain
         * @param property - the selected property
         * @return any
         */
        GentlemanStateObject.prototype.checkIfPropertyExists = function (state, property) {
            var condition = function () {
                return { met: state.hasOwnProperty(property), value: state[property] };
            };
            return checkIfConditionMet(function () { return condition(); }, 'Selected property not found ! check if the key is correct and exists');
        };
        return GentlemanStateObject;
    }());

    var GentlemanStateService = /** @class */ (function () {
        function GentlemanStateService(sourceOfTruthKeys) {
            var _this = this;
            this.observerArray = new Map();
            sourceOfTruthKeys.forEach(function (k) {
                var state = k.state, stateProperties = k.stateProperties;
                _this.createObservable(k.key, state, stateProperties);
            });
        }
        /**
         * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
         * @param gentlemanObject - GentlemanStateObject | undefined
         * @return GentlemanStateObject
         */
        GentlemanStateService.checkIfFound = function (gentlemanObject) {
            var condition = function () {
                return { met: !!gentlemanObject, value: gentlemanObject };
            };
            return checkIfConditionMet(function () { return condition(); }, "Observable item not found ! check if the key is correct and exists");
        };
        /**
         * @desc it creates and observable and adds it to the observable array.
         * @param key - the key to be used to represent the observable item inside the array
         * @param state - the state of the observable, the object that represents what the observable is going to contain
         * @param stateProperties - the properties of the state
         * @return void
         */
        GentlemanStateService.prototype.createObservable = function (key, state, stateProperties) {
            var found = this.observerArray.has(key);
            if (found) {
                console.log("the key : " + key + ", already exists as an entity so it will be ignored");
            }
            else {
                var gentlemanObject = new GentlemanStateObject(state, stateProperties);
                this.observerArray.set(key, gentlemanObject);
            }
        };
        /**
         * @desc it returns the selected observable using the provided key.
         * @param key - the key to be used to represent the observable item inside the array
         * @return GentlemanStateObject
         */
        GentlemanStateService.prototype.getEntity = function (key) {
            var observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.get(key));
            return observableArrayItem;
        };
        /**
         * @desc it emits a new value into the selected observable using the provided key.
         * @param key - the key to be used to represent the observable item inside the array
         * @param data - the data to be emitted inside the selected observable
         * @return void
         */
        GentlemanStateService.prototype.emitValue = function (key, data) {
            var observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.get(key));
            observableArrayItem.setObservableValues(data);
        };
        /**
         * @desc it destroys an object from the observable array.
         * @param key - the key to be used to represent the observable item inside the array
         * @return void
         */
        GentlemanStateService.prototype.destroyObservable = function (key) {
            var selectedObservable = GentlemanStateService.checkIfFound(this.observerArray.get(key));
            selectedObservable.unsubscribe();
            this.observerArray.delete(key);
        };
        return GentlemanStateService;
    }());
    GentlemanStateService.ɵfac = function GentlemanStateService_Factory(t) { return new (t || GentlemanStateService)(i0__namespace.ɵɵinject("sourceOfTruthKeys")); };
    GentlemanStateService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: GentlemanStateService, factory: GentlemanStateService.ɵfac, providedIn: "root" });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GentlemanStateService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: "root",
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ["sourceOfTruthKeys"]
                        }] }];
        }, null);
    })();

    var GentlemanStateManagerModule = /** @class */ (function () {
        function GentlemanStateManagerModule() {
        }
        GentlemanStateManagerModule.forRoot = function (sourceOfTruthKeys) {
            return {
                ngModule: GentlemanStateManagerModule,
                providers: [GentlemanStateService, { provide: 'sourceOfTruthKeys', useValue: sourceOfTruthKeys }]
            };
        };
        return GentlemanStateManagerModule;
    }());
    GentlemanStateManagerModule.ɵfac = function GentlemanStateManagerModule_Factory(t) { return new (t || GentlemanStateManagerModule)(); };
    GentlemanStateManagerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: GentlemanStateManagerModule });
    GentlemanStateManagerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GentlemanStateManagerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [],
                        exports: []
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of gentleman-state-manager
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GentlemanStateManagerModule = GentlemanStateManagerModule;
    exports.GentlemanStateObject = GentlemanStateObject;
    exports.GentlemanStateService = GentlemanStateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gentleman-state-manager-lib.umd.js.map
