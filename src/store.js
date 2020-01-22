import { writable } from 'svelte/store';

const todoList = [
    {
        id: 0,
        content: '첫 번째 할일',
        done: false,
    },
    {
        id: 1,
        content: '두 번째 할일',
        done: true,
    },
    {
        id: 2,
        content: '세 번째 할일',
        done: false,
    },
];

function setTodo() {
    const { subscribe, update } = writable(todoList);

    return {
        subscribe,
        insert: (value) =>
            update((list) => {
                const newList = [...list];
                let todoId;

                newList.length === 0
                    ? (todoId = -1)
                    : (todoId = newList[newList.length - 1]['id']);

                const newTodo = {
                    id: ++todoId,
                    content: value,
                    done: false,
                };

                return [...newList, newTodo];
            }),
        check: (id) =>
            update((list) => {
                const newList = [...list];
                const index = newList.findIndex((todo) => todo['id'] === id);

                newList[index]['done'] = !newList[index]['done'];

                return newList;
            }),
        modify: (id, text) =>
            update((list) => {
                const newList = [...list];
                const index = newList.findIndex((todo) => todo['id'] === id);

                newList[index]['content'] = text;

                return newList;
            }),
        remove: (id) =>
            update((list) => {
                const newList = [...list];
                const index = newList.findIndex((todo) => todo['id'] === id);

                const newTodos = [
                    ...newList.slice(0, index),
                    ...newList.slice(index + 1, newList.length),
                ];

                return newTodos;
            }),
    };
}

function setTodoValue() {
    const { subscribe, set } = writable('');

    return {
        subscribe,
        keyup: (value) => set(value),
    };
}

export const todos = setTodo();
export const todoValue = setTodoValue();
