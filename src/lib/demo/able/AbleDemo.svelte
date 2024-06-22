<script>
  import { appStore } from "../../AppStore";
  import Able from "../../components/able/Able.svelte";
  export let currentComponent = "";
</script>

<!-- {#if currentComponent === "able"} -->
<Able
  rootStyles={$appStore.config.component["able"].cssVariables
    .reduce((acc, val) => {
      val.options.map((o) => {
        acc.push(
          `--${"able"}-${val.title}-${o.title}: ${o.value}${val.units};`
        );
      });
      return acc;
    }, [])
    .join(" ")}
  {...$appStore.config.component["able"].classProps.reduce(
    (acc, val) => ((acc[val.title] = val.value), acc),
    {}
  )}
/>
<!-- {/if} -->
