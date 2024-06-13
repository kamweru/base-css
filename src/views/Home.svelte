<script>
  import ComponentCSSVars from "../lib/components/ComponentCssVars.svelte";
  import ComponentPreview from "../subviews/ComponentPreview.svelte";
  import Sidebar from "../lib/components/Sidebar.svelte";
  let menuItems = [
      { title: "Button", value: "Button" },
      { title: "Checkbox", value: "Checkbox" },
      { title: "Form", value: "Form" },
      { title: "Input", value: "Input" },
      { title: "Number Input", value: "NumberInput" },
      { title: "Progress", value: "Progress" },
      { title: "Radio", value: "Radio" },
      { title: "Range", value: "Range" },
      { title: "Select", value: "Select" },
      { title: "Switch", value: "Switch" },
    ],
    subview,
    currentMenu = menuItems[0],
    currentComponent = currentMenu.value.toLocaleLowerCase();
  const loadSubview = async () =>
      (subview = (
        await import(`../subviews/${currentMenu.value}.subview.svelte`)
      ).default),
    toggleMenu = ({ detail }) => {
      currentMenu = detail;
      currentComponent = currentMenu.value.toLocaleLowerCase();
      loadSubview();
    };
  loadSubview();
</script>

<div class="h:100% flex">
  <Sidebar {menuItems} on:toggleMenu={toggleMenu} />
  <div
    class="h:100% flex:1 flex flex:col gap:16 overflow-y:auto p:20 w:0::scrollbar h:0::scrollbar"
  >
    <!-- <svelte:component this={subview} bind:currentComponent />
    {#if currentComponent}
      <div>
        <ComponentCSSVars bind:currentComponent />
      </div>
    {/if} -->
    <ComponentPreview bind:currentComponent />
  </div>
</div>
