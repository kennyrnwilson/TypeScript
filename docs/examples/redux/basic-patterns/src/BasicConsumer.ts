import { store } from "./App";
import { addActionCreator, thunkSendMessage } from "./StatsSlice";


store.subscribe(()=> console.log("Callback " + JSON.stringify(store.getState())));

store.dispatch(thunkSendMessage(14));
