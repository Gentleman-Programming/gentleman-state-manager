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
     * @param stateProperties - the properties of the state
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFxQyxNQUFNLHNCQUFzQixDQUFDO0FBRTlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUV4RDtJQU1FLCtCQUF5QyxpQkFBMEM7UUFBbkYsaUJBS0M7UUFQTyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFHeEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNsQixJQUFBLFdBQUcsRUFBRSxlQUFLLEVBQUUsbUNBQWUsQ0FBTTtZQUN4QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ1ksa0NBQVksR0FBM0IsVUFBNEIsbUJBQXVEO1FBQ2pGLElBQU0sU0FBUyxHQUFHO1lBQ2hCLE9BQU8sbUJBQW1CLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxtQkFBbUIsQ0FBQyxjQUFNLE9BQUEsU0FBUyxFQUFFLEVBQVgsQ0FBVyxFQUFFLG9FQUFvRSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGdEQUFnQixHQUFoQixVQUFpQixHQUFXLEVBQUUsS0FBVSxFQUFFLGVBQWdDO1FBQ3hFLElBQU0sVUFBVSxHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkNBQWEsR0FBYixVQUFjLEdBQVc7UUFDdkIsSUFBTSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2hILE9BQU8sbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsVUFBVSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHlDQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsSUFBUztRQUM5QixJQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEgsbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRTtJQUM1RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlEQUFpQixHQUFqQixVQUFrQixHQUFXO1FBQzNCLElBQU0sa0JBQWtCLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQztRQUMvRyxrQkFBa0IsYUFBbEIsa0JBQWtCLHVCQUFsQixrQkFBa0IsQ0FBRSxVQUFVLENBQUMsV0FBVyxHQUFHO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBZixDQUFlLENBQUMsQ0FBQztJQUN6RSxDQUFDOzhGQWhFVSxxQkFBcUIsY0FHWixtQkFBbUI7aUVBSDVCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRnBCLE1BQU07Z0NBTnBCO0NBeUVDLEFBcEVELElBb0VDO1NBakVZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSGpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBSWMsTUFBTTt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dlbnRsZW1hblN0YXRlT2JqZWN0LCBPYnNlcnZlckFycmF5SXRlbSwgU3RhdGVQcm9wZXJ0aWVzfSBmcm9tICcuLi9tb2RlbHMvcHVibGljLWFwaSc7XG5pbXBvcnQge1NvdXJjZU9mVHJ1dGgsIFNvdXJjZU9mVHJ1dGhJbml0aWF0ZX0gZnJvbSAnLi4vbW9kZWxzL3NvdXJjZS1vZi10cnV0aCc7XG5pbXBvcnQge2NoZWNrSWZDb25kaXRpb25NZXR9IGZyb20gJy4uL3V0aWxzL3B1YmxpYy1hcGknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIG9ic2VydmVyQXJyYXk6IFNvdXJjZU9mVHJ1dGggPSBbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdzb3VyY2VPZlRydXRoS2V5cycpIHNvdXJjZU9mVHJ1dGhLZXlzOiBTb3VyY2VPZlRydXRoSW5pdGlhdGVbXSkge1xuICAgIHNvdXJjZU9mVHJ1dGhLZXlzLmZvckVhY2goayA9PiB7XG4gICAgICBjb25zdCB7a2V5LCBzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzfSA9IGs7XG4gICAgICB0aGlzLmNyZWF0ZU9ic2VydmFibGUoa2V5LCBzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCBjaGVja3MgaWYgdGhlIHNlYXJjaGVkIG9iamVjdCBleGlzdHMsIGlmIG5vdCBpdCB0aHJvd3MgYW4gZXJyb3JzIGFuZCBzdG9wcyB0aGUgZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0gb2JzZXJ2YWJsZUFycmF5SXRlbTogT2JzZXJ2ZXJBcnJheUl0ZW0gfCB1bmRlZmluZWRcbiAgICogQHJldHVybiBPYnNlcnZlckFycmF5SXRlbVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tJZkZvdW5kKG9ic2VydmFibGVBcnJheUl0ZW06IE9ic2VydmVyQXJyYXlJdGVtPGFueT4gfCB1bmRlZmluZWQpOiBPYnNlcnZlckFycmF5SXRlbTxhbnk+IHtcbiAgICBjb25zdCBjb25kaXRpb24gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZUFycmF5SXRlbTtcbiAgICB9O1xuICAgIHJldHVybiBjaGVja0lmQ29uZGl0aW9uTWV0KCgpID0+IGNvbmRpdGlvbigpLCAnT2JzZXJ2YWJsZSBpdGVtIG5vdCBmb3VuZCAhIGNoZWNrIGlmIHRoZSBrZXkgaXMgY29ycmVjdCBhbmQgZXhpc3RzJyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgY3JlYXRlcyBhbmQgb2JzZXJ2YWJsZSBhbmQgYWRkcyBpdCB0byB0aGUgb2JzZXJ2YWJsZSBhcnJheS5cbiAgICogQHBhcmFtIGtleTogdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcbiAgICogQHBhcmFtIHN0YXRlOiB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxuICAgKiBAcGFyYW0gc3RhdGVQcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0YXRlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgY3JlYXRlT2JzZXJ2YWJsZShrZXk6IHN0cmluZywgc3RhdGU6IGFueSwgc3RhdGVQcm9wZXJ0aWVzOiBTdGF0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IEdlbnRsZW1hblN0YXRlT2JqZWN0KHN0YXRlLCBzdGF0ZVByb3BlcnRpZXMpO1xuICAgIHRoaXMub2JzZXJ2ZXJBcnJheS5wdXNoKHtrZXksIG9ic2VydmFibGV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzYyBpdCByZXR1cm5zIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlIHVzaW5nIHRoZSBwcm92aWRlZCBrZXkuXG4gICAqIEBwYXJhbSBrZXk6IHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XG4gICAqIEByZXR1cm4gT2JzZXJ2ZXJBcnJheUl0ZW1cbiAgICovXG4gIGdldE9ic2VydmFibGUoa2V5OiBzdHJpbmcpOiBHZW50bGVtYW5TdGF0ZU9iamVjdDxhbnk+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlQXJyYXlJdGVtID0gR2VudGxlbWFuU3RhdGVTZXJ2aWNlLmNoZWNrSWZGb3VuZCh0aGlzLm9ic2VydmVyQXJyYXkuZmluZChvYnMgPT4gb2JzLmtleSA9PT0ga2V5KSk7XG4gICAgcmV0dXJuIG9ic2VydmFibGVBcnJheUl0ZW0/Lm9ic2VydmFibGU7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgZW1pdHMgYSBuZXcgdmFsdWUgaW50byB0aGUgc2VsZWN0ZWQgb2JzZXJ2YWJsZSB1c2luZyB0aGUgcHJvdmlkZWQga2V5LlxuICAgKiBAcGFyYW0ga2V5OiB0aGUga2V5IHRvIGJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBvYnNlcnZhYmxlIGl0ZW0gaW5zaWRlIHRoZSBhcnJheVxuICAgKiBAcGFyYW0gZGF0YTogdGhlIGRhdGEgdG8gYmUgZW1pdHRlZCBpbnNpZGUgdGhlIHNlbGVjdGVkIG9ic2VydmFibGVcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBlbWl0VmFsdWUoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IG9ic2VydmFibGVBcnJheUl0ZW0gPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKG9icyA9PiBvYnMua2V5ID09PSBrZXkpKTtcbiAgICBvYnNlcnZhYmxlQXJyYXlJdGVtPy5vYnNlcnZhYmxlLnNldE9ic2VydmFibGVWYWx1ZXMoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlc2MgaXQgZGVzdHJveXMgYW4gb2JqZWN0IGZyb20gdGhlIG9ic2VydmFibGUgYXJyYXkuXG4gICAqIEBwYXJhbSBrZXk6IHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgZGVzdHJveU9ic2VydmFibGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZE9ic2VydmFibGUgPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKG9icyA9PiBvYnMua2V5ID09PSBrZXkpKTtcbiAgICBzZWxlY3RlZE9ic2VydmFibGU/Lm9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm9ic2VydmVyQXJyYXkgPSB0aGlzLm9ic2VydmVyQXJyYXkuZmlsdGVyKG9icyA9PiBvYnMua2V5ICE9PSBrZXkpO1xuICB9XG59XG4iXX0=