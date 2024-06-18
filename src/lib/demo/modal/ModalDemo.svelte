<script>
  import Modal from "../../components/modal/Modal.svelte";
  export let currentComponent;
  let open = false;
</script>

<div>
  <button class="btn btn-fill" on:click={() => (open = true)}>open modal</button
  >
</div>
<Modal bind:open currentComponent="modal" style="--default-size: 1.5rem;">
  <div class="modal-header">
    <div class="modal-title">Basic Modal</div>
  </div>
  <div class="modal-body">
    {#each Array(4) as _}
      <div class="p:">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    {/each}
  </div>
  <div class="modal-footer">
    <button class="btn">Cancel</button>
    <button class="btn btn-fill">Ok</button>
  </div>
</Modal>
