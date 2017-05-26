import { createStore } from "redux"
import Reducer from "../Store/Reducer/Reducer"

let store = createStore(Reducer)

store.subscribe(() => {
    console.log(store.getState())
})


export default store