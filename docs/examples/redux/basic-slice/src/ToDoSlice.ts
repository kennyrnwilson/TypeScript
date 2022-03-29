
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

const initialState: ToDo[] = [];

export function toDoReducer(state:ToDo[] = initialState, action: AddTodoAction)
{
    switch (action.type)
    {
        case 'todo/add' :
            return [...state, action.payload];
        default: 
        return state;
    }
}