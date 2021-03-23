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
        if (emit)
            this.observableSubject.next(this.state);
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
     * @param property - the selected property
     * @return any
     */
    checkIfPropertyExists(state, property) {
        const condition = () => {
            return state[property];
        };
        return checkIfConditionMet(() => condition(), 'Selected property not found ! check if the key is correct and exists');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUxRCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQVksS0FBUSxFQUFFLGVBQWdDO1FBSDlDLG9CQUFlLEdBQW9CLEVBQUUsQ0FBQztRQUk1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCO1FBQ2QseUJBQVksSUFBSSxDQUFDLEtBQUssRUFBRztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUF5QixDQUFDLFFBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsbUJBQW1CLENBQUMsS0FBUSxFQUFFLFdBQTBCLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSTtRQUN2RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsS0FBUSxFQUFFLFFBQXVCO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxLQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxtQ0FDTCxJQUFJLENBQUMsS0FBSyxHQUNWLEtBQUssQ0FDVCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVTtRQUNXLElBQUksQ0FBQyxLQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0sscUJBQXFCLENBQUMsS0FBUSxFQUFFLFFBQWdCO1FBQ3RELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFDRixPQUFPLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLHNFQUFzRSxDQUFDLENBQUM7SUFDeEgsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVByb3BlcnRpZXMsIFR5cGVXaXRoS2V5IH0gZnJvbSAnLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7IGNoZWNrSWZDb25kaXRpb25NZXQgfSBmcm9tICcuLi91dGlscy9wdWJsaWMtYXBpJztcblxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlT2JqZWN0PFQgZXh0ZW5kcyBUeXBlV2l0aEtleTxhbnk+PiB7XG4gIHByaXZhdGUgc3RhdGU6IFQ7XG4gIHByaXZhdGUgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMgPSB7fTtcbiAgcmVhZG9ubHkgb2JzZXJ2YWJsZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxUPjtcblxuICBjb25zdHJ1Y3RvcihzdGF0ZTogVCwgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5zdGF0ZVByb3BlcnRpZXMgPSBzdGF0ZVByb3BlcnRpZXM7XG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIG9ic2VydmFibGUgdGhhdCBjb250YWlucyB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0T2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBzdGF0ZSBwcm9wZXJ0aWVzIG9iamVjdFxuICAgKiBAcmV0dXJuIFN0YXRlUHJvcGVydGllc1xuICAgKi9cbiAgZ2V0U3RhdGVQcm9wZXJ0aWVzKCk6IFN0YXRlUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVQcm9wZXJ0aWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHVuc3Vic2NyaWJlcyBmcm9tIHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgZ2V0U3RhdGVTbmFwc2hvdCgpOiBUIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnN0YXRlIH07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgZ2V0UHJvcGVydHlGcm9tU3RhdGUocHJvcGVydHk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcGVydHldO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0UHJvcGVydHlGcm9tT2JzZXJ2YWJsZShwcm9wZXJ0eTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPYnNlcnZhYmxlKCkucGlwZShtYXAocyA9PiB0aGlzLmNoZWNrSWZQcm9wZXJ0eUV4aXN0cyhzLCBwcm9wZXJ0eSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBzZXRzIHRoZSB2YWx1ZSBmb3IgYSBjZXJ0YWluIHByb3BlcnR5IGluc2lkZSB0aGUgc3RhdGUsIHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBlbWl0IC0gaWYgdHJ1ZSBpdCB3aWxsIHRyaWdnZXIgYW4gYXN5bmMgZXZlbnRcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBzZXRPYnNlcnZhYmxlVmFsdWVzKHZhbHVlOiBULCBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbCA9IG51bGwsIGVtaXQgPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0ZVZhbHVlcyh2YWx1ZSwgcHJvcGVydHkpO1xuICAgIGlmIChlbWl0KSB0aGlzLm9ic2VydmFibGVTdWJqZWN0Lm5leHQodGhpcy5zdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCBkb2Vzbid0IHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5LCBpZiBubyBwcm9wZXJ0eSBpdCB3aWxsIHRyeSB0byBwYXRjaCB0aGUgdmFsdWVzIGludG8gdGhlIHN0YXRlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgc2V0U3RhdGVWYWx1ZXModmFsdWU6IFQsIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKHByb3BlcnR5ICYmIHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHRoaXMuc3RhdGUsIHByb3BlcnR5KSkge1xuICAgICAgKDxUeXBlV2l0aEtleTxhbnk+PnRoaXMuc3RhdGUpW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAuLi52YWx1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmVzZXRzIHRoZSBzdGF0ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHJlc2V0U3RhdGUoKTogdm9pZCB7XG4gICAgKDxUeXBlV2l0aEtleTxhbnk+PnRoaXMuc3RhdGUpID0ge307XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgY2hlY2tzIGlmIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eSBleGlzdHMgaW5zaWRlIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgc2VsZWN0ZWQgcHJvcGVydHlcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIHByaXZhdGUgY2hlY2tJZlByb3BlcnR5RXhpc3RzKHN0YXRlOiBULCBwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldO1xuICAgIH07XG4gICAgcmV0dXJuIGNoZWNrSWZDb25kaXRpb25NZXQoKCkgPT4gY29uZGl0aW9uKCksICdTZWxlY3RlZCBwcm9wZXJ0eSBub3QgZm91bmQgISBjaGVjayBpZiB0aGUga2V5IGlzIGNvcnJlY3QgYW5kIGV4aXN0cycpO1xuICB9XG59XG4iXX0=