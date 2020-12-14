import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const counterModifier = (state = 0) => {
    return state;
};

const counterStore = createStore(counterModifier);
console.log(counterStore.getState());
