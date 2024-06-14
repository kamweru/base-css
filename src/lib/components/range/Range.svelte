<script>
  import { appStore } from "../../AppStore";
  export let currentComponent;
  let value = 30;
</script>

<input
  type="range"
  min="0"
  max="100"
  step="4"
  bind:value
  class={$appStore.properties[currentComponent].classes}
/>
