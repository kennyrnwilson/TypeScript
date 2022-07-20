import {
    StoreEnhancer,
    StoreEnhancerStoreCreator,
    Reducer,
    PreloadedState,
    AnyAction,
    Action,
    Dispatch
} from "redux";

export const enhancer: StoreEnhancer = (
    createStore: StoreEnhancerStoreCreator
): StoreEnhancerStoreCreator => <
    S = any,
    A extends Action = AnyAction
>(
    reducer: Reducer<S, A>,
    preloadedState?: PreloadedState<S>
) => {
        const store = createStore(reducer, preloadedState);

        const loggingDispatch: Dispatch<A> = action => {
            console.log('Enhancer Calling dispatch')
            const result = store.dispatch(action);
            return result;
        };


        function loggingGetState() {
            console.log("Enhancer Calling getState");
            return store.getState();
        }

        function loggingSubscribe(subscriber) {
            console.log("Enhancer Calling Subscribe");
            return store.subscribe(subscriber);
        }

        return {
            ...store,
            dispatch: loggingDispatch,
            getState: loggingGetState,
            subscribe: loggingSubscribe,
        };
    };

