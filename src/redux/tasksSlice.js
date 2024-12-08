import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, editTask, fetchTasks, toggleCheckbox } from "./operations";

const initialState = {
    items: [],
    filter: '',
    loading: false,
    error: null
}

const slice = createSlice({
    name: 'tasks',
    initialState,
    selectors: {
        selectItems: state => state.items,
        selectFilter: state => state.filter,
        selectLoading: state => state.loading,
        selectError: state => state.error,
    },
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.items = action.payload
        })
            .addCase(addTask.fulfilled, (state, action) => {
            state.items.push(action.payload)
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            })
            .addCase(toggleCheckbox.fulfilled, (state, action) => {
                const item = state.items.find(item => item.id === action.payload.id)
                item.completed = !item.completed
            })
            .addCase(editTask.fulfilled, (state, action) => {
                const item = state.items.find(item => item.id === action.payload.id)
                item.text = action.payload.text
        })
    }
})

export const tasksReducer = slice.reducer
export const {changeFilter} = slice.actions