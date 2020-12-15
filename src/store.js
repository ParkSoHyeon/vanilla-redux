import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit'

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })   // mutate(no return)
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)    // new object(return)
    }
});

const store = createStore(toDos.reducer);

export const { add, remove } = toDos.actions;

export default store;
