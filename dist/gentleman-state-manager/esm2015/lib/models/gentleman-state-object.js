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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dlbnRsZW1hbi1zdGF0ZS1tYW5hZ2VyL3NyYy9saWIvbW9kZWxzL2dlbnRsZW1hbi1zdGF0ZS1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHMUQsTUFBTSxPQUFPLG9CQUFvQjtJQUsvQixZQUFZLEtBQVUsRUFBRSxlQUFnQztRQUhoRCxvQkFBZSxHQUFvQixFQUFFLENBQUM7UUFJNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQjtRQUNkLHlCQUFZLElBQUksQ0FBQyxLQUFLLEVBQUc7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQkFBb0IsQ0FBQyxRQUFnQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx5QkFBeUIsQ0FBQyxRQUFnQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsbUJBQW1CLENBQUMsS0FBVSxFQUFFLFdBQTBCLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSTtRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEtBQVUsRUFBRSxRQUF1QjtRQUNoRCxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDN0UsSUFBSSxDQUFDLEtBQTBCLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxtQ0FDTCxJQUFJLENBQUMsS0FBSyxHQUNWLEtBQUssQ0FDVCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVTtRQUNQLElBQUksQ0FBQyxLQUEwQixHQUFHLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxxQkFBcUIsQ0FBQyxLQUFVLEVBQUUsUUFBZ0I7UUFDeEQsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDekUsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxzRUFBc0UsQ0FBQyxDQUFDO0lBQ3hILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGNoZWNrSWZDb25kaXRpb25NZXQgfSBmcm9tICcuLi91dGlscy9wdWJsaWMtYXBpJztcclxuaW1wb3J0IHsgU3RhdGVQcm9wZXJ0aWVzLCBUeXBlV2l0aEtleSB9IGZyb20gJy4vcHVibGljLWFwaSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2VudGxlbWFuU3RhdGVPYmplY3Qge1xyXG4gIHByaXZhdGUgc3RhdGU6IGFueTtcclxuICBwcml2YXRlIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzID0ge307XHJcbiAgcmVhZG9ubHkgb2JzZXJ2YWJsZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihzdGF0ZTogYW55LCBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcykge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgdGhpcy5zdGF0ZVByb3BlcnRpZXMgPSBzdGF0ZVByb3BlcnRpZXM7XHJcbiAgICB0aGlzLm9ic2VydmFibGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyByZXR1cm5zIHRoZSBvYnNlcnZhYmxlIHRoYXQgY29udGFpbnMgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZVxyXG4gICAqL1xyXG4gIGdldE9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLm9ic2VydmFibGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgc3RhdGUgcHJvcGVydGllcyBvYmplY3RcclxuICAgKiBAcmV0dXJuIFN0YXRlUHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGdldFN0YXRlUHJvcGVydGllcygpOiBTdGF0ZVByb3BlcnRpZXMge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVQcm9wZXJ0aWVzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgdW5zdWJzY3JpYmVzIGZyb20gdGhlIG9ic2VydmFibGVcclxuICAgKiBAcmV0dXJuIHZvaWRcclxuICAgKi9cclxuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub2JzZXJ2YWJsZVN1YmplY3QudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG4gICAqIEByZXR1cm4gYW55XHJcbiAgICovXHJcbiAgZ2V0U3RhdGVTbmFwc2hvdCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHsgLi4udGhpcy5zdGF0ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgcmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBvZiB0aGUgc3RhdGUgYXQgdGhlIHRpbWUgb2YgdGhlIGNhbGxcclxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XHJcbiAgICogQHJldHVybiBhbnlcclxuICAgKi9cclxuICBnZXRQcm9wZXJ0eUZyb21TdGF0ZShwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlW3Byb3BlcnR5XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIHJldHVybnMgdGhlIHZhbHVlIG9mIGEgcHJvcGVydHkgb2YgdGhlIHN0YXRlIGZvciBhc3luYyBvcGVyYXRpb25zIC0gaXQgbGlzdGVucyBmb3IgY2hhbmdlc1xyXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIHRoZSBuYW1lIG9mIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcclxuICAgKiBAcmV0dXJuIE9ic2VydmFibGVcclxuICAgKi9cclxuICBnZXRQcm9wZXJ0eUZyb21PYnNlcnZhYmxlKHByb3BlcnR5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0T2JzZXJ2YWJsZSgpLnBpcGUobWFwKChzKSA9PiB0aGlzLmNoZWNrSWZQcm9wZXJ0eUV4aXN0cyhzLCBwcm9wZXJ0eSkpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIHNldHMgdGhlIHZhbHVlIGZvciBhIGNlcnRhaW4gcHJvcGVydHkgaW5zaWRlIHRoZSBzdGF0ZSwgdHJpZ2dlcnMgYW4gYXN5bmMgZXZlbnRcclxuICAgKiBAcGFyYW0gdmFsdWUgLSB0aGUgdmFsdWUgZm9yIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHlcclxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgbmFtZSBvZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XHJcbiAgICogQHBhcmFtIGVtaXQgLSBpZiB0cnVlIGl0IHdpbGwgdHJpZ2dlciBhbiBhc3luYyBldmVudFxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIHNldE9ic2VydmFibGVWYWx1ZXModmFsdWU6IGFueSwgcHJvcGVydHk6IHN0cmluZyB8IG51bGwgPSBudWxsLCBlbWl0ID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZVZhbHVlcyh2YWx1ZSwgcHJvcGVydHkpO1xyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdGhpcy5vYnNlcnZhYmxlU3ViamVjdC5uZXh0KHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2Mgc2V0cyB0aGUgdmFsdWUgZm9yIGEgY2VydGFpbiBwcm9wZXJ0eSBpbnNpZGUgdGhlIHN0YXRlLCBkb2Vzbid0IHRyaWdnZXJzIGFuIGFzeW5jIGV2ZW50XHJcbiAgICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIGZvciB0aGUgcmVxdWVzdGVkIHByb3BlcnR5XHJcbiAgICogQHBhcmFtIHByb3BlcnR5IC0gdGhlIG5hbWUgb2YgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eSwgaWYgbm8gcHJvcGVydHkgaXQgd2lsbCB0cnkgdG8gcGF0Y2ggdGhlIHZhbHVlcyBpbnRvIHRoZSBzdGF0ZVxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIHNldFN0YXRlVmFsdWVzKHZhbHVlOiBhbnksIHByb3BlcnR5OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5jaGVja0lmUHJvcGVydHlFeGlzdHModGhpcy5zdGF0ZSwgcHJvcGVydHkpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgKHRoaXMuc3RhdGUgYXMgVHlwZVdpdGhLZXk8YW55PilbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyByZXNldHMgdGhlIHN0YXRlXHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgcmVzZXRTdGF0ZSgpOiB2b2lkIHtcclxuICAgICh0aGlzLnN0YXRlIGFzIFR5cGVXaXRoS2V5PGFueT4pID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyBjaGVja3MgaWYgdGhlIHNlbGVjdGVkIHByb3BlcnR5IGV4aXN0cyBpbnNpZGUgdGhlIHN0YXRlXHJcbiAgICogQHBhcmFtIHN0YXRlIC0gdGhlIHN0YXRlIG9mIHRoZSBvYnNlcnZhYmxlLCB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB3aGF0IHRoZSBvYnNlcnZhYmxlIGlzIGdvaW5nIHRvIGNvbnRhaW5cclxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSB0aGUgc2VsZWN0ZWQgcHJvcGVydHlcclxuICAgKiBAcmV0dXJuIGFueVxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2hlY2tJZlByb3BlcnR5RXhpc3RzKHN0YXRlOiBhbnksIHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4geyBtZXQ6IHN0YXRlLmhhc093blByb3BlcnR5KHByb3BlcnR5KSwgdmFsdWU6IHN0YXRlW3Byb3BlcnR5XSB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnU2VsZWN0ZWQgcHJvcGVydHkgbm90IGZvdW5kICEgY2hlY2sgaWYgdGhlIGtleSBpcyBjb3JyZWN0IGFuZCBleGlzdHMnKTtcclxuICB9XHJcbn1cclxuIl19