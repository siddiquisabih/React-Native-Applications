import Actions from "../Action/AuthAction"

const initial_state = {

    login: "false",
    signup: "false",
    isRigister: "false",
}

function AuthReducer(state = initial_state, action) {
    switch (action.type) {
        case Actions.login:
            return Object.assign({}, state, { login: "true", isRigister: "true" })

        case Actions.signup:
            return Object.assign({}, state, { signup: "true", isRigister: "true" })

        default:
            return state
    }
}
export default AuthReducer