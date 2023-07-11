import { combineReducers, createStore, applyMiddleware, AnyAction  } from 'redux';
import  { statsReducer,AddAction, Stats } from './StatsSlice';
import thunkMiddleware from 'redux-thunk'

export interface RootState 
{
    stats: Stats 
}

const initialState:RootState = {
stats: {counter: 0},
}

// type Action = AnyAction ;


// We can achieve the same as the previous code by using the built-in combineReducers function
const rootReducer = combineReducers(
    {
        stats: statsReducer
    }
);

const composedEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(composedEnhancer);
