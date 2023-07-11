# Slice Example
In the [Previous Example](../two-types-of-data/README.MD) we extended our store to support two types of data. Having everything in one file becomes unmanageable. Typically we put all the logic for one kind of data into its own file called a **slice**.

Note that we use TypeScript in this project.

## Project Setup. 

To setup this project I installed the following two redux libraries 

```
npm install redux
npm install @types/redux
```

## Slices 

First we create a new file [StatsSlice.ts](./src/StatsSlice.ts) which hold everything relevant to a stat.

 * An interface to the stat data
 * An interface for the action of adding to the stat
 * An initial state for stat
 * A single reducer


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


const initialStats:Stats = {
        counter: 0
}

export function statsReducer(state:Stats = initialStats, action:AddAction)
{
    switch (action.type)
    {
        case 'stats/add' :
            return ({...state, counter:state.counter + action.payload }) ;
        default :
            return state;
    }
}

```

We then do the same for todo [ToDo.ts](./src/ToDoSlice.ts)

## Combining Slices
We can then combine slices as follows in the [App.ts](./src/App.ts)

**Define the type of the Root Data**

```ts
interface RootState 
{
    todos: ToDo[],
    stats: Stats 
}
```

**Create an initial state object**

```ts
const initialState: RootState = {
    stats: { counter: 0 },
    todos: []
}
```

**Action Type**

We then create an action type for the store that combines each action from the reducers.

```ts
type Action = AddAction | AddTodoAction;
```

**Create a Root Reducer**

Now we create a root reducer 

```ts
const rootReducer = combineReducers(
    {
        todos: toDoReducer,
        stats: statsReducer
    }
);

```
**Create the Store**

Finally we use our root reducer to create a store

```ts
export const store = createStore(rootReducer);
```

