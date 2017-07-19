class Actions {

    static login = "Login"
    static signup = "Signup"


    static LoginAction() {
        return {
            type: Actions.login
        }
    }

    static SignupAction() {
        return {
            type: Actions.signup
        }
    }
}
export default Actions