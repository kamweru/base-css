<script>
  import Icon from "@iconify/svelte";
  export let currentComponent;
  let open = false;
</script>

<div class="collapse">
  <div class="collapse-item" class:open>
    <div class="collapse-header">
      <span class="collapse-title"> Collapse title </span>
      <button
        class="btn btn-text btn-icon-only"
        on:click={() => {
          open = !open;
          console.log(open);
        }}
        ><span class="btn-icon"> <Icon icon="tabler:chevron-down" /></span>
      </button>
    </div>
    <!-- {#if open} -->
    <div class="collapse-body" class:open>
      <slot>Collapse body</slot>
    </div>
    <!-- {/if} -->
  </div>
</div>
