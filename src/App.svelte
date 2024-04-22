<script>
  import router from "page";
  import { routes } from "./lib/routes";
  let page, params;
  routes.forEach((route) => {
    router(
      route.path,
      (ctx, next) => {
        params = ctx.params;
        next();
      },
      async () => {
        page = (await import(`./views/${route.view}.svelte`)).default;
      }
    );
  });

  // Start the router
  router.start();
</script>

<svelte:component this={page} />
