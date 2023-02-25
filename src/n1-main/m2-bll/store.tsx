import { AnyAction, combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export const AppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// types

export type AppRootStateType = ReturnType<typeof rootReducer>

type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

// @ts-ignore
window.store = store;