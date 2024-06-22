<script>
  import Tabs from "../lib/components/tabs/Tabs.svelte";
  import ToggleTheme from "../lib/components/ToggleTheme.svelte";
  export let currentComponent, componentView;
  let currentTab = {
      right: null,
      left: null,
    },
    menuItems = {
      left: [
        {
          title: "PREVIEW",
          view: "ComponentView",
        },
        {
          title: "HTML",
          view: "ComponentHtml",
        },
        {
          title: "CSS",
          view: "ComponentCss",
        },
      ],
      right: [
        {
          title: "Controls",
          view: "ComponentControls",
        },
        {
          title: "CSS Variables",
          view: "ComponentCssVars",
        },
      ],
    },
    currentMenu = Object.keys(menuItems).reduce(
      (acc, key) => ((acc[key] = menuItems[key][0]), acc),
      {}
    );
  const loadTab = async (side) =>
    (currentTab[side] = (
      await import(`../lib/components/${currentMenu[side].view}.svelte`)
    ).default);
  loadTab("left");
  loadTab("right");
  // console.log(currentComponent);
</script>

<div class="flex jc:space-between">
  <h3 class="capitalize">{currentComponent}</h3>
  <ToggleTheme />
</div>
<div class="flex gap:8">
  <div class="flex:1 b:1|solid|rgb($(color-border)) r:6">
    <div class="flex flex:col h:100%">
      <Tabs
        bind:menuItems={menuItems.left}
        bind:currentMenu={currentMenu["left"]}
        on:toggleMenu={() => loadTab("left")}
      />
      <div class="flex:1 p:8">
        <svelte:component
          this={currentTab["left"]}
          bind:currentComponent
          bind:componentView
        />
      </div>
    </div>
  </div>
  <div class="col-5 b:1|solid|rgb($(color-border)) r:6">
    <Tabs
      bind:menuItems={menuItems.right}
      bind:currentMenu={currentMenu["right"]}
      on:toggleMenu={() => loadTab("right")}
    />
    <svelte:component this={currentTab["right"]} bind:currentComponent />
  </div>
</div>
