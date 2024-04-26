<script>
  import router from "page";
  export let params;
  let viewPath = "FoldersView",
    view;
  const changeView = async () => {
    // console.log(router.path);
    view = (await import(`../subviews/${viewPath}.svelte`)).default;
  };
  changeView();
  // viewform
</script>

<!-- {JSON.stringify(params)}
{router.current} -->
<svelte:component
  this={view}
  {params}
  bind:viewPath
  on:changeView={changeView}
/>
