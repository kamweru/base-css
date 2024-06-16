<script>
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
      { title: "Table", value: "Table" },
      { title: "Tabs", value: "Tabs" },
      { title: "Details", value: "Details" },
      { title: "Upload", value: "Upload" },
      { title: "Columns", value: "Columns" },
      { title: "Modal", value: "Modal" },
      { title: "Popover", value: "Popover" },
      { title: "Dropdown", value: "Dropdown" },
      { title: "Collapse", value: "Collapse" },
      { title: "Divider", value: "Divider" },
    ].sort((a, b) => a.title.localeCompare(b.title)),
    componentView,
    currentMenu = menuItems[0],
    currentComponent = currentMenu.value.toLocaleLowerCase();
  const loadSubview = async () =>
      (componentView = (
        await import(
          `../lib/components/${currentComponent}/${currentMenu.value}.svelte`
        )
      ).default),
    toggleMenu = ({ detail }) => {
      currentMenu = detail;
      currentComponent = currentMenu.value.toLocaleLowerCase();
      // console.log(currentComponent);
      loadSubview();
      // console.log(componentView);
    };
  loadSubview();
  // console.log(currentMenu, currentComponent);
</script>

<div class="h:100% flex">
  <Sidebar {menuItems} on:toggleMenu={toggleMenu} />
  <div
    class="h:100% flex:1 flex flex:col gap:16 overflow-y:auto p:20 w:0::scrollbar h:0::scrollbar"
  >
    <ComponentPreview bind:currentComponent bind:componentView />
  </div>
</div>
