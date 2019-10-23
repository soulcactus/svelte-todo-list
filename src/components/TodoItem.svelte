<script>
  export let todo;
  export let handleCheck;
  export let handleRemove;
  export let handleModify;
</script>

<style lang="scss">
  @import "../styles/modules.scss";

  li {
    @include space-between;
  }

  input {
    @include size(2rem, 2rem);
  }

  span {
    flex-basis: 86%;
    word-break: break-all;

    &.done {
      text-decoration: line-through;
    }
  }

  button {
    border: 0;
    background: none;
  }
</style>

<li>
  <input
    type="checkbox"
    checked={todo.done}
    on:click={() => handleCheck(todo.id, todo.done)} />
  {#if todo.done}
    <span class="done" on:dblclick={e => handleModify(e, todo.id)}>
      {todo.content}
    </span>
  {:else}
    <span on:dblclick={e => handleModify(e, todo.id)}>{todo.content}</span>
  {/if}
  <button type="button" on:click={e => handleRemove(todo.id)}>삭제</button>
</li>
