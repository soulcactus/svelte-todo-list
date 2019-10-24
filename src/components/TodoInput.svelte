<script>
  export let todoValue;
  export let handleKeyup;
  export let handleInsert;
</script>

<style lang="scss">
  @import "../styles/modules.scss";
  @import "../styles/variables.scss";

  input {
    width: calc(100% - 6.9rem);
    border: 0;
    border-radius: 0;
    border-bottom: 0.1rem solid $border-color;
    outline: none;

    &:focus {
      border-color: $svelte-theme-color;
      transition: all 200ms linear;
    }

    &::placeholder {
      color: $placeholder-color;
    }
  }

  button {
    @include size(6rem, 3.1rem);
    margin-left: 0.5rem;
    border: 0;
    border-radius: 0.5rem;
    background: $button-background-color;
    color: white;
    cursor: pointer;

    &:hover {
      background: $button-hover-background-color;
      transition: all 200ms linear;
    }
  }
</style>

<input
  type="text"
  placeholder="새로운 일정을 입력해 주세요"
  bind:value={todoValue}
  on:keyup={e => handleKeyup(e)} />
<button type="button" on:click={handleInsert}>추가</button>
