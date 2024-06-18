<script>
  import { appStore } from "../../AppStore";

  export let currentComponent;
</script>

<progress value="0.5" class={$appStore.properties[currentComponent].classes}
></progress>
