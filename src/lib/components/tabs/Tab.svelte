<script>
  import Box from "../box/Box.svelte";
  export let root = "a",
    element = undefined;
</script>

<Box {root} bind:element type="button" role="tablist" on:click {...$$restProps}>
  <slot name="label"></slot>
</Box>
