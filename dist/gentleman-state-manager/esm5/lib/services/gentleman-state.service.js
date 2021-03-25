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
     * @param observableArrayItem - ObserverArrayItem | undefined
     * @return ObserverArrayItem
     */
    GentlemanStateService.checkIfFound = function (observableArrayItem) {
        var condition = function () {
            return { met: !!observableArrayItem, value: observableArrayItem };
        };
        return checkIfConditionMet(function () { return condition(); }, 'Observable item not found ! check if the key is correct and exists');
    };
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    GentlemanStateService.prototype.createObservable = function (key, state, stateProperties) {
        var observable = new GentlemanStateObject(state, stateProperties);
        this.observerArray.push({ key: key, observable: observable });
    };
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return ObserverArrayItem
     */
    GentlemanStateService.prototype.getObservable = function (key) {
        var observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find(function (obs) { return obs.key === key; }));
        return observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable;
    };
    /**
     * @desc it emits a new value into the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @param data - the data to be emitted inside the selected observable
     * @return void
     */
    GentlemanStateService.prototype.emitValue = function (key, data) {
        var observableArrayItem = GentlemanStateService.checkIfFound(this.observerArray.find(function (obs) { return obs.key === key; }));
        observableArrayItem === null || observableArrayItem === void 0 ? void 0 : observableArrayItem.observable.setObservableValues(data);
    };
    /**
     * @desc it destroys an object from the observable array.
     * @param key - the key to be used to represent the observable item inside the array
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFxQyxNQUFNLHNCQUFzQixDQUFDO0FBRTlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUV4RDtJQU1FLCtCQUF5QyxpQkFBMEM7UUFBbkYsaUJBS0M7UUFQTyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFHeEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNsQixJQUFBLFdBQUcsRUFBRSxlQUFLLEVBQUUsbUNBQWUsQ0FBTTtZQUN4QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ1ksa0NBQVksR0FBM0IsVUFBNEIsbUJBQXVEO1FBQ2pGLElBQU0sU0FBUyxHQUFHO1lBQ2hCLE9BQU8sRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQztRQUNGLE9BQU8sbUJBQW1CLENBQUMsY0FBTSxPQUFBLFNBQVMsRUFBRSxFQUFYLENBQVcsRUFBRSxvRUFBb0UsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxnREFBZ0IsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEtBQVUsRUFBRSxlQUFnQztRQUN4RSxJQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsS0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDZDQUFhLEdBQWIsVUFBYyxHQUFXO1FBQ3ZCLElBQU0sbUJBQW1CLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQztRQUNoSCxPQUFPLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx5Q0FBUyxHQUFULFVBQVUsR0FBVyxFQUFFLElBQVM7UUFDOUIsSUFBTSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2hILG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7SUFDNUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpREFBaUIsR0FBakIsVUFBa0IsR0FBVztRQUMzQixJQUFNLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUM7UUFDL0csa0JBQWtCLGFBQWxCLGtCQUFrQix1QkFBbEIsa0JBQWtCLENBQUUsVUFBVSxDQUFDLFdBQVcsR0FBRztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDekUsQ0FBQzs4RkFoRVUscUJBQXFCLGNBR1osbUJBQW1CO2lFQUg1QixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZwQixNQUFNO2dDQU5wQjtDQXlFQyxBQXBFRCxJQW9FQztTQWpFWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQUljLE1BQU07dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHZW50bGVtYW5TdGF0ZU9iamVjdCwgT2JzZXJ2ZXJBcnJheUl0ZW0sIFN0YXRlUHJvcGVydGllc30gZnJvbSAnLi4vbW9kZWxzL3B1YmxpYy1hcGknO1xuaW1wb3J0IHtTb3VyY2VPZlRydXRoLCBTb3VyY2VPZlRydXRoSW5pdGlhdGV9IGZyb20gJy4uL21vZGVscy9zb3VyY2Utb2YtdHJ1dGgnO1xuaW1wb3J0IHtjaGVja0lmQ29uZGl0aW9uTWV0fSBmcm9tICcuLi91dGlscy9wdWJsaWMtYXBpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2VudGxlbWFuU3RhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvYnNlcnZlckFycmF5OiBTb3VyY2VPZlRydXRoID0gW107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnc291cmNlT2ZUcnV0aEtleXMnKSBzb3VyY2VPZlRydXRoS2V5czogU291cmNlT2ZUcnV0aEluaXRpYXRlW10pIHtcbiAgICBzb3VyY2VPZlRydXRoS2V5cy5mb3JFYWNoKGsgPT4ge1xuICAgICAgY29uc3Qge2tleSwgc3RhdGUsIHN0YXRlUHJvcGVydGllc30gPSBrO1xuICAgICAgdGhpcy5jcmVhdGVPYnNlcnZhYmxlKGtleSwgc3RhdGUsIHN0YXRlUHJvcGVydGllcyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgY2hlY2tzIGlmIHRoZSBzZWFyY2hlZCBvYmplY3QgZXhpc3RzLCBpZiBub3QgaXQgdGhyb3dzIGFuIGVycm9ycyBhbmQgc3RvcHMgdGhlIGV4ZWN1dGlvbi5cbiAgICogQHBhcmFtIG9ic2VydmFibGVBcnJheUl0ZW0gLSBPYnNlcnZlckFycmF5SXRlbSB8IHVuZGVmaW5lZFxuICAgKiBAcmV0dXJuIE9ic2VydmVyQXJyYXlJdGVtXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBjaGVja0lmRm91bmQob2JzZXJ2YWJsZUFycmF5SXRlbTogT2JzZXJ2ZXJBcnJheUl0ZW08YW55PiB8IHVuZGVmaW5lZCk6IE9ic2VydmVyQXJyYXlJdGVtPGFueT4ge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICgpID0+IHtcbiAgICAgIHJldHVybiB7bWV0OiAhIW9ic2VydmFibGVBcnJheUl0ZW0sIHZhbHVlOiBvYnNlcnZhYmxlQXJyYXlJdGVtfTtcbiAgICB9O1xuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnT2JzZXJ2YWJsZSBpdGVtIG5vdCBmb3VuZCAhIGNoZWNrIGlmIHRoZSBrZXkgaXMgY29ycmVjdCBhbmQgZXhpc3RzJyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgY3JlYXRlcyBhbmQgb2JzZXJ2YWJsZSBhbmQgYWRkcyBpdCB0byB0aGUgb2JzZXJ2YWJsZSBhcnJheS5cbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XG4gICAqIEBwYXJhbSBzdGF0ZSAtIHRoZSBzdGF0ZSBvZiB0aGUgb2JzZXJ2YWJsZSwgdGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgd2hhdCB0aGUgb2JzZXJ2YWJsZSBpcyBnb2luZyB0byBjb250YWluXG4gICAqIEBwYXJhbSBzdGF0ZVByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyBvZiB0aGUgc3RhdGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBjcmVhdGVPYnNlcnZhYmxlKGtleTogc3RyaW5nLCBzdGF0ZTogYW55LCBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgR2VudGxlbWFuU3RhdGVPYmplY3Qoc3RhdGUsIHN0YXRlUHJvcGVydGllcyk7XG4gICAgdGhpcy5vYnNlcnZlckFycmF5LnB1c2goe2tleSwgb2JzZXJ2YWJsZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjIGl0IHJldHVybnMgdGhlIHNlbGVjdGVkIG9ic2VydmFibGUgdXNpbmcgdGhlIHByb3ZpZGVkIGtleS5cbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XG4gICAqIEByZXR1cm4gT2JzZXJ2ZXJBcnJheUl0ZW1cbiAgICovXG4gIGdldE9ic2VydmFibGUoa2V5OiBzdHJpbmcpOiBHZW50bGVtYW5TdGF0ZU9iamVjdDxhbnk+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlQXJyYXlJdGVtID0gR2VudGxlbWFuU3RhdGVTZXJ2aWNlLmNoZWNrSWZGb3VuZCh0aGlzLm9ic2VydmVyQXJyYXkuZmluZChvYnMgPT4gb2JzLmtleSA9PT0ga2V5KSk7XG4gICAgcmV0dXJuIG9ic2VydmFibGVBcnJheUl0ZW0/Lm9ic2VydmFibGU7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgZW1pdHMgYSBuZXcgdmFsdWUgaW50byB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZSB1c2luZyB0aGUgcHJvdmlkZWQga2V5LlxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHBhcmFtIGRhdGEgLSB0aGUgZGF0YSB0byBiZSBlbWl0dGVkIGluc2lkZSB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZVxuICAgKiBAcmV0dXJuIHZvaWRcbiAgICovXG4gIGVtaXRWYWx1ZShrZXk6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZUFycmF5SXRlbSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmZpbmQob2JzID0+IG9icy5rZXkgPT09IGtleSkpO1xuICAgIG9ic2VydmFibGVBcnJheUl0ZW0/Lm9ic2VydmFibGUuc2V0T2JzZXJ2YWJsZVZhbHVlcyhkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCBkZXN0cm95cyBhbiBvYmplY3QgZnJvbSB0aGUgb2JzZXJ2YWJsZSBhcnJheS5cbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgZGVzdHJveU9ic2VydmFibGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZE9ic2VydmFibGUgPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKG9icyA9PiBvYnMua2V5ID09PSBrZXkpKTtcbiAgICBzZWxlY3RlZE9ic2VydmFibGU/Lm9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm9ic2VydmVyQXJyYXkgPSB0aGlzLm9ic2VydmVyQXJyYXkuZmlsdGVyKG9icyA9PiBvYnMua2V5ICE9PSBrZXkpO1xuICB9XG59XG4iXX0=