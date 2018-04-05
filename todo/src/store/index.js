import {createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import AddReducer from "./reducer"

let middleware = applyMiddleware(thunk)

let store = createStore(AddReducer , middleware)

store.subscribe(() => {
    console.log("store state", store.getState())
})

export default store