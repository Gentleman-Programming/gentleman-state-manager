import { Inject, Injectable } from "@angular/core";
import { GentlemanStateObject } from "../models/public-api";
import { checkIfConditionMet } from "../utils/public-api";
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
        return checkIfConditionMet(function () { return condition(); }, "Observable item not found ! check if the key is correct and exists");
    };
    /**
     * @desc it creates and observable and adds it to the observable array.
     * @param key - the key to be used to represent the observable item inside the array
     * @param state - the state of the observable, the object that represents what the observable is going to contain
     * @param stateProperties - the properties of the state
     * @return void
     */
    GentlemanStateService.prototype.createObservable = function (key, state, stateProperties) {
        var found = this.observerArray.find(function (elem) { return elem.key === key; });
        if (found) {
            console.log("the key : " + key + ", already exists as an entity so it will be ignored");
        }
        else {
            var observable = new GentlemanStateObject(state, stateProperties);
            this.observerArray.push({ key: key, observable: observable });
        }
    };
    /**
     * @desc it returns the selected observable using the provided key.
     * @param key - the key to be used to represent the observable item inside the array
     * @return ObserverArrayItem
     */
    GentlemanStateService.prototype.getEntity = function (key) {
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
    GentlemanStateService.ɵfac = function GentlemanStateService_Factory(t) { return new (t || GentlemanStateService)(i0.ɵɵinject("sourceOfTruthKeys")); };
    GentlemanStateService.ɵprov = i0.ɵɵdefineInjectable({ token: GentlemanStateService, factory: GentlemanStateService.ɵfac, providedIn: "root" });
    return GentlemanStateService;
}());
export { GentlemanStateService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GentlemanStateService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["sourceOfTruthKeys"]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFzQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUUxRDtJQU1FLCtCQUF5QyxpQkFBMEM7UUFBbkYsaUJBS0M7UUFQTyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFHeEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUNsQixJQUFBLFdBQUcsRUFBRSxlQUFLLEVBQUUsbUNBQWUsQ0FBTztZQUMxQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ1ksa0NBQVksR0FBM0IsVUFBNEIsbUJBQXVEO1FBQ2pGLElBQU0sU0FBUyxHQUFHO1lBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDO1FBQ3BFLENBQUMsQ0FBQztRQUNGLE9BQU8sbUJBQW1CLENBQUMsY0FBTSxPQUFBLFNBQVMsRUFBRSxFQUFYLENBQVcsRUFBRSxvRUFBb0UsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxnREFBZ0IsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEtBQVUsRUFBRSxlQUFnQztRQUN4RSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDbEUsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsR0FBRyx3REFBcUQsQ0FBQyxDQUFBO1NBQ25GO2FBQU07WUFDTCxJQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gseUNBQVMsR0FBVCxVQUFVLEdBQVc7UUFDbkIsSUFBTSxtQkFBbUIsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2xILE9BQU8sbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsVUFBVSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHlDQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsSUFBUztRQUM5QixJQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUM7UUFDbEgsbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRTtJQUM1RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlEQUFpQixHQUFqQixVQUFrQixHQUFXO1FBQzNCLElBQU0sa0JBQWtCLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQztRQUNqSCxrQkFBa0IsYUFBbEIsa0JBQWtCLHVCQUFsQixrQkFBa0IsQ0FBRSxVQUFVLENBQUMsV0FBVyxHQUFHO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBZixDQUFlLENBQUMsQ0FBQztJQUMzRSxDQUFDOzhGQXJFVSxxQkFBcUIsY0FHWixtQkFBbUI7aUVBSDVCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRnBCLE1BQU07Z0NBTnBCO0NBOEVDLEFBekVELElBeUVDO1NBdEVZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSGpDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBSWMsTUFBTTt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHZW50bGVtYW5TdGF0ZU9iamVjdCwgT2JzZXJ2ZXJBcnJheUl0ZW0sIFN0YXRlUHJvcGVydGllcyB9IGZyb20gXCIuLi9tb2RlbHMvcHVibGljLWFwaVwiO1xyXG5pbXBvcnQgeyBTb3VyY2VPZlRydXRoLCBTb3VyY2VPZlRydXRoSW5pdGlhdGUgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdXJjZS1vZi10cnV0aFwiO1xyXG5pbXBvcnQgeyBjaGVja0lmQ29uZGl0aW9uTWV0IH0gZnJvbSBcIi4uL3V0aWxzL3B1YmxpYy1hcGlcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlbnRsZW1hblN0YXRlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBvYnNlcnZlckFycmF5OiBTb3VyY2VPZlRydXRoID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoXCJzb3VyY2VPZlRydXRoS2V5c1wiKSBzb3VyY2VPZlRydXRoS2V5czogU291cmNlT2ZUcnV0aEluaXRpYXRlW10pIHtcclxuICAgIHNvdXJjZU9mVHJ1dGhLZXlzLmZvckVhY2goKGspID0+IHtcclxuICAgICAgY29uc3QgeyBrZXksIHN0YXRlLCBzdGF0ZVByb3BlcnRpZXMgfSA9IGs7XHJcbiAgICAgIHRoaXMuY3JlYXRlT2JzZXJ2YWJsZShrZXksIHN0YXRlLCBzdGF0ZVByb3BlcnRpZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyBpdCBjaGVja3MgaWYgdGhlIHNlYXJjaGVkIG9iamVjdCBleGlzdHMsIGlmIG5vdCBpdCB0aHJvd3MgYW4gZXJyb3JzIGFuZCBzdG9wcyB0aGUgZXhlY3V0aW9uLlxyXG4gICAqIEBwYXJhbSBvYnNlcnZhYmxlQXJyYXlJdGVtIC0gT2JzZXJ2ZXJBcnJheUl0ZW0gfCB1bmRlZmluZWRcclxuICAgKiBAcmV0dXJuIE9ic2VydmVyQXJyYXlJdGVtXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tJZkZvdW5kKG9ic2VydmFibGVBcnJheUl0ZW06IE9ic2VydmVyQXJyYXlJdGVtPGFueT4gfCB1bmRlZmluZWQpOiBPYnNlcnZlckFycmF5SXRlbTxhbnk+IHtcclxuICAgIGNvbnN0IGNvbmRpdGlvbiA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHsgbWV0OiAhIW9ic2VydmFibGVBcnJheUl0ZW0sIHZhbHVlOiBvYnNlcnZhYmxlQXJyYXlJdGVtIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNoZWNrSWZDb25kaXRpb25NZXQoKCkgPT4gY29uZGl0aW9uKCksIFwiT2JzZXJ2YWJsZSBpdGVtIG5vdCBmb3VuZCAhIGNoZWNrIGlmIHRoZSBrZXkgaXMgY29ycmVjdCBhbmQgZXhpc3RzXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgaXQgY3JlYXRlcyBhbmQgb2JzZXJ2YWJsZSBhbmQgYWRkcyBpdCB0byB0aGUgb2JzZXJ2YWJsZSBhcnJheS5cclxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcclxuICAgKiBAcGFyYW0gc3RhdGUgLSB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxyXG4gICAqIEBwYXJhbSBzdGF0ZVByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyBvZiB0aGUgc3RhdGVcclxuICAgKiBAcmV0dXJuIHZvaWRcclxuICAgKi9cclxuICBjcmVhdGVPYnNlcnZhYmxlKGtleTogc3RyaW5nLCBzdGF0ZTogYW55LCBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcyk6IHZvaWQge1xyXG4gICAgY29uc3QgZm91bmQgPSB0aGlzLm9ic2VydmVyQXJyYXkuZmluZCgoZWxlbSkgPT4gZWxlbS5rZXkgPT09IGtleSk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgY29uc29sZS5sb2coYHRoZSBrZXkgOiAke2tleX0sIGFscmVhZHkgZXhpc3RzIGFzIGFuIGVudGl0eSBzbyBpdCB3aWxsIGJlIGlnbm9yZWRgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBHZW50bGVtYW5TdGF0ZU9iamVjdChzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzKTtcclxuICAgICAgdGhpcy5vYnNlcnZlckFycmF5LnB1c2goeyBrZXksIG9ic2VydmFibGUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyBpdCByZXR1cm5zIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlIHVzaW5nIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XHJcbiAgICogQHJldHVybiBPYnNlcnZlckFycmF5SXRlbVxyXG4gICAqL1xyXG4gIGdldEVudGl0eShrZXk6IHN0cmluZyk6IEdlbnRsZW1hblN0YXRlT2JqZWN0PGFueT4ge1xyXG4gICAgY29uc3Qgb2JzZXJ2YWJsZUFycmF5SXRlbSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmZpbmQoKG9icykgPT4gb2JzLmtleSA9PT0ga2V5KSk7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZUFycmF5SXRlbT8ub2JzZXJ2YWJsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGl0IGVtaXRzIGEgbmV3IHZhbHVlIGludG8gdGhlIHNlbGVjdGVkIG9ic2VydmFibGUgdXNpbmcgdGhlIHByb3ZpZGVkIGtleS5cclxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcclxuICAgKiBAcGFyYW0gZGF0YSAtIHRoZSBkYXRhIHRvIGJlIGVtaXR0ZWQgaW5zaWRlIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlXHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgZW1pdFZhbHVlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9ic2VydmFibGVBcnJheUl0ZW0gPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5maW5kKChvYnMpID0+IG9icy5rZXkgPT09IGtleSkpO1xyXG4gICAgb2JzZXJ2YWJsZUFycmF5SXRlbT8ub2JzZXJ2YWJsZS5zZXRPYnNlcnZhYmxlVmFsdWVzKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgaXQgZGVzdHJveXMgYW4gb2JqZWN0IGZyb20gdGhlIG9ic2VydmFibGUgYXJyYXkuXHJcbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgZGVzdHJveU9ic2VydmFibGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT2JzZXJ2YWJsZSA9IEdlbnRsZW1hblN0YXRlU2VydmljZS5jaGVja0lmRm91bmQodGhpcy5vYnNlcnZlckFycmF5LmZpbmQoKG9icykgPT4gb2JzLmtleSA9PT0ga2V5KSk7XHJcbiAgICBzZWxlY3RlZE9ic2VydmFibGU/Lm9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMub2JzZXJ2ZXJBcnJheSA9IHRoaXMub2JzZXJ2ZXJBcnJheS5maWx0ZXIoKG9icykgPT4gb2JzLmtleSAhPT0ga2V5KTtcclxuICB9XHJcbn1cclxuIl19