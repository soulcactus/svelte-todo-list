import { writable } from "svelte/store";

const todos = writable([
    {
        id: 0,
        content: `첫 번째 할일`,
        done: false
    },
    {
        id: 1,
        content: `두 번째 할일`,
        done: true
    },
    {
        id: 2,
        content: `세 번째 할일`,
        done: false
    }
]);

// function createTodo() {
//     const { subscribe, set, update } = writable(todos);
//     let todoId;

//     return {
//         subscribe(list => {
//            todoId = list[list.length - 1][`id`]
//         }),
//         insert: () => set(...list, )
//     }
// }

// export default todos;

function setTodoValue() {
    const { subscribe, set } = writable(``);

    return {
        subscribe,
        update: (value) => set(value)
    };
}

export const todoValue = setTodoValue();
