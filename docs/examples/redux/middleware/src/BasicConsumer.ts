import store, { selectCounterValue } from "./BasicExample";

store.subscribe(()=> console.log("Callback " + store.getState().value))
store.dispatch( {type: "counter/add", payload: 2});
store.dispatch( {type: "counter/add", payload: 6});

const value = selectCounterValue(store.getState());
console.log("Selector " + selectCounterValue(store.getState()));