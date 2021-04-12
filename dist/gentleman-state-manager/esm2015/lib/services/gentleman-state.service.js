import { Inject, Injectable } from "@angular/core";
import { GentlemanStateObject } from "../models/public-api";
import { checkIfConditionMet } from "../utils/public-api";
import * as i0 from "@angular/core";
export class GentlemanStateService {
    constructor(sourceOfTruthKeys) {
        this.observerArray = [];
        sourceOfTruthKeys.forEach((k) => {
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
        const found = this.observerArray.find((elem) => elem.key === key);
        if (found) {
            console.log(`the key : ${key}, already exists as an entity so it will be ignored`);
        }
        else {
            const observable = new GentlemanStateObject(state, stateProperties);
            this.observerArray.push({ key, observable });
        }
    }
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return ObserverArrayItem
     */
    getEntity(key) {
        const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find((obs) => obs.key === key));
        return observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable;
    }
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @param data - the data to be emitted inside the selected observable
     * @return void
     */
    emitValue(key, data) {
        const observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find((obs) => obs.key === key));
        observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable.setObservableValues(data);
    }
    /**
     * @desc it destroys an object from the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @return void
     */
    destroyObservable(key) {
        const selectedObservable = GentlemanStateService.checkIfFound(this.observerArray.find((obs) => obs.key === key));
        selectedObservable === null || selectedObservable === void 0 ? void 0 : selectedObservable.observable.unsubscribe();
        this.observerArray = this.observerArray.filter((obs) => obs.key !== key);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFzQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUsxRCxNQUFNLE9BQU8scUJBQXFCO0lBR2hDLFlBQXlDLGlCQUEwQztRQUYzRSxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFHeEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxNQUFNLENBQUMsWUFBWSxDQUFDLG1CQUF1RDtRQUNqRixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUM7UUFDcEUsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxvRUFBb0UsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsS0FBVSxFQUFFLGVBQWdDO1FBQ3hFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcscURBQXFELENBQUMsQ0FBQTtTQUNuRjthQUFNO1lBQ0wsTUFBTSxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLEdBQVc7UUFDbkIsTUFBTSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsSCxPQUFPLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsSCxtQkFBbUIsYUFBbkIsbUJBQW1CLHVCQUFuQixtQkFBbUIsQ0FBRSxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFO0lBQzVELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUJBQWlCLENBQUMsR0FBVztRQUMzQixNQUFNLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pILGtCQUFrQixhQUFsQixrQkFBa0IsdUJBQWxCLGtCQUFrQixDQUFFLFVBQVUsQ0FBQyxXQUFXLEdBQUc7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDOzswRkFyRVUscUJBQXFCLGNBR1osbUJBQW1COzZEQUg1QixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZwQixNQUFNO2tEQUVQLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUljLE1BQU07dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2VudGxlbWFuU3RhdGVPYmplY3QsIE9ic2VydmVyQXJyYXlJdGVtLCBTdGF0ZVByb3BlcnRpZXMgfSBmcm9tIFwiLi4vbW9kZWxzL3B1YmxpYy1hcGlcIjtcclxuaW1wb3J0IHsgU291cmNlT2ZUcnV0aCwgU291cmNlT2ZUcnV0aEluaXRpYXRlIH0gZnJvbSBcIi4uL21vZGVscy9zb3VyY2Utb2YtdHJ1dGhcIjtcclxuaW1wb3J0IHsgY2hlY2tJZkNvbmRpdGlvbk1ldCB9IGZyb20gXCIuLi91dGlscy9wdWJsaWMtYXBpXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgb2JzZXJ2ZXJBcnJheTogU291cmNlT2ZUcnV0aCA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFwic291cmNlT2ZUcnV0aEtleXNcIikgc291cmNlT2ZUcnV0aEtleXM6IFNvdXJjZU9mVHJ1dGhJbml0aWF0ZVtdKSB7XHJcbiAgICBzb3VyY2VPZlRydXRoS2V5cy5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsga2V5LCBzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzIH0gPSBrO1xyXG4gICAgICB0aGlzLmNyZWF0ZU9ic2VydmFibGUoa2V5LCBzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgaXQgY2hlY2tzIGlmIHRoZSBzZWFyY2hlZCBvYmplY3QgZXhpc3RzLCBpZiBub3QgaXQgdGhyb3dzIGFuIGVycm9ycyBhbmQgc3RvcHMgdGhlIGV4ZWN1dGlvbi5cclxuICAgKiBAcGFyYW0gb2JzZXJ2YWJsZUFycmF5SXRlbSAtIE9ic2VydmVyQXJyYXlJdGVtIHwgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBPYnNlcnZlckFycmF5SXRlbVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrSWZGb3VuZChvYnNlcnZhYmxlQXJyYXlJdGVtOiBPYnNlcnZlckFycmF5SXRlbTxhbnk+IHwgdW5kZWZpbmVkKTogT2JzZXJ2ZXJBcnJheUl0ZW08YW55PiB7XHJcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IG1ldDogISFvYnNlcnZhYmxlQXJyYXlJdGVtLCB2YWx1ZTogb2JzZXJ2YWJsZUFycmF5SXRlbSB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCBcIk9ic2VydmFibGUgaXRlbSBub3QgZm91bmQgISBjaGVjayBpZiB0aGUga2V5IGlzIGNvcnJlY3QgYW5kIGV4aXN0c1wiKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGl0IGNyZWF0ZXMgYW5kIG9ic2VydmFibGUgYW5kIGFkZHMgaXQgdG8gdGhlIG9ic2VydmFibGUgYXJyYXkuXHJcbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XHJcbiAgICogQHBhcmFtIHN0YXRlIC0gdGhlIHN0YXRlIG9mIHRoZSBvYnNlcnZhYmxlLCB0aGUgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB3aGF0IHRoZSBvYnNlcnZhYmxlIGlzIGdvaW5nIHRvIGNvbnRhaW5cclxuICAgKiBAcGFyYW0gc3RhdGVQcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0YXRlXHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgY3JlYXRlT2JzZXJ2YWJsZShrZXk6IHN0cmluZywgc3RhdGU6IGFueSwgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZvdW5kID0gdGhpcy5vYnNlcnZlckFycmF5LmZpbmQoKGVsZW0pID0+IGVsZW0ua2V5ID09PSBrZXkpO1xyXG4gICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGB0aGUga2V5IDogJHtrZXl9LCBhbHJlYWR5IGV4aXN0cyBhcyBhbiBlbnRpdHkgc28gaXQgd2lsbCBiZSBpZ25vcmVkYClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgR2VudGxlbWFuU3RhdGVPYmplY3Qoc3RhdGUsIHN0YXRlUHJvcGVydGllcyk7XHJcbiAgICAgIHRoaXMub2JzZXJ2ZXJBcnJheS5wdXNoKHsga2V5LCBvYnNlcnZhYmxlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgaXQgcmV0dXJucyB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZSB1c2luZyB0aGUgcHJvdmlkZWQga2V5LlxyXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxyXG4gICAqIEByZXR1cm4gT2JzZXJ2ZXJBcnJheUl0ZW1cclxuICAgKi9cclxuICBnZXRFbnRpdHkoa2V5OiBzdHJpbmcpOiBHZW50bGVtYW5TdGF0ZU9iamVjdDxhbnk+IHtcclxuICAgIGNvbnN0IG9ic2VydmFibGVBcnJheUl0ZW0gPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKChvYnMpID0+IG9icy5rZXkgPT09IGtleSkpO1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVBcnJheUl0ZW0/Lm9ic2VydmFibGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyBpdCBlbWl0cyBhIG5ldyB2YWx1ZSBpbnRvIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlIHVzaW5nIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XHJcbiAgICogQHBhcmFtIGRhdGEgLSB0aGUgZGF0YSB0byBiZSBlbWl0dGVkIGluc2lkZSB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZVxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIGVtaXRWYWx1ZShrZXk6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBvYnNlcnZhYmxlQXJyYXlJdGVtID0gR2VudGxlbWFuU3RhdGVTZXJ2aWNlLmNoZWNrSWZGb3VuZCh0aGlzLm9ic2VydmVyQXJyYXkuZmluZCgob2JzKSA9PiBvYnMua2V5ID09PSBrZXkpKTtcclxuICAgIG9ic2VydmFibGVBcnJheUl0ZW0/Lm9ic2VydmFibGUuc2V0T2JzZXJ2YWJsZVZhbHVlcyhkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGl0IGRlc3Ryb3lzIGFuIG9iamVjdCBmcm9tIHRoZSBvYnNlcnZhYmxlIGFycmF5LlxyXG4gICAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxyXG4gICAqIEByZXR1cm4gdm9pZFxyXG4gICAqL1xyXG4gIGRlc3Ryb3lPYnNlcnZhYmxlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9ic2VydmFibGUgPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKChvYnMpID0+IG9icy5rZXkgPT09IGtleSkpO1xyXG4gICAgc2VsZWN0ZWRPYnNlcnZhYmxlPy5vYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLm9ic2VydmVyQXJyYXkgPSB0aGlzLm9ic2VydmVyQXJyYXkuZmlsdGVyKChvYnMpID0+IG9icy5rZXkgIT09IGtleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==