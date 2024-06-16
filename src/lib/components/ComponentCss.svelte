<script>
  import { appStore } from "../AppStore";
  export let currentComponent, componentView;
</script>

<div class="p:16">
  <pre>
      <code
      >{Object.keys($appStore.rootStyles[currentComponent])
        .map(
          (key) =>
            `${key}: ${$appStore.rootStyles[currentComponent][key].value}${$appStore.rootStyles[currentComponent][key].units};`
        )
        .join("\n")}</code
    >
      </pre>
</div>
