import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = { state: false }
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state) => { state.status = true },
        logOut: (state) => { state.status = false }
    }
})