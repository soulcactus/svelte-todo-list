<script>
  export let todoValue;
  export let handleKeyup;
  export let handleInsert;
</script>

<style lang="scss">
  input {
    width: calc(100% - 6.9rem);
    border: 0;
    border-bottom: 0.1rem solid #ddd;
    outline: none;
  }

  button {
    width: 6rem;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
</style>

<input type="text" bind:value={todoValue} on:keyup={e => handleKeyup(e)} />
<button type="button" on:click={handleInsert}>추가</button>
