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
        var exist = this.checkIfPropertyExists(this.state, property);
        if (property && exist !== undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFeEQ7SUFLRSw4QkFBWSxLQUFRLEVBQUUsZUFBZ0M7UUFIOUMsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBSTVDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNENBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtDQUFnQixHQUFoQjtRQUNFLG9CQUFZLElBQUksQ0FBQyxLQUFLLEVBQUc7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtREFBb0IsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0RBQXlCLEdBQXpCLFVBQTBCLFFBQWdCO1FBQTFDLGlCQUVDO1FBREMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQXZDLENBQXVDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxrREFBbUIsR0FBbkIsVUFBb0IsS0FBUSxFQUFFLFFBQThCLEVBQUUsSUFBVztRQUEzQyx5QkFBQSxFQUFBLGVBQThCO1FBQUUscUJBQUEsRUFBQSxXQUFXO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2Q0FBYyxHQUFkLFVBQWUsS0FBUSxFQUFFLFFBQXVCO1FBQzlDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELElBQUksUUFBUSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQTBCLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyx5QkFDTCxJQUFJLENBQUMsS0FBSyxHQUNWLEtBQUssQ0FDVCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gseUNBQVUsR0FBVjtRQUNHLElBQUksQ0FBQyxLQUEwQixHQUFHLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxvREFBcUIsR0FBN0IsVUFBOEIsS0FBUSxFQUFFLFFBQWdCO1FBQ3RELElBQU0sU0FBUyxHQUFHO1lBQ2hCLE9BQU8sRUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxtQkFBbUIsQ0FBQyxjQUFNLE9BQUEsU0FBUyxFQUFFLEVBQVgsQ0FBVyxFQUFFLHNFQUFzRSxDQUFDLENBQUM7SUFDeEgsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQWpIRCxJQWlIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N0YXRlUHJvcGVydGllcywgVHlwZVdpdGhLZXl9IGZyb20gJy4vcHVibGljLWFwaSc7XG5pbXBvcnQge2NoZWNrSWZDb25kaXRpb25NZXR9IGZyb20gJy4uL3V0aWxzL3B1YmxpYy1hcGknO1xuXG5leHBvcnQgY2xhc3MgR2VudGxlbWFuU3RhdGVPYmplY3Q8VCBleHRlbmRzIFR5cGVXaXRoS2V5PGFueT4+IHtcbiAgcHJpdmF0ZSBzdGF0ZTogVDtcbiAgcHJpdmF0ZSBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcyA9IHt9O1xuICByZWFkb25seSBvYnNlcnZhYmxlU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFQ+O1xuXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBULCBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcykge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnN0YXRlUHJvcGVydGllcyA9IHN0YXRlUHJvcGVydGllcztcbiAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgb2JzZXJ2YWJsZSB0aGF0IGNvbnRhaW5zIHRoZSBzdGF0ZSBmb3IgYXN5bmMgb3BlcmF0aW9ucyAtIGl0IGxpc3RlbnMgZm9yIGNoYW5nZXNcbiAgICogQHJldHVybiBPYnNlcnZhYmxlXG4gICAqL1xuICBnZXRPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmFibGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHN0YXRlIHByb3BlcnRpZXMgb2JqZWN0XG4gICAqIEByZXR1cm4gU3RhdGVQcm9wZXJ0aWVzXG4gICAqL1xuICBnZXRTdGF0ZVByb3BlcnRpZXMoKTogU3RhdGVQcm9wZXJ0aWVzIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVByb3BlcnRpZXM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgdW5zdWJzY3JpYmVzIGZyb20gdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHN0YXRlIGF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXG4gICAqIEByZXR1cm4gYW55XG4gICAqL1xuICBnZXRTdGF0ZVNuYXBzaG90KCk6IFQge1xuICAgIHJldHVybiB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEByZXR1cm4gYW55XG4gICAqL1xuICBnZXRQcm9wZXJ0eUZyb21TdGF0ZShwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVtwcm9wZXJ0eV07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHJldHVybiBPYnNlcnZhYmxlXG4gICAqL1xuICBnZXRQcm9wZXJ0eUZyb21PYnNlcnZhYmxlKHByb3BlcnR5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldE9ic2VydmFibGUoKS5waXBlKG1hcChzID0+IHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHMsIHByb3BlcnR5KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHNldHMgdGhlIHZhbHVlIGZvciBhIGNlcnRhaW4gcHJvcGVydHkgaW5zaWRlIHRoZSBzdGF0ZSwgdHJpZ2dlcnMgYW4gYXN5bmMgZXZlbnRcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHBhcmFtIGVtaXQgLSBpZiB0cnVlIGl0IHdpbGwgdHJpZ2dlciBhbiBhc3luYyBldmVudFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHNldE9ic2VydmFibGVWYWx1ZXModmFsdWU6IFQsIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsID0gbnVsbCwgZW1pdCA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlVmFsdWVzKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QubmV4dCh0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCBkb2Vzbid0IHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5LCBpZiBubyBwcm9wZXJ0eSBpdCB3aWxsIHRyeSB0byBwYXRjaCB0aGUgdmFsdWVzIGludG8gdGhlIHN0YXRlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgc2V0U3RhdGVWYWx1ZXModmFsdWU6IFQsIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgY29uc3QgZXhpc3QgPSB0aGlzLmNoZWNrSWZQcm9wZXJ0eUV4aXN0cyh0aGlzLnN0YXRlLCBwcm9wZXJ0eSk7XG4gICAgaWYgKHByb3BlcnR5ICYmIGV4aXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICh0aGlzLnN0YXRlIGFzIFR5cGVXaXRoS2V5PGFueT4pW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAuLi52YWx1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmVzZXRzIHRoZSBzdGF0ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHJlc2V0U3RhdGUoKTogdm9pZCB7XG4gICAgKHRoaXMuc3RhdGUgYXMgVHlwZVdpdGhLZXk8YW55PikgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBjaGVja3MgaWYgdGhlIHNlbGVjdGVkIHByb3BlcnR5IGV4aXN0cyBpbnNpZGUgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSBzdGF0ZSAtIHRoZSBzdGF0ZSBvZiB0aGUgb2JzZXJ2YWJsZSwgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgd2hhdCB0aGUgb2JzZXJ2YWJsZSBpcyBnb2luZyB0byBjb250YWluXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0lmUHJvcGVydHlFeGlzdHMoc3RhdGU6IFQsIHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAgIHJldHVybiB7bWV0OiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSksIHZhbHVlOiBzdGF0ZVtwcm9wZXJ0eV19O1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrSWZDb25kaXRpb25NZXQoKCkgPT4gY29uZGl0aW9uKCksICdTZWxlY3RlZCBwcm9wZXJ0eSBub3QgZm91bmQgISBjaGVjayBpZiB0aGUga2V5IGlzIGNvcnJlY3QgYW5kIGV4aXN0cycpO1xuICB9XG59XG4iXX0=