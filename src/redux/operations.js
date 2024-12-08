import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/tasks')
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (newTask, thunkAPI) => {
        try {
            const { data } = await axios.post('/tasks', newTask)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (id, thunkAPI) => {
        try {
            await axios.delete(`/tasks/${id}`)
            return id
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const toggleCheckbox = createAsyncThunk(
    'tasks/toggleCheckbox',
    async (body, thunkAPI) => {
        try {
            const { data } = await axios.put(`/tasks/${body.id}`, body)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const editTask = createAsyncThunk(
    'tasks/editTask',
    async (body, thunkAPI) => {
        try {
            const { data } = await axios.put(`/tasks/${body.id}`, body)
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)