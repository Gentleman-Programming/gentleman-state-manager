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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZ2VudGxlbWFuLXN0YXRlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUcxRCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQVksS0FBUSxFQUFFLGVBQWdDO1FBSDlDLG9CQUFlLEdBQW9CLEVBQUUsQ0FBQztRQUk1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCO1FBQ2QseUJBQVksSUFBSSxDQUFDLEtBQUssRUFBRztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLFFBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUF5QixDQUFDLFFBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxtQkFBbUIsQ0FBQyxLQUFRLEVBQUUsV0FBMEIsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJO1FBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsS0FBUSxFQUFFLFFBQXVCO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM3RSxJQUFJLENBQUMsS0FBMEIsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDcEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLG1DQUNMLElBQUksQ0FBQyxLQUFLLEdBQ1YsS0FBSyxDQUNULENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVO1FBQ1AsSUFBSSxDQUFDLEtBQTBCLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHFCQUFxQixDQUFDLEtBQVEsRUFBRSxRQUFnQjtRQUN0RCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN6RSxDQUFDLENBQUM7UUFDRixPQUFPLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLHNFQUFzRSxDQUFDLENBQUM7SUFDeEgsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgY2hlY2tJZkNvbmRpdGlvbk1ldCB9IGZyb20gJy4uL3V0aWxzL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBTdGF0ZVByb3BlcnRpZXMsIFR5cGVXaXRoS2V5IH0gZnJvbSAnLi9wdWJsaWMtYXBpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZU9iamVjdDxUIGV4dGVuZHMgVHlwZVdpdGhLZXk8YW55Pj4ge1xyXG4gIHByaXZhdGUgc3RhdGU6IFQ7XHJcbiAgcHJpdmF0ZSBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcyA9IHt9O1xyXG4gIHJlYWRvbmx5IG9ic2VydmFibGVTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8VD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBULCBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcykge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgdGhpcy5zdGF0ZVByb3BlcnRpZXMgPSBzdGF0ZVByb3BlcnRpZXM7XHJcbiAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBvYnNlcnZhYmxlIHRoYXQgY29udGFpbnMgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxyXG4gICAqL1xyXG4gIGdldE9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHN0YXRlIHByb3BlcnRpZXMgb2JqZWN0XHJcbiAgICogQHJldHVybiBTdGF0ZVByb3BlcnRpZXNcclxuICAgKi9cclxuICBnZXRTdGF0ZVByb3BlcnRpZXMoKTogU3RhdGVQcm9wZXJ0aWVzIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlUHJvcGVydGllcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIHVuc3Vic2NyaWJlcyBmcm9tIHRoZSBvYnNlcnZhYmxlXHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0LnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgc3RhdGUgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcclxuICAgKiBAcmV0dXJuIGFueVxyXG4gICAqL1xyXG4gIGdldFN0YXRlU25hcHNob3QoKTogVCB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLnN0YXRlIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcclxuICAgKiBAcmV0dXJuIGFueVxyXG4gICAqL1xyXG4gIGdldFByb3BlcnR5RnJvbVN0YXRlKHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcGVydHldO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgZm9yIGFzeW5jIG9wZXJhdGlvbnMgLSBpdCBsaXN0ZW5zIGZvciBjaGFuZ2VzXHJcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxyXG4gICAqL1xyXG4gIGdldFByb3BlcnR5RnJvbU9ic2VydmFibGUocHJvcGVydHk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRPYnNlcnZhYmxlKCkucGlwZShtYXAoKHMpID0+IHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHMsIHByb3BlcnR5KSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCB0cmlnZ2VycyBhbiBhc3luYyBldmVudFxyXG4gICAqIEBwYXJhbSB2YWx1ZSAtIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eVxyXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcclxuICAgKiBAcGFyYW0gZW1pdCAtIGlmIHRydWUgaXQgd2lsbCB0cmlnZ2VyIGFuIGFzeW5jIGV2ZW50XHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgc2V0T2JzZXJ2YWJsZVZhbHVlcyh2YWx1ZTogVCwgcHJvcGVydHk6IHN0cmluZyB8IG51bGwgPSBudWxsLCBlbWl0ID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZVZhbHVlcyh2YWx1ZSwgcHJvcGVydHkpO1xyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5uZXh0KHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCBkb2Vzbid0IHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XHJcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XHJcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eSwgaWYgbm8gcHJvcGVydHkgaXQgd2lsbCB0cnkgdG8gcGF0Y2ggdGhlIHZhbHVlcyBpbnRvIHRoZSBzdGF0ZVxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIHNldFN0YXRlVmFsdWVzKHZhbHVlOiBULCBwcm9wZXJ0eTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKHByb3BlcnR5ICYmIHRoaXMuY2hlY2tJZlByb3BlcnR5RXhpc3RzKHRoaXMuc3RhdGUsIHByb3BlcnR5KSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICh0aGlzLnN0YXRlIGFzIFR5cGVXaXRoS2V5PGFueT4pW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgcmVzZXRzIHRoZSBzdGF0ZVxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIHJlc2V0U3RhdGUoKTogdm9pZCB7XHJcbiAgICAodGhpcy5zdGF0ZSBhcyBUeXBlV2l0aEtleTxhbnk+KSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgY2hlY2tzIGlmIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eSBleGlzdHMgaW5zaWRlIHRoZSBzdGF0ZVxyXG4gICAqIEBwYXJhbSBzdGF0ZSAtIHRoZSBzdGF0ZSBvZiB0aGUgb2JzZXJ2YWJsZSwgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgd2hhdCB0aGUgb2JzZXJ2YWJsZSBpcyBnb2luZyB0byBjb250YWluXHJcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIHNlbGVjdGVkIHByb3BlcnR5XHJcbiAgICogQHJldHVybiBhbnlcclxuICAgKi9cclxuICBwcml2YXRlIGNoZWNrSWZQcm9wZXJ0eUV4aXN0cyhzdGF0ZTogVCwgcHJvcGVydHk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IG1ldDogc3RhdGUuaGFzT3duUHJvcGVydHkocHJvcGVydHkpLCB2YWx1ZTogc3RhdGVbcHJvcGVydHldIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNoZWNrSWZDb25kaXRpb25NZXQoKCkgPT4gY29uZGl0aW9uKCksICdTZWxlY3RlZCBwcm9wZXJ0eSBub3QgZm91bmQgISBjaGVjayBpZiB0aGUga2V5IGlzIGNvcnJlY3QgYW5kIGV4aXN0cycpO1xyXG4gIH1cclxufVxyXG4iXX0=