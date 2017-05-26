import Actions from "../Action/Action"

iniState = {
    increment: "false",
    decrement: "false",
    incrementValue : 0,
    decrementValue : 0
    
}


function Reducer(state= iniState, action) {

    switch (action.type) {

        case Actions.increment:
            return Object.assign({}, state, { increment: "true"  , incrementValue: action.value})

        case Actions.decrement:
            return Object.assign({}, state, { decrement: "true", decrementValue : action.value})

    }
}
export default Reducer