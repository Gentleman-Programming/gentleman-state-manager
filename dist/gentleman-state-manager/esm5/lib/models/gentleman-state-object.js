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
            return { met: state.hasOwnProperty(property), value: state[property] };
        };
        return checkIfConditionMet(function () { return condition(); }, 'Selected property not found ! check if the key is correct and exists');
    };
    return GentlemanStateObject;
}());
export { GentlemanStateObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFeEQ7SUFLRSw4QkFBWSxLQUFRLEVBQUUsZUFBZ0M7UUFIOUMsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBSTVDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNENBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtDQUFnQixHQUFoQjtRQUNFLG9CQUFZLElBQUksQ0FBQyxLQUFLLEVBQUc7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtREFBb0IsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0RBQXlCLEdBQXpCLFVBQTBCLFFBQWdCO1FBQTFDLGlCQUVDO1FBREMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxrREFBbUIsR0FBbkIsVUFBb0IsS0FBUSxFQUFFLFFBQThCLEVBQUUsSUFBVztRQUEzQyx5QkFBQSxFQUFBLGVBQThCO1FBQUUscUJBQUEsRUFBQSxXQUFXO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2Q0FBYyxHQUFkLFVBQWUsS0FBUSxFQUFFLFFBQXVCO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxLQUEwQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUsseUJBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixLQUFLLENBQ1QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILHlDQUFVLEdBQVY7UUFDRyxJQUFJLENBQUMsS0FBMEIsR0FBRyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssb0RBQXFCLEdBQTdCLFVBQThCLEtBQVEsRUFBRSxRQUFnQjtRQUN0RCxJQUFNLFNBQVMsR0FBRztZQUNoQixPQUFPLEVBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQztRQUNGLE9BQU8sbUJBQW1CLENBQUMsY0FBTSxPQUFBLFNBQVMsRUFBRSxFQUFYLENBQVcsRUFBRSxzRUFBc0UsQ0FBQyxDQUFDO0lBQ3hILENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFoSEQsSUFnSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdGF0ZVByb3BlcnRpZXMsIFR5cGVXaXRoS2V5fSBmcm9tICcuL3B1YmxpYy1hcGknO1xuaW1wb3J0IHtjaGVja0lmQ29uZGl0aW9uTWV0fSBmcm9tICcuLi91dGlscy9wdWJsaWMtYXBpJztcblxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlT2JqZWN0PFQgZXh0ZW5kcyBUeXBlV2l0aEtleTxhbnk+PiB7XG4gIHByaXZhdGUgc3RhdGU6IFQ7XG4gIHByaXZhdGUgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMgPSB7fTtcbiAgcmVhZG9ubHkgb2JzZXJ2YWJsZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxUPjtcblxuICBjb25zdHJ1Y3RvcihzdGF0ZTogVCwgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5zdGF0ZVByb3BlcnRpZXMgPSBzdGF0ZVByb3BlcnRpZXM7XG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIG9ic2VydmFibGUgdGhhdCBjb250YWlucyB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0T2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBzdGF0ZSBwcm9wZXJ0aWVzIG9iamVjdFxuICAgKiBAcmV0dXJuIFN0YXRlUHJvcGVydGllc1xuICAgKi9cbiAgZ2V0U3RhdGVQcm9wZXJ0aWVzKCk6IFN0YXRlUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVQcm9wZXJ0aWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHVuc3Vic2NyaWJlcyBmcm9tIHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgZ2V0U3RhdGVTbmFwc2hvdCgpOiBUIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnN0YXRlIH07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgZ2V0UHJvcGVydHlGcm9tU3RhdGUocHJvcGVydHk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcGVydHldO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0UHJvcGVydHlGcm9tT2JzZXJ2YWJsZShwcm9wZXJ0eTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPYnNlcnZhYmxlKCkucGlwZShtYXAocyA9PiB0aGlzLmNoZWNrSWZQcm9wZXJ0eUV4aXN0cyhzLCBwcm9wZXJ0eSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBzZXRzIHRoZSB2YWx1ZSBmb3IgYSBjZXJ0YWluIHByb3BlcnR5IGluc2lkZSB0aGUgc3RhdGUsIHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBlbWl0IC0gaWYgdHJ1ZSBpdCB3aWxsIHRyaWdnZXIgYW4gYXN5bmMgZXZlbnRcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBzZXRPYnNlcnZhYmxlVmFsdWVzKHZhbHVlOiBULCBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbCA9IG51bGwsIGVtaXQgPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0ZVZhbHVlcyh2YWx1ZSwgcHJvcGVydHkpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0Lm5leHQodGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHNldHMgdGhlIHZhbHVlIGZvciBhIGNlcnRhaW4gcHJvcGVydHkgaW5zaWRlIHRoZSBzdGF0ZSwgZG9lc24ndCB0cmlnZ2VycyBhbiBhc3luYyBldmVudFxuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eSwgaWYgbm8gcHJvcGVydHkgaXQgd2lsbCB0cnkgdG8gcGF0Y2ggdGhlIHZhbHVlcyBpbnRvIHRoZSBzdGF0ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHNldFN0YXRlVmFsdWVzKHZhbHVlOiBULCBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChwcm9wZXJ0eSAmJiB0aGlzLmNoZWNrSWZQcm9wZXJ0eUV4aXN0cyh0aGlzLnN0YXRlLCBwcm9wZXJ0eSkpIHtcbiAgICAgICh0aGlzLnN0YXRlIGFzIFR5cGVXaXRoS2V5PGFueT4pW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAuLi52YWx1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmVzZXRzIHRoZSBzdGF0ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHJlc2V0U3RhdGUoKTogdm9pZCB7XG4gICAgKHRoaXMuc3RhdGUgYXMgVHlwZVdpdGhLZXk8YW55PikgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBjaGVja3MgaWYgdGhlIHNlbGVjdGVkIHByb3BlcnR5IGV4aXN0cyBpbnNpZGUgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSBzdGF0ZSAtIHRoZSBzdGF0ZSBvZiB0aGUgb2JzZXJ2YWJsZSwgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgd2hhdCB0aGUgb2JzZXJ2YWJsZSBpcyBnb2luZyB0byBjb250YWluXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0lmUHJvcGVydHlFeGlzdHMoc3RhdGU6IFQsIHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAgIHJldHVybiB7bWV0OiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSksIHZhbHVlOiBzdGF0ZVtwcm9wZXJ0eV19O1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrSWZDb25kaXRpb25NZXQoKCkgPT4gY29uZGl0aW9uKCksICdTZWxlY3RlZCBwcm9wZXJ0eSBub3QgZm91bmQgISBjaGVjayBpZiB0aGUga2V5IGlzIGNvcnJlY3QgYW5kIGV4aXN0cycpO1xuICB9XG59XG4iXX0=