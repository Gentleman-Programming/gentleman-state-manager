import { Inject, Injectable } from "@angular/core";
import { GentlemanStateObject } from "../models/public-api";
import { checkIfConditionMet } from "../utils/public-api";
import * as i0 from "@angular/core";
export class GentlemanStateService {
    constructor(sourceOfTruthKeys) {
        this.observerArray = new Map();
        sourceOfTruthKeys.forEach((k) => {
            const { state, stateProperties } = k;
            this.createObservable(k.key, state, stateProperties);
        });
    }
    /**
     * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
     * @param gentlemanObject - GentlemanStateObject | undefined
     * @return ObserverArrayItem
     */
    static checkIfFound(gentlemanObject) {
        const condition = () => {
            return { met: !!gentlemanObject, value: gentlemanObject };
        };
        return checkIfConditionMet(() => condition(), "Observable item not found ! check if the key is correct and exists");
    }
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    createObservable(key, state, stateProperties) {
        const found = this.observerArray.has(key);
        if (found) {
            console.log(`the key : ${key}, already exists as an entity so it will be ignored`);
        }
        else {
            const gentlemanObject = new GentlemanStateObject(state, stateProperties);
            this.observerArray.set(key, gentlemanObject);
        }
    }
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return GentlemanStateObject
     */
    getEntity(key) {
        const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.get(key));
        return observableArrayItem;
    }
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @param data - the data to be emitted inside the selected observable
     * @return void
     */
    emitValue(key, data) {
        const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.get(key));
        observableArrayItem.setObservableValues(data);
    }
    /**
     * @desc it destroys an object from the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @return void
     */
    destroyObservable(key) {
        const selectedObservable = GentlemanStateService.checkIfFound(this.observerArray.get(key));
        selectedObservable.unsubscribe();
        this.observerArray.delete(key);
    }
}
GentlemanStateService.ɵfac = function GentlemanStateService_Factory(t) { return new (t || GentlemanStateService)(i0.ɵɵinject("sourceOfTruthKeys")); };
GentlemanStateService.ɵprov = i0.ɵɵdefineInjectable({ token: GentlemanStateService, factory: GentlemanStateService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GentlemanStateService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["sourceOfTruthKeys"]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFtQixNQUFNLHNCQUFzQixDQUFDO0FBRTdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUsxRCxNQUFNLE9BQU8scUJBQXFCO0lBR2hDLFlBQXlDLGlCQUEwQztRQUYzRSxrQkFBYSxHQUFrQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRy9DLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzlCLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFpRDtRQUMzRSxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsQ0FBQztRQUM1RCxDQUFDLENBQUM7UUFDRixPQUFPLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLG9FQUFvRSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGdCQUFnQixDQUFDLEdBQVcsRUFBRSxLQUFVLEVBQUUsZUFBZ0M7UUFDeEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxxREFBcUQsQ0FBQyxDQUFDO1NBQ3BGO2FBQU07WUFDTCxNQUFNLGVBQWUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxHQUFXO1FBQ25CLE1BQU0sbUJBQW1CLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUYsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RixtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlCQUFpQixDQUFDLEdBQVc7UUFDM0IsTUFBTSxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzRixrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzswRkFyRVUscUJBQXFCLGNBR1osbUJBQW1COzZEQUg1QixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZwQixNQUFNO2tEQUVQLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUljLE1BQU07dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VudGxlbWFuU3RhdGVPYmplY3QsIFN0YXRlUHJvcGVydGllcyB9IGZyb20gXCIuLi9tb2RlbHMvcHVibGljLWFwaVwiO1xyXG5pbXBvcnQgeyBTb3VyY2VPZlRydXRoLCBTb3VyY2VPZlRydXRoSW5pdGlhdGUgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdXJjZS1vZi10cnV0aFwiO1xyXG5pbXBvcnQgeyBjaGVja0lmQ29uZGl0aW9uTWV0IH0gZnJvbSBcIi4uL3V0aWxzL3B1YmxpYy1hcGlcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBvYnNlcnZlckFycmF5OiBTb3VyY2VPZlRydXRoID0gbmV3IE1hcCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFwic291cmNlT2ZUcnV0aEtleXNcIikgc291cmNlT2ZUcnV0aEtleXM6IFNvdXJjZU9mVHJ1dGhJbml0aWF0ZVtdKSB7XHJcbiAgICBzb3VyY2VPZlRydXRoS2V5cy5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdGUsIHN0YXRlUHJvcGVydGllcyB9ID0gaztcclxuICAgICAgdGhpcy5jcmVhdGVPYnNlcnZhYmxlKGsua2V5LCBzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgaXQgY2hlY2tzIGlmIHRoZSBzZWFyY2hlZCBvYmplY3QgZXhpc3RzLCBpZiBub3QgaXQgdGhyb3dzIGFuIGVycm9ycyBhbmQgc3RvcHMgdGhlIGV4ZWN1dGlvbi5cclxuICAgKiBAcGFyYW0gZ2VudGxlbWFuT2JqZWN0IC0gR2VudGxlbWFuU3RhdGVPYmplY3QgfCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIE9ic2VydmVyQXJyYXlJdGVtXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tJZkZvdW5kKGdlbnRsZW1hbk9iamVjdDogR2VudGxlbWFuU3RhdGVPYmplY3QgfCB1bmRlZmluZWQpOiBHZW50bGVtYW5TdGF0ZU9iamVjdCB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IG1ldDogISFnZW50bGVtYW5PYmplY3QsIHZhbHVlOiBnZW50bGVtYW5PYmplY3QgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gY2hlY2tJZkNvbmRpdGlvbk1ldCgoKSA9PiBjb25kaXRpb24oKSwgXCJPYnNlcnZhYmxlIGl0ZW0gbm90IGZvdW5kICEgY2hlY2sgaWYgdGhlIGtleSBpcyBjb3JyZWN0IGFuZCBleGlzdHNcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyBpdCBjcmVhdGVzIGFuZCBvYnNlcnZhYmxlIGFuZCBhZGRzIGl0IHRvIHRoZSBvYnNlcnZhYmxlIGFycmF5LlxyXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxyXG4gICAqIEBwYXJhbSBzdGF0ZSAtIHRoZSBzdGF0ZSBvZiB0aGUgb2JzZXJ2YWJsZSwgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgd2hhdCB0aGUgb2JzZXJ2YWJsZSBpcyBnb2luZyB0byBjb250YWluXHJcbiAgICogQHBhcmFtIHN0YXRlUHJvcGVydGllcyAtIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdGF0ZVxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIGNyZWF0ZU9ic2VydmFibGUoa2V5OiBzdHJpbmcsIHN0YXRlOiBhbnksIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzKTogdm9pZCB7XHJcbiAgICBjb25zdCBmb3VuZCA9IHRoaXMub2JzZXJ2ZXJBcnJheS5oYXMoa2V5KTtcclxuICAgIGlmIChmb3VuZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgdGhlIGtleSA6ICR7a2V5fSwgYWxyZWFkeSBleGlzdHMgYXMgYW4gZW50aXR5IHNvIGl0IHdpbGwgYmUgaWdub3JlZGApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZ2VudGxlbWFuT2JqZWN0ID0gbmV3IEdlbnRsZW1hblN0YXRlT2JqZWN0KHN0YXRlLCBzdGF0ZVByb3BlcnRpZXMpO1xyXG4gICAgICB0aGlzLm9ic2VydmVyQXJyYXkuc2V0KGtleSwgZ2VudGxlbWFuT2JqZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGl0IHJldHVybnMgdGhlIHNlbGVjdGVkIG9ic2VydmFibGUgdXNpbmcgdGhlIHByb3ZpZGVkIGtleS5cclxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcclxuICAgKiBAcmV0dXJuIEdlbnRsZW1hblN0YXRlT2JqZWN0XHJcbiAgICovXHJcbiAgZ2V0RW50aXR5KGtleTogc3RyaW5nKTogR2VudGxlbWFuU3RhdGVPYmplY3Qge1xyXG4gICAgY29uc3Qgb2JzZXJ2YWJsZUFycmF5SXRlbSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmdldChrZXkpKTtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlQXJyYXlJdGVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgaXQgZW1pdHMgYSBuZXcgdmFsdWUgaW50byB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZSB1c2luZyB0aGUgcHJvdmlkZWQga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxyXG4gICAqIEBwYXJhbSBkYXRhIC0gdGhlIGRhdGEgdG8gYmUgZW1pdHRlZCBpbnNpZGUgdGhlIHNlbGVjdGVkIG9ic2VydmFibGVcclxuICAgKiBAcmV0dXJuIHZvaWRcclxuICAgKi9cclxuICBlbWl0VmFsdWUoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3Qgb2JzZXJ2YWJsZUFycmF5SXRlbSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmdldChrZXkpKTtcclxuICAgIG9ic2VydmFibGVBcnJheUl0ZW0uc2V0T2JzZXJ2YWJsZVZhbHVlcyhkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGl0IGRlc3Ryb3lzIGFuIG9iamVjdCBmcm9tIHRoZSBvYnNlcnZhYmxlIGFycmF5LlxyXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIGRlc3Ryb3lPYnNlcnZhYmxlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9ic2VydmFibGUgPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5nZXQoa2V5KSk7XHJcbiAgICBzZWxlY3RlZE9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMub2JzZXJ2ZXJBcnJheS5kZWxldGUoa2V5KTtcclxuICB9XHJcbn1cclxuIl19