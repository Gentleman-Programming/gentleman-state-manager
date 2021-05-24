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
     * @return GentlemanStateObject
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
GentlemanStateService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GentlemanStateService, factory: GentlemanStateService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GentlemanStateService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ["sourceOfTruthKeys"]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VudGxlbWFuLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nZW50bGVtYW4tc3RhdGUtbWFuYWdlci9zcmMvbGliL3NlcnZpY2VzL2dlbnRsZW1hbi1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBbUIsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFLMUQsTUFBTSxPQUFPLHFCQUFxQjtJQUdoQyxZQUF5QyxpQkFBMEM7UUFGM0Usa0JBQWEsR0FBa0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUcvQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM5QixNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBaUQ7UUFDM0UsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUM7UUFDNUQsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxvRUFBb0UsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsS0FBVSxFQUFFLGVBQWdDO1FBQ3hFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcscURBQXFELENBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsTUFBTSxlQUFlLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsR0FBVztRQUNuQixNQUFNLG1CQUFtQixHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVGLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBUyxDQUFDLEdBQVcsRUFBRSxJQUFTO1FBQzlCLE1BQU0sbUJBQW1CLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUYsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpQkFBaUIsQ0FBQyxHQUFXO1FBQzNCLE1BQU0sa0JBQWtCLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0Ysa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7MEZBckVVLHFCQUFxQixjQUdaLG1CQUFtQjsyRUFINUIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGcEIsTUFBTTt1RkFFUCxxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFJYyxNQUFNO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdlbnRsZW1hblN0YXRlT2JqZWN0LCBTdGF0ZVByb3BlcnRpZXMgfSBmcm9tIFwiLi4vbW9kZWxzL3B1YmxpYy1hcGlcIjtcclxuaW1wb3J0IHsgU291cmNlT2ZUcnV0aCwgU291cmNlT2ZUcnV0aEluaXRpYXRlIH0gZnJvbSBcIi4uL21vZGVscy9zb3VyY2Utb2YtdHJ1dGhcIjtcclxuaW1wb3J0IHsgY2hlY2tJZkNvbmRpdGlvbk1ldCB9IGZyb20gXCIuLi91dGlscy9wdWJsaWMtYXBpXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW50bGVtYW5TdGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgb2JzZXJ2ZXJBcnJheTogU291cmNlT2ZUcnV0aCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChcInNvdXJjZU9mVHJ1dGhLZXlzXCIpIHNvdXJjZU9mVHJ1dGhLZXlzOiBTb3VyY2VPZlRydXRoSW5pdGlhdGVbXSkge1xyXG4gICAgc291cmNlT2ZUcnV0aEtleXMuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICBjb25zdCB7IHN0YXRlLCBzdGF0ZVByb3BlcnRpZXMgfSA9IGs7XHJcbiAgICAgIHRoaXMuY3JlYXRlT2JzZXJ2YWJsZShrLmtleSwgc3RhdGUsIHN0YXRlUHJvcGVydGllcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGl0IGNoZWNrcyBpZiB0aGUgc2VhcmNoZWQgb2JqZWN0IGV4aXN0cywgaWYgbm90IGl0IHRocm93cyBhbiBlcnJvcnMgYW5kIHN0b3BzIHRoZSBleGVjdXRpb24uXHJcbiAgICogQHBhcmFtIGdlbnRsZW1hbk9iamVjdCAtIEdlbnRsZW1hblN0YXRlT2JqZWN0IHwgdW5kZWZpbmVkXHJcbiAgICogQHJldHVybiBHZW50bGVtYW5TdGF0ZU9iamVjdFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGNoZWNrSWZGb3VuZChnZW50bGVtYW5PYmplY3Q6IEdlbnRsZW1hblN0YXRlT2JqZWN0IHwgdW5kZWZpbmVkKTogR2VudGxlbWFuU3RhdGVPYmplY3Qge1xyXG4gICAgY29uc3QgY29uZGl0aW9uID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4geyBtZXQ6ICEhZ2VudGxlbWFuT2JqZWN0LCB2YWx1ZTogZ2VudGxlbWFuT2JqZWN0IH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNoZWNrSWZDb25kaXRpb25NZXQoKCkgPT4gY29uZGl0aW9uKCksIFwiT2JzZXJ2YWJsZSBpdGVtIG5vdCBmb3VuZCAhIGNoZWNrIGlmIHRoZSBrZXkgaXMgY29ycmVjdCBhbmQgZXhpc3RzXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2MgaXQgY3JlYXRlcyBhbmQgb2JzZXJ2YWJsZSBhbmQgYWRkcyBpdCB0byB0aGUgb2JzZXJ2YWJsZSBhcnJheS5cclxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcclxuICAgKiBAcGFyYW0gc3RhdGUgLSB0aGUgc3RhdGUgb2YgdGhlIG9ic2VydmFibGUsIHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHdoYXQgdGhlIG9ic2VydmFibGUgaXMgZ29pbmcgdG8gY29udGFpblxyXG4gICAqIEBwYXJhbSBzdGF0ZVByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyBvZiB0aGUgc3RhdGVcclxuICAgKiBAcmV0dXJuIHZvaWRcclxuICAgKi9cclxuICBjcmVhdGVPYnNlcnZhYmxlKGtleTogc3RyaW5nLCBzdGF0ZTogYW55LCBzdGF0ZVByb3BlcnRpZXM6IFN0YXRlUHJvcGVydGllcyk6IHZvaWQge1xyXG4gICAgY29uc3QgZm91bmQgPSB0aGlzLm9ic2VydmVyQXJyYXkuaGFzKGtleSk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgY29uc29sZS5sb2coYHRoZSBrZXkgOiAke2tleX0sIGFscmVhZHkgZXhpc3RzIGFzIGFuIGVudGl0eSBzbyBpdCB3aWxsIGJlIGlnbm9yZWRgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGdlbnRsZW1hbk9iamVjdCA9IG5ldyBHZW50bGVtYW5TdGF0ZU9iamVjdChzdGF0ZSwgc3RhdGVQcm9wZXJ0aWVzKTtcclxuICAgICAgdGhpcy5vYnNlcnZlckFycmF5LnNldChrZXksIGdlbnRsZW1hbk9iamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyBpdCByZXR1cm5zIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlIHVzaW5nIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICogQHBhcmFtIGtleSAtIHRoZSBrZXkgdG8gYmUgdXNlZCB0byByZXByZXNlbnQgdGhlIG9ic2VydmFibGUgaXRlbSBpbnNpZGUgdGhlIGFycmF5XHJcbiAgICogQHJldHVybiBHZW50bGVtYW5TdGF0ZU9iamVjdFxyXG4gICAqL1xyXG4gIGdldEVudGl0eShrZXk6IHN0cmluZyk6IEdlbnRsZW1hblN0YXRlT2JqZWN0IHtcclxuICAgIGNvbnN0IG9ic2VydmFibGVBcnJheUl0ZW0gPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5nZXQoa2V5KSk7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZUFycmF5SXRlbTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjIGl0IGVtaXRzIGEgbmV3IHZhbHVlIGludG8gdGhlIHNlbGVjdGVkIG9ic2VydmFibGUgdXNpbmcgdGhlIHByb3ZpZGVkIGtleS5cclxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcclxuICAgKiBAcGFyYW0gZGF0YSAtIHRoZSBkYXRhIHRvIGJlIGVtaXR0ZWQgaW5zaWRlIHRoZSBzZWxlY3RlZCBvYnNlcnZhYmxlXHJcbiAgICogQHJldHVybiB2b2lkXHJcbiAgICovXHJcbiAgZW1pdFZhbHVlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9ic2VydmFibGVBcnJheUl0ZW0gPSBHZW50bGVtYW5TdGF0ZVNlcnZpY2UuY2hlY2tJZkZvdW5kKHRoaXMub2JzZXJ2ZXJBcnJheS5nZXQoa2V5KSk7XHJcbiAgICBvYnNlcnZhYmxlQXJyYXlJdGVtLnNldE9ic2VydmFibGVWYWx1ZXMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzYyBpdCBkZXN0cm95cyBhbiBvYmplY3QgZnJvbSB0aGUgb2JzZXJ2YWJsZSBhcnJheS5cclxuICAgKiBAcGFyYW0ga2V5IC0gdGhlIGtleSB0byBiZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgb2JzZXJ2YWJsZSBpdGVtIGluc2lkZSB0aGUgYXJyYXlcclxuICAgKiBAcmV0dXJuIHZvaWRcclxuICAgKi9cclxuICBkZXN0cm95T2JzZXJ2YWJsZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPYnNlcnZhYmxlID0gR2VudGxlbWFuU3RhdGVTZXJ2aWNlLmNoZWNrSWZGb3VuZCh0aGlzLm9ic2VydmVyQXJyYXkuZ2V0KGtleSkpO1xyXG4gICAgc2VsZWN0ZWRPYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLm9ic2VydmVyQXJyYXkuZGVsZXRlKGtleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==