<script>
  import PageTemplate from "~/components/PageTemplate.svelte";
  import logo from "~/images/svelte-logo-horizontal.svg";
  import TodoInput from "~/components/TodoInput.svelte";
  import TodoList from "~/components/TodoList.svelte";

  let title = `Todo List`;

  let todoValue = ``;

  let todos = [
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

  let handleCheck = (id, done) => {
    const index = todos.findIndex(todo => todo.id === id);

    todos[index][`done`] = !done;
  };

  let handleKeyup = e => {
    todoValue = e.target.value;
  };

  let handleInsert = () => {
    let index;

    todos.length !== 0
      ? (index = todos[todos.length - 1][`id`] + 1)
      : (index = 0);

    const newTodo = {
      id: index,
      content: todoValue,
      done: false
    };

    todos[todos.length] = newTodo;
    todoValue = ``;
  };

  let handleModify = (e, id) => {
    const element = e.target;
    const index = todos.findIndex(todo => todo.id === id);

    const modify = function() {
      element.removeAttribute(`contenteditable`);
      todos[index][`content`] = element.textContent;
    };

    element.setAttribute(`contenteditable`, true);
    element.focus();
    element.removeEventListener(`blur`, modify, false);
    element.addEventListener(`blur`, modify, false);
  };

  let handleRemove = id => {
    const index = todos.findIndex(todo => todo.id === id);

    const newTodos = [
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length)
    ];

    todos = newTodos;
  };
</script>

<style lang="scss" src="./styles/global.scss">

</style>

<PageTemplate {logo} {title}>
  <TodoInput {todoValue} {handleKeyup} {handleInsert} />
  <TodoList {todos} {handleCheck} {handleRemove} {handleModify} />
</PageTemplate>
