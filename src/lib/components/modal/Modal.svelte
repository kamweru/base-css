<script>
  export let open = false;
  export let style = "";
  import Icon from "@iconify/svelte";
  export let currentComponent;
</script>

<div {style} class="modal" class:open>
  <div class="modal-overlay"></div>
  <div class="modal-wrapper">
    <div class="modal-inner">
      <div class="modal-dialog">
        <button class="modal-close-btn" on:click={() => (open = false)}>
          <Icon icon="ic:baseline-close"></Icon>
        </button>
        <slot />
      </div>
    </div>
  </div>
</div>
