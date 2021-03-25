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
            return { met: state.hasOwnProperty(property), value: state[property] };
        };
        return checkIfConditionMet(() => condition(), 'Selected property not found ! check if the key is correct and exists');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQVksS0FBUSxFQUFFLGVBQWdDO1FBSDlDLG9CQUFlLEdBQW9CLEVBQUUsQ0FBQztRQUk1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCO1FBQ2QseUJBQVksSUFBSSxDQUFDLEtBQUssRUFBRztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUF5QixDQUFDLFFBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsbUJBQW1CLENBQUMsS0FBUSxFQUFFLFdBQTBCLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSTtRQUN2RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEtBQVEsRUFBRSxRQUF1QjtRQUM5QyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsS0FBMEIsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLG1DQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsS0FBSyxDQUNULENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVO1FBQ1AsSUFBSSxDQUFDLEtBQTBCLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHFCQUFxQixDQUFDLEtBQVEsRUFBRSxRQUFnQjtRQUN0RCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUM7UUFDRixPQUFPLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLHNFQUFzRSxDQUFDLENBQUM7SUFDeEgsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3RhdGVQcm9wZXJ0aWVzLCBUeXBlV2l0aEtleX0gZnJvbSAnLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7Y2hlY2tJZkNvbmRpdGlvbk1ldH0gZnJvbSAnLi4vdXRpbHMvcHVibGljLWFwaSc7XG5cbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZU9iamVjdDxUIGV4dGVuZHMgVHlwZVdpdGhLZXk8YW55Pj4ge1xuICBwcml2YXRlIHN0YXRlOiBUO1xuICBwcml2YXRlIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzID0ge307XG4gIHJlYWRvbmx5IG9ic2VydmFibGVTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8VD47XG5cbiAgY29uc3RydWN0b3Ioc3RhdGU6IFQsIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuc3RhdGVQcm9wZXJ0aWVzID0gc3RhdGVQcm9wZXJ0aWVzO1xuICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBvYnNlcnZhYmxlIHRoYXQgY29udGFpbnMgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xuICAgKiBAcmV0dXJuIE9ic2VydmFibGVcbiAgICovXG4gIGdldE9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgc3RhdGUgcHJvcGVydGllcyBvYmplY3RcbiAgICogQHJldHVybiBTdGF0ZVByb3BlcnRpZXNcbiAgICovXG4gIGdldFN0YXRlUHJvcGVydGllcygpOiBTdGF0ZVByb3BlcnRpZXMge1xuICAgIHJldHVybiB0aGlzLnN0YXRlUHJvcGVydGllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyB1bnN1YnNjcmliZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIHVuc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGUgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIGdldFN0YXRlU25hcHNob3QoKTogVCB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5zdGF0ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgdGhlIHN0YXRlIGF0IHRoZSB0aW1lIG9mIHRoZSBjYWxsXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIGdldFByb3BlcnR5RnJvbVN0YXRlKHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlW3Byb3BlcnR5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IG9mIHRoZSBzdGF0ZSBmb3IgYXN5bmMgb3BlcmF0aW9ucyAtIGl0IGxpc3RlbnMgZm9yIGNoYW5nZXNcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJuIE9ic2VydmFibGVcbiAgICovXG4gIGdldFByb3BlcnR5RnJvbU9ic2VydmFibGUocHJvcGVydHk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T2JzZXJ2YWJsZSgpLnBpcGUobWFwKHMgPT4gdGhpcy5jaGVja0lmUHJvcGVydHlFeGlzdHMocywgcHJvcGVydHkpKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCB0cmlnZ2VycyBhbiBhc3luYyBldmVudFxuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gZW1pdCAtIGlmIHRydWUgaXQgd2lsbCB0cmlnZ2VyIGFuIGFzeW5jIGV2ZW50XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgc2V0T2JzZXJ2YWJsZVZhbHVlcyh2YWx1ZTogVCwgcHJvcGVydHk6IHN0cmluZyB8IG51bGwgPSBudWxsLCBlbWl0ID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGVWYWx1ZXModmFsdWUsIHByb3BlcnR5KTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5uZXh0KHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBzZXRzIHRoZSB2YWx1ZSBmb3IgYSBjZXJ0YWluIHByb3BlcnR5IGluc2lkZSB0aGUgc3RhdGUsIGRvZXNuJ3QgdHJpZ2dlcnMgYW4gYXN5bmMgZXZlbnRcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHksIGlmIG5vIHByb3BlcnR5IGl0IHdpbGwgdHJ5IHRvIHBhdGNoIHRoZSB2YWx1ZXMgaW50byB0aGUgc3RhdGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBzZXRTdGF0ZVZhbHVlcyh2YWx1ZTogVCwgcHJvcGVydHk6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5jaGVja0lmUHJvcGVydHlFeGlzdHModGhpcy5zdGF0ZSwgcHJvcGVydHkpKSB7XG4gICAgICAodGhpcy5zdGF0ZSBhcyBUeXBlV2l0aEtleTxhbnk+KVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgLi4udmFsdWVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIHJlc2V0cyB0aGUgc3RhdGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICByZXNldFN0YXRlKCk6IHZvaWQge1xuICAgICh0aGlzLnN0YXRlIGFzIFR5cGVXaXRoS2V5PGFueT4pID0ge307XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgY2hlY2tzIGlmIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eSBleGlzdHMgaW5zaWRlIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gc3RhdGUgLSB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgc2VsZWN0ZWQgcHJvcGVydHlcbiAgICogQHJldHVybiBhbnlcbiAgICovXG4gIHByaXZhdGUgY2hlY2tJZlByb3BlcnR5RXhpc3RzKHN0YXRlOiBULCBwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XG4gICAgICByZXR1cm4ge21ldDogc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpLCB2YWx1ZTogc3RhdGVbcHJvcGVydHldfTtcbiAgICB9O1xuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnU2VsZWN0ZWQgcHJvcGVydHkgbm90IGZvdW5kICEgY2hlY2sgaWYgdGhlIGtleSBpcyBjb3JyZWN0IGFuZCBleGlzdHMnKTtcbiAgfVxufVxuIl19