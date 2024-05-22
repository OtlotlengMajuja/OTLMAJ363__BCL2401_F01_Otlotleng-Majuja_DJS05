/* class Counter {
    value = 1;

    add() {
        this.value += 1
    }

    subtract() {
        this.value -= 1
    }

    reset() {
        this.value.reset()
    }
} */

const state = {
    value: 0,
}

const add = (state) => {
    return {
        ...state,
        value: state.value + 1
    }
}

const subtract = (state) => {
    return {
        ...state,
        value: state.value - 1
    }
}

const reset = (state) => {
    return {
        ...state,
        value: state.value.reset()
    }
}