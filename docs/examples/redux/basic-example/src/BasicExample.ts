import { createStore } from "redux";

// 1. Create an interface for the state in the store. 
export interface CounterState {
    value: number;
}

// 2. Create the initial state
const initialState:CounterState = {
    value: 0
}

// 3. Actions determine what we can do to a store. All actions must have a property called type which 
//    is a human readable string.
export interface IncrementAction {
    type:'counter/add',
    payload: number

}

export type Action = | IncrementAction;

// 4. A 'reducer' function determines the new state from the existing state and the action. 
function counterReducer(state:CounterState = initialState, action:Action)
{
    switch( action.type) {
        case "counter/add" :
            return {...state, value: state.value + action.payload};
        default:
            return state;
    }
}

// 5. Create a store to hold the state. 
const store = createStore(counterReducer);
export default store;

// 6. Create a selector
export const selectCounterValue = (state:CounterState) => state.value;

