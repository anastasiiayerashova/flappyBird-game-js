import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusFilter: 'all',
}

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeStatusFilter: (state, action) => {
            state.statusFilter = action.payload
        }
    }
})

export const filtersReducer = slice.reducer
export const {changeStatusFilter} = slice.actions