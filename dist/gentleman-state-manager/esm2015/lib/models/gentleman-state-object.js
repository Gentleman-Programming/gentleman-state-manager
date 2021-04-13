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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUcxRCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQVksS0FBVSxFQUFFLGVBQWdDO1FBSGhELG9CQUFlLEdBQW9CLEVBQUUsQ0FBQztRQUk1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCO1FBQ2QseUJBQVksSUFBSSxDQUFDLEtBQUssRUFBRztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUF5QixDQUFDLFFBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxtQkFBbUIsQ0FBQyxLQUFVLEVBQUUsV0FBMEIsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsS0FBVSxFQUFFLFFBQXVCO1FBQ2hELElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM3RSxJQUFJLENBQUMsS0FBMEIsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLG1DQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsS0FBSyxDQUNULENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVO1FBQ1AsSUFBSSxDQUFDLEtBQTBCLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHFCQUFxQixDQUFDLEtBQVUsRUFBRSxRQUFnQjtRQUN4RCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN6RSxDQUFDLENBQUM7UUFDRixPQUFPLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLHNFQUFzRSxDQUFDLENBQUM7SUFDeEgsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgY2hlY2tJZkNvbmRpdGlvbk1ldCB9IGZyb20gJy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBTdGF0ZVByb3BlcnRpZXMsIFR5cGVXaXRoS2V5IH0gZnJvbSAnLi9wdWJsaWMtYXBpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZU9iamVjdCB7XHJcbiAgcHJpdmF0ZSBzdGF0ZTogYW55O1xyXG4gIHByaXZhdGUgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMgPSB7fTtcclxuICByZWFkb25seSBvYnNlcnZhYmxlU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBhbnksIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzLnN0YXRlUHJvcGVydGllcyA9IHN0YXRlUHJvcGVydGllcztcclxuICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHN0YXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIG9ic2VydmFibGUgdGhhdCBjb250YWlucyB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXHJcbiAgICogQHJldHVybiBPYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgZ2V0T2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBzdGF0ZSBwcm9wZXJ0aWVzIG9iamVjdFxyXG4gICAqIEByZXR1cm4gU3RhdGVQcm9wZXJ0aWVzXHJcbiAgICovXHJcbiAgZ2V0U3RhdGVQcm9wZXJ0aWVzKCk6IFN0YXRlUHJvcGVydGllcyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVByb3BlcnRpZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyB1bnN1YnNjcmliZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZVxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHN0YXRlIGF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXHJcbiAgICogQHJldHVybiBhbnlcclxuICAgKi9cclxuICBnZXRTdGF0ZVNuYXBzaG90KCk6IGFueSB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLnN0YXRlIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcclxuICAgKiBAcmV0dXJuIGFueVxyXG4gICAqL1xyXG4gIGdldFByb3BlcnR5RnJvbVN0YXRlKHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcGVydHldO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXHJcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxyXG4gICAqL1xyXG4gIGdldFByb3BlcnR5RnJvbU9ic2VydmFibGUocHJvcGVydHk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRPYnNlcnZhYmxlKCkucGlwZShtYXAoKHMpID0+IHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHMsIHByb3BlcnR5KSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCB0cmlnZ2VycyBhbiBhc3luYyBldmVudFxyXG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxyXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcclxuICAgKiBAcGFyYW0gZW1pdCAtIGlmIHRydWUgaXQgd2lsbCB0cmlnZ2VyIGFuIGFzeW5jIGV2ZW50XHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgc2V0T2JzZXJ2YWJsZVZhbHVlcyh2YWx1ZTogYW55LCBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbCA9IG51bGwsIGVtaXQgPSB0cnVlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlVmFsdWVzKHZhbHVlLCBwcm9wZXJ0eSk7XHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0Lm5leHQodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyBzZXRzIHRoZSB2YWx1ZSBmb3IgYSBjZXJ0YWluIHByb3BlcnR5IGluc2lkZSB0aGUgc3RhdGUsIGRvZXNuJ3QgdHJpZ2dlcnMgYW4gYXN5bmMgZXZlbnRcclxuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcclxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5LCBpZiBubyBwcm9wZXJ0eSBpdCB3aWxsIHRyeSB0byBwYXRjaCB0aGUgdmFsdWVzIGludG8gdGhlIHN0YXRlXHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgc2V0U3RhdGVWYWx1ZXModmFsdWU6IGFueSwgcHJvcGVydHk6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmIChwcm9wZXJ0eSAmJiB0aGlzLmNoZWNrSWZQcm9wZXJ0eUV4aXN0cyh0aGlzLnN0YXRlLCBwcm9wZXJ0eSkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAodGhpcy5zdGF0ZSBhcyBUeXBlV2l0aEtleTxhbnk+KVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIHJlc2V0cyB0aGUgc3RhdGVcclxuICAgKiBAcmV0dXJuIHZvaWRcclxuICAgKi9cclxuICByZXNldFN0YXRlKCk6IHZvaWQge1xyXG4gICAgKHRoaXMuc3RhdGUgYXMgVHlwZVdpdGhLZXk8YW55PikgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGNoZWNrcyBpZiB0aGUgc2VsZWN0ZWQgcHJvcGVydHkgZXhpc3RzIGluc2lkZSB0aGUgc3RhdGVcclxuICAgKiBAcGFyYW0gc3RhdGUgLSB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxyXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eVxyXG4gICAqIEByZXR1cm4gYW55XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGVja0lmUHJvcGVydHlFeGlzdHMoc3RhdGU6IGFueSwgcHJvcGVydHk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IG1ldDogc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpLCB2YWx1ZTogc3RhdGVbcHJvcGVydHldIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNoZWNrSWZDb25kaXRpb25NZXQoKCkgPT4gY29uZGl0aW9uKCksICdTZWxlY3RlZCBwcm9wZXJ0eSBub3QgZm91bmQgISBjaGVjayBpZiB0aGUga2V5IGlzIGNvcnJlY3QgYW5kIGV4aXN0cycpO1xyXG4gIH1cclxufVxyXG4iXX0=