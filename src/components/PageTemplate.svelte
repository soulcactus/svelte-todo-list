<script>
  export let logo;
  export let title;
</script>

<style lang="scss">
  @import "../styles/variables.scss";

  h1 {
    margin: 1.8rem 0 3.1rem;
    text-align: center;
    letter-spacing: 0.225rem;
    font-size: 2.3rem;
    font-weight: 500;
    color: $svelte-theme-color;

    img {
      width: 12.8rem;
      margin-right: 0.5rem;
      margin-bottom: -1.1rem;
    }
  }

  div {
    width: 64rem;
    margin: 2rem auto;
    border: 0.1rem solid $border-color;
    border-radius: 1rem;
    padding: 3rem 2.5rem 0;
    background: white;
  }
</style>

<h1>
  <img src={logo} alt="SVELTE" />
  {title}
</h1>
<div>
  <slot />
</div>
