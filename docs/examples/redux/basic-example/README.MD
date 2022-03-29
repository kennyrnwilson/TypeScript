# Redux Basic Example
This project shows an absolute miniminal redux application and describes the core concepts. A lot of the material came from the [redux fundamentals tutorial](https://redux.js.org/tutorials/fundamentals/part-1-overview)

Note that we use TypeScript in this project.

## Project Setup. 

To setup this project I installed the following two redux libraries 

```
npm install redux
npm install @types/redux
```

## Redux overview

Redux is centralized state store. The store is mutated via actions which are dispatched to the store. The dispatched actions are then processed by a reducer which determines how to change the state based on the current state and the action. For an example [See](./src/BasicExample.ts) and for an example of it in use [see](./src/tests/BasicExample.test.ts). The following describes the key concepts of Redux.

**Actions**

An action is a plain JavaScript object that describes something that has happened in the application. It is similar to an event. All actions have a type field which is a human-readable string and an optional payload that describes what has happened. 

```ts
interface IncrementAction {
    type:'counter/add',
    payload: number

}

type Action = | IncrementAction;
```

**Reducer**

The reducer is a function that takes the current state, an action object and returns the new state. It takes its name from the functor passed to the Array.reduce function.

```ts
function counterReducer(state:CounterState = initialState, action:Action)
{
    switch( action.type) {
        case "counter/add" :
            return {...state, value: state.value + action.payload};
        default:
            return state;
    }
}

Reducers are not allowed to modify existing state. Updates most be done by copying existing state and making changes to the copies. Also reducers must not do any asynchronous logic or cause side effects. 

```

**Store**
The store is where the applications global state is held. 

```ts
const store = createStore(counterReducer);
```

**Dispatch**
The only way to update the redux store is to call its dispatch method and pass in an action
```ts
store.dispatch( {type: "counter/add", payload: 2});
```

**Selector**
A selector knows how to extra a piece of information from the state