<script>
  export let logo;
  export let title;
</script>

<style lang="scss">
  img {
    display: block;
    width: 12.8rem;
    margin: 2rem auto 0;
  }

  .page-template {
    width: 64rem;
    margin: 2rem auto;
    border-radius: 1rem;
    padding: 2rem;
    background: white;

    h1 {
      text-align: center;
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
</style>

<img src={logo} alt="SVELTE" />
<div class="page-template">
  <h1>{title}</h1>
  <slot />
</div>
