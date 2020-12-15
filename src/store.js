import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = text => {
    return  {
        type: ADD_TODO,
        text,
    }
};

const deleteToDo = id => {
    return  {
        type: DELETE_TODO,
        id: parseInt(id),
    }
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state];
            break;
        case DELETE_TODO:
            return state.filter(toDo => parseInt(toDo.id) !== parseInt(action.id))
            break;
        default :
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;
