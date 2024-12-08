import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import { counterSlice } from '../features/counterSlice';
import { authSlice } from '../features/authSlice';



/*
 * Subscription in Old Redux
    const counterSubscriber = () => {
        const latest = store.getState()
        console.log(latest);
    }
    store.subscribe(counterSubscriber)
*/



export const store = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer,
            auth: authSlice.reducer
        }
    }
)

// console.log(store.dispatch({ type: 'increment' }))
// console.log(store.dispatch({ type: 'decrement' }))

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions