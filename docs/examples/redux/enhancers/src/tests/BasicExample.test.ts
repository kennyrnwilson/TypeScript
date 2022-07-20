import store, { selectCounterValue } from "../BasicExample";

test("Test Basic Reduc Store", ()=>{

    store.subscribe(()=> console.log(store.getState().value))
    store.dispatch( {type: "counter/add", payload: 2});
    store.dispatch( {type: "counter/add", payload: 6});

    const value = selectCounterValue(store.getState());

    expect(value).toBe(8);
})