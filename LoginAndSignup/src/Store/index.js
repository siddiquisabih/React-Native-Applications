import { createStore, applyMiddleware } from "redux"
import AuthReducer from "../Store/Reducer/AuthReducer"
import thunk from "redux-thunk"


let middleware = applyMiddleware(thunk)
let store = createStore(AuthReducer, middleware)

store.subscribe(() => {
    console.log("store state", store.getState())
})

export default store