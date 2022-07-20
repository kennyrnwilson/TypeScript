# Enhancers
This project adds enhancers to the basic example from [Basic Example](../basic-example/README.MD) 
## Project Setup. 

To setup this project I installed the following two redux libraries 

```
npm install redux
npm install @types/redux
```

## Enhancers

An enhancer is used to customise a stores abilities. A store is enhancer by adding a layer around the original store. We can supply our own **dispatch**, **getState** and **subscribe** methods. The code for this looks pretty horrible in TypeScript but we can use the following as a template from now on [LoggingEhhancer.ts](./src/LoggingEnhancer.ts)

**Logging Enhancer**

```ts
import {
    StoreEnhancer,
    StoreEnhancerStoreCreator,
    Reducer,
    PreloadedState,
    AnyAction,
    Action,
    Dispatch
} from "redux";

export const enhancer: StoreEnhancer = (
    createStore: StoreEnhancerStoreCreator
): StoreEnhancerStoreCreator => <
    S = any,
    A extends Action = AnyAction
>(
    reducer: Reducer<S, A>,
    preloadedState?: PreloadedState<S>
) => {
        const store = createStore(reducer, preloadedState);

        const loggingDispatch: Dispatch<A> = action => {
            console.log('Calling dispatch')
            const result = store.dispatch(action);
            return result;
        };


        function loggingGetState() {
            console.log("Calling getState");
            return store.getState();
        }

        function loggingSubscribe(subscriber) {
            console.log("Calling Subscribe");
            return store.subscribe(subscriber);
        }

        return {
            ...store,
            dispatch: loggingDispatch,
            getState: loggingGetState,
            subscribe: loggingSubscribe,
        };
    };
```
A enhancers is registered by passing it as the third argument to createStore.

```ts
const store = createStore(counterReducer,undefined, enhancer);```





