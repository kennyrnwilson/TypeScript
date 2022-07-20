# Two Types Of Data
This project builds on the code in [basic-example](../basic-example/README.MD) by moving from one type of data in the store to two kinds of data.

Note that we use TypeScript in this project.

## Project Setup. 

To setup this project I installed the following two redux libraries 

```
npm install redux
npm install @types/redux
```
## Multiple Types of Data

Now consider we have two concernts, stats and todo. We have 

**Stats**

```ts
export interface Stats 
{
    counter: number
}

export interface AddAction
{
    type: 'stats/add',
    payload: number
}

```
and we have 

**ToDo**

```ts
export interface Stats 
{
    counter: number
}

export interface AddAction
{
    type: 'stats/add',
    payload: number
}
```

## One Store
Even though we have two kinds of data we have only one store. Supporting both is done as follows. 

**Action Type**

First we create an action type which is the union of both types. 
```ts
type Action = AddAction | AddTodoAction;
```

**Root State**
As each application only has one store the root state in that store need to contain two sub objects. 

```ts
const initialState:RootState = {
    stats: {counter: 0},
    todos: []
}
```

**Root Reducer**

Creating a reducer that knows how to deal with both types of data becomes rather cumbersome. 

```ts
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
```

## Splitting the reducer 

We can split our single root reducer into two parts; one per concern. 

```ts
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
```

```ts
function statReducer(state:Stats=initialState.stats, action:Action)
{
    switch (action.type)
    {
        case 'stats/add' :
        return  {
            ...state,
            stats : {
                ...state,
                counter: state.counter + action.payload
            }
        }
        default:
            return state;
    }
}

function todoReducer(state:ToDo[]=initialState.todos,action:Action)
{
    switch (action.type)
    {
        case 'todo/add' :
            return [...state,action.payload]
        default:
            return state;
    }
}
```

We then combine the two reducers as follows. 

```ts
function rootReducer(state:RootState, action:Action)
{
    return {
        todos: todoReducer(state.todos, action),
        stats: statReducer(state.stats, action)
    }
}

```

As this is such a common scenario Redux provides us a function to do it. 

```ts
const  rootReducer= combineReducers({
    todos: todoReducer,
    stats: statReducer
});
```


