# Middleware
This project adds middleware to the basic example from [Basic Example](../basic-example/README.MD) 
## Project Setup. 

To setup this project I installed the following two redux libraries 

```
npm install redux
npm install @types/redux
```

## Middleware
Middleware lets us customize how dispatch works by adding our own function.


**Logging Middleware**

```ts
export default function loggingMiddleware(storeAPI) {
    return function wrapDispatch(next) {
      return function handleAction(action) {

        console.log("Logging middleware");
        // Do anything here: pass the action onwards with next(action),
        // or restart the pipeline with storeAPI.dispatch(action)
        // Can also use storeAPI.getState() here
  
        return next(action)
      }
    }
  }
```
Custom middleware is added as follows. 

```ts
const middlewareEnhancer = applyMiddleware(loggingMiddleware);
  
const store = createStore(counterReducer,undefined, middlewareEnhancer);
npm
```





