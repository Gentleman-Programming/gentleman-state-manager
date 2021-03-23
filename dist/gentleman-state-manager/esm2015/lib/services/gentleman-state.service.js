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
     * @param observableArrayItem: ObserverArrayItem | undefined
     * @return ObserverArrayItem
     */
    static checkIfFound(observableArrayItem) {
        const condition = () => {
            return observableArrayItem;
        };
        return checkIfConditionMet(() => condition(), 'Observable item not found ! check if the key is correct and exists');
    }
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key: the key to be used to represent the observable item inside the array
     * @param state: the state of the observable, the object that represents what the observable is going to contain
     * @return void
     */
    createObservable(key, state, stateProperties) {
        const observable = new GentlemanStateObject(state, stateProperties);
        this.observerArray.push({ key, observable });
    }
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key: the key to be used to represent the observable item inside the array
     * @return ObserverArrayItem
     */
    getObservable(key) {
        const observableArrayItem = GentlemanStateService_1.checkIfFound(this.observerArray.find(obs => obs.key === key));
        return observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable;
    }
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key: the key to be used to represent the observable item inside the array
     * @param data: the data to be emitted inside the selected observable
     * @return void
     */
    emitValue(key, data) {
        const observableArrayItem = GentlemanStateService_1.checkIfFound(this.observerArray.find(obs => obs.key === key));
        observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable.setObservableValues(data);
    }
    /**
     * @desc it destroys an object from the observable array.
     * @param key: the key to be used to represent the observable item inside the array
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsb0JBQW9CLEVBQXFDLE1BQU0sc0JBQXNCLENBQUM7QUFFOUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUJBQXFCLENBQUM7O0FBS3hELElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFxQjtJQUdoQyxZQUF5QyxpQkFBMEM7UUFGM0Usa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBR3hDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QixNQUFNLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxZQUFZLENBQUMsbUJBQXVEO1FBQ3pFLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLG1CQUFtQixDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUNGLE9BQU8sbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsb0VBQW9FLENBQUMsQ0FBQztJQUN0SCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsS0FBVSxFQUFFLGVBQWdDO1FBQ3hFLE1BQU0sVUFBVSxHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxhQUFhLENBQUMsR0FBVztRQUN2QixNQUFNLG1CQUFtQixHQUFHLHVCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoSCxPQUFPLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDOUIsTUFBTSxtQkFBbUIsR0FBRyx1QkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEgsbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRTtJQUM1RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlCQUFpQixDQUFDLEdBQVc7UUFDM0IsTUFBTSxrQkFBa0IsR0FBRyx1QkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0csa0JBQWtCLGFBQWxCLGtCQUFrQix1QkFBbEIsa0JBQWtCLENBQUUsVUFBVSxDQUFDLFdBQVcsR0FBRztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBQ0YsQ0FBQTs7d0NBN0RjLE1BQU0sU0FBQyxtQkFBbUI7OztBQUg1QixxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUlhLFdBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7R0FIN0IscUJBQXFCLENBZ0VqQztTQWhFWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dlbnRsZW1hblN0YXRlT2JqZWN0LCBPYnNlcnZlckFycmF5SXRlbSwgU3RhdGVQcm9wZXJ0aWVzfSBmcm9tICcuLi9tb2RlbHMvcHVibGljLWFwaSc7XG5pbXBvcnQge1NvdXJjZU9mVHJ1dGgsIFNvdXJjZU9mVHJ1dGhJbml0aWF0ZX0gZnJvbSAnLi4vbW9kZWxzL3NvdXJjZS1vZi10cnV0aCc7XG5pbXBvcnQge2NoZWNrSWZDb25kaXRpb25NZXR9IGZyb20gJy4uL3V0aWxzL3B1YmxpYy1hcGknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIG9ic2VydmVyQXJyYXk6IFNvdXJjZU9mVHJ1dGggPSBbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdzb3VyY2VPZlRydXRoS2V5cycpIHNvdXJjZU9mVHJ1dGhLZXlzOiBTb3VyY2VPZlRydXRoSW5pdGlhdGVbXSkge1xuICAgIHNvdXJjZU9mVHJ1dGhLZXlzLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCB7a2V5LCBzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzfSA9IGs7XG4gICAgICB0aGlzLmNyZWF0ZU9ic2VydmFibGUoa2V5LCBzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCBjaGVja3MgaWYgdGhlIHNlYXJjaGVkIG9iamVjdCBleGlzdHMsIGlmIG5vdCBpdCB0aHJvd3MgYW4gZXJyb3JzIGFuZCBzdG9wcyB0aGUgZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0gb2JzZXJ2YWJsZUFycmF5SXRlbTogT2JzZXJ2ZXJBcnJheUl0ZW0gfCB1bmRlZmluZWRcbiAgICogQHJldHVybiBPYnNlcnZlckFycmF5SXRlbVxuICAgKi9cbiAgc3RhdGljIGNoZWNrSWZGb3VuZChvYnNlcnZhYmxlQXJyYXlJdGVtOiBPYnNlcnZlckFycmF5SXRlbTxhbnk+IHwgdW5kZWZpbmVkKTogT2JzZXJ2ZXJBcnJheUl0ZW08YW55PiB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVBcnJheUl0ZW07XG4gICAgfTtcbiAgICByZXR1cm4gY2hlY2tJZkNvbmRpdGlvbk1ldCgoKSA9PiBjb25kaXRpb24oKSwgJ09ic2VydmFibGUgaXRlbSBub3QgZm91bmQgISBjaGVjayBpZiB0aGUga2V5IGlzIGNvcnJlY3QgYW5kIGV4aXN0cycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IGNyZWF0ZXMgYW5kIG9ic2VydmFibGUgYW5kIGFkZHMgaXQgdG8gdGhlIG9ic2VydmFibGUgYXJyYXkuXG4gICAqIEBwYXJhbSBrZXk6IHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XG4gICAqIEBwYXJhbSBzdGF0ZTogdGhlIHN0YXRlIG9mIHRoZSBvYnNlcnZhYmxlLCB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB3aGF0IHRoZSBvYnNlcnZhYmxlIGlzIGdvaW5nIHRvIGNvbnRhaW5cbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBjcmVhdGVPYnNlcnZhYmxlKGtleTogc3RyaW5nLCBzdGF0ZTogYW55LCBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgR2VudGxlbWFuU3RhdGVPYmplY3Qoc3RhdGUsIHN0YXRlUHJvcGVydGllcyk7XG4gICAgdGhpcy5vYnNlcnZlckFycmF5LnB1c2goe2tleSwgb2JzZXJ2YWJsZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IHJldHVybnMgdGhlIHNlbGVjdGVkIG9ic2VydmFibGUgdXNpbmcgdGhlIHByb3ZpZGVkIGtleS5cbiAgICogQHBhcmFtIGtleTogdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHJldHVybiBPYnNlcnZlckFycmF5SXRlbVxuICAgKi9cbiAgZ2V0T2JzZXJ2YWJsZShrZXk6IHN0cmluZyk6IEdlbnRsZW1hblN0YXRlT2JqZWN0PGFueT4ge1xuICAgIGNvbnN0IG9ic2VydmFibGVBcnJheUl0ZW0gPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKG9icyA9PiBvYnMua2V5ID09PSBrZXkpKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZUFycmF5SXRlbT8ub2JzZXJ2YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCBlbWl0cyBhIG5ldyB2YWx1ZSBpbnRvIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlIHVzaW5nIHRoZSBwcm92aWRlZCBrZXkuXG4gICAqIEBwYXJhbSBrZXk6IHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XG4gICAqIEBwYXJhbSBkYXRhOiB0aGUgZGF0YSB0byBiZSBlbWl0dGVkIGluc2lkZSB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIGVtaXRWYWx1ZShrZXk6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZUFycmF5SXRlbSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmZpbmQob2JzID0+IG9icy5rZXkgPT09IGtleSkpO1xuICAgIG9ic2VydmFibGVBcnJheUl0ZW0/Lm9ic2VydmFibGUuc2V0T2JzZXJ2YWJsZVZhbHVlcyhkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCBkZXN0cm95cyBhbiBvYmplY3QgZnJvbSB0aGUgb2JzZXJ2YWJsZSBhcnJheS5cbiAgICogQHBhcmFtIGtleTogdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBkZXN0cm95T2JzZXJ2YWJsZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkT2JzZXJ2YWJsZSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmZpbmQob2JzID0+IG9icy5rZXkgPT09IGtleSkpO1xuICAgIHNlbGVjdGVkT2JzZXJ2YWJsZT8ub2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub2JzZXJ2ZXJBcnJheSA9IHRoaXMub2JzZXJ2ZXJBcnJheS5maWx0ZXIob2JzID0+IG9icy5rZXkgIT09IGtleSk7XG4gIH1cbn1cbiJdfQ==