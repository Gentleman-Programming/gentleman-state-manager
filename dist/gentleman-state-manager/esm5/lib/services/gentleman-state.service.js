import { Inject, Injectable } from '@angular/core';
import { GentlemanStateObject } from '../models/public-api';
import { checkIfConditionMet } from '../utils/public-api';
import * as i0 from "@angular/core";
var GentlemanStateService = /** @class */ (function () {
    function GentlemanStateService(sourceOfTruthKeys) {
        var _this = this;
        this.observerArray = [];
        sourceOfTruthKeys.forEach(function (k) {
            var key = k.key, state = k.state, stateProperties = k.stateProperties;
            _this.createObservable(key, state, stateProperties);
        });
    }
    /**
     * @desc it checks if the searched object exists, if not it throws an errors and stops the execution.
     * @param observableArrayItem: ObserverArrayItem | undefined
     * @return ObserverArrayItem
     */
    GentlemanStateService.checkIfFound = function (observableArrayItem) {
        var condition = function () {
            return observableArrayItem;
        };
        return checkIfConditionMet(function () { return condition(); }, 'Observable item not found ! check if the key is correct and exists');
    };
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key: the key to be used to represent the observable item inside the array
     * @param state: the state of the observable, the object that represents what the observable is going to contain
     * @return void
     */
    GentlemanStateService.prototype.createObservable = function (key, state, stateProperties) {
        var observable = new GentlemanStateObject(state, stateProperties);
        this.observerArray.push({ key: key, observable: observable });
    };
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key: the key to be used to represent the observable item inside the array
     * @return ObserverArrayItem
     */
    GentlemanStateService.prototype.getObservable = function (key) {
        var observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find(function (obs) { return obs.key === key; }));
        return observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable;
    };
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key: the key to be used to represent the observable item inside the array
     * @param data: the data to be emitted inside the selected observable
     * @return void
     */
    GentlemanStateService.prototype.emitValue = function (key, data) {
        var observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find(function (obs) { return obs.key === key; }));
        observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable.setObservableValues(data);
    };
    /**
     * @desc it destroys an object from the observable array.
     * @param key: the key to be used to represent the observable item inside the array
     * @return void
     */
    GentlemanStateService.prototype.destroyObservable = function (key) {
        var selectedObservable = GentlemanStateService.checkIfFound(this.observerArray.find(function (obs) { return obs.key === key; }));
        selectedObservable === null || selectedObservable === void 0 ? void 0 : selectedObservable.observable.unsubscribe();
        this.observerArray = this.observerArray.filter(function (obs) { return obs.key !== key; });
    };
    GentlemanStateService.ɵfac = function GentlemanStateService_Factory(t) { return new (t || GentlemanStateService)(i0.ɵɵinject('sourceOfTruthKeys')); };
    GentlemanStateService.ɵprov = i0.ɵɵdefineInjectable({ token: GentlemanStateService, factory: GentlemanStateService.ɵfac, providedIn: 'root' });
    return GentlemanStateService;
}());
export { GentlemanStateService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GentlemanStateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['sourceOfTruthKeys']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFxQyxNQUFNLHNCQUFzQixDQUFDO0FBRTlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUV4RDtJQU1FLCtCQUF5QyxpQkFBMEM7UUFBbkYsaUJBS0M7UUFQTyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFHeEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNsQixJQUFBLFdBQUcsRUFBRSxlQUFLLEVBQUUsbUNBQWUsQ0FBTTtZQUN4QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksa0NBQVksR0FBbkIsVUFBb0IsbUJBQXVEO1FBQ3pFLElBQU0sU0FBUyxHQUFHO1lBQ2hCLE9BQU8sbUJBQW1CLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxtQkFBbUIsQ0FBQyxjQUFNLE9BQUEsU0FBUyxFQUFFLEVBQVgsQ0FBVyxFQUFFLG9FQUFvRSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0RBQWdCLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxLQUFVLEVBQUUsZUFBZ0M7UUFDeEUsSUFBTSxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBRSxVQUFVLFlBQUEsRUFBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2Q0FBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixJQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEgsT0FBTyxtQkFBbUIsYUFBbkIsbUJBQW1CLHVCQUFuQixtQkFBbUIsQ0FBRSxVQUFVLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gseUNBQVMsR0FBVCxVQUFVLEdBQVcsRUFBRSxJQUFTO1FBQzlCLElBQU0sbUJBQW1CLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQztRQUNoSCxtQkFBbUIsYUFBbkIsbUJBQW1CLHVCQUFuQixtQkFBbUIsQ0FBRSxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFO0lBQzVELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaURBQWlCLEdBQWpCLFVBQWtCLEdBQVc7UUFDM0IsSUFBTSxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDO1FBQy9HLGtCQUFrQixhQUFsQixrQkFBa0IsdUJBQWxCLGtCQUFrQixDQUFFLFVBQVUsQ0FBQyxXQUFXLEdBQUc7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OEZBL0RVLHFCQUFxQixjQUdaLG1CQUFtQjtpRUFINUIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGcEIsTUFBTTtnQ0FOcEI7Q0F3RUMsQUFuRUQsSUFtRUM7U0FoRVkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFJYyxNQUFNO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R2VudGxlbWFuU3RhdGVPYmplY3QsIE9ic2VydmVyQXJyYXlJdGVtLCBTdGF0ZVByb3BlcnRpZXN9IGZyb20gJy4uL21vZGVscy9wdWJsaWMtYXBpJztcbmltcG9ydCB7U291cmNlT2ZUcnV0aCwgU291cmNlT2ZUcnV0aEluaXRpYXRlfSBmcm9tICcuLi9tb2RlbHMvc291cmNlLW9mLXRydXRoJztcbmltcG9ydCB7Y2hlY2tJZkNvbmRpdGlvbk1ldH0gZnJvbSAnLi4vdXRpbHMvcHVibGljLWFwaSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlU2VydmljZSB7XG4gIHByaXZhdGUgb2JzZXJ2ZXJBcnJheTogU291cmNlT2ZUcnV0aCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ3NvdXJjZU9mVHJ1dGhLZXlzJykgc291cmNlT2ZUcnV0aEtleXM6IFNvdXJjZU9mVHJ1dGhJbml0aWF0ZVtdKSB7XG4gICAgc291cmNlT2ZUcnV0aEtleXMuZm9yRWFjaChrID0+IHtcbiAgICAgIGNvbnN0IHtrZXksIHN0YXRlLCBzdGF0ZVByb3BlcnRpZXN9ID0gaztcbiAgICAgIHRoaXMuY3JlYXRlT2JzZXJ2YWJsZShrZXksIHN0YXRlLCBzdGF0ZVByb3BlcnRpZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IGNoZWNrcyBpZiB0aGUgc2VhcmNoZWQgb2JqZWN0IGV4aXN0cywgaWYgbm90IGl0IHRocm93cyBhbiBlcnJvcnMgYW5kIHN0b3BzIHRoZSBleGVjdXRpb24uXG4gICAqIEBwYXJhbSBvYnNlcnZhYmxlQXJyYXlJdGVtOiBPYnNlcnZlckFycmF5SXRlbSB8IHVuZGVmaW5lZFxuICAgKiBAcmV0dXJuIE9ic2VydmVyQXJyYXlJdGVtXG4gICAqL1xuICBzdGF0aWMgY2hlY2tJZkZvdW5kKG9ic2VydmFibGVBcnJheUl0ZW06IE9ic2VydmVyQXJyYXlJdGVtPGFueT4gfCB1bmRlZmluZWQpOiBPYnNlcnZlckFycmF5SXRlbTxhbnk+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZUFycmF5SXRlbTtcbiAgICB9O1xuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnT2JzZXJ2YWJsZSBpdGVtIG5vdCBmb3VuZCAhIGNoZWNrIGlmIHRoZSBrZXkgaXMgY29ycmVjdCBhbmQgZXhpc3RzJyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgY3JlYXRlcyBhbmQgb2JzZXJ2YWJsZSBhbmQgYWRkcyBpdCB0byB0aGUgb2JzZXJ2YWJsZSBhcnJheS5cbiAgICogQHBhcmFtIGtleTogdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHBhcmFtIHN0YXRlOiB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIGNyZWF0ZU9ic2VydmFibGUoa2V5OiBzdHJpbmcsIHN0YXRlOiBhbnksIHN0YXRlUHJvcGVydGllczogU3RhdGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBHZW50bGVtYW5TdGF0ZU9iamVjdChzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzKTtcbiAgICB0aGlzLm9ic2VydmVyQXJyYXkucHVzaCh7a2V5LCBvYnNlcnZhYmxlfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgcmV0dXJucyB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZSB1c2luZyB0aGUgcHJvdmlkZWQga2V5LlxuICAgKiBAcGFyYW0ga2V5OiB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxuICAgKiBAcmV0dXJuIE9ic2VydmVyQXJyYXlJdGVtXG4gICAqL1xuICBnZXRPYnNlcnZhYmxlKGtleTogc3RyaW5nKTogR2VudGxlbWFuU3RhdGVPYmplY3Q8YW55PiB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZUFycmF5SXRlbSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmZpbmQob2JzID0+IG9icy5rZXkgPT09IGtleSkpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlQXJyYXlJdGVtPy5vYnNlcnZhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IGVtaXRzIGEgbmV3IHZhbHVlIGludG8gdGhlIHNlbGVjdGVkIG9ic2VydmFibGUgdXNpbmcgdGhlIHByb3ZpZGVkIGtleS5cbiAgICogQHBhcmFtIGtleTogdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHBhcmFtIGRhdGE6IHRoZSBkYXRhIHRvIGJlIGVtaXR0ZWQgaW5zaWRlIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgZW1pdFZhbHVlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBvYnNlcnZhYmxlQXJyYXlJdGVtID0gR2VudGxlbWFuU3RhdGVTZXJ2aWNlLmNoZWNrSWZGb3VuZCh0aGlzLm9ic2VydmVyQXJyYXkuZmluZChvYnMgPT4gb2JzLmtleSA9PT0ga2V5KSk7XG4gICAgb2JzZXJ2YWJsZUFycmF5SXRlbT8ub2JzZXJ2YWJsZS5zZXRPYnNlcnZhYmxlVmFsdWVzKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IGRlc3Ryb3lzIGFuIG9iamVjdCBmcm9tIHRoZSBvYnNlcnZhYmxlIGFycmF5LlxuICAgKiBAcGFyYW0ga2V5OiB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIGRlc3Ryb3lPYnNlcnZhYmxlKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPYnNlcnZhYmxlID0gR2VudGxlbWFuU3RhdGVTZXJ2aWNlLmNoZWNrSWZGb3VuZCh0aGlzLm9ic2VydmVyQXJyYXkuZmluZChvYnMgPT4gb2JzLmtleSA9PT0ga2V5KSk7XG4gICAgc2VsZWN0ZWRPYnNlcnZhYmxlPy5vYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vYnNlcnZlckFycmF5ID0gdGhpcy5vYnNlcnZlckFycmF5LmZpbHRlcihvYnMgPT4gb2JzLmtleSAhPT0ga2V5KTtcbiAgfVxufVxuIl19