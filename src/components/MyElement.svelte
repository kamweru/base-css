<svelte:options customElement="my-element" />

<script>
  export let name = "world";
</script>

<h1>Hello {name}!</h1>
<slot />

<style lang="css">
  h1 {
    color: purple;
    line-height: 0;
  }
  p {
    color: red;
  }
</style>
