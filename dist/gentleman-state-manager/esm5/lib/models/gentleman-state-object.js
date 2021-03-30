import { __assign } from "tslib";
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { checkIfConditionMet } from '../utils/public-api';
var GentlemanStateObject = /** @class */ (function () {
    function GentlemanStateObject(state, stateProperties) {
        this.stateProperties = {};
        this.state = state;
        this.stateProperties = stateProperties;
        this.observableSubject = new BehaviorSubject(state);
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
        return __assign({}, this.state);
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
        return this.getObservable().pipe(map(function (s) { return _this.checkIfPropertyExists(s, property); }));
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
            this.state = __assign(__assign({}, this.state), value);
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
export { GentlemanStateObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHMUQ7SUFLRSw4QkFBWSxLQUFRLEVBQUUsZUFBZ0M7UUFIOUMsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBSTVDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNENBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtDQUFnQixHQUFoQjtRQUNFLG9CQUFZLElBQUksQ0FBQyxLQUFLLEVBQUc7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtREFBb0IsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0RBQXlCLEdBQXpCLFVBQTBCLFFBQWdCO1FBQTFDLGlCQUVDO1FBREMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxrREFBbUIsR0FBbkIsVUFBb0IsS0FBUSxFQUFFLFFBQThCLEVBQUUsSUFBVztRQUEzQyx5QkFBQSxFQUFBLGVBQThCO1FBQUUscUJBQUEsRUFBQSxXQUFXO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2Q0FBYyxHQUFkLFVBQWUsS0FBUSxFQUFFLFFBQXVCO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM3RSxJQUFJLENBQUMsS0FBMEIsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLHlCQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsS0FBSyxDQUNULENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCx5Q0FBVSxHQUFWO1FBQ0csSUFBSSxDQUFDLEtBQTBCLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLG9EQUFxQixHQUE3QixVQUE4QixLQUFRLEVBQUUsUUFBZ0I7UUFDdEQsSUFBTSxTQUFTLEdBQUc7WUFDaEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN6RSxDQUFDLENBQUM7UUFDRixPQUFPLG1CQUFtQixDQUFDLGNBQU0sT0FBQSxTQUFTLEVBQUUsRUFBWCxDQUFXLEVBQUUsc0VBQXNFLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBaEhELElBZ0hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBjaGVja0lmQ29uZGl0aW9uTWV0IH0gZnJvbSAnLi4vdXRpbHMvcHVibGljLWFwaSc7XG5pbXBvcnQgeyBTdGF0ZVByb3BlcnRpZXMsIFR5cGVXaXRoS2V5IH0gZnJvbSAnLi9wdWJsaWMtYXBpJztcblxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlT2JqZWN0PFQgZXh0ZW5kcyBUeXBlV2l0aEtleTxhbnk+PiB7XG4gIHByaXZhdGUgc3RhdGU6IFQ7XG4gIHByaXZhdGUgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMgPSB7fTtcbiAgcmVhZG9ubHkgb2JzZXJ2YWJsZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxUPjtcblxuICBjb25zdHJ1Y3RvcihzdGF0ZTogVCwgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5zdGF0ZVByb3BlcnRpZXMgPSBzdGF0ZVByb3BlcnRpZXM7XG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIG9ic2VydmFibGUgdGhhdCBjb250YWlucyB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0T2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBzdGF0ZSBwcm9wZXJ0aWVzIG9iamVjdFxuICAgKiBAcmV0dXJuIFN0YXRlUHJvcGVydGllc1xuICAgKi9cbiAgZ2V0U3RhdGVQcm9wZXJ0aWVzKCk6IFN0YXRlUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVQcm9wZXJ0aWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHVuc3Vic2NyaWJlcyBmcm9tIHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgZ2V0U3RhdGVTbmFwc2hvdCgpOiBUIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnN0YXRlIH07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgZ2V0UHJvcGVydHlGcm9tU3RhdGUocHJvcGVydHk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcGVydHldO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0UHJvcGVydHlGcm9tT2JzZXJ2YWJsZShwcm9wZXJ0eTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPYnNlcnZhYmxlKCkucGlwZShtYXAoKHMpID0+IHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHMsIHByb3BlcnR5KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHNldHMgdGhlIHZhbHVlIGZvciBhIGNlcnRhaW4gcHJvcGVydHkgaW5zaWRlIHRoZSBzdGF0ZSwgdHJpZ2dlcnMgYW4gYXN5bmMgZXZlbnRcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHBhcmFtIGVtaXQgLSBpZiB0cnVlIGl0IHdpbGwgdHJpZ2dlciBhbiBhc3luYyBldmVudFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHNldE9ic2VydmFibGVWYWx1ZXModmFsdWU6IFQsIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsID0gbnVsbCwgZW1pdCA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlVmFsdWVzKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QubmV4dCh0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCBkb2Vzbid0IHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5LCBpZiBubyBwcm9wZXJ0eSBpdCB3aWxsIHRyeSB0byBwYXRjaCB0aGUgdmFsdWVzIGludG8gdGhlIHN0YXRlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgc2V0U3RhdGVWYWx1ZXModmFsdWU6IFQsIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKHByb3BlcnR5ICYmIHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHRoaXMuc3RhdGUsIHByb3BlcnR5KSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAodGhpcy5zdGF0ZSBhcyBUeXBlV2l0aEtleTxhbnk+KVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4udmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXNldHMgdGhlIHN0YXRlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcmVzZXRTdGF0ZSgpOiB2b2lkIHtcbiAgICAodGhpcy5zdGF0ZSBhcyBUeXBlV2l0aEtleTxhbnk+KSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGNoZWNrcyBpZiB0aGUgc2VsZWN0ZWQgcHJvcGVydHkgZXhpc3RzIGluc2lkZSB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHN0YXRlIC0gdGhlIHN0YXRlIG9mIHRoZSBvYnNlcnZhYmxlLCB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB3aGF0IHRoZSBvYnNlcnZhYmxlIGlzIGdvaW5nIHRvIGNvbnRhaW5cbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIHNlbGVjdGVkIHByb3BlcnR5XG4gICAqIEByZXR1cm4gYW55XG4gICAqL1xuICBwcml2YXRlIGNoZWNrSWZQcm9wZXJ0eUV4aXN0cyhzdGF0ZTogVCwgcHJvcGVydHk6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHsgbWV0OiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSksIHZhbHVlOiBzdGF0ZVtwcm9wZXJ0eV0gfTtcbiAgICB9O1xuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnU2VsZWN0ZWQgcHJvcGVydHkgbm90IGZvdW5kICEgY2hlY2sgaWYgdGhlIGtleSBpcyBjb3JyZWN0IGFuZCBleGlzdHMnKTtcbiAgfVxufVxuIl19