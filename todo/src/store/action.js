






class Action {
    static add = 'add'



    static AddText() {
        return {
            type: Action.add
        }
    }
}

export default Action