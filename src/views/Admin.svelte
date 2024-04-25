<script>
  export let params;
  let viewPath = "FoldersView",
    view;
  const changeView = async () => {
    view = (await import(`../subviews/${viewPath}.svelte`)).default;
  };
  changeView();
</script>

<svelte:component
  this={view}
  {params}
  bind:viewPath
  on:changeView={changeView}
/>
