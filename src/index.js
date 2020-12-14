import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

number.innerText = 0;

const counterModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

const counterStore = createStore(counterModifier);

const onChange = () => {
    number.innerText = counterStore.getState();
}

counterStore.subscribe(onChange);

add.addEventListener('click', () => counterStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => counterStore.dispatch({ type: MINUS }));
