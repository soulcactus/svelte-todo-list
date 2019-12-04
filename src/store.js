import { writable } from "svelte/store";

const todoList = [
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
];

function setTodo() {
  const { subscribe, update } = writable(todoList);

  return {
    subscribe,
    insert: value =>
      update(list => {
        let todoId;

        list.length === 0
          ? (todoId = -1)
          : (todoId = list[list.length - 1][`id`]);

        const newTodo = {
          id: ++todoId,
          content: value,
          done: false
        };

        return [...list, newTodo];
      }),
    check: id =>
      update(list => {
        const index = list.findIndex(todo => todo[`id`] === id);

        list[index][`done`] = !list[index][`done`];

        return list;
      }),
    modify: (id, text) =>
      update(list => {
        const index = list.findIndex(todo => todo[`id`] === id);

        console.log(id, index);

        list[index][`content`] = text;

        return list;
      }),
    remove: id =>
      update(list => {
        const index = list.findIndex(todo => todo[`id`] === id);

        const newTodos = [
          ...list.slice(0, index),
          ...list.slice(index + 1, list.length)
        ];

        return newTodos;
      })
  };
}

function setTodoValue() {
  const { subscribe, set } = writable(``);

  return {
    subscribe,
    keyup: value => set(value)
  };
}

export const todos = setTodo();
export const todoValue = setTodoValue();
