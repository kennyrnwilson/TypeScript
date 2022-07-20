import { store } from "../AllInOneFile";

test("Test Slices Store", ()=>{

    store.subscribe(() =>
    {
        console.log(store.getState());
    });
    
    // store.dispatch( {type: "stats/add", payload: 2});
    // store.dispatch( {type: "stats/add", payload: 6});

    // const value = store.getState().stats.counter;
    // console.log(value);
    // expect(value).toBe(8);
})