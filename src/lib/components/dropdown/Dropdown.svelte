<script>
  import Popover from "../popover/Popover.svelte";
  export let currentComponent;
  let open = false;
</script>

<div>
  <button class="btn btn-fill" on:click={() => (open = true)}>Dropdown</button>
  <Popover bind:open matchWidth={true}>
    <ul>
      {#each [1, 2, 3] as item}
        <li>item {item}</li>
      {/each}
    </ul>
  </Popover>
</div>
