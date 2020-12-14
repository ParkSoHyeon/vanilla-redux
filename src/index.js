import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const counterModifier = (count = 0, action) => {
    if (action.type === 'ADD') {
        return count + 1;
    }
    else if (action.type === 'MINUS') {
        return count - 1;
    }
    else {
        return count;
    }
};

const counterStore = createStore(counterModifier);

counterStore.dispatch({ type: 'ADD' });
counterStore.dispatch({ type: 'ADD' });
counterStore.dispatch({ type: 'ADD' });
counterStore.dispatch({ type: 'ADD' });
counterStore.dispatch({ type: 'ADD' });
counterStore.dispatch({ type: 'ADD' });
counterStore.dispatch({ type: 'MINUS' });

console.log(counterStore.getState());
