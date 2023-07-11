import { Action, ActionCreator, AnyAction, Dispatch } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { RootState } from "./App";

export interface Stats 
{
    counter: number
}

export interface AddAction
{
    type: 'stats/add',
    payload: number
}

// Action Creators simply action creation
export function addActionCreator(num:number):AddAction {
    return {
        type : "stats/add",
        payload:num
    }
}

export const thunkSendMessage:any =
  (num: number) =>
  async dispatch => {
    console.log("Making remote call");
    await new Promise(r => setTimeout(r, 2000));

    const action:AddAction = {
        type:'stats/add',
        payload: 10
    }

    console.log("Got remote result dispatching");
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

// const thunkDelayedAdd:ThunkAction<void,RootState,unknown,any> = async (dispatch, getState) => 
// {
//     console.log("Making remote call");
//     await new Promise(r => setTimeout(r, 2000));

//     const action:AddAction = {
//         type:'stats/add',
//         payload: 10
//     }

//     console.log("Got remote result dispatching");

//     dispatch(action); 
// }

// const asyncThinkAction: ActionCreator<
//   ThunkAction<Promise<AnyAction>, RootState, void,AnyAction>
// > = () => {
//   return async (dispatch: Dispatch<AnyAction>): Promise<Action> => {

//     console.log("Making remote call");
//     await new Promise(r => setTimeout(r, 2000));

//     const action:AddAction = {
//         type:'stats/add',
//         payload: 10
//     }

//     console.log("Got remote result dispatching");

//     return dispatch(action); 
//   };
// };


// export default thunkDelayedAdd;