<script>
  import { fade } from "svelte/transition";
  import { popover } from "../../popover";
  export let open = false;
  export let options = {};
  export let matchWidth = false;
  export let anchorEl = undefined;
  const close = () => {
    if (open) open = false;
  };
  export let currentComponent;
</script>

{#if currentComponent}
  <div>
    <button class="btn btn-fill" on:click={() => (open = true)}
      >show popover</button
    >
  </div>
{/if}
<div
  transition:fade={{ duration: 150 }}
  class="popover"
  class:open
  use:popover={{ anchorEl, matchWidth, ...options }}
  on:clickOutside={(e) => {
    e.stopPropagation();
    close();
  }}
>
  <div class="wrapper">
    <slot {close} />
  </div>
</div>
