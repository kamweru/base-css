<script>
  import { createEventDispatcher } from "svelte";
  export let menuItems = ["Home", "About", "Contact"].map((title) => ({
    title,
    value: title,
  }));
  export let currentMenu = menuItems[0];
  const dispatch = createEventDispatcher(),
    toggleMenu = (menuItem) => {
      currentMenu = menuItem;
      dispatch("toggleMenu", menuItem);
    };
</script>

<nav class="tabs-wrapper">
  {#each menuItems as menuItem}
    <a
      href={"#" + menuItem.title}
      on:click|preventDefault={() => toggleMenu(menuItem)}
      class="tab-item"
      class:active={currentMenu.title === menuItem.title}>{menuItem.title}</a
    >
  {/each}
</nav>
