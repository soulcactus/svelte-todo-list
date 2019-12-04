<script>
  import TodoItem from "~/components/TodoItem.svelte";
  import { todos } from "~/store.js";
</script>

<style lang="scss">
  ul {
    padding: 0.9rem 0 1.2rem;
  }
</style>

<ul>
  {#each $todos as todo}
    <TodoItem {todo} />
  {/each}
</ul>
