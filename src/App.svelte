<script>
  import PageTemplate from "~/components/PageTemplate.svelte";
  import logo from "~/images/svelte-logo-horizontal.svg";
  import TodoInput from "~/components/TodoInput.svelte";
  import TodoList from "~/components/TodoList.svelte";

  let title = `TODO LIST`;
  // let todoValue = ``;

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

  let todoId = todos[todos.length - 1][`id`];

  let handleCheck = (id, done) => {
    const index = todos.findIndex(todo => todo.id === id);

    todos[index][`done`] = !done;
  };

  let handleInsert = () => {
    if (todoValue) {
      const newTodo = {
        id: ++todoId,
        content: todoValue,
        done: false
      };

      todos[todos.length] = newTodo;
      todoValue = ``;
    } else {
      alert(`내용을 입력해 주세요.`);
    }
  };

  // let handleKeyup = e => {
  //   todoValue = e.target.value;

  //   if (e.keyCode === 13) {
  //     handleInsert();
  //   }
  // };

  let handleModify = (e, id) => {
    const element = e.target;
    const index = todos.findIndex(todo => todo.id === id);

    const modify = function() {
      element.removeAttribute(`contenteditable`);
      todos[index][`content`] = element.textContent;
      element.removeEventListener(`blur`, modify, false);
    };

    element.setAttribute(`contenteditable`, true);
    element.focus();
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
  <TodoInput {handleInsert} />
  <TodoList {todos} {handleCheck} {handleModify} {handleRemove} />
</PageTemplate>
