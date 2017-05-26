class Actions {
    static increment = "increment"
    static decrement = "decrement"

    static IncrementMethod(data) {
        return {
            type: Actions.increment,
            value : data
        }
    }

    static DecrementMethod(data) {
        return {
            type: Actions.decrement ,
            value : data
        }
    }
}
export default Actions