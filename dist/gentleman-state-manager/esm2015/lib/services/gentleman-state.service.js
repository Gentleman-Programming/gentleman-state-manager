var GentlemanStateService_1;
import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { GentlemanStateObject } from '../models/public-api';
import { checkIfConditionMet } from '../utils/public-api';
import * as i0 from "@angular/core";
let GentlemanStateService = GentlemanStateService_1 = class GentlemanStateService {
    constructor(sourceOfTruthKeys) {
        this.observerArray = [];
        sourceOfTruthKeys.forEach(k => {
            const { key, state, stateProperties } = k;
            this.createObservable(key, state, stateProperties);
        });
    }
    /**
     * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
     * @param observableArrayItem - ObserverArrayItem | undefined
     * @return ObserverArrayItem
     */
    static checkIfFound(observableArrayItem) {
        const condition = () => {
            return { met: !!observableArrayItem, value: observableArrayItem };
        };
        return checkIfConditionMet(() => condition(), 'Observable item not found ! check if the key is correct and exists');
    }
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    createObservable(key, state, stateProperties) {
        const observable = new GentlemanStateObject(state, stateProperties);
        this.observerArray.push({ key, observable });
    }
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return ObserverArrayItem
     */
    getObservable(key) {
        const observableArrayItem = GentlemanStateService_1.checkIfFound(this.observerArray.find(obs => obs.key === key));
        return observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable;
    }
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @param data - the data to be emitted inside the selected observable
     * @return void
     */
    emitValue(key, data) {
        const observableArrayItem = GentlemanStateService_1.checkIfFound(this.observerArray.find(obs => obs.key === key));
        observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable.setObservableValues(data);
    }
    /**
     * @desc it destroys an object from the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @return void
     */
    destroyObservable(key) {
        const selectedObservable = GentlemanStateService_1.checkIfFound(this.observerArray.find(obs => obs.key === key));
        selectedObservable === null || selectedObservable === void 0 ? void 0 : selectedObservable.observable.unsubscribe();
        this.observerArray = this.observerArray.filter(obs => obs.key !== key);
    }
};
GentlemanStateService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: ['sourceOfTruthKeys',] }] }
];
GentlemanStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GentlemanStateService_Factory() { return new GentlemanStateService(i0.ɵɵinject("sourceOfTruthKeys")); }, token: GentlemanStateService, providedIn: "root" });
GentlemanStateService = GentlemanStateService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject('sourceOfTruthKeys'))
], GentlemanStateService);
export { GentlemanStateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsb0JBQW9CLEVBQXFDLE1BQU0sc0JBQXNCLENBQUM7QUFFOUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUJBQXFCLENBQUM7O0FBS3hELElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFxQjtJQUdoQyxZQUF5QyxpQkFBMEM7UUFGM0Usa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBR3hDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QixNQUFNLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLE1BQU0sQ0FBQyxZQUFZLENBQUMsbUJBQXVEO1FBQ2pGLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUM7UUFDRixPQUFPLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLG9FQUFvRSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGdCQUFnQixDQUFDLEdBQVcsRUFBRSxLQUFVLEVBQUUsZUFBZ0M7UUFDeEUsTUFBTSxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGFBQWEsQ0FBQyxHQUFXO1FBQ3ZCLE1BQU0sbUJBQW1CLEdBQUcsdUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hILE9BQU8sbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsVUFBVSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFNBQVMsQ0FBQyxHQUFXLEVBQUUsSUFBUztRQUM5QixNQUFNLG1CQUFtQixHQUFHLHVCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoSCxtQkFBbUIsYUFBbkIsbUJBQW1CLHVCQUFuQixtQkFBbUIsQ0FBRSxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFO0lBQzVELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUJBQWlCLENBQUMsR0FBVztRQUMzQixNQUFNLGtCQUFrQixHQUFHLHVCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRyxrQkFBa0IsYUFBbEIsa0JBQWtCLHVCQUFsQixrQkFBa0IsQ0FBRSxVQUFVLENBQUMsV0FBVyxHQUFHO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FDRixDQUFBOzt3Q0E5RGMsTUFBTSxTQUFDLG1CQUFtQjs7O0FBSDVCLHFCQUFxQjtJQUhqQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBSWEsV0FBQSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtHQUg3QixxQkFBcUIsQ0FpRWpDO1NBakVZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R2VudGxlbWFuU3RhdGVPYmplY3QsIE9ic2VydmVyQXJyYXlJdGVtLCBTdGF0ZVByb3BlcnRpZXN9IGZyb20gJy4uL21vZGVscy9wdWJsaWMtYXBpJztcbmltcG9ydCB7U291cmNlT2ZUcnV0aCwgU291cmNlT2ZUcnV0aEluaXRpYXRlfSBmcm9tICcuLi9tb2RlbHMvc291cmNlLW9mLXRydXRoJztcbmltcG9ydCB7Y2hlY2tJZkNvbmRpdGlvbk1ldH0gZnJvbSAnLi4vdXRpbHMvcHVibGljLWFwaSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlU2VydmljZSB7XG4gIHByaXZhdGUgb2JzZXJ2ZXJBcnJheTogU291cmNlT2ZUcnV0aCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ3NvdXJjZU9mVHJ1dGhLZXlzJykgc291cmNlT2ZUcnV0aEtleXM6IFNvdXJjZU9mVHJ1dGhJbml0aWF0ZVtdKSB7XG4gICAgc291cmNlT2ZUcnV0aEtleXMuZm9yRWFjaChrID0+IHtcbiAgICAgIGNvbnN0IHtrZXksIHN0YXRlLCBzdGF0ZVByb3BlcnRpZXN9ID0gaztcbiAgICAgIHRoaXMuY3JlYXRlT2JzZXJ2YWJsZShrZXksIHN0YXRlLCBzdGF0ZVByb3BlcnRpZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IGNoZWNrcyBpZiB0aGUgc2VhcmNoZWQgb2JqZWN0IGV4aXN0cywgaWYgbm90IGl0IHRocm93cyBhbiBlcnJvcnMgYW5kIHN0b3BzIHRoZSBleGVjdXRpb24uXG4gICAqIEBwYXJhbSBvYnNlcnZhYmxlQXJyYXlJdGVtIC0gT2JzZXJ2ZXJBcnJheUl0ZW0gfCB1bmRlZmluZWRcbiAgICogQHJldHVybiBPYnNlcnZlckFycmF5SXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tJZkZvdW5kKG9ic2VydmFibGVBcnJheUl0ZW06IE9ic2VydmVyQXJyYXlJdGVtPGFueT4gfCB1bmRlZmluZWQpOiBPYnNlcnZlckFycmF5SXRlbTxhbnk+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XG4gICAgICByZXR1cm4ge21ldDogISFvYnNlcnZhYmxlQXJyYXlJdGVtLCB2YWx1ZTogb2JzZXJ2YWJsZUFycmF5SXRlbX07XG4gICAgfTtcbiAgICByZXR1cm4gY2hlY2tJZkNvbmRpdGlvbk1ldCgoKSA9PiBjb25kaXRpb24oKSwgJ09ic2VydmFibGUgaXRlbSBub3QgZm91bmQgISBjaGVjayBpZiB0aGUga2V5IGlzIGNvcnJlY3QgYW5kIGV4aXN0cycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IGNyZWF0ZXMgYW5kIG9ic2VydmFibGUgYW5kIGFkZHMgaXQgdG8gdGhlIG9ic2VydmFibGUgYXJyYXkuXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxuICAgKiBAcGFyYW0gc3RhdGUgLSB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxuICAgKiBAcGFyYW0gc3RhdGVQcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0YXRlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgY3JlYXRlT2JzZXJ2YWJsZShrZXk6IHN0cmluZywgc3RhdGU6IGFueSwgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IEdlbnRsZW1hblN0YXRlT2JqZWN0KHN0YXRlLCBzdGF0ZVByb3BlcnRpZXMpO1xuICAgIHRoaXMub2JzZXJ2ZXJBcnJheS5wdXNoKHtrZXksIG9ic2VydmFibGV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCByZXR1cm5zIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlIHVzaW5nIHRoZSBwcm92aWRlZCBrZXkuXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxuICAgKiBAcmV0dXJuIE9ic2VydmVyQXJyYXlJdGVtXG4gICAqL1xuICBnZXRPYnNlcnZhYmxlKGtleTogc3RyaW5nKTogR2VudGxlbWFuU3RhdGVPYmplY3Q8YW55PiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZUFycmF5SXRlbSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmZpbmQob2JzID0+IG9icy5rZXkgPT09IGtleSkpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlQXJyYXlJdGVtPy5vYnNlcnZhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IGVtaXRzIGEgbmV3IHZhbHVlIGludG8gdGhlIHNlbGVjdGVkIG9ic2VydmFibGUgdXNpbmcgdGhlIHByb3ZpZGVkIGtleS5cbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XG4gICAqIEBwYXJhbSBkYXRhIC0gdGhlIGRhdGEgdG8gYmUgZW1pdHRlZCBpbnNpZGUgdGhlIHNlbGVjdGVkIG9ic2VydmFibGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBlbWl0VmFsdWUoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IG9ic2VydmFibGVBcnJheUl0ZW0gPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKG9icyA9PiBvYnMua2V5ID09PSBrZXkpKTtcbiAgICBvYnNlcnZhYmxlQXJyYXlJdGVtPy5vYnNlcnZhYmxlLnNldE9ic2VydmFibGVWYWx1ZXMoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgZGVzdHJveXMgYW4gb2JqZWN0IGZyb20gdGhlIG9ic2VydmFibGUgYXJyYXkuXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIGRlc3Ryb3lPYnNlcnZhYmxlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPYnNlcnZhYmxlID0gR2VudGxlbWFuU3RhdGVTZXJ2aWNlLmNoZWNrSWZGb3VuZCh0aGlzLm9ic2VydmVyQXJyYXkuZmluZChvYnMgPT4gb2JzLmtleSA9PT0ga2V5KSk7XG4gICAgc2VsZWN0ZWRPYnNlcnZhYmxlPy5vYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vYnNlcnZlckFycmF5ID0gdGhpcy5vYnNlcnZlckFycmF5LmZpbHRlcihvYnMgPT4gb2JzLmtleSAhPT0ga2V5KTtcbiAgfVxufVxuIl19