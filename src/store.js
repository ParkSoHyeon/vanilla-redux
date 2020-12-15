import { createStore } from 'redux';
import {createAction, createReducer} from '@reduxjs/toolkit'

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//             break;
//         case deleteToDo.type:
//             return state.filter(toDo => parseInt(toDo.id) !== parseInt(action.payload))
//             break;
//         default :
//             return state;
//     }
// };

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });   // mutate(no return)
    },
    [deleteToDo]: (state, action) => {
        return state.filter(toDo => toDo.id !== action.payload);    // new object(return)
    }
});

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;
