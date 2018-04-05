


import Action from "./action"

class Midware {




    static AddUserText() {
        return (dispatch) => {



            dispatch(Action.AddText())
        }
    }
}


export default Midware