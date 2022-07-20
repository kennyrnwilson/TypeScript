import { store } from "./AllInOneFile";

store.subscribe(() =>
{
    console.log(store.getState());
});

store.dispatch({type: "stats/add", payload:10});
store.dispatch({type:"todo/add", payload: {id:9, text: "Some text"}});

