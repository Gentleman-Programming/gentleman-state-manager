# Gentleman State Manager

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Description
Hi everyone ! this is a super easy and comfortable way of using reactive programming to manage the state of your application.
This library is based on Rxjs Behaviour Subject observables to manage the different states of your application using the concept of a single source of truth.

First...Let's learn some things !

Reactive programming is the concept of developing code where different entities are watching trough an information channel for data to pass, and when it does,
each entity will "react" to that situation doing their business logic.

Imagine an empty tube with 3 holes in it, at each hole we have a person looking trough it and waiting for a little ball to pass. Because each person is different,
they will see different aspects of the ball. For example, one can see that the ball is red, another that the ball is bouncing a little when it's passing trough
...or even that maybe it's not a ball at all !.

That's exactly what reactive programming is ! we have an information channel (observables) containing the data that is passing trough it,
and on the other hand we have entities (the angular components for example) that will be subscribed and waiting for that information to pass ...and when it does,
they will react to it doing what ever business logic we coded for them.

Redux, Ngrx/store, etc. are libraries that provide tools to manage the state of the application using the concept of "A Single Source Of Truth", these means that
the whole information of the app will be contained inside a "store", a place where you can access useful and up to date information. Each time a change happens  
inside your application, information wise, the store will be updated with the latest changes. So you don't need to call the back end again for an update if not needed and also
all entities that are watching the store's states will be automatically alerted of the change.

Rxjs is a library containing a lot of amazing tools to manage these information channels, these provide the ability to combine and modify observables with the inclusion of
new kinds of observables to use, each one with their own functionalities.

We are going to use Behaviour Subjects a lot in this case, it's an observable that will always contain the last data that passed trough it....which is amazing for what we want to do !
When ever we send information trough the Behaviour Subject, even if an entity subscribes AFTER the information has been sent, it will receive the latest data ! so we don't loose anything.

The main concept of Gentleman State Manager, is providing an useful way to manage the state of your application, using understandable and cristal clear tools like Rxjs to do so.
In short, we create an array of observables identified by their key, that can be increased in size by each module (so yes, we use lazy loading !) to manage the information
that passes trough the different entities of your Angular application.

## How to use

1- Create an object using the SourceOfTruthInitiate class provided by the library. I recommend having a state.ts per module, representing the state interfaces and properties :
````
state.ts for Root ( AppModule ): 

export interface FirstState {
   stateProperty: string | null;
}

export enum FirstStateProperties {
   STATEPROPERTY: 'stateProperty'
}

export enum StoreKeys {
   FIRSTSTATE: 'firstState'
}

AppModule:

const sourceOfTruthInitiate: SourceOfTruthInitiate[] = [
    {
        key: StoreKeys.FIRSTSTATE,
        state: {
            stateProperty: 'your state property value'
        },
        stateProperties: FirstStateProperties
    }
];
````
* key: represents the key to access the proper observable that we want to use.
* state: the empty state of the object that will pass trough the observable.
* stateProperties: the properties of the object, we are going to use it to access the information without ambiguities.

2- import GentlemanStateManagerModule inside your application in the following way:
````
@NgModule({
    imports: [
        ...
        GentlemanStateManagerModule.forRoot(sourceOfTruthInitiate)
        ...
    ]
})
export class AppModule {}
````

3- use our apis to access the information or send something new !

Example:
````
export class OverviewMetricComponent implements OnDestroy {
     constructor(gentlemanStateManager: GentlemanStateService) {
        console.log(gentlemanStateManager.getEntity(StoreKeys.FIRSTSTATE).getPropertyFromState(FirstStateProperties.STATEPROPERTY));
    }
}
````

4- to lazy load more observables just do the same functionality as in the app module, but in the constructor of your lazy loaded one.

Example:
````
state.ts for Root ( AppModule ): 

...
export enum StoreKeys {
   FIRSTSTATE: 'firstState',
   LAZYLOADEDSTATE: 'lazyLoadedState' // we add the new state key
}
...

state.ts of your lazy loaded module:

export interface LazyLoadedState {
   lazyLoadedStateProperty: string | null;
}

export enum LazyLoadedStateProperties {
   LAZYLOADEDSTATEPROPERTY: 'lazyLoadedStateProperty'
}

const sourceOfTruthInitiate: SourceOfTruthInitiate[] = [
    {
        key: StoreKeys.LAZYLOADEDSTATE,
        state: {
            lazyLoadedStateProperty: 'Your Lazy Loaded State Property'
        },
        stateProperties: LazyLoadedStateProperties
    }
];

@NgModule({
   ...
})
export class LazyLoadedModule {
   constructor(gentlemanStateService: GentlemanStateService) {
    sourceOfTruthInitiate.forEach(state => gentlemanStateService.createObservable(state.key, state.state, state.stateProperties));
  }
}

````

## Api

### Array Of Observables Management :

createObservable
```` 
/**
* @desc it creates and observable and adds it to the observable array.
* @param key: the key to be used to represent the observable item inside the array
* @param state: the state of the observable, the object that represents what the observable is going to contain
* @return void
*/
  createObservable(key: string, state: any, stateProperties: StateProperties): void
```` 

getEntity
```` 
/**
* @desc it returns the selected observable using the provided key.
* @param key: the key to be used to represent the observable item inside the array
* @return ObserverArrayItem
*/
  getEntity(key: string): GentlemanStateObject<any>
```` 

destroyObservable
```` 
/**
* @desc it destroys an object from the observable array.
* @param key: the key to be used to represent the observable item inside the array
* @return void
*/
  destroyObservable(key: string): void
```` 

### GentlemanStateObject :

getObservable
```` 
/**
* @desc returns the observable that contains the state for async operations - it listens for changes
* @return Observable
*/
  getObservable(): Observable<T>
````

getStateProperties
```` 
/**
* @desc returns the state properties object
* @return StateProperties
*/
  getStateProperties(): StateProperties 
```` 

unsubscribe (use it when you are destroying the main component of your module)
```` 
/**
* @desc unsubscribes from the observable
* @return void
*/
  unsubscribe(): void
```` 

getStateSnapshot
```` 
/**
* @desc returns the value of the state at the time of the call
* @return any
*/
  getStateSnapshot(): T 
```` 

getPropertyFromState
```` 
/**
* @desc returns the value of a property of the state at the time of the call
* @param property - the name of the requested property
* @return any
*/
  getPropertyFromState(property: string): any
```` 

getPropertyFromState
```` 
/**
* @desc returns the value of a property of the state at the time of the call
* @param property - the name of the requested property
* @return any
*/
  getPropertyFromState(property: string): any
```` 

getPropertyFromObservable
```` 
/**
* @desc returns the value of a property of the state for async operations - it listens for changes
* @param property - the name of the requested property
* @return Observable
*/
  getPropertyFromObservable(property: string): Observable<any>
```` 

setObservableValues
```` 
/**
* @desc sets the value for a certain property inside the state, triggers an async event
* @param value - the value for the requested property
* @param property - the name of the requested property
* @param emit - if true it will trigger an async event
* @return void
*/
  setObservableValues(value: T, property: string | null = null, emit = true): void
```` 

setStateValues
```` 
/**
* @desc sets the value for a certain property inside the state, doesn't triggers an async event
* @param value - the value for the requested property
* @param property - the name of the requested property, if no property it will try to patch the values into the state
* @return void
*/
  setStateValues(value: T, property: string | null): void
```` 

resetState
```` 
/**
* @desc resets the state
* @return void
*/
  resetState(): void
```` 
