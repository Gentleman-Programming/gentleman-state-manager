import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { checkIfConditionMet } from '../utils/public-api';
export class GentlemanStateObject {
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
        return this.getObservable().pipe(map(s => this.checkIfPropertyExists(s, property)));
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
        if (property && this.checkIfPropertyExists(this.state, property)) {
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
            const propertyValue = state[property];
            return propertyValue || propertyValue !== undefined;
        };
        return checkIfConditionMet(() => condition(), 'Selected property not found ! check if the key is correct and exists');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQVksS0FBUSxFQUFFLGVBQWdDO1FBSDlDLG9CQUFlLEdBQW9CLEVBQUUsQ0FBQztRQUk1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCO1FBQ2QseUJBQVksSUFBSSxDQUFDLEtBQUssRUFBRztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUF5QixDQUFDLFFBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsbUJBQW1CLENBQUMsS0FBUSxFQUFFLFdBQTBCLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSTtRQUN2RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEtBQVEsRUFBRSxRQUF1QjtRQUM5QyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsS0FBMEIsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLG1DQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsS0FBSyxDQUNULENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVO1FBQ1AsSUFBSSxDQUFDLEtBQTBCLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHFCQUFxQixDQUFDLEtBQVEsRUFBRSxRQUFnQjtRQUN0RCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sYUFBYSxJQUFJLGFBQWEsS0FBSyxTQUFTLENBQUM7UUFDdEQsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxzRUFBc0UsQ0FBQyxDQUFDO0lBQ3hILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N0YXRlUHJvcGVydGllcywgVHlwZVdpdGhLZXl9IGZyb20gJy4vcHVibGljLWFwaSc7XG5pbXBvcnQge2NoZWNrSWZDb25kaXRpb25NZXR9IGZyb20gJy4uL3V0aWxzL3B1YmxpYy1hcGknO1xuXG5leHBvcnQgY2xhc3MgR2VudGxlbWFuU3RhdGVPYmplY3Q8VCBleHRlbmRzIFR5cGVXaXRoS2V5PGFueT4+IHtcbiAgcHJpdmF0ZSBzdGF0ZTogVDtcbiAgcHJpdmF0ZSBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcyA9IHt9O1xuICByZWFkb25seSBvYnNlcnZhYmxlU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFQ+O1xuXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBULCBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcykge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnN0YXRlUHJvcGVydGllcyA9IHN0YXRlUHJvcGVydGllcztcbiAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgb2JzZXJ2YWJsZSB0aGF0IGNvbnRhaW5zIHRoZSBzdGF0ZSBmb3IgYXN5bmMgb3BlcmF0aW9ucyAtIGl0IGxpc3RlbnMgZm9yIGNoYW5nZXNcbiAgICogQHJldHVybiBPYnNlcnZhYmxlXG4gICAqL1xuICBnZXRPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmFibGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHN0YXRlIHByb3BlcnRpZXMgb2JqZWN0XG4gICAqIEByZXR1cm4gU3RhdGVQcm9wZXJ0aWVzXG4gICAqL1xuICBnZXRTdGF0ZVByb3BlcnRpZXMoKTogU3RhdGVQcm9wZXJ0aWVzIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVByb3BlcnRpZXM7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgdW5zdWJzY3JpYmVzIGZyb20gdGhlIG9ic2VydmFibGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHN0YXRlIGF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXG4gICAqIEByZXR1cm4gYW55XG4gICAqL1xuICBnZXRTdGF0ZVNuYXBzaG90KCk6IFQge1xuICAgIHJldHVybiB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEByZXR1cm4gYW55XG4gICAqL1xuICBnZXRQcm9wZXJ0eUZyb21TdGF0ZShwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVtwcm9wZXJ0eV07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHJldHVybiBPYnNlcnZhYmxlXG4gICAqL1xuICBnZXRQcm9wZXJ0eUZyb21PYnNlcnZhYmxlKHByb3BlcnR5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldE9ic2VydmFibGUoKS5waXBlKG1hcChzID0+IHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHMsIHByb3BlcnR5KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHNldHMgdGhlIHZhbHVlIGZvciBhIGNlcnRhaW4gcHJvcGVydHkgaW5zaWRlIHRoZSBzdGF0ZSwgdHJpZ2dlcnMgYW4gYXN5bmMgZXZlbnRcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHBhcmFtIGVtaXQgLSBpZiB0cnVlIGl0IHdpbGwgdHJpZ2dlciBhbiBhc3luYyBldmVudFxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHNldE9ic2VydmFibGVWYWx1ZXModmFsdWU6IFQsIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsID0gbnVsbCwgZW1pdCA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlVmFsdWVzKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QubmV4dCh0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCBkb2Vzbid0IHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5LCBpZiBubyBwcm9wZXJ0eSBpdCB3aWxsIHRyeSB0byBwYXRjaCB0aGUgdmFsdWVzIGludG8gdGhlIHN0YXRlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgc2V0U3RhdGVWYWx1ZXModmFsdWU6IFQsIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKHByb3BlcnR5ICYmIHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHRoaXMuc3RhdGUsIHByb3BlcnR5KSkge1xuICAgICAgKHRoaXMuc3RhdGUgYXMgVHlwZVdpdGhLZXk8YW55PilbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIC4uLnZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXNldHMgdGhlIHN0YXRlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgcmVzZXRTdGF0ZSgpOiB2b2lkIHtcbiAgICAodGhpcy5zdGF0ZSBhcyBUeXBlV2l0aEtleTxhbnk+KSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGNoZWNrcyBpZiB0aGUgc2VsZWN0ZWQgcHJvcGVydHkgZXhpc3RzIGluc2lkZSB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHN0YXRlIC0gdGhlIHN0YXRlIG9mIHRoZSBvYnNlcnZhYmxlLCB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB3aGF0IHRoZSBvYnNlcnZhYmxlIGlzIGdvaW5nIHRvIGNvbnRhaW5cbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIHNlbGVjdGVkIHByb3BlcnR5XG4gICAqIEByZXR1cm4gYW55XG4gICAqL1xuICBwcml2YXRlIGNoZWNrSWZQcm9wZXJ0eUV4aXN0cyhzdGF0ZTogVCwgcHJvcGVydHk6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IHN0YXRlW3Byb3BlcnR5XTtcbiAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlIHx8IHByb3BlcnR5VmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnU2VsZWN0ZWQgcHJvcGVydHkgbm90IGZvdW5kICEgY2hlY2sgaWYgdGhlIGtleSBpcyBjb3JyZWN0IGFuZCBleGlzdHMnKTtcbiAgfVxufVxuIl19