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