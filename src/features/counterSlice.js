import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = {
    counter: 0,
    showCounter: true
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment: (state) => { state.counter++ },
        decrement: (state) => { state.counter-- },
        hideCounter: (state) => { state.showCounter = !state.showCounter },
        reset: (state) => { state.counter = 0 },
        increaseByValue: (state, action) => { state.counter += action.payload },
    }
})
/*
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: true
        }
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: true
        }
    } else if (action.type === 'increaseByValue') {
        return {
            counter: state.counter + action.payload,
            showCounter: true,
        }
    } else if (action.type === 'hideCounter') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        }
    } else if (action.type === 'reset') {
        return {
            counter: 0,
            showCounter: true,
        }
    }
    return state
}

export const store = createStore(counterReducer)*/

