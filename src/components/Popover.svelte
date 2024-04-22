<script>
  import { fade } from "svelte/transition";
  import { popover } from "../lib/popover";
  export let open = false;
  export let options = {};
  export let matchWidth = false;
  export let anchorEl = undefined;
  const close = () => {
    if (open) open = false;
  };
</script>

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

<style>
  :root {
    --popover-padding: var(--size);
    --wrapper-padding: calc(var(--popover-padding) / 3);
    --wrapper-bg: var(--surface);
    /* --wrapper-width: calc(var(--size) * 12.5); */
  }
  .popover {
    position: absolute;
    transform-origin: top left;
    -webkit-user-select: none;
    user-select: none;
    z-index: 1;
    opacity: 0;
    transform: scale(1, 0);
    transition: all var(--t-dur) var(--t-fun);
  }
  .popover.open {
    opacity: 1;
    transform: scale(1, 1);
    transition: all var(--t-dur) var(--t-fun);
  }
  .popover .wrapper {
    position: relative;
    /* width: var(--wrapper-width); */
    background-color: rgb(var(--wrapper-bg));
    box-shadow: var(--shadow-10);
    border-radius: calc(var(--size) / 2.5);
    padding: var(--wrapper-padding);
  }
</style>
