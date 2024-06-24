<script>
  import { appStore } from "../AppStore";
  export let currentComponent, componentView;
</script>

<div class="p:16">
  <pre>
      <code
      >{$appStore.config.component[currentComponent].cssVariables
        .reduce((acc, val) => {
          val.options.map((o) => {
            acc.push(
              `\n--${currentComponent}-${val.key}-${o.key}: ${o.value}${val.units};`
            );
          });
          return acc;
        }, [])
        .join("")}</code
    >
      </pre>
</div>
