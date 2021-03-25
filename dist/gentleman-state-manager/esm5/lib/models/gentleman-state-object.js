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
        if (property && this.checkIfPropertyExists(this.state, property)) {
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
            var propertyValue = state[property];
            return propertyValue || propertyValue === null;
        };
        return checkIfConditionMet(function () { return condition(); }, 'Selected property not found ! check if the key is correct and exists');
    };
    return GentlemanStateObject;
}());
export { GentlemanStateObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFeEQ7SUFLRSw4QkFBWSxLQUFRLEVBQUUsZUFBZ0M7UUFIOUMsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBSTVDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNENBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtDQUFnQixHQUFoQjtRQUNFLG9CQUFZLElBQUksQ0FBQyxLQUFLLEVBQUc7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtREFBb0IsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0RBQXlCLEdBQXpCLFVBQTBCLFFBQWdCO1FBQTFDLGlCQUVDO1FBREMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxrREFBbUIsR0FBbkIsVUFBb0IsS0FBUSxFQUFFLFFBQThCLEVBQUUsSUFBVztRQUEzQyx5QkFBQSxFQUFBLGVBQThCO1FBQUUscUJBQUEsRUFBQSxXQUFXO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2Q0FBYyxHQUFkLFVBQWUsS0FBUSxFQUFFLFFBQXVCO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxLQUEwQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUsseUJBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixLQUFLLENBQ1QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILHlDQUFVLEdBQVY7UUFDRyxJQUFJLENBQUMsS0FBMEIsR0FBRyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssb0RBQXFCLEdBQTdCLFVBQThCLEtBQVEsRUFBRSxRQUFnQjtRQUN0RCxJQUFNLFNBQVMsR0FBRztZQUNoQixJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsT0FBTyxhQUFhLElBQUksYUFBYSxLQUFLLElBQUksQ0FBQztRQUNqRCxDQUFDLENBQUM7UUFDRixPQUFPLG1CQUFtQixDQUFDLGNBQU0sT0FBQSxTQUFTLEVBQUUsRUFBWCxDQUFXLEVBQUUsc0VBQXNFLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBakhELElBaUhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3RhdGVQcm9wZXJ0aWVzLCBUeXBlV2l0aEtleX0gZnJvbSAnLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7Y2hlY2tJZkNvbmRpdGlvbk1ldH0gZnJvbSAnLi4vdXRpbHMvcHVibGljLWFwaSc7XG5cbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZU9iamVjdDxUIGV4dGVuZHMgVHlwZVdpdGhLZXk8YW55Pj4ge1xuICBwcml2YXRlIHN0YXRlOiBUO1xuICBwcml2YXRlIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzID0ge307XG4gIHJlYWRvbmx5IG9ic2VydmFibGVTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8VD47XG5cbiAgY29uc3RydWN0b3Ioc3RhdGU6IFQsIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuc3RhdGVQcm9wZXJ0aWVzID0gc3RhdGVQcm9wZXJ0aWVzO1xuICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBvYnNlcnZhYmxlIHRoYXQgY29udGFpbnMgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xuICAgKiBAcmV0dXJuIE9ic2VydmFibGVcbiAgICovXG4gIGdldE9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgc3RhdGUgcHJvcGVydGllcyBvYmplY3RcbiAgICogQHJldHVybiBTdGF0ZVByb3BlcnRpZXNcbiAgICovXG4gIGdldFN0YXRlUHJvcGVydGllcygpOiBTdGF0ZVByb3BlcnRpZXMge1xuICAgIHJldHVybiB0aGlzLnN0YXRlUHJvcGVydGllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyB1bnN1YnNjcmliZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGUgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIGdldFN0YXRlU25hcHNob3QoKTogVCB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5zdGF0ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgdGhlIHN0YXRlIGF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIGdldFByb3BlcnR5RnJvbVN0YXRlKHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlW3Byb3BlcnR5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IG9mIHRoZSBzdGF0ZSBmb3IgYXN5bmMgb3BlcmF0aW9ucyAtIGl0IGxpc3RlbnMgZm9yIGNoYW5nZXNcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGVcbiAgICovXG4gIGdldFByb3BlcnR5RnJvbU9ic2VydmFibGUocHJvcGVydHk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T2JzZXJ2YWJsZSgpLnBpcGUobWFwKHMgPT4gdGhpcy5jaGVja0lmUHJvcGVydHlFeGlzdHMocywgcHJvcGVydHkpKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCB0cmlnZ2VycyBhbiBhc3luYyBldmVudFxuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gZW1pdCAtIGlmIHRydWUgaXQgd2lsbCB0cmlnZ2VyIGFuIGFzeW5jIGV2ZW50XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgc2V0T2JzZXJ2YWJsZVZhbHVlcyh2YWx1ZTogVCwgcHJvcGVydHk6IHN0cmluZyB8IG51bGwgPSBudWxsLCBlbWl0ID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGVWYWx1ZXModmFsdWUsIHByb3BlcnR5KTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5uZXh0KHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBzZXRzIHRoZSB2YWx1ZSBmb3IgYSBjZXJ0YWluIHByb3BlcnR5IGluc2lkZSB0aGUgc3RhdGUsIGRvZXNuJ3QgdHJpZ2dlcnMgYW4gYXN5bmMgZXZlbnRcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHksIGlmIG5vIHByb3BlcnR5IGl0IHdpbGwgdHJ5IHRvIHBhdGNoIHRoZSB2YWx1ZXMgaW50byB0aGUgc3RhdGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBzZXRTdGF0ZVZhbHVlcyh2YWx1ZTogVCwgcHJvcGVydHk6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5jaGVja0lmUHJvcGVydHlFeGlzdHModGhpcy5zdGF0ZSwgcHJvcGVydHkpKSB7XG4gICAgICAodGhpcy5zdGF0ZSBhcyBUeXBlV2l0aEtleTxhbnk+KVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4udmFsdWVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJlc2V0cyB0aGUgc3RhdGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICByZXNldFN0YXRlKCk6IHZvaWQge1xuICAgICh0aGlzLnN0YXRlIGFzIFR5cGVXaXRoS2V5PGFueT4pID0ge307XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgY2hlY2tzIGlmIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eSBleGlzdHMgaW5zaWRlIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gc3RhdGUgLSB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgc2VsZWN0ZWQgcHJvcGVydHlcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIHByaXZhdGUgY2hlY2tJZlByb3BlcnR5RXhpc3RzKHN0YXRlOiBULCBwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gc3RhdGVbcHJvcGVydHldO1xuICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUgfHwgcHJvcGVydHlWYWx1ZSA9PT0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnU2VsZWN0ZWQgcHJvcGVydHkgbm90IGZvdW5kICEgY2hlY2sgaWYgdGhlIGtleSBpcyBjb3JyZWN0IGFuZCBleGlzdHMnKTtcbiAgfVxufVxuIl19