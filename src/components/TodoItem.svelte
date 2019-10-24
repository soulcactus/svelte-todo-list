<script>
  import icon from "~/images/remove-icon.svg";

  export let todo;
  export let handleCheck;
  export let handleRemove;
  export let handleModify;
</script>

<style lang="scss">
  @import "../styles/modules.scss";
  @import "../styles/variables.scss";

  li {
    @include space-between;
    margin: 1rem 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  input {
    display: none;

    &:checked {
      & + label {
        border-color: $svelte-theme-color;
        background: $svelte-theme-color;

        &::after {
          animation: check 800ms;
          border-color: white;
        }
      }
    }
  }

  label {
    display: inline-block;
    @include size(2rem, 2rem);
    position: relative;
    border: 0.1rem solid $border-color;
    border-radius: 0.5rem;
    cursor: pointer;

    &::after {
      content: "";
      display: inline-block;
      @include size(0.6rem, 0.9rem);
      position: absolute;
      top: 0.9rem;
      left: 0.25rem;
      border-right: 0.3rem solid $border-color;
      border-top: 0.3rem solid $border-color;
      transform: scaleX(-1) rotate(135deg);
      transform-origin: left top;
    }

    &:hover {
      &::after {
        border-color: $border-color;
      }
    }
  }

  @keyframes check {
    0% {
      @include size(0, 0);
    }

    25% {
      @include size(0.6rem, 0);
    }

    50% {
      @include size(0.6rem, 0.9rem);
    }
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
    padding: 0;
    background: none;
    cursor: pointer;

    img {
      @include size(1rem, 1rem);
    }
  }
</style>

<li>
  <input
    type="checkbox"
    id={`todoCheck${todo.id}`}
    checked={todo.done}
    on:click={() => handleCheck(todo.id, todo.done)}
    class="chk-form" />
  <label for={`todoCheck${todo.id}`} />
  {#if todo.done}
    <span class="done" on:dblclick={e => handleModify(e, todo.id)}>
      {todo.content}
    </span>
  {:else}
    <span on:dblclick={e => handleModify(e, todo.id)}>{todo.content}</span>
  {/if}
  <button type="button" on:click={e => handleRemove(todo.id)}>
    <img src={icon} alt="remove todo item" />
  </button>
</li>
