<script>
  import { createEventDispatcher } from "svelte";
  export let menuItems = [];
  let dispatch = createEventDispatcher(),
    currentMenu = menuItems[0];
  const toggleMenu = (menuItem) => {
    currentMenu = menuItem;
    dispatch("toggleMenu", menuItem);
  };
</script>

<div class="col-3 br:1|solid|rgb($(color-border))">
  <ul class="p:2|8">
    {#each menuItems as menuItem}
      <li class="flex mb:4 mb:0:last">
        <button
          class="btn btn-text flex:1"
          class:active={currentMenu.title === menuItem.title}
          on:click={() => toggleMenu(menuItem)}
        >
          <span class="text:left flex:1">{menuItem.title}</span>
        </button>
      </li>
    {/each}
  </ul>
</div>
