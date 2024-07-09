<script>
  import { clickOutside } from "../../utils";
  export let open = false;
  export let cssVariables = "";
  import Icon from "@iconify/svelte";
</script>

<a href="" class="modal-trigger" on:click|preventDefault={() => (open = true)}>
  <slot name="trigger">
    <span>Open Modal</span>
  </slot>
</a>
<div style={cssVariables} class="modal" class:open>
  <div class="modal-overlay"></div>
  <div class="modal-wrapper" role="dialog" aria-modal="true">
    <div class="modal-inner">
      <div
        class="modal-dialog"
        use:clickOutside
        on:outsideclick={() => (open = false)}
      >
        <button class="modal-close-btn" on:click={() => (open = false)}>
          <span class="icon"> <Icon icon="ic:baseline-close"></Icon></span>
        </button>
        <slot name="content">
          <div>Modal Title</div>
        </slot>
      </div>
    </div>
  </div>
</div>
