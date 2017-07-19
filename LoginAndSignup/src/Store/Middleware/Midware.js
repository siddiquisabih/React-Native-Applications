import * as firebase from "firebase"
import Actions from "../Action/AuthAction"
class Midware {

    static SignupUser(userDetail) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(userDetail.id, userDetail.pass).then(() => {
                dispatch(Actions.SignupAction())
            }
            )
        }
    }

    static LoginUser(userDetail) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(userDetail.id, userDetail.pass).then(() => {
                dispatch(Actions.LoginAction())
            })
        }
    }
}
export default Midware