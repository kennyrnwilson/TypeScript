import { combineReducers, createStore } from 'redux';
import  { statsReducer,AddAction, Stats } from './StatsSlice';
import  { toDoReducer, AddTodoAction, ToDo } from './ToDoSlice';

interface RootState 
{
    todos: ToDo[],
    stats: Stats 
}

const initialState:RootState = {
stats: {counter: 0},
todos: []
}

type Action = AddAction | AddTodoAction;

function rootReducer(state:RootState = initialState, action:any)
{
    return {
        todos: toDoReducer(state.todos, action),
        stats: statsReducer(state.stats, action)
    }
}

// We can achieve the same as the previous code by using the built-in combineReducers function
const rootReducer2 = combineReducers(
    {
        todos: toDoReducer,
        stats: statsReducer
    }
);

export const store = createStore(rootReducer2);
