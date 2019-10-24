<script>
  import TodoItem from "~/components/TodoItem.svelte";

  export let todos;
  export let handleCheck;
  export let handleRemove;
  export let handleModify;
</script>

<style lang="scss">
  ul {
    padding: 0.9rem 0 1.2rem;
  }
</style>

<ul>
  {#each todos as todo, index}
    <TodoItem {todo} {handleCheck} {handleRemove} {handleModify} />
  {/each}
</ul>
