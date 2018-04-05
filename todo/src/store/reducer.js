

import Action from "./action"


const initialState = {
    add: false
}




function AddReducer(state = initialState, action) {

    switch (action.type) {
        case Action.add:
            return Object.assign({}, state, { add: true })





        default:
            return state;
    }


}




export default AddReducer