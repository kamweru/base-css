<script>
  import Popover from "../popover/Popover.svelte";
  let open = false;
</script>

<div class="w:min">
  <a
    href=""
    class="button button-fill color:inherit"
    on:click|preventDefault={() => (open = true)}>Dropdown</a
  >
  <Popover bind:open matchWidth={true}>
    <ul>
      {#each [1, 2, 3] as item}
        <li
          class="p:$(padding-sm) flex ai:center cursor:pointer bg:rgb($(color-invert-3)):hover"
        >
          <a href="" class="flex:auto color:rgb($(color-text))">item {item}</a>
        </li>
      {/each}
    </ul>
  </Popover>
</div>
