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
      { title: "card", value: "Card" },
      { title: "list", value: "List" },
      { title: "alert", value: "Alert" },
      { title: "badge", value: "Badge" },
      { title: "pop confirm", value: "PopConfirm" },
      { title: "message", value: "Message" },
      { title: "notification", value: "Notification" },
      { title: "tag", value: "Tag" },
      { title: "menu", value: "Menu" },
      { title: "rate", value: "Rate" },
      { title: "float button", value: "FloatButton" },
      { title: "Breadcrumb", value: "Breadcrumb" },
      { title: "able", value: "Able" },
      { title: "option", value: "Option" },
      { title: "field", value: "Field" },
    ].sort((a, b) => a.title.localeCompare(b.title)),
    componentView,
    currentMenu = menuItems[0],
    currentComponent = currentMenu.value.toLocaleLowerCase();
  const loadSubview = async () =>
      (componentView = (
        await import(
          // `../lib/demo/${currentComponent}/${currentMenu.value}Demo.svelte`
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
  // console.log(
  //   menuItems.reduce((acc, val) => {
  //     acc[val.value.toLocaleLowerCase()] = {
  //       classProps: [],
  //       cssVariables: [],
  //       attributes: [],
  //       otherProps: [],
  //     };
  //     return acc;
  //   }, {})
  // );
</script>

<div class="h:100% flex">
  <div class="col-3 overflow-y:auto p:20 w:0::scrollbar h:0::scrollbar">
    <Sidebar {menuItems} on:toggleMenu={toggleMenu} />
  </div>
  <div
    class="h:100% flex:1 flex flex:col gap:16 overflow-y:auto p:20 w:0::scrollbar h:0::scrollbar"
  >
    <ComponentPreview bind:currentComponent bind:componentView />
  </div>
</div>
