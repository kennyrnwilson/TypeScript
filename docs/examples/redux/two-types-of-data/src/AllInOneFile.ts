import { combineReducers, createStore } from "redux"

// Statistics Concern    
export interface Stats 
{
    counter: number
}

export interface AddAction
{
    type: 'stats/add',
    payload: number
}

// ToDo Concern
export interface ToDo
{
    id: number,
    text: string
}

export interface AddTodoAction
{
    type: 'todo/add',
    payload: ToDo
}



// App Level 
interface RootState 
{
    todos: ToDo[],
    stats: Stats 
}

type Action = AddAction | AddTodoAction;

const initialState:RootState = {
    stats: {counter: 0},
    todos: []
}

function rootReducer(state:RootState = initialState, action: Action)
{
    switch (action.type)
    {
        case 'stats/add' :
        return  {
            ...state,
            stats : {
                ...state.stats,
                counter: state.stats.counter + action.payload
            }
        }
        case 'todo/add' :
            return {
                ...state,
                todos : [...state.todos,action.payload]
            }
        default:
            return state;
    }
}


// function statReducer(state:Stats=initialState.stats, action:Action)
// {
//     switch (action.type)
//     {
//         case 'stats/add' :
//         return  {
//             ...state,
//             stats : {
//                 ...state,
//                 counter: state.counter + action.payload
//             }
//         }
//         default:
//             return state;
//     }
// }

// function todoReducer(state:ToDo[]=initialState.todos,action:Action)
// {
//     switch (action.type)
//     {
//         case 'todo/add' :
//             return [...state,action.payload]
//         default:
//             return state;
//     }
// }




// function rootReducer(state:RootState, action:Action)
// {
//     return {
//         todos: todoReducer(state.todos, action),
//         stats: statReducer(state.stats, action)
//     }
// }



export const store = createStore(rootReducer);