import { store } from "../App";

test("Test Slices Store", ()=>{

    store.dispatch( {type: "stats/add", payload: 2});
    store.dispatch( {type: "stats/add", payload: 6});

    const value = store.getState().stats.counter;
    console.log(value);
    expect(value).toBe(8);
})