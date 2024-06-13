<svelte:options customElement="my-element" />

<!-- in Svelte 3, do this instead:
<svelte:options tag="my-element" />
-->

<script>
  export let name = "world";
</script>

<h1>Hello {name}!</h1>
<slot />

<style lang="css">
  h1 {
    color: purple;
  }
  p {
    color: red;
  }
</style>
