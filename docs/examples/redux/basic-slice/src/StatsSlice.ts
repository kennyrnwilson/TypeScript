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



