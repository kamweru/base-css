<script>
  export let open = false;
  import Icon from "@iconify/svelte";
</script>

<div class="modal" class:open>
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
