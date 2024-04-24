<script>
  export let title = "form";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<slot name="header" />
<main class="h:calc(100vh-56px) overflow-y:scroll mb:16">
  <div class="h:100% w:xs mx:auto mb:20>* mb:0>*:last">
    <slot />
  </div>
</main>
