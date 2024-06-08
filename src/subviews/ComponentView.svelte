<script>
  export let currentComponent;
  let componentView,
    cssVarStyles = "";
  const loadView = async () =>
    (componentView = (
      await import(`../components/${currentComponent.component}.svelte`)
    ).default);
  $: if (currentComponent) {
    if (currentComponent.editable) {
      cssVarStyles = "";
      let cssArray = [],
        cssStyles = [],
        cssStylesString = "";
      // for (let itemKey of Object.keys(currentComponent.styles)) {
      //   for (let item of Object.keys(currentComponent.styles[itemKey])) {
      //     cssStyles.push(`${item}: ${currentComponent.styles[itemKey][item]};`);
      //   }
      // }
      // cssStylesString = cssStyles.join(" ");
      // console.log(cssStyles);
      for (let field of currentComponent.editable) {
        // cssVarStyles += `${field.var}: ${field.value}${field.units}; `;
        cssArray.push(`${field.var}: ${field.value}${field.units};`);
      }
      cssVarStyles = cssArray.join(" ");
      //   for (let keys of Object.keys(currentComponent.editable)) {
      //     for (let key of currentComponent[`editable`][`${keys}`]) {
      //       cssVarStyles += `${key}: ${currentComponent.styles[keys][`${key}`]}; `;
      //     }
      //   }
    }
  }
  loadView();
</script>

<div
  class="p:32 flex ai:center jc:center boxes-bg-pattern"
  style={cssVarStyles}
>
  <svelte:component this={componentView} />
</div>
