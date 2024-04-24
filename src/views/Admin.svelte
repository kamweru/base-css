<script>
  let viewPath = "FormView",
    view;
  const changeView = async () => {
    view = (await import(`../subviews/${viewPath}.svelte`)).default;
  };
  changeView();
</script>

<svelte:component this={view} />
