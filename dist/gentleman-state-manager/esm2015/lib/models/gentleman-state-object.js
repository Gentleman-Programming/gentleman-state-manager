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
        const exist = this.checkIfPropertyExists(this.state, property);
        if (property && exist !== undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQVksS0FBUSxFQUFFLGVBQWdDO1FBSDlDLG9CQUFlLEdBQW9CLEVBQUUsQ0FBQztRQUk1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCO1FBQ2QseUJBQVksSUFBSSxDQUFDLEtBQUssRUFBRztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUF5QixDQUFDLFFBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsbUJBQW1CLENBQUMsS0FBUSxFQUFFLFdBQTBCLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSTtRQUN2RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEtBQVEsRUFBRSxRQUF1QjtRQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvRCxJQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUEwQixDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssbUNBQ0wsSUFBSSxDQUFDLEtBQUssR0FDVixLQUFLLENBQ1QsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVU7UUFDUCxJQUFJLENBQUMsS0FBMEIsR0FBRyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0sscUJBQXFCLENBQUMsS0FBUSxFQUFFLFFBQWdCO1FBQ3RELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQztRQUNGLE9BQU8sbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsc0VBQXNFLENBQUMsQ0FBQztJQUN4SCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdGF0ZVByb3BlcnRpZXMsIFR5cGVXaXRoS2V5fSBmcm9tICcuL3B1YmxpYy1hcGknO1xuaW1wb3J0IHtjaGVja0lmQ29uZGl0aW9uTWV0fSBmcm9tICcuLi91dGlscy9wdWJsaWMtYXBpJztcblxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlT2JqZWN0PFQgZXh0ZW5kcyBUeXBlV2l0aEtleTxhbnk+PiB7XG4gIHByaXZhdGUgc3RhdGU6IFQ7XG4gIHByaXZhdGUgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMgPSB7fTtcbiAgcmVhZG9ubHkgb2JzZXJ2YWJsZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxUPjtcblxuICBjb25zdHJ1Y3RvcihzdGF0ZTogVCwgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5zdGF0ZVByb3BlcnRpZXMgPSBzdGF0ZVByb3BlcnRpZXM7XG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIG9ic2VydmFibGUgdGhhdCBjb250YWlucyB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0T2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBzdGF0ZSBwcm9wZXJ0aWVzIG9iamVjdFxuICAgKiBAcmV0dXJuIFN0YXRlUHJvcGVydGllc1xuICAgKi9cbiAgZ2V0U3RhdGVQcm9wZXJ0aWVzKCk6IFN0YXRlUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVQcm9wZXJ0aWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHVuc3Vic2NyaWJlcyBmcm9tIHRoZSBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgZ2V0U3RhdGVTbmFwc2hvdCgpOiBUIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnN0YXRlIH07XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIGFueVxuICAgKi9cbiAgZ2V0UHJvcGVydHlGcm9tU3RhdGUocHJvcGVydHk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcGVydHldO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxuICAgKi9cbiAgZ2V0UHJvcGVydHlGcm9tT2JzZXJ2YWJsZShwcm9wZXJ0eTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPYnNlcnZhYmxlKCkucGlwZShtYXAocyA9PiB0aGlzLmNoZWNrSWZQcm9wZXJ0eUV4aXN0cyhzLCBwcm9wZXJ0eSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBzZXRzIHRoZSB2YWx1ZSBmb3IgYSBjZXJ0YWluIHByb3BlcnR5IGluc2lkZSB0aGUgc3RhdGUsIHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBlbWl0IC0gaWYgdHJ1ZSBpdCB3aWxsIHRyaWdnZXIgYW4gYXN5bmMgZXZlbnRcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBzZXRPYnNlcnZhYmxlVmFsdWVzKHZhbHVlOiBULCBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbCA9IG51bGwsIGVtaXQgPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0ZVZhbHVlcyh2YWx1ZSwgcHJvcGVydHkpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0Lm5leHQodGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHNldHMgdGhlIHZhbHVlIGZvciBhIGNlcnRhaW4gcHJvcGVydHkgaW5zaWRlIHRoZSBzdGF0ZSwgZG9lc24ndCB0cmlnZ2VycyBhbiBhc3luYyBldmVudFxuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eSwgaWYgbm8gcHJvcGVydHkgaXQgd2lsbCB0cnkgdG8gcGF0Y2ggdGhlIHZhbHVlcyBpbnRvIHRoZSBzdGF0ZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHNldFN0YXRlVmFsdWVzKHZhbHVlOiBULCBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IGV4aXN0ID0gdGhpcy5jaGVja0lmUHJvcGVydHlFeGlzdHModGhpcy5zdGF0ZSwgcHJvcGVydHkpO1xuICAgIGlmIChwcm9wZXJ0eSAmJiBleGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAodGhpcy5zdGF0ZSBhcyBUeXBlV2l0aEtleTxhbnk+KVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4udmFsdWVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJlc2V0cyB0aGUgc3RhdGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICByZXNldFN0YXRlKCk6IHZvaWQge1xuICAgICh0aGlzLnN0YXRlIGFzIFR5cGVXaXRoS2V5PGFueT4pID0ge307XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgY2hlY2tzIGlmIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eSBleGlzdHMgaW5zaWRlIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gc3RhdGUgLSB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgc2VsZWN0ZWQgcHJvcGVydHlcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIHByaXZhdGUgY2hlY2tJZlByb3BlcnR5RXhpc3RzKHN0YXRlOiBULCBwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XG4gICAgICByZXR1cm4ge21ldDogc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpLCB2YWx1ZTogc3RhdGVbcHJvcGVydHldfTtcbiAgICB9O1xuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnU2VsZWN0ZWQgcHJvcGVydHkgbm90IGZvdW5kICEgY2hlY2sgaWYgdGhlIGtleSBpcyBjb3JyZWN0IGFuZCBleGlzdHMnKTtcbiAgfVxufVxuIl19